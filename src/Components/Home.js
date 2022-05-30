import React, { useEffect, useState } from 'react'

const Home = () => {  
    const [data1, setData1]=useState()

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(json => setData1(json))
        console.log("data",data1)
       
    },[])
    console.log("data1",data1)
   
  return (
    <div>
        {
       (data1?.length===0)?<div>
       </div>:
       data1?.map((item)=>{
        return(<div key={item.id}>
          <h1>{item.id}</h1>
          <h1>{item.title}</h1>

        </div>)
    })}


        
        
     
    </div>

    
  )
}

export default Home