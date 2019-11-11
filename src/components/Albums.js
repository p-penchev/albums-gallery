import React, {Component} from 'react';
import AlbumItem from './AlbumItem'
import '../App.css';
import store from "../js/store/index.js";
import { selectAlbum } from "../js/actions/index.js";

class Albums extends Component {
  constructor() {
    super();
    this.state = {
      categoryTitle:'Albums',
      albums:[],
      albumsId:[]
    }
    
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
      fetch("https://jsonplaceholder.typicode.com/photos")
          .then(response => response.json())
          .then(response => {
              //const albumsData = response;
              this.setState({ albums: response });
              const uniqueIds = Array.from(new Set(response.map(item => item.albumId)));
              this.setState({ albumsId: uniqueIds });
          });
  }

 handleClick(item) {
  const albumData =  this.state.albums.filter(i=>i.albumId === item);

  store.dispatch(selectAlbum(albumData));
  this.props.history.push({pathname: '/album'});
 }   

  render(){
    const albumsItems = this.state.albumsId.map(item => <AlbumItem key={item} item={item} handleClick={this.handleClick} />);

    return (        
      <div>
          <div className="header">
            <h1>
              {this.state.categoryTitle}
            </h1>
            <hr/>
            <div className="darkButton" onClick={() => this.props.history.push('/fav')}>Favorites</div>
          </div>
          <div className="grid">
            {albumsItems}
          </div>  
      </div>      
    )
  }
}

export default Albums;