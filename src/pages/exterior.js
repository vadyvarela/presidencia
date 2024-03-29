import Link from 'next/link'
import Layout from '../components/Main/Layout'
import Header from '../components/Main/Header'
import Footer from '../components/Main/Footer'
import { Fancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox.css";

var list1mandato = [];
for (var i = 1; i <= 215; i++) {
  list1mandato.push({
    src: "./img/condecoracao/1mandato/con(" + i + ").jpg",
    // thumb: "./img/africa01" + i + ".jpg",
    caption: "",
  });
}
var list2mandato = [];
for (var i = 1; i <= 37; i++) {
  list2mandato.push({
    src: "./img/condecoracao/2mandato/con(" + i + ").jpg",
    // thumb: "./img/africa01" + i + ".jpg",
    caption: "",
  });
}


function openImage() {
  Fancybox.show(list1mandato, {
    // Your options go here
  });
}
function openImage2Mandato() {
  Fancybox.show(list2mandato, {
    // Your options go here
  });
}

export default function Exterior() {
  return (
    <Layout title="Comunidade no Exterior" description={`Descrisao...`}>
      <section className="w-screen max-w-screen-lg xl:max-w-screen-xl container mx-auto px-4" >
        <Header />

        <div className="mt-4 ">
          <h2 className="mt-8 text-3xl md:text-4xl font-semibold text-textcolor leading-tight"> O Presidente da República e as Comunidades Cabo-verdianas no Exterior  </h2>

          <div className="mt-5 mb-32">
            <div className="shadowpr mb-8 ">
              <img
                src="img/exteriro.png"
                alt="Presidencia"
              />
            </div>

            <p className="mr-6 text-base text-corpo leading-relaxed">
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
              <a onClick={openImage} className="cursor-pointer text-textcolor font-bold text-3xl mr-10"> I Mandato - 2011 - 2016  </a>
              <a onClick={openImage2Mandato} className="cursor-pointer text-textcolor font-bold text-3xl"> II Mandato - 2016 - 2021  </a>
            </div>
          </div>

          <Footer
            title1={<a className="text-base text-textcolor opacity-50 font-bold">Introdução </a>} link1="/introducao"
            title2={<a className="text-base text-textcolor font-bold"> O Presidente da República e as Comunidades Cabo-verdianas no Exterior </a>} link2="/exterior"
            title3={<a className="font-bold text-base text-textcolor opacity-50"> As Comunidades Cabo-verdianas no Exterior </a>} link3="/comunidade"
          />
        </div>
      </section>
    </Layout>
  )
}
