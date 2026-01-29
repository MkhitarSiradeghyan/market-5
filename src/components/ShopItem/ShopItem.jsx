import React from 'react'
import s from './ShopItem.module.sass'

const ShopItem = ({product}) => {
const {title, description, price, thumbnail} = product

  return (
    <div className={s.card}>
        <div className={s.img}>
            <img src={thumbnail} alt="" />
        </div>
        <h3 className={s.title}>{title}</h3>
        <p className={s.desc}>{description}</p>
        <div className={s.price}>${price}</div>
        <button className={s.button}>Add To Cart</button>
    </div>
  )
}

export default ShopItem