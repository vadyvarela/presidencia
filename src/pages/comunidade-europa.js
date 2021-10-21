import Image from 'next/image'
import Link from 'next/link'
import comunidadeEuropa from '../../public/img/comunidadeEuropa.png'
import Layout from '../components/Main/Layout'
import Menu from '../components/Menu/Menu'
import Header from '../components/Main/Header'
import Footer from '../components/Main/Footer'

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 25}`
}

export default function ComunidadeEuropa() {
  return (
    <Layout title="Visitas às Comunidades radicadas na Europa" description={`Visitas às Comunidades radicadas na Europa`}>
      <section className="h-screen w-screen max-w-screen-lg xl:max-w-screen-xl container mx-auto px-4" >
        <Header />
        
        <div className="mt-4 ">
          <h2 className="mt-8 text-3xl md:text-4xl font-semibold text-textcolor leading-tight opacity-80"> Visitas às Comunidades radicadas na Europa </h2>

          <div className="mb-10 mt-5">
            <div className="shadow-2xl mb-8 ">
              <Image
              alt="Comunidade em Europa"
              src={comunidadeEuropa}
              objectFit="cover"
              priority={true}
              loader={myLoader}
              placeholder='blur'
              blurDataURL={comunidadeEuropa}
              />
            </div>

            <p className="mr-6 text-sm text-textcolor leading-relaxed">
            Durante o primeiro e o segundo mandatos presidenciais, Jorge Carlos Fonseca realizou inúmeras visitas às 
            comunidades cabo-verdianas radicadas em diferentes países europeus, a saber: 
            Alemanha, Bélgica, Espanha, França, Holanda, Itália, Portugal e Suíça.  
            </p>

            <h2 className="my-6 text-textcolor text-3xl"> Galeria  </h2>
            <div>
              <Link href="#"><a className="text-textcolor font-bold text-3xl mr-10"> I Mandato - 2011 - 2016  </a></Link>
              <Link href="#"><a className="text-textcolor font-bold text-3xl"> II Mandato - 2016 - 2021  </a></Link>
            </div>
          </div>

          <Footer 
          title1={<a className="text-base text-textcolor opacity-50 font-bold">Introdução </a>} link1="/introducao"
          title2={<a className="text-base text-textcolor opacity-50 font-bold"> Visitas às Comunidades radicadas em Europa </a>} link2="/comunidade-europa"
          title3={<a className="font-bold text-base text-textcolor opacity-80"> Visitas às Comunidades radicadas nos Estados Unidos da America e resto do mundo </a>} link3="/comunidade-mundo"
          />
        </div>
      </section>
    </Layout>
  )
}
