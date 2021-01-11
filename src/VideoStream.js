import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import videoData from './videoData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
   
    backgroundColor: "#9b5ad0",
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
 
}));


const VideoStream=()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
       
        {videoData.map((tilevideo) => (
    
            <GridListTile >
                <iframe src={tilevideo.vid} key={tilevideo.id} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe> 
            </GridListTile>
    
        ))}
      </GridList>
    </div>
  );
}
export default VideoStream;