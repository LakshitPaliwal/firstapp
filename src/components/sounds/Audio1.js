import React from "react";

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
      main: "#43a047"
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

  const playSound = audioFile => {
    audioFile.play();
  };

  const [state, setState] = React.useState({
    checked: true
  });

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
          
        <Typography variant="h5">
             Click the Heart Button <br></br> Give like and Keep support to <br></br>Mr. Lakshit Paliwal 
            </Typography>
            <Button
            variant="contained"
            color="primary"
            onClick={() => playSound(likeAudio)}
          >
            
            <Favorite />
          </Button>
        </div>

        <div className={classes.container}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => playSound(trashAudio)}
          >
            <DeleteForever />
          </Button>
        </div>

        <div className={classes.container}>
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
        </div>

        <div className={classes.container}>
          <Switch checked={state.checked} onChange={toggleSwitch("checked")} />
        </div>

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