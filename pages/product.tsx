import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Menu from './common/menu';
import Footer from './common/footer';
import Star from './common/star';
import style from './css/product.module.css';

const Product = () => {
    
    
    return (
        <>
            <Head>
                <title>Par de Caixas Sub</title>
            </Head>
            <Menu default={false} />
            <main>
            <div className={style.imgBx}>
                <img src="../caixa.png" alt="caixa.png" />
            </div>
            <div className={style.store}>
                <h3>Par de caixas sub</h3>
                <p>Sistema principal full-range (todas as frequências) de duas vias com 15”/Monitor de chão com Wi-Fi</p>
                <div className={style.stars}>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star /> 
                </div>
                <span className={style.underline}></span>
                <h2 className={style.price}>R$ 3999<small>,99</small></h2>
                <div className={style.content}>
                    <button>Comprar</button>
                    <div className={style.counter}>
                        <div className={style.display}>1</div>
                        <div className={style.operator}>+</div>
                        <div className={style.operator}>-</div>
                    </div>
                </div>
            </div>
            </main>
            <Footer />
        </>
    );
}

export default Product;