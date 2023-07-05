import React, { Suspense, lazy, useEffect, useLayoutEffect, useState } from 'react'
import NavBar from './Components/NavBar'
import { Box } from '@mui/material'
import "./app.css"
import Cardskeleton from './Components/Cardskeleton'
import axios from 'axios'
import Trial from './Trial'
const Card = lazy(() => import("./Components/Card"))

export default function App() {
  const [dataAll, setData] = useState(require("./Dummy.json"))

  useLayoutEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://api.gyanibooks.com/library/get_dummy_notes/")
      setData(res.data)
    }
    fetchData();
  }, [])

  const getData=(data)=>{
    try{
      let text=JSON.parse(data?.notes)?.content[0]?.content[1]?.content[0]?.content[0]?.text
      return text
    }catch(err)
    {
      return data.notes
    }
  }
  return (
    // <Trial></Trial>
    <div id='bg' >
      <NavBar />
      <Box display={'flex'} marginTop={"50px"} flexWrap={"wrap"} justifyContent={"space-between"}>
        {dataAll?.map(data => (
          <Suspense fallback={<Cardskeleton />}>
            <Card id={data.id} title={data.title} text={getData(data)} />
          </Suspense>
        ))}
      </Box>
    </div>
  )
}
