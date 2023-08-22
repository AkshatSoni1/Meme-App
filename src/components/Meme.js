import React, { useState } from 'react'
import Memeitem from './Memeitem'
import Spinner from './Spinner';

export default function Meme() {
  
    const getMemes=async()=>{
        setLoading(true);
        let memeUrl = 'https://meme-api.com/gimme/20'
        let data = await fetch(memeUrl);
        let parsedData = await data.json();
        setResults(result.concat(parsedData.memes));
        setLoading(false);
    }
    const [result, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [flag, setFlag] = useState(true);
    if(flag){
        getMemes();
        setFlag(false);
    }
    return (
        <>
            <h1 className='text-center' style={{marginTop:"65px"}} >Smile..Thats what i want😊</h1>
            <div className="container memes">
                { result.map((element) => {
                    return <div key={element.url}>
                     {/* return <div> */}
                        <Memeitem preview={element.preview[3]?element.preview[3]:element.preview[2]?element.preview[2]:element.preview[1]} url={element.url} link={element.postLink} likes={element.ups} author={element.author} />
                    </div>
                })
                }
            </div>
            {loading && <Spinner/>}
            <div className="d-grid gap-2 container">
                <button className="btn btn-outline-dark my-3" onClick={getMemes} type="button">Load More Memes</button>
            </div>
        </>
    )
}
