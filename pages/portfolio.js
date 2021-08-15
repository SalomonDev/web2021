import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import your icons
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


export default function Portfolio() {

  return (

    <div className={styles.container}>
      <Head>
        <title>Salomon Sanchez - Diseño UX/UI en Figma</title>
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover, width=device-width"></meta>
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"></meta>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/salo-favicon.ico" />
      </Head>
      <div className={styles.circle_left}></div>
      <div className={styles.circle_right}></div>

      <div className={styles.circle_left_footer}></div>
      <div className={styles.circle_right_footer}></div>

      <header className={styles.header}>
        <div className={styles.contenedor}>
          <div className={styles.navBar}>
            <input className={styles.menu_btn} type="checkbox" id="menu-btn" />
            <div className={styles.menu_movil}>
             
              <Image src="/img/menu-movil.svg" width={30} height={30}   />
            </div>
            <a className={styles.logo} href="/."><Image src="/img/logo-salo.svg" width={30} height={46}   /><span>Salomon Sanchez</span></a>
            <div className={styles.menu}>
              <ul className={styles.menu_ul}>
                <li className={styles.nav_links}>
                  <a className={styles.a_links} href="#">Cursos</a>
                </li>
                <li className={styles.nav_links}>
                  <a className={styles.a_active} href="/portfolio/.">Portafolio</a>
                </li>
                <li className={styles.nav_links}>
                  <a className={styles.a_links} href="#">Blog</a>
                </li>
                <li className={styles.nav_links}>
                  <a className={styles.a_links} href="https://www.patreon.com/salomonsanchez" target="_blank" rel="noreferrer">Mentorías</a>
                </li>
              </ul>
            </div>
            <div className={styles.social_links}>
              <div className={styles.redes}>
                <a className={styles.redes_a} href="https://twitter.com/_salomonsanchez" target="_blank" rel="noreferrer">
                <Image src="/img/twitter-icon.svg"  width={36} height={29}  />
                </a>
                <a className={styles.redes_a} href="https://dribbble.com/salomonsanchez" target="_blank" rel="noreferrer">
                <Image src="/img/dribbble-icon.svg"  width={35} height={35}  />
                </a>
              </div>
              <div className={styles.suscribe}>
                <a href="#">
                  Suscríbete
                  <FontAwesomeIcon icon={faChevronRight} />
                </a> 
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title_home}>Portafolio</h1>
        <p className={styles.description}>Siempre llevar la usabilidad y la funcionalidad con una buena<br></br> estética es el resultado esperado.</p>
       
        

        <h2 className={styles.title_projects}>Diseño UX/UI</h2>
        <div className={styles.projects}>
            
          <div className={styles.project} >
            <Image src="/img/project-1.png" width={1280} height={720} />
          </div>
          <div className={styles.project} >
            <Image src="/img/project-2.png" width={1280} height={720}/>
          </div>
          <div className={styles.project} >
            <Image src="/img/project-3.png" width={1280} height={720}/>
          </div>
          <div className={styles.project} >
            <Image src="/img/project-4.png" width={1280} height={720} />
          </div>
          <div className={styles.project} >
            <Image src="/img/project-5.png" width={1280} height={720}/>
          </div>
          <div className={styles.project} >
            <Image src="/img/project-6.png" width={1280} height={720}/>
          </div>
          <div className={styles.project} >
            <Image src="/img/project-7.png" width={1280} height={720} />
          </div>
          <div className={styles.project} >
            <Image src="/img/project-8.png" width={1280} height={720}/>
          </div>
          <div className={styles.project} >
            <Image src="/img/project-9.png" width={1280} height={720}/>
          </div>
          <div className={styles.project} >
            <Image src="/img/project-16.png" width={1280} height={720} />
          </div>
          <div className={styles.project} >
            <Image src="/img/project-11.png" width={1280} height={720}/>
          </div>
          <div className={styles.project} >
            <Image src="/img/project-12.png" width={1280} height={720}/>
          </div>
          <div className={styles.project} >
            <Image src="/img/project-13.png" width={1280} height={720} />
          </div>
          <div className={styles.project} >
            <Image src="/img/project-14.png" width={1280} height={720}/>
          </div>
          <div className={styles.project} >
            <Image src="/img/project-15.png" width={1280} height={720}/>
          </div>
          <div className={styles.project} >
            <Image src="/img/project-10.png" width={1280} height={720}/>
          </div>
          <div className={styles.project} >
            <Image src="/img/project-17.png" width={1280} height={720}/>
          </div>
          <div className={styles.project} >
            <Image src="/img/project-18.png" width={1280} height={720}/>
          </div>
        </div>

        <div className={styles.contenedor}>
          

          

          <div className={styles.pre_footer}>
              <div className={styles.avatar_full}>
              <Image src="/img/avatar.png" width="153" height="128" alt="avatar salomon"></Image>
            </div>

            <h1 className={styles.title_footer}>No diseñes solo!</h1>

            <div className={styles.boton_full}>
            <a href="#" className={styles.boton_purple}>
                CONTÁCTAME
                <FontAwesomeIcon icon={faChevronRight} />
            </a> 
          </div>
        </div>

        </div>
        
       
      </main>

      <footer className={styles.footer}>
        <div className={styles.contenedor}>
          <div className={styles.credits}>
            <span>Salomon Sanchez. © 2021</span>       
            <a href="#">Términos</a>
            <a href="#">Privacidad</a>    
          </div>
          <div className={styles.social_links_footer}>
                <div className={styles.redes}>
                  <a className={styles.redes_a} href="https://twitter.com/_salomonsanchez" target="_blank" rel="noreferrer">
                  <Image src="/img/twitter-icon.svg"  width={36} height={29}  />
                  </a>
                  <a className={styles.redes_a} href="https://dribbble.com/salomonsanchez" target="_blank" rel="noreferrer">
                  <Image src="/img/dribbble-icon.svg"  width={35} height={35}  />
                  </a>
                </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
