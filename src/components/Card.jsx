import React from "react"
import ReactDOM from "react-dom"
import star from "../assets/Star 1.png"
export default function Card(props){
    console.log(props)
    return(
        <div className="card">
            <h1>sdg</h1>
            <img src={"../src/assets/"+props.img} className="card--img"/>
        </div>
    )
}



