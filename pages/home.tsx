import React, { useState } from 'react';
import 'isomorphic-fetch';
import Head from 'next/head';
import Link from 'next/link';

import Menu from './common/menu';
import Footer from './common/footer';
import style from './css/home.module.css';

const Home = () => {
    const [active, setActive] = useState<Boolean>(true);

    async function ReRender() {
        await setTimeout(() => setActive(false), 1);
    }

    const Product = () => {
        return (
        <div className={style.card}>
            <div className={style.imgBx}>
                <img src="/caixa.png"width="300" height="300" alt="caixa.png"/>
            </div>
            <div className={style.contentBx}>
                <h3>Par de caixas sub</h3>
                <h2 className={style.price}>R$3999<small>,90</small></h2>
                <Link href="/product">
                    <a onClick={() => ReRender} className={style.buy}>Detalhes</a>
                </Link>
            </div>
        </div>
    )};

    return (
    <>
        <Head>
            <title>Loja Geral</title>
        </Head>
        {active && <Menu default={true} />} 
        <div className={style.info}>
            <h3>Welcome</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec ipsum consequat, dignissim libero quis, varius sem. Donec massa nisi, auctor non condimentum ac, dapibus ac arcu. Sed vel erat id lectus congue dictum nec non metus. Sed in mollis sapien, id hendrerit tortor. Donec pellentesque, lorem in suscipit interdum, justo ipsum fringilla eros, nec commodo velit eros id lectus. Nunc orci diam, eleifend vel dui non, dictum lacinia ipsum. Vestibulum id lacus et purus convallis vulputate quis vel sapien. Vestibulum porttitor massa placerat, egestas leo a, euismod est.</p>
        </div>
        <div className={style.products}>
        <h2 className={style.title}>Caixas de som</h2>
        <Product />
        <Product />
        <Product />
        <Product />
        </div>
        <Footer/>
    </>
)};

export default Home;
