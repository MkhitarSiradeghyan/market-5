import React from 'react'
import s from './Hero.module.sass'
import Container from '../Container/Container'
import { NavLink } from 'react-router'

const Hero = () => {
  return (
    <div className={s.hero}>
        <Container>
            <div className={s.wrap}>
                <h1 className={s.title}>Welcome to my shop</h1>
                <NavLink to="/shop" className={s.button}>Go to shop</NavLink>
            </div>
            <div className={s.author}>Designed by Albert Manukyan</div>
        </Container>
    </div>
  )
}

export default Hero