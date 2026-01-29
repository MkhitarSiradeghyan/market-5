import React, { useEffect, useState } from "react";
import s from "./Shop.module.sass";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";
import ShopItem from "../../components/ShopItem/ShopItem";

const Shop = () => {

const [products, setProducts] = useState([])

useEffect(() => {
    const getProducts = async () => {
        await fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data => setProducts(data.products))
    }
    getProducts()
}, [])

  return (
    <>
      <Header />
      <div className={s.shop}>
        <Container>
          <div className={s.wrap}>
            {
                products.length ? products.map(product => <ShopItem product={product}/>) : <h2>No products</h2>
            }
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
