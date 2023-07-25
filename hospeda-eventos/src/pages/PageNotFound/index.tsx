import { ButtonLink } from '@/components/ButtonLink'
import { ContainerMain, ContainerSection } from './styles'

export function PageNotFound() {
  return (
    <ContainerMain>
      <ContainerSection>
        <h1>Página não encontrada!</h1>
        <h1>Por favor, clique no botão abaixo para retornar ao site.</h1>
        <ButtonLink
          to="/"
          ariaLabel="Voltar para o site"
          textBtn="Voltar ao site"
        />
      </ContainerSection>
    </ContainerMain>
  )
}
