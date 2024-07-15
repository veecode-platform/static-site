/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames';
import Link from 'next/link';
import style from '../../../styles/Header.module.scss';
import Button from '../button/Button';
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
const Logo = '/assets/logo/logo.png';

const Header = ({ fixedHeader, showButton, showOptions, notTranslate }) => {

  const [open, setOpen] = useState(false);

  const { t, i18n } = useTranslation();


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
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
            <div className={style.mobileContent__logo}>
              <Link href="/">
                <img
                  src={Logo}
                  alt="VeeCode Plataform Logo"
                />
              </Link>
            </div>

            {!notTranslate && (
              <div>
              <select
                defaultValue={i18n.language}
                className={style.select}
                onChange={() => {
                  i18n.language == 'pt' ?
                    i18n.changeLanguage('en') :
                    i18n.changeLanguage('pt')
                }
                }
              >
                <option className={style.select__option} value="en">EN</option>
                <option className={style.select__option} value="pt">PT</option>
              </select>
            </div>
            )}

            <IconButton
              size="large"
              edge={false}
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

                  <Link href="https://docs.platform.vee.codes/" passHref>
                    <a target='_blank'>
                      <ListItemText disableTypography sx={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, margin: "0.8em 0" }}>
                        {'Docs'.toUpperCase()}
                      </ListItemText>
                    </a>
                  </Link>

                  <Link href="https://docs.platform.vee.codes/" passHref>
                    <a target='_blank'>
                      <ListItemText disableTypography sx={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, margin: "0.8em 0" }}>
                        {'Blog'.toUpperCase()}
                      </ListItemText>
                    </a>
                  </Link>

                  <Link href="/plugins" passHref>
                    <a>
                      <ListItemText disableTypography sx={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, margin: "0.8em 0" }}>
                        {'Plugins'.toUpperCase()}
                      </ListItemText>
                    </a>
                  </Link>

                  <Link href="/compare-plans" passHref>
                    <ListItemText disableTypography sx={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, margin: "0.8em 0" }}>
                      {'Pricing'.toUpperCase()}
                    </ListItemText>
                  </Link>

                  <Link href="https://docs.platform.vee.codes/devportal/installation-guide/AWS/AWS%20Installation" passHref>
                    <ListItemText disableTypography sx={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, margin: "0.8em 0" }}>
                      {'Get a Demo'.toUpperCase()}
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
          {showOptions  && (
            <>
              <div className={style.nav__options}>
                <Link href='https://docs.platform.vee.codes/'>
                  <a>
                    <h2>{t("header-options-docs")}</h2>
                  </a>
                </Link>
              </div>

              <div className={style.nav__options}>
              <Link href="https://blog.platform.vee.codes/" passHref>
                    <a target='_blank'>
                      <ListItemText disableTypography sx={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, margin: "0.8em 0" }}>
                       <h2>{t("header-options-blog")}</h2>
                      </ListItemText>
                    </a>
                  </Link>
                  </div>

              <div className={style.nav__options}>
                <Link href='plugins'>
                  <a>
                    <h2>{t("header-options-plugins")}</h2>
                  </a>
                </Link>
              </div>

              <div className={style.nav__options}>
                <Link href='/compare-plans'>
                  <a>
                    <h2>{t("header-options-pricing")}</h2>
                  </a>
                </Link>
              </div>
              <div className={style.nav__options}>
                <Link href='/contact-us'>
                  <a>
                    <h2>{t("contact-us")}</h2>
                  </a>
                </Link>
              </div>
            </>
          )}

          {showButton && <div className={style.nav__buyButton} >
            <Link href="https://devportal.demo.vee.codes/" passHref>
            {/* <Link href="/demo" passHref> */}
              <a target='_blank'>
                <Button headerButton>{t("get-a-demo")}</Button>
              </a>
            </Link>
          </div>}
          
          {!notTranslate && (<div>
            <select
              defaultValue={i18n.language}
              className={style.select}
              onChange={() => {
                i18n.language == 'pt' ?
                  i18n.changeLanguage('en') :
                  i18n.changeLanguage('pt')
              }
              }
            >
              <option className={style.select__option} value="en">EN</option>
              <option className={style.select__option} value="pt">PT</option>
            </select>
          </div>)}
        </div>
      </section>
    </header>
  );
}

export default Header