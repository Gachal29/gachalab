import { HistoryContent } from "model/mydata"
import { NextPage } from "next"

type Props = {
  history: Array<HistoryContent>
}

const History: NextPage<Props> = ({ history }) => {
  const historyElem: any = []
  history.forEach((h, index) => {
    historyElem.push(
      <li key={ index } className="my-4">
        <b>
          {h.year}年
          {h.month && `${h.month}月`}
          {h.day && `${h.day}日`}
        </b>
        <br />
        <span className="ml-4">
          { h.description }
        </span>
      </li>
    )
  }, { index: 1 })

  return (<ul className="list-inside">{ historyElem }</ul>)
}

export default History
