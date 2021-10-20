import Image from 'next/image'
import Link from 'next/link'
import comunidadeEuropa from '../../public/img/gallerys.png'
import Layout from '../components/Main/Layout'
import Menu from '../components/Menu/Menu'
import Header from '../components/Main/Header'
import Footer from '../components/Main/Footer'

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 25}`
}

export default function Galeria() {
  return (
    <Layout title="Visitas às Comunidades radicadas na Europa" description={`Visitas às Comunidades radicadas na Europa`}>
      <section className="h-screen" >
        {/* <Image layout="fill" objectFit="cover" src={comunidadeEuropa} alt="Workplace" usemap="#workmap" />

        <map name="workmap">
          <area shape="circle" coords="458,417,20" alt="Coffee" href="coffee.htm" />
          <area shape="circle" coords="514,531,20" alt="Coffee" href="america.htm" />
          <area shape="circle" coords="669,383,20" alt="Coffee" href="america1.htm" />
        </map> */}
        <figure id="projectsvg">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 1080" preserveAspectRatio="slice" >
        
          <image className="flex justify-center items-center bg-cover" xlinkHref="./img/gallerys.png"></image>
          
          <g class="hover_group" opacity="0">
            <a xlinkHref="#">
              <circle cx="613" cy="552" r="25" fill="#FFFFFF" width="264.6" height="387.8"></circle>
            </a>
          </g>
          <g class="hover_group" opacity="0">
            <a xlinkHref="#">
              <circle cx="690" cy="706" r="25" fill="#FFFFFF" width="264.6" height="387.8"></circle>
            </a>
          </g>
          <g class="hover_group" opacity="0">
            <a xlinkHref="#">
              <circle cx="896" cy="514" r="25" fill="#000" width="264.6" height="387.8"></circle>
            </a>
          </g>
          <g class="hover_group" opacity="0">
            <a xlinkHref="#">
              <circle cx="860" cy="650" r="25" fill="#000" width="264.6" height="387.8"></circle>
            </a>
          </g>
          <g class="hover_group" opacity="0">
            <a xlinkHref="#">
              <circle cx="965" cy="710" r="25" fill="#fff" width="264.6" height="387.8"></circle>
            </a>
          </g>
          <g class="hover_group" opacity="0">
            <a xlinkHref="#">
              <circle cx="1055" cy="842" r="25" fill="#fff" width="264.6" height="387.8"></circle>
            </a>
          </g>
          <g class="" opacity="0">
            <a xlinkHref="/">
              <circle cx="1842" cy="68" r="25" fill="" width="264.6" height="387.8"></circle>
            </a>
          </g>
         
        </svg>
        </figure>

      </section>
    </Layout>
  )
}
