import React from "react"

function AlbumItem(props){
    return (
            <div className="module" onClick={() => props.handleClick(props.item)}>
                Album {props.item}
            </div>
    )
}

export default AlbumItem