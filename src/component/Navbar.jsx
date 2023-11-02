'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi';

function Navbar() {
  const [active, setActive] = useState(false)

  return (
    <div className='navbar'>
    <div className='navbar-cards container'>
      <div className={active ? 'burger-menu active' : 'burger-menu'} onClick={() =>{
        setActive(!active)
      }}>
        <FiMenu/>
      </div>
      <div className='navbar-logo'>
        <Link href={"/"}>
          <Image src={"/assets/Group.png"} width={100} height={40}/>
        </Link>
      </div>
      <div className={active ? 'navbar-links active' : 'navbar-links'}>
          <Link href={'/'}>О нас</Link>
          <Link href={'/'}>Edu Coozin</Link>
          <Link href={'/'}>Почему Coozin?</Link>
          <Link href={'/'}>Мероприятия</Link>
      </div>
      <div className='nav-right'>
          <p className='lang'>Uz</p>
          <div className='nav-right__btn'>
            <button>Присоединиться</button>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar