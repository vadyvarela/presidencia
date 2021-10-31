import Image from 'next/image'
import Link from 'next/link'
import gallery from '../../../public/img/gallery.svg'
import right from '../../../public/img/right.svg'
import left from '../../../public/img/left.svg'
import Menu from '../Menu/Menu'

export default function Footer(props) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 w-full px-10 bg-gbsite">
      <div className="flex items-center flex-row justify-around py-4 ">
        
        <div className="md:flex hidden">
          <div className="mr-5">
            <Link href={`${props.link1}`}><a> <Image src={left} width={25} height={25} /> </a></Link>
          </div>
          <Link href={`${props.link1}`}>{props.title1}</Link>
        </div>
        <div className="hidden md:block">
          <Link href={`${props.link2}`}>{props.title2}</Link>
        </div>
        <div className="hidden md:block">
          <Link href={`${props.link3}`}>{props.title3}</Link>
        </div>
        <div>
          <Link href='/galeria'><a><Image src={gallery} width={25} height={25} /></a></Link>
        </div>

        <div className="mr-4 flex text-textcolor font-bold text-xl">
          <input type="checkbox" id="menuToggle"></input>
          <label for="menuToggle" className="menuOpen">
            <div className="open"></div>
          </label>

          <div className="menu menuEffects">
            <label for="menuToggle"></label>
            <Menu />
          </div>

          <div className="ml-5">
            <Link href={`${props.link3}`}><a> <Image src={right} width={25} height={25} /> </a></Link>
          </div>
        </div>
        
       
      </div>
    </footer>
  )
}
