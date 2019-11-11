import React, {Component} from 'react';
import GalleryItem from './GalleryItem';
import '../App.css';
import store from "../js/store/index.js";
import { removeFavItem } from "../js/actions/index.js";

class FavoriteGallery extends Component {
  constructor() {
    super();
    this.state = {
      favoruteAlbum: store.getState().favorite
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(item) {
    this.setState(prevState => {
      store.dispatch(removeFavItem(item));

      return {
        favoruteAlbum: store.getState().favorite
      }
     });
  }    

  render(){
    const { favoruteAlbum } = this.state;
    const albumItems = favoruteAlbum.map(item => <GalleryItem key={item.id} item={item} handleChange={this.handleChange} isFavGallery={true} caption={"Remove"} />);

    return (        
      <div>
          <div className="header">
            <h1>
            Favorites
            </h1>
            <hr/>
          </div>
          <div className="gridGallery">
            {albumItems}
          </div>  
      </div>    
    )
  }
}

export default FavoriteGallery;