import React, {Component} from 'react';
import GalleryItem from './GalleryItem';
import '../App.css';
import store from "../js/store/index.js";
import { selectAlbum, removeFavItem, addFavItem } from "../js/actions/index.js";

class AlbumGallery extends Component {
  constructor() {
    super();

    const albumData = store.getState().selectedAlbum;
    const favorites = store.getState().favorite;

    for(let i = 0; i < albumData.length; i++){
      albumData[i].isFavorite = false;
      for(let fav = 0; fav < favorites.length; fav++){
        if (albumData[i].id === favorites[fav].id){
          albumData[i].isFavorite = true;
        }
      }
    }

    this.state = {
      done: undefined,
      selectedAlbum: albumData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(sectedItem) {
    this.setState(prevState => {
        const updatedAlbum = prevState.selectedAlbum.map(item => {
            if (item.id === sectedItem.id) {               
              item.isFavorite = !item.isFavorite;  

              if (item.isFavorite){
                store.dispatch(addFavItem(item));
              } else {
                store.dispatch(removeFavItem(item));
              }
            }
            
            return item
        })
        store.dispatch(selectAlbum(updatedAlbum));
         return {
           selectedAlbum: updatedAlbum
         }
     });
  }    

  render(){
    const { selectedAlbum } = this.state;
    const albumItems = selectedAlbum.map(item => <GalleryItem key={item.id} item={item} handleChange={this.handleChange} isFavGallery={false} caption={"Favorite"} />);

    return (        
      <div>
          <div className="header">
            <h1>
              Album {selectedAlbum.length?selectedAlbum[0].albumId:''}
            </h1>
            <hr/>
            <div className="darkButton" onClick={() => this.props.history.push('/fav')}>Favorites</div>
          </div>
          <div className="gridGallery">
            {albumItems}
          </div>           
      </div>    
    )
  }
}

export default AlbumGallery;