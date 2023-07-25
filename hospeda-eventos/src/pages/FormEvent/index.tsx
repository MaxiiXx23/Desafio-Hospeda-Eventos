import { Header } from './Header'

import { ContainerMain, ContainerSection } from './styles'

import { Form } from './Form'

export function FormEvent() {
  return (
    <ContainerMain>
      <ContainerSection>
        <Header />
        <Form />
      </ContainerSection>
    </ContainerMain>
  )
}
