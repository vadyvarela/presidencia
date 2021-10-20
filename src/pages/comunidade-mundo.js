import Image from 'next/image'
import Link from 'next/link'
import comunidadeMundo from '../../public/img/restoMundo.png'
import Layout from '../components/Main/Layout'
import Menu from '../components/Menu/Menu'
import Header from '../components/Main/Header'
import Footer from '../components/Main/Footer'

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 25}`
}

export default function ComunidadeMundo() {
  return (
    <Layout title="Visitas às Comunidades radicadas nos Estados Unidos da America e resto do mundo" description={`Visitas às Comunidades radicadas nos Estados Unidos da America e resto do mundo`}>
      <section className="h-screen w-screen max-w-screen-lg xl:max-w-screen-xl container mx-auto px-4" >
        <Header />
        
        <div className="mt-4 ">
          <h2 className="mt-8 text-4xl font-semibold text-textcolor leading-tight opacity-80"> Visitas às Comunidades radicadas nos Estados Unidos da America e resto do mundo </h2>

          <div className="mb-10 mt-5">
            <div className="shadow-2xl mb-8 ">
              <Image
              alt="Comunidade em EUA e Mundo"
              src={comunidadeMundo}
              objectFit="cover"
              priority={true}
              loader={myLoader}
              placeholder='blur'
              blurDataURL={comunidadeMundo}
              />
            </div>

            <p className="mr-6 text-sm text-textcolor leading-relaxed">
            Durante o primeiro e o segundo mandatos presidenciais, Jorge Carlos Fonseca realizou várias visitas à comunidade cabo-verdiana residente nos Estados Unidos, 
            abrangendo vários Estados por onde estão espalhadas as nossas gentes, designadamente Califórnia, Connecticut, Massachusetts, 
            Nova Iorque, Nova Jérsei, Rhode Island e Washington D.C.,   a maioria delas no quadro de missões oficiais, 
            designadamente no âmbito das Sessões da Assembleia Geral das Nações Unidas, realizadas em Nova Iorque, da Cimeira 
            Estados Unidos-África (United States–Africa Leaders Summit), convocada pelo Presidente Barack Obama, em Agosto de 2016, de 
            entre outros. <br /><br />
            Jorge Carlos Fonseca encetou, também, contactos com as comunidades cabo-verdianas radicadas no Brasil (Brasília, São Paulo 
            e Rio de Janeiro) e em Timor-Leste. 
            </p>

            <h2 className="my-6 text-textcolor text-3xl"> Galeria  </h2>
            <div>
              <Link href="#"><a className="text-textcolor font-bold text-3xl mr-10"> I Mandato - 2011 - 2016  </a></Link>
              <Link href="#"><a className="text-textcolor font-bold text-3xl"> II Mandato - 2016 - 2021  </a></Link>
            </div>
          </div>

          <Footer 
          title1={<a className="text-base text-textcolor opacity-50 font-bold">Introdução </a>} link1="/"
          title2={<a className="text-base text-textcolor opacity-80 font-bold"> Visitas às Comunidades radicadas nos Estados Unidos da America e resto do mundo </a>} link2="/comunidade-mundo"
          title3={<a className="font-bold text-base text-textcolor opacity-50"> Condecorações </a>} link3="/condecoracoes"
          />
        </div>
      </section>
    </Layout>
  )
}
