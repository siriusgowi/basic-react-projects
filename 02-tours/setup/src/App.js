import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  
  const [loading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id)=>{
    const newTours = tours.filter((tour)=> tour.id !== tour)
    setTours(newTours)
  }
   
  const fetchTours = async()=>{
    setIsLoading(true)
    try
    {
    const response = await fetch(url)
    const tours = await response.json()
    setIsLoading(false)
    setTours(tours)
    }
    catch(error)
    {
      setIsLoading(false)
      console.log(error)
    }

  }

  useEffect(()=>{
   fetchTours()
  },[])


  if(loading){
    return (
    <main>
    <Loading/>
    </main>
    )
  }
  return <main>
  <Tours tours={tours} removeTour={removeTour}/>
  </main>
}

export default App
