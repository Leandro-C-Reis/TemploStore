import React from 'react';
import 'isomorphic-fetch';
import Link from 'next/link';

import Logo from './logo';
import '../css/footer.css';

const Footer = () => (
    <footer>
       <Link href="/">
            <a href="">
                <Logo fill="white"/>
            </a>
       </Link>
    </footer>
);

export default Footer;