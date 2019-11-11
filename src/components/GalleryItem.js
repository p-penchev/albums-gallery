import React from "react"

function GalleryItem(props){
    return (
        <div className="hoverOpacity galleryItem">
            <input 
            type="checkbox" 
            checked={props.isFavGallery?false:props.item.isFavorite} 
            onChange={() => props.handleChange(props.item)}
            />
            <label onClick={() => props.handleChange(props.item)} >{props.caption}</label>
             <figure> 
                 <img  src={props.item.url} alt="" />
             </figure> 
             <h3>{props.item.title}</h3>
        </div>
    )
}

export default GalleryItem