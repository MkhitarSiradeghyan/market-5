import React from 'react'
import s from './Footer.module.sass'
import Container from '../Container/Container'

const Footer = () => {
  return (
    <footer className={s.footer}>
        <Container>
            <div className={s.wrap}>
                &copy; 2026 Geko Education
            </div>
        </Container>
    </footer>
  )
}

export default Footer