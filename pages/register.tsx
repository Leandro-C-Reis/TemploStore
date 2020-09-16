import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import './css/register.module.css';
import Footer from './common/footer';
import Logo from './common/logo';


const pages: React.FC = () => {
  return (
    <>
        <Head>
            <title>Cadastrar</title>
        </Head>
        <header>
            <Link href="/">
                <a>
                    <Logo fill="black" />
                </a>
            </Link>
        </ header>
        <section>
            <h3>Nome</h3>
            <input type="text" />
            <h3>Sobrenome</h3>
            <input type="text" />
            <h2>Informações de e-mail/login</h2>
            <h3>E-mail</h3>
            <input type="email" />
            <h3>Confirm E-mail</h3>
            <input type="email" />
            <h3>Senha</h3>
            <input type="password" />
            <p>A senha deve ter pelo menos de 8 caracteres e conter tanto letras maiúsculas como minúsculas, bem como números e caracteres especiais.</p>
            <h4>Confirme Sua Senha (Mínimo 8 caracteres)</h4>
            <input type="password" />
            <button type="submit">Cadastrar</button>
        </section>
        <Footer />
    </>
  );
}

export default pages;