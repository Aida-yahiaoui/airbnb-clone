import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from "./data.js"


function App() {

  const cards = data.map(item=> {
    return (
      <Card img = {item.coverImg}  
          rating={item.stats.rating} 
          reviewcount={item.stats.reviewCount} 
          country="USA" 
          title={item.title} 
          price={item.price} />
      ) 
    } )
  return (
      <div>
        <Navbar />
        <section className='cards-list'>
          {cards}
        </section>
      </div>
  )
}

export default App
