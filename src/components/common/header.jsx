"use client";

import CartMenu from './cart-menu';
import Image from 'next/image';
import Link from 'next/link';
import MainMenu from './main-menu';
import SearchBox from './search-box';
import { headerBorderRemoveList } from '@/utils/data/menu';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header(props) {
  const pathname = usePathname();

  useEffect(() => {
    let header = document.querySelector('header');
    if (header) {
      if (headerBorderRemoveList.includes(pathname) && header.classList.contains('header-border'))
        header.classList.remove('header-border');
      else if (!headerBorderRemoveList.includes(pathname))
        document.querySelector('header').classList.add('header-border');
    }
  }, [pathname]);

  const showMobileMenu = () => {
    document.querySelector('body').classList.add('mmenu-active');
  };

  return (
    <header className='header header-border'>
      <div className='header-top'>
        <div className='container'>
          <div className='header-left'>
            <p className='welcome-msg'>Welcome to Riode store message or remove it!</p>
          </div>
          <div className='header-right'>
            <div className='dropdown'>
              <Link href='#'>USD</Link>
              <ul className='dropdown-box'>
                <li>
                  <Link href='#'>USD</Link>
                </li>
                <li>
                  <Link href='#'>EUR</Link>
                </li>
              </ul>
            </div>

            <div className='dropdown ml-5'>
              <Link href='#'>ENG</Link>
              <ul className='dropdown-box'>
                <li>
                  <Link href='#'>ENG</Link>
                </li>
                <li>
                  <Link href='#'>FRH</Link>
                </li>
              </ul>
            </div>

            <span className='divider'></span>
            <Link href='/pages/contact-us' className='contact d-lg-show'>
              <i className='d-icon-map'></i>Contact
            </Link>
            <Link href='#' className='help d-lg-show'>
              <i className='d-icon-info'></i> Need Help
            </Link>
          </div>
        </div>
      </div>

      <div className='header-middle sticky-header fix-top sticky-content'>
        <div className='container'>
          <div className='header-left'>
            <Link href='#' className='mobile-menu-toggle' onClick={showMobileMenu}>
              <i className='d-icon-bars2'></i>
            </Link>

            <Link href='/' className='logo'>
              <Image src='/images/logo.png' alt='logo' width='153' height='44' />
            </Link>

            <SearchBox />
          </div>

          <div className='header-right'>
            <Link href='tel:#' className='icon-box icon-box-side'>
              <div className='icon-box-icon mr-0 mr-lg-2'>
                <i className='d-icon-phone'></i>
              </div>
              <div className='icon-box-content d-lg-show'>
                <h4 className='icon-box-title'>Call Us Now:</h4>
                <p>0(800) 123-456</p>
              </div>
            </Link>
            <span className='divider'></span>
            <Link href='/pages/wishlist' className='wishlist'>
              <i className='d-icon-heart'></i>
            </Link>
            <span className='divider'></span>

            <CartMenu />
          </div>
        </div>
      </div>

      <div className='header-bottom d-lg-show'>
        <div className='container'>
          <div className='header-left'>
            <MainMenu />
          </div>

          <div className='header-right'>
            <Link href='#'>
              <i className='d-icon-card'></i>Special Offers
            </Link>
            <a href='https://d-themes.com/buynow/riodereact' className='ml-6'>
              Buy Riode!
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
