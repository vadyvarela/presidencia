import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/img/logo.png'
import capa from '../../public/img/capa1.png'
import play from '../../public/img/play.svg'
import Layout from '../components/Main/Layout'
import Menu from '../components/Menu/Menu'
import Header from '../components/Main/Header'

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 25}`
}

export default function Home() {
  return (
    <Layout title="Presidencia" description={`Descrisao...`}>
      <section className="h-screen w-screen max-w-screen-lg xl:max-w-screen-xl container mx-auto px-4" >
        <Header />
        
        <h2 className="mt-8 text-3xl md:text-4xl font-semibold text-textcolor leading-tight opacity-80"> Jorge Carlos Fonseca: O Presidente junto das Comunidades </h2>

        <div className="mt-6">
          <Image
            className="shadow-md"
            src={capa}
            alt="Presidencia"
            objectFit="cover"
            priority={true}
            loader={myLoader}
            placeholder='blur'
            blurDataURL={capa}
          />
        </div>

        <div className="fixed bottom-0 left-0 w-full p-10 mt-4 flex justify-end items-center">
          <div className="mr-8 text-textcolor opacity-80 font-bold text-sm md:text-xl">
            <Link href="/citacoes"><a className="flex items-center"> Citações</a></Link>
          </div>
          <div className="mr-8 text-textcolor font-bold opacity-80 text-sm md:text-xl">
            <Link href=""><a className="flex items-center "> Galeria </a></Link>
          </div>
          <div className="mr-4 text-textcolor opacity-80 font-bold text-sm md:text-xl">
            <Link href="">
              <a className="flex items-center"> 
              <Image src={play} width={21} height={21} /> <span className="ml-2"> Apresentação </span> 
              </a>
            </Link>
          </div>

          <div className="mr-4 text-textcolor font-bold text-xl">
          <input type="checkbox" id="menuToggle"></input>
          <label for="menuToggle" class="menuOpen">
            <div class="open"></div>
          </label>

          <div class="menu menuEffects">
            <label for="menuToggle"></label>
            <Menu />
          </div>
          </div>

        </div>

         
      </section>
    </Layout>
  )
}
