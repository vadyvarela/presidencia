import Link from 'next/link'
import Layout from '../components/Main/Layout'
import Header from '../components/Main/Header'
import Footer from '../components/Main/Footer'
import { Fancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox.css";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 25}`
}

// Image gallery
var gallery = [
  {
    src: "https://lipsum.app/id/2/800x600",
    thumb: "https://lipsum.app/id/2/80x80",
    caption: "First image",
  },
  {
    src: "https://lipsum.app/id/3/800x600",
    thumb: "https://lipsum.app/id/3/80x80",
    caption: "Second image",
  },
  {
    src: "https://lipsum.app/id/4/800x600",
    thumb: "https://lipsum.app/id/4/80x80",
    caption: "Third image",
  },
];

// function openImage() {
//   Fancybox.show(gallery, {
//     // Your options go here
//   });
// }
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
/*Fancybox.bind("[data-fancybox]", {
  // Your options go here
});*/

export default function Condecoracoes() {
  return (
    <Layout title="Condecorações" description={`Condecorações`}>
      <section className="w-screen max-w-screen-lg xl:max-w-screen-xl container mx-auto px-4" >
        <Header />

        <div className="mt-4 ">
          <h2 className="mt-8 text-3xl md:text-4xl font-semibold text-textcolor leading-tight"> Condecorações </h2>

          <div className="mb-32 mt-5">
            <div className="shadowpr mb-8 ">
              <img
                alt="Condecorações"
                src="img/condecoracoes.png"
              />
            </div>

            <p className="mr-6 text-base text-textcolor leading-relaxed">
              Jorge Carlos Fonseca definiu o Dia Nacional da Cultura e das Comunidades – 18 de Outubro - como efeméride especial
              para distinguir, em vida ou a título póstumo, cidadãos cabo-verdianos no exterior, que se notabilizem
              por méritos pessoais, por feitos cívicos ou militares ou por serviços prestados ao País e nas comunidades onde
              estão inseridos. <br /><br />

              No uso da competência que lhe é conferida por lei, e em reconhecimento do contributo inestimável e do esforço meritório
              de alguns cidadãos cabo-verdianos das comunidades emigradas, bem assim nacionais dos países de acolhimento que se têm
              destacado pela atenção dada às nossas comunidades emigradas, facilitando a sua integração e reforçando os laços de
              cooperação entre os Cabo Verde e esses países, Jorge Carlos Fonseca atribuiu medalhas a cidadãos cabo-verdianos e
              descendentes, a estrangeiros e a instituições e organizações em África, na Europa e nos Estados Unidos, informação
              disponível nos Decretos-presidenciais publicados entre os anos 2013 e 2020. <br /><br />

              A 18 de Outubro de 2015, o ano do 40º aniversário da Independência Nacional, foram condecorados 40 cidadãos que, pela
              exemplaridade assim publicamente demonstrada, constituem-se em factor motivador e criador de estímulos numa sociedade
              que defende os valores da civilização. <br /><br />

              As medalhas foram entregues pelo próprio Presidente da República nas visitas que fez às comunidade cabo-verdianas,
              normalmente em eventos solenes com enorme significado para os distinguidos e para os participantes.
              <br /><br /> É imperativo para Jorge Carlos Fonseca que, sendo possível, as cerimónias de condecoração de personalidades das
              comunidades cabo-verdianas sejam realizadas nos países onde elas residem. <br /><br />

            </p>

            <h2 className="my-6 text-textcolor text-3xl"> Galeria  </h2>
            <div>
              <a onClick={openImage} className="cursor-pointer text-textcolor font-bold text-3xl mr-10"> I Mandato - 2011 - 2016  </a>
              <a onClick={openImage2Mandato} className="cursor-pointer text-textcolor font-bold text-3xl"> II Mandato - 2016 - 2021  </a>
            </div>
          </div>


        </div>
        <Footer
          title1={<a className="text-base text-textcolor opacity-50 font-bold">Introdução </a>} link1="/introducao"
          title2={<a className="text-base text-textcolor font-bold"> Condecorações </a>} link2="/condecoracoes"
          title3={<a className="font-bold text-base text-textcolor opacity-50"> Citações </a>} link3="/citacoes"
        />
      </section>
    </Layout>
  )
}
