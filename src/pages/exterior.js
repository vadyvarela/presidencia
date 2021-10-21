import Image from 'next/image'
import Link from 'next/link'
import exterior from '../../public/img/exteriro.png'
import Layout from '../components/Main/Layout'
import Header from '../components/Main/Header'
import Footer from '../components/Main/Footer'

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 25}`
}

export default function Exterior() {
  return (
    <Layout title="Comunidade no Exterior" description={`Descrisao...`}>
      <section className="h-screen w-screen max-w-screen-lg xl:max-w-screen-xl container mx-auto px-4" >
        <Header />
        
        <div className="mt-4 ">
          <h2 className="mt-8 text-3xl md:text-4xl font-semibold text-textcolor leading-tight opacity-80"> O Presidente da República e as Comunidades Cabo-verdianas no Exterior  </h2>

          <div className="mt-5">
            <div className="shadow-2xl mb-8 ">
              <Image 
              src={exterior} 
              alt="Presidencia"
              objectFit="cover"
              priority={true}
              loader={myLoader}
              placeholder='blur'
              blurDataURL={exterior}
              />
            </div>

            <p className="mr-6 text-sm text-textcolor leading-relaxed">
              A 21 de Agosto de 2011, o cidadão Jorge Carlos de Almeida Fonseca foi eleito ao cargo de Presidente da República, 
              Chefe de Estado e representante máximo da Nação, com 54,09 por cento dos votos, correspondentes a 97.103 votos.
              <br /> <br />
              Na cerimónia de empossamento, a 9 de Setembro de 2011, Jorge Carlos Fonseca reforçou o seu compromisso eleitoral 
              de ser o Presidente de todos os cabo-verdianos, destacando, de forma muito clara, a importância que atribuía às 
              Comunidades cabo-verdianas no exterior, pelo seu papel relevante no desenvolvimento de Cabo Verde e como pilar 
              fundamental da consolidação da democracia cabo-verdiana. 
              <br /> <br />
              Jorge Carlos Fonseca elegeu como uma das bandeiras do seu mandato a união de toda a Nação cabo-verdiana e o 
              acompanhamento do processo de integração dos cabo-verdianos nos países de acolhimento, em particular as comunidades 
              que se encontram em situação especialmente precária, tendo assumido o compromisso de dar voz às suas preocupações e 
              estar atento aos seus desejos, quer em relação à sua vida nos países de emigração quer em relação aos contactos que 
              estabelecem com Cabo Verde. 
            </p>

            <h2 className="my-6 text-textcolor text-3xl"> Galeria </h2>
            <div>
              <Link href="/"><a className="text-textcolor font-bold text-3xl mr-10"> I Mandato - 2011 - 2016  </a></Link>
              <Link href="/"><a className="text-textcolor font-bold text-3xl"> II Mandato - 2016 - 2021  </a></Link>
            </div>
          </div>

          <Footer 
            title1={<a className="text-base text-textcolor opacity-50 font-bold">Introdução </a>} link1="/introducao"
            title2={<a className="text-base text-textcolor opacity-80 font-bold">As Comunidades Cabo-verdianas no Exterior </a>} link2="exterior"
            title3={<a className="font-bold text-base text-textcolor opacity-50"> O Presidente da República e as Comunidades cabo-verdianas no exterior </a>} link3="/comunidade"
          />
        </div>
      </section>
    </Layout>
  )
}
