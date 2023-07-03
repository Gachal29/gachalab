"use client"

import useMydata from "utils/useMydata"
import { NextPage } from "next"
import Link from "next/link"
import Image from "next/image"
import useWindowSize from "utils/useWindowSize"
import Organizations from "components/Organizations"
import { Mydata } from "model/mydata"
import { useState } from "react"
import QRCode from "react-qr-code"


const NameCard: NextPage = () => {
  const windowSize = useWindowSize()
  const mydata: Mydata = useMydata()
  
  const [mode, setMode] = useState("default")
  const handleMode = (m: string) => {
    if (mode === m) {
      return setMode("default")
    }
    return setMode(m)
  }

  if (!mydata) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <>
      <header className="navbar navbar-base-100 lg:text-2xl">
        <div className="navbar-start">
          <Link href="/">トップページへ</Link>
        </div>
      </header>
      <main className="w-full mb-4">
        <div className={ `card lg:w-1/2 w-4/5 bg-base-100 shadow-xl mx-auto ${mode === "twitter" && "border border-neutral-focus"} ${mode === "portfolio" && "border border-accent-focus"}` }>
          <figure>
            {mode === "default" &&
              <Image src="/icon.jpg" alt="Icon" width={windowSize.width} height={windowSize.height} />
            }
            {mode === "twitter" &&
              <QRCode value={ `https://twitter.com/${mydata.accounts?.twitter}` } className="mt-8" />
            }
            {mode === "portfolio" &&
              <QRCode value={ window.location.host } className="mt-8" />
            }
          </figure>
          <div className="card-body">
            <h2 className="card-title">{ `${mydata.lastName} ${mydata.firstName}` }</h2>
            <div>
              <div className="my-1">
                <b>職業：</b>
                { mydata.job }
              </div>
              {!mydata.organizations || mydata.organizations.length > 0 &&
                <div className="my-1">
                  <b>所属：</b>
                  <Organizations organizations={ mydata.organizations } />
                </div>
              }
            </div>
            <div className="card-actions justify-center mt-3">
              <button
                className={mode === "twitter" ? "btn btn-neutral btn-active" : "btn btn-neutral"}
                onClick={() => handleMode("twitter")}>
                Twitter
              </button>
              <button
                className={mode === "portfolio" ? "btn btn-accent btn-active" : "btn btn-accent"}
                onClick={() => handleMode("portfolio")}>
                Portfolio
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default NameCard
