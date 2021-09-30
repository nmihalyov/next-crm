import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  const links = [
    {label: 'Main', href:'/'},
    {label: 'Tasks', href:'/tasks'},
    {label: 'Posts', href:'/posts'},
    {label: 'Users', href:'/users'},
    {label: 'About', href:'/about'}
  ];

  return (
    <header className={styles.header}>
      <Image src='/vercel.svg' alt='logo' width={72} height={16} />
      <nav className={styles.nav}>
        {links.map(el => 
          <Link key={el.href} href={el.href}>
            <a className={styles.navItem}>{el.label}</a>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;