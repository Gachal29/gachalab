"use client"

import Organizations from "components/Organizations"
import History from "components/History"
import { Mydata } from "model/mydata"
import { NextPage } from "next"
import Link from "next/link"
import useMydata from "utils/useMydata"

const Home: NextPage = () => {
  const mydata: Mydata = useMydata()

  if (!mydata) {
    return (
      <span className="loading loading-spinner loading-lg"></span>
    )
  }

  console.log(mydata.history)

  return (
    <>
      <header className="navbar navbar-base-100 lg:text-2xl">
        <div className="navbar-start">
          <h1 className="navbar-start text-2xl font-bold">Gachalab</h1>
        </div>
        <div className="navbar-end">
          <Link href="/namecard"
            className="btn btn-sm btn-primary">
            モバイル名刺
          </Link>
        </div>
      </header>
      <main className="m-4">
        <h1 className="text-2xl font-bold">{ `${mydata.lastName} ${mydata.firstName}` }</h1>

        <div className="my-4 py-2 px-4 grid w-full card border border-neutral-focus rounded-box text-xl">
          <h2 className="text-center text-2xl font-bold mb-2">基本情報</h2>
          
          <p className="mb-2">
            <b>職業：</b>
            { mydata.job }
          </p>
          {!mydata.organizations || mydata.organizations.length > 0 &&
            <div className="mb-2">
              <b>所属：</b>
              <Organizations organizations={ mydata.organizations } />
            </div>
          }
          <div className="mb-2">
          </div>
        </div>

        <div className="my-4 py-2 px-4 grid w-full card border border-neutral-focus rounded-box text-xl">
          <h2 className="text-center text-2xl font-bold mb-2">技術スキル</h2>
          
          準備中...
        </div>

        <div className="my-4 py-2 px-4 grid w-full card border border-neutral-focus rounded-box text-xl">
          <h2 className="text-center text-2xl font-bold mb-2">略歴</h2>
          {mydata.history &&
            <History history={ mydata.history } />
          }
        </div>

        <div className="my-4 py-2 px-4 grid w-full card border border-neutral-focus rounded-box text-xl">
          <h2 className="text-center text-2xl font-bold mb-2">開発</h2>
          
          準備中...
        </div>

        <div className="my-4 py-2 px-4 grid w-full card border border-neutral-focus rounded-box text-xl">
          <h2 className="text-center text-2xl font-bold mb-2">執筆</h2>
          
          準備中...
        </div>
      </main>
      <footer className="flex justify-center my-2">
        <Link href={ "https://twitter.com/" + mydata.accounts?.twitter } className="btn btn-outline btn-info mx-1">Twitter</Link>
        <Link href={ "https://github.com/" + mydata.accounts?.github } className="btn btn-outline mx-1">Github</Link>
      </footer>
    </>
  )
}

export default Home
