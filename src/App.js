import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Albums from './components/Albums';
import AlbumGallery from './components/AlbumGallery';
import FavoriteGallery from './components/FavoriteGallery';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Albums} exact />
            <Route path="/album" component={AlbumGallery} />
            <Route path="/fav" component={FavoriteGallery} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}


export default App;
