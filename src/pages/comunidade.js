import Image from 'next/image'
import Link from 'next/link'
import comunidade from '../../public/img/comunidade.png'
import Layout from '../components/Main/Layout'
import Menu from '../components/Menu/Menu'
import Header from '../components/Main/Header'
import Footer from '../components/Main/Footer'
import ComunidadeCard from '../components/Main/ComunidadeCard'

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 25}`
}

export default function Comunidade() {
  return (
    <Layout title="Comunidade" description={`Descrisao...`}>
      <section className="h-screen w-screen max-w-screen-lg xl:max-w-screen-xl container mx-auto px-4" >
        <Header />
        
        <div className="mt-4">
          <h2 className="mt-8 text-3xl md:text-4xl font-semibold text-textcolor leading-tight"> As Comunidades Cabo-verdianas no Exterior </h2>

          <div className="mt-5 mb-32">
            <div className="shadowpr mb-8 ">
              <Image src={comunidade}
                alt="Comunidade"
                objectFit="cover"
                priority={true}
                loader={myLoader}
                placeholder='blur'
                blurDataURL={comunidade}
              />
            </div>

            <p className="mr-6 text-base text-corpo leading-relaxed">
            A emigração está profundamente enraizada na sociedade cabo-verdiana apresentando-se como um 
            dos fenómenos mais antigos e estáveis, antecedendo em muitas décadas, a independência de Cabo Verde, em 1975. <br />
            Como recurso para colmatar as muitas privações sentidas, os habitantes deste arquipélago do Sahel demandaram 
            outras paragens para alcançar sucesso pessoal, familiar e social, desde os primórdios da formação da Nação cabo-verdiana 
            que ocorreu, aproximadamente em 1460, com a descoberta das ilhas por navegadores portugueses, conhecendo um dos primeiros 
            momentos de particular expressão, nos finais do século XVII e início do século XVIII, quando os cabo-verdianos rumaram 
            para a América para a pesca da baleia, e, posteriormente, para todos os continentes, dando origem  às comunidades 
            cabo-verdianas, parte integrante da Nação cabo-verdiana. <br />
            Ainda que, em termos estatísticos, os números da população cabo-verdiana emigrada não sejam rigorosos, os 
            registos informais existentes dão conta que ela é o dobro da população residente no país, facto que nos dá um sentido de grandeza da Nação cabo-verdiana. 
            O Quadro abaixo aponta para números mais modestos, mas mesmo assim confirma a superioridade em número da comunidade residente fora do país e identifica as paragens onde homens e mulheres destas ilhas demandaram, em África, na Europa e na América, em busca de uma vida melhor. 
            </p>

            <h2 className="my-8 font-bold text-xl text-subtitle"> Estimativa da Comunidade Cabo-verdiana no Mundo</h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <ComunidadeCard location="Estados Unidos" number="264.900" percente="51,12%" />
              <ComunidadeCard location="Portugal" number="80.000" percente="15,44%" />
              <ComunidadeCard location="Angola" number="45.000" percente="8,68" />
              <ComunidadeCard location="França" number="25.000" percente="4,82%" />
              <ComunidadeCard location="Senegal" number="25.000 " percente="4,82" />
              <ComunidadeCard location="São Tomé e Príncipe" number="20.000 " percente="3,86" />
              <ComunidadeCard location="Holanda" number="16.580" percente="3,20" />
              <ComunidadeCard location="Espanha" number="12.000" percente="2,32" />
              <ComunidadeCard location="Itália" number="10.000" percente="1,93" />
              <ComunidadeCard location="Argentina" number="5.200" percente="1,00" />
              <ComunidadeCard location="Luxemburgo" number="3.000" percente="0,58" />
              <ComunidadeCard location="Suiça" number="3.000" percente="0,58" />
              <ComunidadeCard location="Guiné-Bissau" number="2.400" percente="0,46" />
              <ComunidadeCard location="Moçambique" number="2.000" percente="0,39" />
              <ComunidadeCard location="Brasil" number="1.000" percente="0,19" />
              <ComunidadeCard location="Bélgica" number="800" percente="0,15" />
              <ComunidadeCard location="Alemanha" number="800" percente="0,15" />
              <ComunidadeCard location="Suécia" number="700" percente="0,14" />
              <ComunidadeCard location="Canadá" number="300" percente="0,06" />
              <ComunidadeCard location="Noruega" number="300" percente="0,06" />
              <ComunidadeCard location="Gabão" number="200" percente="0,04" />
            </div>

            <p className="text-corpo text-sm my-5"> Fonte: IAPE: Ministério das Comunidades, 2009 </p>
            <p className="mr-6 text-base text-corpo leading-relaxed">
            A importância estratégica da emigração para o desenvolvimento de Cabo Verde, em termos económicos, políticos, 
            sociais e culturais, é um facto incontestável. De tal maneira que nos assumimos como um Estado cujas políticas 
            públicas não ficam detidas nas fronteiras do seu território, pois que a nossa comunidade diaspórica não é um excedente 
            da Nação, mas constitutiva à Nação. 
            </p>

            <h2 className="my-6 text-subtitle text-3xl"> Galeria </h2>
            <div>
              <Link href="/"><a className="text-textcolor font-bold text-3xl mr-10"> I Mandato - 2011 - 2016  </a></Link>
              <Link href="/"><a className="text-textcolor font-bold text-3xl"> II Mandato - 2016 - 2021  </a></Link>
            </div>
          </div>

          <Footer 
          title1={<a className="text-base text-textcolor opacity-50 font-bold">Introdução </a>} link1="/introducao"
          title2={<a className="text-base text-textcolor font-bold"> As Comunidades Cabo-verdianas no Exterior  </a>} link2="/comunidade"
          title3={<a className="font-bold text-base text-textcolor opacity-50"> Visitas às Comunidades radicadas em África </a>} link3="/comunidade-africa"
          />
        </div>
      </section>
    </Layout>
  )
}
