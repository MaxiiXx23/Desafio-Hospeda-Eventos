import IconSite from '@/assets/icons/iconSite.svg'

import { ContaienrHeader, Image, Nav, WrapperInitials } from './styles'

export function Header() {
  return (
    <ContaienrHeader>
      <Nav>
        <Image src={IconSite} alt="ícone site" title="ícone do site" />
        <WrapperInitials>
          <span>TB</span>
        </WrapperInitials>
      </Nav>
    </ContaienrHeader>
  )
}
