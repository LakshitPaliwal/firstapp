import React,{Component} from 'react';

      
const HeaderImage = (props)=> {
  // description:
  //   "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  // image: 'https://source.unsplash.com/random',
  // title: 'Title of a longer featured blog post',
  // linkText: 'Continue reading…',
  return(
  <div>
    {props.HeaderImage}
  </div>
  )
};

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

class Index extends Component{
    render(){
    return(
    <div>
          <HeaderImage HeaderImage="nice boys"/>
    </div>
    );
  }
}
export default Index;