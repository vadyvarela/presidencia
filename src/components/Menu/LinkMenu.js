import Link from 'next/link'

export default function LinkMenu(props) {
  return (
    <li className="mt-1">
      <Link href={`${props.link}`}>
        <a className="flex py-2 md:py-3">
          <img src="img/logo.png" width="15" height="15" /> 
          <span className="text-xs md:text-xl ml-2 opacity-80"> {props.title} </span> 
        </a>
      </Link>
    </li>
  )
}
