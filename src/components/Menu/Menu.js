import Image from 'next/image'
import logo from '../../../public/img/logo.png'
import LinkMenu from './LinkMenu'

export default function Menu() {
  return (
    <div className="max-w-screen-lg xl:max-w-screen-xl container mx-auto px-4 menuContent z-50">
      <div className="flex items-center justify-center flex-col">
        <Image
          src={logo}
          alt="Presidencia"
          width={60}
          height={60}
        />
      </div>
      <h2 className="mt-2 text-xl md:text-5xl font-semibold text-textcolor mb-6 leading-tight"> Jorge Carlos Fonseca: O Presidente <br /> junto das Comunidades </h2>

      <ul>
        <LinkMenu title="Introdução" link="/introducao" />
        <LinkMenu title="As Comunidades Cabo-verdianas no Exterior" link="/exterior" />
        <LinkMenu title="O Presidente da República e as Comunidades Cabo-verdianas no Exterior" link="comunidade" />
        <LinkMenu title="Visitas às Comunidades radicadas em África" link="/comunidade-africa" />
        <LinkMenu title="Visitas às Comunidades radicadas na Europa" link="/comunidade-europa" />

        <LinkMenu title="Visitas às Comunidades radicadas nos Estados Unidos da America e resto do mundo" link="comunidade-mundo" />
        <LinkMenu title="Condecorações" link="/condecoracoes" />
        <LinkMenu title="Citações" link="/citacoes" />
        <LinkMenu title="Galeria de Fotos" link="/galeria" />
       

        {/* <li><Link href=""><a><Image src={logo} width={15} height={15} /> <span className="ml-2 opacity-80"> </span> </a> </Link></li>
        <li><Link href=""><a>  </a> </Link></li>
        <li><Link href=""><a> </a> </Link></li> */}
      </ul>
    </div>
  )
}
