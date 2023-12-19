import React from 'react'
import "../Styles/Videos.css"

const Videos = ({Videos}) => {
    const playButton = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg>
  return (
    <>
    <div className="videos">
        {
            Videos.map((item , index)=>{
          return  <div className="videoCard" key={index} style={{backgroundImage:`url(${item.image})`}} >
                
                <a href="#/">{playButton}</a>
                <p>{item.name}</p>
            </div>
            })
        }
    </div>

    </>
  )
}

export default Videos