import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import Slider from "@material-ui/core/Slider";

import {
  makeStyles,
  createStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";

import Camera from "@material-ui/icons/Camera";
import Favorite from "@material-ui/icons/Favorite";
import DeleteForever from "@material-ui/icons/DeleteForever";

import like from "./state-change_confirm-up.wav";
import open from "./ui_lock.wav";
import close from "./ui_unlock.wav";
import camera from "./ui_camera-shutter.wav";
import trash from "./navigation_transition-right.wav";
import slide from "./navigation_hover-tap.wav";
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#43a048"
    },
    secondary: {
      main: "#ff5722"
    }
  }
});

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
    container: {
      padding: "20px",
      textAlign: "center"
    }
  })
);

export default function Audio1() {
  const likeAudio = new Audio(like);
  const openAudio = new Audio(open);
  const closeAudio = new Audio(close);
  const cameraAudio = new Audio(camera);
  const trashAudio = new Audio(trash);
  const slideAudio = new Audio(slide);

   function playSound (audioFile) {
    audioFile.play();
  };


  const [state, setState]   = useState({ checked: true });
  
  const [count, setCounter] = useState(0);
  
   function updateCounter () {
        setCounter(count + 1);
    };
  
  function resetCounter () {
        setCounter(count -1);
    };

  const toggleSwitch = name => event => {
    if (event.target.checked) {
      playSound(closeAudio);
    } else {
      playSound(openAudio);
    }
    setState({ ...state, [name]: event.target.checked });
  };

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <div className={classes.container}>
          
        <Typography justifyContent="flex-start" variant="h5">
              Press the Heart Button<br/> 
             When ever you visit this Web App Please hit the Like Button for
               Keep supporting to
              Mr. Lakshit Paliwal <br/><br/>
              <b>You give {count} Like to Lakshit Paliwal</b>
              
            </Typography>
            <Button
            variant="contained"
            color="primary"
            onClick={()=>{ updateCounter();playSound(likeAudio);}}
          ><b>{count}</b>
            <Favorite />
          </Button>
        </div>

        <div className={classes.container}>
        <Typography  justify variant="h5">
            Delete button is for give chance to improve me more.<br/> 
            </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={()=>{ resetCounter();playSound(trashAudio);}}
          >
            <DeleteForever />
          </Button>
        </div>

        {/* <div className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => playSound(cameraAudio)}
          >
            <Camera />
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => playSound(cameraAudio)}
          >
            <Camera />
          </Button>
        </div> */}

        {/* <div className={classes.container}>
          Dark mode is under maintainance
          <Switch checked={state.checked} onChange={toggleSwitch("checked")} />
        </div> */}

        <div className={classes.container}>
          <Slider
            onChangeCommitted={() => playSound(slideAudio)}
            defaultValue={3}
            step={1}
            marks
            min={1}
            max={10}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}



// import React from 'react';


// const Audio1=()=> {
//   let audio = new Audio("http://streaming.tdiradio.com:8000/house.mp3")

//   const start = () => {
//     audio.play()
//   }

//   return (
//     < div >
//       <button onClick={start.play}>Play</button>


//     </div >
//   );
// }

// export default Audio1;

// import React, { Component } from 'react';

// import UIfx from 'uifx';

// const beep = new UIfx({
//   asset:
//     'https://cdn.glitch.com/35252802-b02a-4d63-9536-c72e10d1998c%2Fbeep.mp3?1558053587340',
// })
//  class Audio1 extends Component {
//   state = {
//     count: 0,
//   }
//   render() {
//     return (
//       <div style={{padding: 16}}>
//         <div>Pressed {this.state.count} times</div>
//         <button
//           onClick={() => {
//             beep.play()
//             this.setState({
//               count: this.state.count + 1,
//             })
//           }}
//         >
//           Signup
//         </button>
//       </div>
//     )
//   }  
// }

// export default Audio1;