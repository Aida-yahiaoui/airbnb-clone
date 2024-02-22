import React from "react"
import ReactDOM from "react-dom"
import star from "../assets/Star 1.png"
export default function Card(props){

    return(
        <div className="card">
            { props.img && <img src={"../src/assets/"+props.img} className="card--img"/>}
            <div className="card--stats">
                <img src={star} className="card--star"/>
                <span>{props.raing}</span>
                <span className="grey">({props.reviewcount}) .</span>
                <span className="grey">{props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p>
                <span className="bold card--price">From ${props.price} </span>/ person
            </p>
        </div>
    )
}



