import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/img/logo.png'

export default function LinkMenu(props) {
  return (
    <li className="mt-2">
      <Link href={`${props.link}`}>
        <a className="p-2">
          <Image src={logo} width={15} height={15} /> 
          <span className="text-sm md:text-2xl ml-2 opacity-80"> {props.title} </span> 
        </a>
      </Link>
    </li>
  )
}
