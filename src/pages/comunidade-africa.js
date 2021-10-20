import Image from 'next/image'
import Link from 'next/link'
import comunidadeAfrica from '../../public/img/comunidadeAfrica.png'
import Layout from '../components/Main/Layout'
import Menu from '../components/Menu/Menu'
import Header from '../components/Main/Header'
import Footer from '../components/Main/Footer'

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 25}`
}

export default function Comunidade() {
  return (
    <Layout title="Visitas às Comunidades radicadas em África" description={`Visitas às Comunidades radicadas em África`}>
      <section className="h-screen w-screen max-w-screen-lg xl:max-w-screen-xl container mx-auto px-4" >
        <Header />
        
        <div className="mt-4 ">
          <h2 className="mt-8 text-4xl font-semibold text-textcolor leading-tight opacity-80"> Visitas às Comunidades radicadas em África </h2>

          <div className="mt-5">
            <div className="shadow-2xl mb-8 ">
              <Image
              alt="Comunidade em África"
              src={comunidadeAfrica}
              objectFit="cover"
              priority={true}
              loader={myLoader}
              placeholder='blur'
              blurDataURL={comunidadeAfrica}
              />
            </div>

            <p className="mr-6 text-sm text-textcolor leading-relaxed">
              Pretende-se, com esta exposição fotográfica digital intitulada «Jorge Carlos Fonseca: 
              Relativamente à emigração cabo-verdiana no continente africano, Jorge Carlos Fonseca estabeleceu como 
              estratégia promover e encetar, em termos de intervenção presidencial, um diálogo de Alto Nível com os seus homólogos, 
              com o objectivo de propor caminhos e viabilizar compromissos que tivessem em vista a promoção e a integração das nossas 
              comunidades cabo-verdianas naqueles países de acolhimento.
              <br /> <br />
              Entre o primeiro e o segundo mandato, Jorge Carlos Fonseca realizou visitas às nossas comunidades nos seguintes países: 
              Angola, Côte D’Ivoire, Gana, Guiné-Bissau, Guiné Equatorial, Moçambique, São Tomé e Príncipe e Senegal.
            </p>


            <h2 className="my-6 text-textcolor text-3xl"> Galeria </h2>
            <div>
              <Link href="#"><a className="text-textcolor font-bold text-3xl mr-10"> I Mandato - 2011 - 2016  </a></Link>
              <Link href="#"><a className="text-textcolor font-bold text-3xl"> II Mandato - 2016 - 2021  </a></Link>
            </div>
          </div>

          <Footer 
          title1={<a className="text-base text-textcolor opacity-50 font-bold">Introdução </a>} link1="/"
          title2={<a className="text-base text-textcolor opacity-80 font-bold"> Visitas às Comunidades radicadas em África </a>} link2="/comunidade-africa"
          title3={<a className="font-bold text-base text-textcolor opacity-50">  Visitas às Comunidades radicadas em Europa </a>} link3="/comunidade-europa"
          />
        </div>
      </section>
    </Layout>
  )
}
