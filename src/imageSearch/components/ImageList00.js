import React from 'react';
import '../imageList.css';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: '100%',
      height: '100%',
    },
  }));
  
const ImageList = (props) =>{
    const classes = useStyles();

    // const images = props.images.map(image => {
    //     return <img alt={image.desciption} key={image.id} src={image.urls.regular} />;
    // });
                            //or (it is destructuring )
    const images = props.images.map(({description,alt_description,id,urls}) => {
        return (
    <GridListTile  key={id}>
        <img alt={description} src={urls.regular} />
            <GridListTileBar
                title={alt_description}
            >
            </GridListTileBar>
    </GridListTile>
        )
    });
return(


<div className={classes.root}>
      <GridList  className={classes.gridList} >
        {images}
      </GridList>
</div>
);  
        
};

export default ImageList;