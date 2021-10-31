import Layout from '../components/Main/Layout'
import { Fancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox.css";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 25}`
}

var gallery = [];
for (var i = 1; i <= 9; i++) {
  gallery.push({
    src: "./img/europa/" + i + ".jpg",
    // thumb: "./img/africa01" + i + ".jpg",
    caption: "",
  });
}


var galleryeua = [];
for (var i = 1; i <= 9; i++) {
  galleryeua.push({
    src: "./img/eua/" + i + ".jpg",
    // thumb: "./img/africa01" + i + ".jpg",
    caption: "",
  });
}

var gallerybrazil = [];
for (var i = 1; i <= 9; i++) {
  gallerybrazil.push({
    src: "./img/brazil/" + i + ".jpg",
    // thumb: "./img/africa01" + i + ".jpg",
    caption: "",
  });
}

var galleryafrica = [];
for (var i = 1; i <= 9; i++) {
  galleryafrica.push({
    src: "./img/africa01/" + i + ".jpg",
    // thumb: "./img/africa01" + i + ".jpg",
    caption: "",
  });
}

var galleryafrica2 = [];
for (var i = 1; i <= 9; i++) {
  galleryafrica2.push({
    src: "./img/africa02/" + i + ".jpg",
    // thumb: "./img/africa01" + i + ".jpg",
    caption: "",
  });
}

var galleryafrica3 = [];
for (var i = 1; i <= 9; i++) {
  galleryafrica3.push({
    src: "./img/africa03/" + i + ".jpg",
    // thumb: "./img/africa01" + i + ".jpg",
    caption: "",
  });
}


function openImage02() {
  Fancybox.show(gallery, {
    // Your options go here
  });
}

function openImageeua() {
  Fancybox.show(galleryeua, {
    // Your options go here
  });
}

function openImageBrazil() {
  Fancybox.show(gallerybrazil, {
    // Your options go here
  });
}

function openImageAfrica1() {
  Fancybox.show(galleryafrica, {
    // Your options go here
  });
}
function openImageAfrica2() {
  Fancybox.show(galleryafrica2, {
    // Your options go here
  });
}
function openImageAfrica3() {
  Fancybox.show(galleryafrica3, {
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
            <a onClick={openImageeua} xlinkHref="#">
              <circle cx="613" cy="552" r="25" fill="#fff0" width="264.6" height="387.8"></circle>
            </a>
          </g>
          <g className="hover_group" opacity="0">
            <a onClick={openImageBrazil} xlinkHref="#">
              <circle cx="690" cy="706" r="25" fill="#fff0" width="264.6" height="387.8"></circle>
            </a>
          </g>
          <g className="hover_group" opacity="0">
            <a onClick={openImage02} xlinkHref="#">
              <circle cx="896" cy="514" r="25" fill="#fff0" width="264.6" height="387.8"></circle>
            </a>
          </g>
          <g className="hover_group" opacity="0">
            <a onClick={openImageAfrica3} xlinkHref="#">
              <circle cx="860" cy="650" r="25" fill="#fff0" width="264.6" height="387.8"></circle>
            </a>
          </g>
          <g className="hover_group" opacity="0">
            <a onClick={openImageAfrica2}  xlinkHref="#">
              <circle cx="965" cy="710" r="25" fill="#fff0" width="264.6" height="387.8"></circle>
            </a>
          </g>
          <g className="hover_group" opacity="0">
            <a onClick={openImageAfrica1} xlinkHref="#">
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
