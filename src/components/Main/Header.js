import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/img/logo.png'

export default function Header() {
  return (
    <div className="flex items-center justify-center flex-col mt-6">
      <Image
        src={logo}
        alt="Presidencia"
        width={60}
        height={60}
      />
    </div>
  )
}
