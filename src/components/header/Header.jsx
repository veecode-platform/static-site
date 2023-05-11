/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames';
import Link from 'next/link';
import style from '../../../styles/Header.module.scss';
import Button from '../button/Button';
import React, { useState } from "react";
// import { useTranslation } from 'react-i18next';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
const Logo = '/assets/logo/logo.png';

const Header = ({ fixedHeader, showButton, showOptions }) => {
  // const { t } = useTranslation();
  const [open, setOpen] = useState(false);


  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(!open);
  }
  return (
    <header
      className={
        classNames({
          [style.wrapper]: true,
          [style.wrapper__fixedHeader]: fixedHeader
        })}
    >

      <section className={style.mobileContent}>
        <AppBar sx={{ backgroundColor: 'black' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignContent:'center' }}>
            <div className={style.mobileContent__logo}>
              <Link href="/">
                <img
                  src={Logo}
                  alt="VeeCode Plataform Logo"
                />
              </Link>
            </div>

            <IconButton
              size="large"
              edge="center"
              aria-label="menu"
              onClick={toggleDrawer(open)}
            >
              <MenuRoundedIcon sx={{ color: "white" }} />
            </IconButton>

            <SwipeableDrawer
              onOpen={toggleDrawer(open)}
              onClose={toggleDrawer(open)}
              anchor='left'
              open={open}
              sx={{ zIndex: 999999999 }}
            >
              <div style={{ width: 250 }} className={style.drawer} onClick={toggleDrawer(open)}
              >

                <List sx={{ margin: '1em', padding: '1em' }}>

                  <Link href="/" passHref>
                    <ListItemText disableTypography sx={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, margin: "0.8em 0" }}>
                      {'Home'.toUpperCase()}
                    </ListItemText>
                  </Link>

                  <Link href="#form" passHref >
                    <ListItemText disableTypography sx={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, margin: "0.8em 0" }}>
                      {'label'.toUpperCase()}
                    </ListItemText>
                  </Link>

                  <Link href="/company" passHref>
                    <ListItemText disableTypography sx={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, margin: "0.8em 0" }}>
                      {'Hey'.toUpperCase()}
                    </ListItemText>
                  </Link>

                </List>
              </div>
            </SwipeableDrawer>
          </Toolbar>
        </AppBar>

      </section>


      <section className={style.content}>
        <div>
          <Link href="/">
            <a>
              <img
                src={Logo}
                alt="VeeCode Plataform Logo"
                className={style.content__logo}
              />
            </a>
          </Link>
        </div>
        <div className={style.nav}>
          {showOptions && <div className={style.nav__options}>
            <Link href='https://docs.platform.vee.codes/'>
              <a>
                <h2>Docs</h2>
              </a>
            </Link>
          </div>}
          {showOptions && <div className={style.nav__options}>
            <Link href='/compare-plans#plans'>
              <a>
                <h2>Pricing</h2>
              </a>
            </Link>
          </div>}
          {showOptions && <div className={style.nav__options}>
            <Link href='/contact-us'>
              <a>
                <h2>Contact Us</h2>
              </a>
            </Link>
          </div>}

          {showButton && <div className={style.nav__buyButton} >
            <Link href="/trial" passHref>
              <a>
                <Button headerButton>Support Trial</Button>
              </a>
            </Link>
          </div>}
        </div>
      </section>
    </header>
  );
}

export default Header