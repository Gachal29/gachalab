"use client"
import { getMydata } from "@/utils/getMydata"
import { NextPage } from "next"
import Link from "next/link"
import Image from "next/image"


const NameCard: NextPage = () => {
  const params = [
    "first_name","last_name", "accounts",
    "job", "oganizations"
  ]
  const mydata = getMydata(params)

  if (!mydata) {
    return (
      <div>Loading...</div>
    )
  }

  console.log(mydata)

  return (
    <>
      <header className="navbar navbar-base-100 lg:text-2xl">
        <div className="navbar-start">
          <Link href="/">
            トップページへ
          </Link>
        </div>
      </header>
      <main className="">
        <div className="card w-full bg-base-100 shadow-xl">
          <figure>
            <img src="/main-image.JPG" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default NameCard
