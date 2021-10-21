import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/img/logo.png'

export default function LinkMenu(props) {
  return (
    <li className="mt-1">
      <Link href={`${props.link}`}>
        <a className="py-2 md:py-3">
          <Image src={logo} width={15} height={15} /> 
          <span className="text-xs md:text-xl ml-2 opacity-80"> {props.title} </span> 
        </a>
      </Link>
    </li>
  )
}
