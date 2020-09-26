import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class MainImages extends React.Component{
    state={ images:[] };   


    onSearchSubmit = async term => {
  const Access_Key = "dIrPZmriuKAXHO0fWEAa4jn0_nVdPmajw8-9aX8kOdM";

    const response = await unsplash.get(
      `https://api.unsplash.com/search/photos?page=1&per_page=30&query=${term}&client_id=${Access_Key}`
    );

    this.setState({ images: response.data.results});
    }

render(){
return (
        <div>
            <SearchBar  onSubmit={this.onSearchSubmit}/>
            Found Only : {this.state.images.length} Images
            <ImageList images={this.state.images} />
        </div>
    );
}
}
export default MainImages;