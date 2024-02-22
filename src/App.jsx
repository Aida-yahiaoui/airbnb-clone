import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from "./data.js"


function App() {
  return (
      <div>
        <Navbar />
        <Card />
        {data.map( item=> {
           <Card img = {item.coverImg}  
         /*  rating={item.stats.rating} 
           reviewcount={item.stats.reviewcount} 
           country="USA" 
           title={item.title} 
           price={item.price} *//>
        } )}

      </div>
  )
}

export default App
