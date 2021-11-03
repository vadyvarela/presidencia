import Link from 'next/link'

export default function Header() {
  return (
    <div className="flex items-center justify-center flex-col mt-6">
      <Link href="/">
        <a>
        <img
          src="img/logo.png"
          alt="Presidencia"
          width={60}
          height={60}
        />
        </a>
      </Link>
    </div>
  )
}
