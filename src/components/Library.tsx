import { LibraryContent } from "model/mydata"
import { NextPage } from "next"
import Link from "next/link"


type Props = {
  library: Array<LibraryContent>
}


const Library: NextPage<Props> = ({ library }) => {
  const libraryElem: any = []
  library.forEach((lib, index) => {
    libraryElem.push(
      <li key={ index } className="my-4">
        <div className="mb-2">
          <Link href={ lib.url } className="link link-neutral">
            <b>{ lib.title }</b>
          </Link>
          <span>({ lib.date })</span>
        </div>
        <div className="ml-4">{ lib.description }</div>
      </li>
    )
  }, { index: 1 })
  
  return (<ul>{ libraryElem }</ul>)
}

export default Library
