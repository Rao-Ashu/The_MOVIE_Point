import React from 'react'
import SearchBox from './SearchBox';
import Link from 'next/link';
import DarkModeButton from './DarkModeButton';
import { Bars3Icon } from '@heroicons/react/24/solid';
import NavLinks from './NavLinks';
import Title from './Title';


function Header() {

  return (
    // dark:bg-zinc-900
    <header>   
        <Title />
        <NavLinks />
        <SearchBox />

    </header>
  )
}

export default Header