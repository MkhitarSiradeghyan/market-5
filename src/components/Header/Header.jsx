import React from 'react'
import s from './Header.module.sass'
import Container from '../Container/Container'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <div className={s.header}>
        <Container>
            <div className={s.wrap}>
                <div className={s.logo}>Logo</div>
                <nav className={s.menu}>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/shop">Shop</NavLink>
                  <NavLink to="/about">About</NavLink>
                  <NavLink to="/contacts">Contacts</NavLink>
                </nav>
            </div>
        </Container>
    </div>
  )
}

export default Header