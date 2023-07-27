import React from 'react'

import { Timer, Scroll } from 'phosphor-react'

import igniteLogoSvg from '../../assets/ignite-logo.svg'

import { HeaderContainer, HeaderNavigationTab } from './styles'

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <img src={igniteLogoSvg} alt="" />

      <nav>
        <HeaderNavigationTab to="/" title="Timer" end>
          <Timer />
        </HeaderNavigationTab>

        <HeaderNavigationTab to="/history" title="Histórico">
          <Scroll />
        </HeaderNavigationTab>
      </nav>
    </HeaderContainer>
  )
}
