import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/img/logo.png'
import capa from '../../public/img/capa1.png'
import intro from '../../public/img/introducao.png'
import Layout from '../components/Main/Layout'
import Menu from '../components/Menu/Menu'
import Header from '../components/Main/Header'
import Footer from '../components/Main/Footer'

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 25}`
}

export default function Introducao() {
  return (
    <Layout title="Introdução" description={`Descrisao...`}>
      <section className="h-screen w-screen max-w-screen-lg xl:max-w-screen-xl container mx-auto px-4" >
        <Header />
        
        <div className="mt-4 ">
          <h2 className="mt-8 text-3xl md:text-4xl font-semibold text-textcolor leading-tight"> Introdução </h2>

          <div className="mt-5 flex flex-col md:flex-row">
            <div className="w-full md:w-3/4">
              <p className="mr-6 text-base text-corpo leading-normal">Pretende-se, com esta exposição fotográfica digital intitulada «Jorge Carlos Fonseca: 
                O Presidente de Todos os Cabo-verdianos», apresentar ao leitor um olhar sobre o exercício da magistratura 
                presidencial de Jorge Carlos Fonseca junto das nossas comunidades diaspóricas, a forma inovadora, criativa e 
                humana imprimida por ele nesse exercício, contribuindo, a nosso ver, para o reforço do sentimento de pertença, da 
                identidade e da união de todos os cabo-verdianos, dentro e fora do país. <br /><br />

                O modelo de estratégia de proximidade proposto pelo Presidente da República aos cabo-verdianos no exterior 
                se destaca pela sua originalidade, revelando, ao mesmo tempo, a forte intuição de Jorge Carlos Fonseca na sua acção de acompanhar, a par e passo, as mais diversas facetas da vida dos cabo-verdianos, neste caso na emigração, num constante pulsar ao ritmo das alegrias, das angústias e das interrogações das pessoas, aliado a um esforço reflexivo permanente do intelectual crítico que é, na perspectiva de co-participação na construção 
                de um novo paradigma, assente numa lógica de aprofundamento do conhecimento das comunidades cabo-verdianas 
                no exterior, em termos numéricos e, principalmente, qualitativos, e no investimento em políticas públicas mais 
                assertivas e recursos que promovam a proximidade delas, canalizando as suas potencialidades nos mais diversos níveis 
                para a sua terra de origem. <br /><br />

                Jorge Carlos Fonseca, ao longo de 10 anos de exercício dos seus dois mandatos presidenciais (2011- 2016 e 2016 – 2021), 
                afirmou-se fiel ao compromisso de ser o Presidente de todos os cabo-verdianos, e, de acordo com as regras definidas na 
                Constituição, assumiu-se como um moderador, um factor de equilíbrio, estabelecendo com o Governo uma cooperação fraternal, 
                leal, construtiva e positiva, mantendo-se, porém, firme na sua condição de independente, de ser uma voz autónoma 
                e um democrata convicto. <br /><br />

                A avaliar pelos resultados das eleições presidenciais de 2016 (venceu com 78,25% dos votos),  diríamos que a 
                Presidência de Jorge Carlos de Almeida Fonseca no que concerne às comunidades cabo-verdianas no exterior foi 
                uma estratégia conseguida. <br /><br />

              </p>
            </div>
            <div className="shadowpr w-full h-full
            md:w-1/4 transform hover:scale-110 transition delay-150 duration-300 ease-in-out rounded ">
              <Image 
                loader={myLoader}
                src={intro}
                alt="Jorge Carlos Fonseca"
                objectFit="cover"
                priority={true}
                loader={myLoader}
                placeholder='blur'
                blurDataURL={intro}
              />
            </div>
          </div>

          <Footer 
            title1={<a className="text-base text-textcolor font-bold">Introdução </a>} link1="/introducao"
            title2={<a className="text-base text-textcolor opacity-50 font-bold">As Comunidades Cabo-verdianas no Exterior </a>} link2="exterior"
            title3={<a className="font-bold text-base text-textcolor opacity-50"> O Presidente da República e as Comunidades cabo-verdianas no exterior </a>} link3="/comunidade"
          />
        </div>
      </section>
    </Layout>
  )
}
