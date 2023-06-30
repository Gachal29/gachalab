import { NextPage } from "next"
import Image from 'next/image'
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <>
      <header className="navbar navbar-base-100 lg:text-2xl">
        <div className="navbar-start">
          <h1 className="navbar-start">Gachalab</h1>
        </div>
        <div className="navbar-end">
          <Link href="/namecard"
            className="btn btn-sm btn-success">
            モバイル名刺
          </Link>
        </div>
      </header>
      <main></main>
    </>
  )
}

export default Home
