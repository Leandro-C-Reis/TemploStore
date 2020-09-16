import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import 'isomorphic-fetch';

import '../css/menu.css';
import style from '../css/menu.module.css';
import Logo from './logo';

interface Props {
    logged?: boolean;
    default: boolean;
    user?: object;
}

const Menu = (props: Props) => {
    const [header, setHeader] = useState<string>('');    
    const [headerPosition, setHeaderPosition] = useState<typeof style>({ position : "fixed" });
    
    useEffect(() => {
        if (!props.default) {
            setHeader('sticky');
            setHeaderPosition({ position : "relative" })
        }
        else
        {
            window.addEventListener("scroll", () => {
                if (window.scrollY > 0) setHeader('sticky');
                else setHeader('');
            });
            return () => window.removeEventListener("scroll", () => {});
        }
    }, []);

    return (
        <header style={headerPosition} 
        className={cn({
            [style.sticky]: header === 'sticky'
        })}>
            <Link href="/">
                <a>
                    <Logo fill={header === 'sticky' ? 'black': '#F0F0F0'}/>
                </a>
            </Link>
            <div>
                <Link href="/register">
                    <a>CADASTRAR</a>
                </Link>
                <span></span>
                <a>LOGIN</a>
            </div>
        </header>
    );
};

export default Menu;