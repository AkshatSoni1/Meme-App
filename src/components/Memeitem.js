import React from 'react'
export default function Memeitem(props) {
    return (
        <>
            <div className="card memeCard my-3 mx-2" style={{width: "23rem", borderRadius:"15px"}}>
                <img src={props.preview} style={{borderBottom:"1px solid grey",borderRadius:"10px"}} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">By {props.author}</h5>
                    <p className="card-text">Likes: {props.likes}</p>
                    <a href={props.link} className="btn cardButton">Know more</a>
                    <a href={props.url} className="btn cardButton mx-3">View meme</a>
                </div>
            </div>
        </>
    )
}
