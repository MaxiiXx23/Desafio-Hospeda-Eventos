import { CalendarBlank, MapPin } from '@phosphor-icons/react'

import ImageResort from '@/assets/imagens/resort.jpg'

import { formatDateEvent } from '@/utils/formatDateEvent'
import { IEventDTO } from '@/dtos/IEventDTO'

import {
  ContainerInfos,
  ContainerTr,
  Content,
  ImgResort,
  Info,
  Name,
  Status,
  TdTable,
  WrapperInfos,
} from './styles'
import { Menudropdown } from '../Menudropdown'

interface IProps {
  event: IEventDTO
}

export function ItemEvent({ event }: IProps) {
  const textStatus = event.privacy === 'PUBLIC' ? 'Público' : 'Privado'

  const dateEvent = formatDateEvent(event.dateInitial)
  const city = event.Address[0].city
  const state = event.Address[0].state

  return (
    <ContainerTr>
      <TdTable>
        <Content>
          <ImgResort
            src={ImageResort}
            alt="imagem evento"
            title="Imagem do evento"
          />
          <ContainerInfos>
            <Name>{event.name}</Name>
            <WrapperInfos>
              <Info>
                <CalendarBlank size={16} />
                <span>{dateEvent}</span>
              </Info>
              <Info>
                <MapPin size={16} />
                <span>
                  {city}/{state}
                </span>
              </Info>
            </WrapperInfos>
          </ContainerInfos>
        </Content>
      </TdTable>
      <TdTable>00/500</TdTable>
      <TdTable>
        <Status privacy={event.privacy}>{textStatus}</Status>
        <Menudropdown idEvent={event.id} />
      </TdTable>
    </ContainerTr>
  )
}
