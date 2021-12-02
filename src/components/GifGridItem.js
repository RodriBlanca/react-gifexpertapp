import React from 'react'

const GifGridItem = ({ id, title, img }) => {

    return (
        <div className="card animate__animated animate__bounce">
            <img src={img} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem
