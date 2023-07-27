import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    gap: 0.5rem;
  }
`

export const HeaderNavigationTab = styled(NavLink)`
  width: 3rem;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;

  &.active {
    svg {
      color: ${(props) => props.theme['green-500']};
    }
  }

  &:hover,
  &:focus,
  &.active {
    border-bottom-color: ${(props) => props.theme['green-500']};
  }

  svg {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }
`
