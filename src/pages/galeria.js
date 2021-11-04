import Layout from '../components/Main/Layout'
import { Fancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox.css";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 25}`
}

var galleryPortugal = [];
for (var i = 1; i <= 314; i++) {
  galleryPortugal.push({
    src: "./img/galeria/portugal/portugal(" + i + ").jpg",
    // thumb: "./img/africa01" + i + ".jpg",
    caption: "Portugal",
  });
}


var galleryEua = [];
for (var i = 1; i <= 346; i++) {
  galleryEua.push({
    src: "./img/galeria/eua/eua(" + i + ").jpg",
    // thumb: "./img/africa01" + i + ".jpg",
    caption: "Estados Unidos",
  });
}

var gallerybrazil = [];
for (var i = 1; i <= 59; i++) {
  gallerybrazil.push({
    src: "./img/galeria/brazil/brazil(" + i + ").jpg",
    // thumb: "./img/africa01" + i + ".jpg",
    caption: "Brazil",
  });
}

var galleryAngola = [];
for (var i = 3; i <= 31; i++) {
  galleryAngola.push({
    src: "./img/galeria/angola/angola(" + i + ").jpg",
    // thumb: "./img/africa01" + i + ".jpg",
    caption: "Angola",
  });
}

var gallerySaoTome = [];
for (var i = 1; i <= 58; i++) {
  gallerySaoTome.push({
    src: "./img/galeria/saotome/saotome(" + i + ").jpg",
    // thumb: "./img/africa01" + i + ".jpg",
    caption: "São Tomé",
  });
}

var gallerySenegal = [];
for (var i = 1; i <= 50; i++) {
  gallerySenegal.push({
    src: "./img/galeria/senegal/senegal(" + i + ").jpg",
    // thumb: "./img/africa01" + i + ".jpg",
    caption: "Senegal",
  });
}

function openImagePortugal() {
  Fancybox.show(galleryPortugal, {
    // Your options go here
  });
}

function openImageBrazil() {
  Fancybox.show(gallerybrazil, {
    // Your options go here
  });
}
function galleryeua() {
  Fancybox.show(galleryEua, {
    // Your options go here
  });
}
function openImageAngola() {
  Fancybox.show(galleryAngola, {
    // Your options go here
  });
}
function openImageSaoTome() {
  Fancybox.show(gallerySaoTome, {
    // Your options go here
  });
}
function openImageSenegal() {
  Fancybox.show(gallerySenegal, {
    // Your options go here
  });
}


export default function Galeria() {
  return (
    <Layout title="Visitas às Comunidades radicadas na Europa" description={`Visitas às Comunidades radicadas na Europa`}>
      <section className="h-screen" >

        <figure id="projectsvg">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 1080" preserveAspectRatio="slice" >

            <image className="w-full flex justify-center items-center bg-contain" xlinkHref="./img/gallerys.png" />
            <g className="hover_group" opacity="0">
              <a className="cursor-pointer" onClick={openImageBrazil} >
                <circle cx="690" cy="706" r="25" fill="#fff0" width="264.6" height="387.8"></circle>
              </a>
            </g>

            <g className="hover_group" opacity="0">
              <a className="cursor-pointer" onClick={galleryeua} >
                <circle cx="613" cy="552" r="25" fill="#fff0" width="264.6" height="387.8"></circle>
              </a>
            </g>
            <g className="hover_group" opacity="0">
              <a className="cursor-pointer" onClick={openImagePortugal} >
                <circle cx="896" cy="514" r="25" fill="#fff0" width="264.6" height="387.8"></circle>
              </a>
            </g>
            <g className="hover_group" opacity="0">
              <a className="cursor-pointer" onClick={openImageSaoTome} >
                <circle cx="860" cy="650" r="25" fill="#fff0" width="264.6" height="387.8"></circle>
              </a>
            </g>
            <g className="hover_group" opacity="0">
              <a className="cursor-pointer" onClick={openImageSenegal}  >
                <circle cx="965" cy="710" r="25" fill="#fff0" width="264.6" height="387.8"></circle>
              </a>
            </g>
            <g className="hover_group" opacity="0">
              <a className="cursor-pointer" onClick={openImageAngola} >
                <circle cx="1055" cy="842" r="25" fill="#fff0" width="264.6" height="387.8"></circle>
              </a>
            </g>
            <g className="" opacity="0">
              <a xlinkHref="/introducao">
                <circle cx="1842" cy="68" r="25" fill="" width="264.6" height="387.8"></circle>
              </a>
            </g>

          </svg>
        </figure>

      </section>
    </Layout>
  )
}
