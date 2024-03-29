import Link from 'next/link'
import Layout from '../components/Main/Layout'
import Header from '../components/Main/Header'
import Footer from '../components/Main/Footer'
import { Fancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox.css";


var listmandato1 = [];
for (var i = 1; i <= 521; i++) {
  listmandato1.push({
    src: "./img/visitaRestoMundo/1mandato/resto(" + i + ").jpg",
    // thumb: "./img/africa01" + i + ".jpg",
    caption: "",
  });
}
var listmandato2 = [];
for (var i = 1; i <= 185; i++) {
  listmandato2.push({
    src: "./img/visitaRestoMundo/2mandato/resto(" + i + ").jpg",
    // thumb: "./img/africa01" + i + ".jpg",
    caption: "",
  });
}
function openImageMandato1() {
  Fancybox.show(listmandato1, {
    // Your options go here
  });
}
function openImageMandato2() {
  Fancybox.show(listmandato2, {
    // Your options go here
  });
}

export default function ComunidadeMundo() {
  return (
    <Layout title="Visitas às Comunidades radicadas nos Estados Unidos da America e resto do mundo" description={`Visitas às Comunidades radicadas nos Estados Unidos da America e resto do mundo`}>
      <section className="w-screen max-w-screen-lg xl:max-w-screen-xl container mx-auto px-4" >
        <Header />

        <div className="mt-4 ">
          <h2 className="mt-8 text-3xl md:text-4xl font-semibold text-textcolor leading-tight"> Visitas às Comunidades radicadas nos Estados Unidos da America e resto do mundo </h2>

          <div className=" mb-32 mt-5">
            <div className="shadowpr mb-8">
              <img
                alt="Comunidade em EUA e Mundo"
                src="img/restoMundo.png"
              />
            </div>

            <p className="mr-6 text-base text-corpo leading-relaxed">
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
              <a onClick={openImageMandato1} className="cursor-pointer text-textcolor font-bold text-3xl mr-10"> I Mandato - 2011 - 2016  </a>
              <a onClick={openImageMandato2} className="cursor-pointer text-textcolor font-bold text-3xl"> II Mandato - 2016 - 2021  </a>
            </div>
          </div>

          <Footer
            title1={<a className="text-base text-textcolor opacity-50 font-bold">Introdução </a>} link1="/introducao"
            title2={<a className="text-base text-textcolor font-bold"> Visitas às Comunidades radicadas nos Estados Unidos da America e resto do mundo </a>} link2="/comunidade-mundo"
            title3={<a className="font-bold text-base text-textcolor opacity-50"> Condecorações </a>} link3="/condecoracoes"
          />
        </div>
      </section>
    </Layout>
  )
}
