import axios from 'axios';
import React, { useLayoutEffect } from 'react'

export default function Trial() {
  
  useLayoutEffect(()=>{
    const fetch=async()=>{
      const res=await axios.get("https://api.gyanibooks.com/library/get_dummy_notes/")
      let data=res.data[0]
      // console.log(JSON.parse(data.notes)?.content[0]?.content[1]?.content[0]?.content[0]?.text)
      // res.data.map(d=>{
      //   const note=JSON.parse(d.notes)
      //   console.log(note) 
      // })
        const note=JSON.parse(data.notes)
      console.log(note);

    }
    fetch();
  },[])
  return (
    <div>Trial</div>
  )
}
