import { useEffect, useState } from "react"
import { Mydata } from "model/mydata"


const useMydata = () => {
  const [mydata, setMydata] = useState<Mydata>({})
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/mydata.json")
      setMydata(Mydata.fromJSON(await response.text()))
    }

    fetchData()
  }, [])
  return mydata
}

export default useMydata
