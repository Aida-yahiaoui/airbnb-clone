import grid from "../assets/Group 77.png"

export default function Hero(){
    return (
       <section className="hero">
        <img src={grid} className="hero--photo"></img>
        <div className="hero--2">
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by
            one-of-a-kind hosts—all without leaving
            home.</p>
        </div>
       </section>
    )
}