import React from "react"
import ReactDOM from "react-dom"
import star from "../assets/Star 1.png"
export default function Card(props){
    let badgeText
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if( props.location === "Online"){
        badgeText ="Online"
    }
    return(
        <div className="card">
            { badgeText && <div className="card--badge"> {badgeText}</div>}
            { props.coverImg && <img src={"../src/assets/"+props.coverImg} className="card--img"/>}
            <div className="card--stats">
                <img src={star} className="card--star"/>
                <span>{props.stats.rating}</span>
                <span className="grey">({props.stats.reviewCount}) .</span>
                <span className="grey">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p>
                <span className="bold card--price">From ${props.price} </span>/ person
            </p>
        </div>
    )
}



