import Link from 'next/link'
import Layout from '../components/Main/Layout'
import Header from '../components/Main/Header'

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 25}`
}

export default function Home() {
  return (
    <Layout title="Presidencia" description={`Jorge Carlos Fonseca: O Presidente junto das Comunidades`}>
      <section className="h-screen w-screen max-w-screen-lg xl:max-w-screen-xl container mx-auto px-4" >
        <Header />
        
        <h2 className="mt-8 text-3xl md:text-4xl font-semibold text-textcolor leading-tight"> Jorge Carlos Fonseca: O Presidente junto das Comunidades </h2>

        <div className="mt-6">
          <img
            className="shadow-md"
            src="img/capa1.png"
            alt="Presidencia"
          />
        </div>

        <div className="fixed bottom-0 left-0 md:-left-20 w-full p-10 mt-4 flex justify-end items-center">
          <div className="mr-8 text-textcolor opacity-80 font-bold text-sm md:text-xl">
            <Link href="/citacoes"><a className="flex items-center"> Citações</a></Link>
          </div>
          <div className="mr-8 text-textcolor font-bold opacity-80 text-sm md:text-xl">
            <Link href="/galeria"><a className="flex items-center "> Galeria </a></Link>
          </div>
          <div className="mr-4 text-textcolor opacity-80 font-bold text-sm md:text-xl">
            <Link href="/introducao">
              <a className="flex items-center"> 
              <img src="img/play.svg" width={21} height={21} /> <span className="ml-2"> Apresentação </span> 
              </a>
            </Link>
          </div>

        </div>

         
      </section>
    </Layout>
  )
}
