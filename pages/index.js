import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import your icons
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


export default function Home() {

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
            <div className={styles.logo}><Image src="/img/logo-salo.svg" width={30} height={46}   /><span>Salomon Sanchez</span></div>
            <div className={styles.menu}>
              <ul className={styles.menu_ul}>
                <li className={styles.nav_links}>
                  <a className={styles.a_links} href="#">Cursos</a>
                </li>
                <li className={styles.nav_links}>
                  <a className={styles.a_links} href="#">Portafolio</a>
                </li>
                <li className={styles.nav_links}>
                  <a className={styles.a_links} href="#">Blog</a>
                </li>
                <li className={styles.nav_links}>
                  <a className={styles.a_links} href="#">Mentorías</a>
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
        <h1 className={styles.title_home}>Full-Stack Designer<br></br>
& Content Creator</h1>
        <p className={styles.description}>Siempre llevar la usabilidad y la funcionalidad con una buena<br></br> estética es el resultado esperado.</p>
       
        <div className={styles.boton_full}>
          <a href="#" className={styles.boton_purple}>
              VER CURSO GRATIS
              <FontAwesomeIcon icon={faChevronRight} />
          </a> 
        </div>

        <div className={styles.recent}>
          <div className={styles.zoom1} >
            <Image src="/img/project-3.png" width={1280} height={720} />
          </div>
          <div className={styles.zoom3} >
            <Image src="/img/project-1.png" width={1280} height={720}/>
          </div>
          <div className={styles.zoom2} >
            <Image src="/img/project-2.png" width={1280} height={720}/>
          </div>
        </div>

        <div className={styles.contenedor}>
          <h2 className={styles.title_homeh2}>Comunidad</h2>
          <div className={styles.community}>
            <div className={styles.box_comm_yt}>
              <a href="https://youtube.com/salomonsanchez?sub_confirmation=1" className={styles.box_comm_a} target="_blank" rel="noreferrer"><Image src="/img/youtube-icon.svg" width={50} height={50} alt="Canal YouTube Salomon"/> YouTube</a>
            </div>
            <div className={styles.box_comm_dc}>
              <a href="https://discord.gg/ry2J5g4yf6" className={styles.box_comm_a} target="_blank" rel="noreferrer"><Image src="/img/discord-icon.svg" width={50} height={50} alt="Canal Discord Salomon"/> Discord</a>
            </div>
            <div className={styles.box_comm_sp}>
              <a href="#" className={styles.box_comm_a}><Image src="/img/spotify-icon.svg" width={50} height={50} alt="Canal Podcast Salomon"/> Spotify</a>
            </div>
          </div>

          <div className={styles.latest_video}>
            <div className={styles.video_yt}>
                <a href="https://www.youtube.com/watch?v=9yotgPB98j8" target="_blank" rel="noreferrer">
                  <Image src="/img/thumb-23.jpg" alt="Thumb YouTube Video" width="1280" height="720"></Image> 
                </a>
            </div>
            <div className={styles.desc_yt}>
              <div className={styles.title_yt}>
                Diseño UI E-commerce App para un Cliente Real
              </div>
              <div className={styles.desc_yt_det}>
                Este es un caso real sobre la marca Harker Natural Garden que ha confiado en nosotros para su rediseño.
              </div>
            </div>
          </div>

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
