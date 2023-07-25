import { useEffect, useState } from 'react'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { AxiosError, AxiosResponse } from 'axios'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { axiosCEP } from '@/lib/axios/axiosCEP'
import { axiosApi } from '@/lib/axios/axiosApi'

import { formattedCEP } from '@/utils/formatCEP'

import { IResponseViaCEP } from '@/dtos/IResponseViaCEP'
import { IGetEventDTO } from '@/dtos/IGetEventDTO'

import {
  ContainerForm,
  ContainerInputs,
  ContainerLabels,
  ContainerLabelsGrid,
  Label,
  SubTitle,
  WrapperBtn,
} from './styles'

import { Input } from '@/components/Input'
import { Switch } from '@/components/Switch'
import { Toolbar } from '@/components/Toolbar'
import { InputIcon } from '@/components/InputIcon'
import { Button } from '@/components/Button'

import { formatDateInitial } from '@/utils/formatDateInital'

const schema = z.object({
  name: z.string().max(60, 'Name deve ter máximo 60 caracteres.'),
  description: z
    .string()
    .max(1200, 'Descrição deve ter máximo 1200 caracteres.'),
  privacy: z.boolean(),
  cep: z
    .string()
    .min(8, 'CEP deve ter minímo 8 números.')
    .max(8, 'CEP deve ter máximo 8 números.'),
  street: z.string().max(60, 'Rua deve ter máximo 60 caracteres.'),
  number: z.coerce.number().int().min(0, 'Número deve ser inteiro.'),
  complement: z.string().max(80, 'Complemento deve ter máximo 80 caracteres.'),
  district: z.string().max(60, 'Bairro deve ter máximo 60 caracteres.'),
  city: z.string().max(60, 'Cidade deve ter máximo 60 caracteres.'),
  state: z
    .string()
    .trim()
    .toUpperCase()
    .min(2, 'Estado deve ter minímo 2 caracteres.')
    .max(2, 'Estado deve ter máximo 2 caracteres.'),
  dateInitial: z.string().regex(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/),
  hourInitial: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/),
})

type IFormEvent = z.infer<typeof schema>

interface IEventResponseAxios {
  event: IGetEventDTO
}

export function Form() {
  const [checked, setChecked] = useState<boolean>(false)
  const { id } = useParams()

  const formEvent = useForm<IFormEvent>({
    resolver: zodResolver(schema),
    defaultValues: {
      complement: '',
    },
  })

  const { handleSubmit, watch, reset, setValue } = formEvent

  const cep: string = watch('cep')

  async function submitFormEvent(data: IFormEvent) {
    if (!id) {
      try {
        await axiosApi.post('/events/create', data)

        reset()
        return toast.success('Evento cadastrado com sucesso!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })
      } catch (err) {
        const { response } = err as AxiosError
        if (response?.status === 409) {
          return toast.error(
            'Evento já existente, por favor confira o nome e a data, e tente novamente.',
            {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            },
          )
        } else if (response?.status === 400) {
          return toast.error('Data inválida. Por favor, tente novamente.', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          })
        }
        return toast.error('Erro ao cadastrar, por favor tente novamente.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })
      }
    }

    try {
      await axiosApi.put(`/events/update/${id}`, data)

      reset()

      toast.success('Evento atualizado com sucesso!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    } catch (err) {
      const { response } = err as AxiosError

      if (response?.status === 400) {
        return toast.error('Data inválida. Por favor, tente novamente.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })
      }

      toast.error('Erro ao editar, por favor tente novamente.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    }
  }

  useEffect(() => {
    async function getDatas(cep: string) {
      const { data }: AxiosResponse<IResponseViaCEP> = await axiosCEP.get(
        `${cep}/json/`,
      )
      if (!data.erro) {
        setValue('street', data.logradouro)
        setValue('district', data.bairro)
        setValue('city', data.localidade)
        setValue('state', data.uf)
      } else {
        reset()
      }
    }

    if (cep && cep.length === 8) {
      const cepFormatted = formattedCEP(cep)
      getDatas(cepFormatted)
    }
  }, [cep, reset, setValue])

  useEffect(() => {
    async function getDataEvent(id: string) {
      const { data }: AxiosResponse<IEventResponseAxios> = await axiosApi.get(
        `/events/get/${id}`,
      )

      const dateEvent = formatDateInitial(data.event.dateInitial)

      setValue('name', data.event.name)
      setValue('description', data.event.description)
      setValue('dateInitial', dateEvent)
      setValue('hourInitial', data.event.hourInitial)
      setValue('cep', data.event.Address[0].cep)
      setValue('number', data.event.Address[0].number)
      setValue('street', data.event.Address[0].street)
      setValue('complement', data.event.Address[0].complement)
      setValue('district', data.event.Address[0].district)
      setValue('city', data.event.Address[0].city)
      setValue('state', data.event.Address[0].state)

      const isChecked = data.event.privacy !== 'PUBLIC'

      setChecked(isChecked)
    }

    if (id) {
      getDataEvent(id)
    }
  }, [id, setValue])

  const textThumb = checked ? 'Privado' : 'Público'
  const textBtn = id ? 'Editar' : 'Cadastrar'

  return (
    <FormProvider {...formEvent}>
      <ContainerForm onSubmit={handleSubmit(submitFormEvent)}>
        <ContainerInputs>
          <SubTitle>Informações do evento</SubTitle>
          <ContainerLabels>
            <Input
              nameRegister="name"
              labelText="Nome do evento"
              placeholder="Digite o nome do evento"
              aria-label="Campo nome"
            />
            <Label>
              <span>Privacidade do evento</span>
              <Switch
                textThumb={textThumb}
                checked={checked}
                setChecked={setChecked}
              />
            </Label>
            <Label>
              <span>Descrição</span>
              <Toolbar nameRegister="description" />
            </Label>
          </ContainerLabels>
        </ContainerInputs>
        <ContainerInputs>
          <SubTitle>Local do evento</SubTitle>
          <ContainerLabelsGrid>
            <Input
              nameRegister="cep"
              labelText="CEP"
              placeholder="Informe o CEP"
              aria-label="Campo CEP"
            />
            <Input
              nameRegister="number"
              labelText="Número"
              placeholder="Informe o número"
              aria-label="Campo número do local"
            />
            <Input
              nameRegister="street"
              labelText="Endereço"
              placeholder="Informe a rua"
              aria-label="Campo endereço"
            />
            <Input
              nameRegister="complement"
              labelText="Complemento"
              placeholder="Informe o completo (Opcional)"
              aria-label="Campo complento endereço"
            />
            <Input
              nameRegister="district"
              labelText="Bairro"
              placeholder="Informe o bairro"
              aria-label="Campo bairro"
            />
            <Input
              nameRegister="city"
              labelText="Cidade"
              placeholder="Informe a cidade"
              aria-label="Campo cidade"
            />
            <Input
              nameRegister="state"
              labelText="Estado"
              placeholder="Informe o Estado"
              aria-label="Campo estado"
            />
          </ContainerLabelsGrid>
        </ContainerInputs>
        <ContainerInputs>
          <SubTitle>Local do evento</SubTitle>
          <ContainerLabelsGrid>
            <InputIcon
              nameRegister="dateInitial"
              labelText="Data de início"
              placeholder="DD/MM/AAAA"
              aria-label="Campo data inicial do evento"
            />
            <InputIcon
              nameRegister="hourInitial"
              labelText="Horário de início"
              placeholder="00:00"
              aria-label="Campo hórario inicial do evento"
            />
          </ContainerLabelsGrid>
          <WrapperBtn>
            <Button
              type="submit"
              textBtn={textBtn}
              aria-label={`Botão ${textBtn} evento`}
            />
          </WrapperBtn>
        </ContainerInputs>
      </ContainerForm>
    </FormProvider>
  )
}
