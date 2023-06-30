import { useEffect, useState } from "react"


export const getMydata = (params?: Array<string>) => {
    const [mydata, setMydata] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch("/mydata.json")
        const jsonData = await response.json()
        setMydata(jsonData)
        }

        fetchData()
    }, [])

    if (!params) {
        return mydata
    }

    let result_data = {} as any
    params.forEach(param => {
        if (mydata) {
            try {
                result_data[param] = mydata[param]
            } catch (e) {
                console.error(e)
                return mydata
            }
        }
    })

    return result_data
}
