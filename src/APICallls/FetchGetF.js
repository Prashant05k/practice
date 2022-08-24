import { useState } from "react"
import { useEffect } from "react"

export default function FetchGetF(){
    const [listData, setListData] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            setListData(data)
            // console.log(data)
        })
        .catch(err => console.log(err))   
    },[])
    listData.length && console.log(listData)
    return (<>
        <div>FetchGetF</div>
    </>)
}