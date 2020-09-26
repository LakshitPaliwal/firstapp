import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
      primary:   {main:'#cddc40',},
      secondary: {main:'#cddc40'}
    },
});

 class SearchBar extends  React.Component{
  state={term: '' };
  
  onFormSubmit = event =>{
    event.preventDefault();
    //this event is for after pressing Enter button , it prevent to refresh the whole page  and see the results

    this.props.onSubmit(this.state.term);
  };


     render(){
         return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <MuiThemeProvider theme={theme}>  
            <AppBar  position="static">
              <Toolbar>
                <Typography variant="h6" Wrap>
                    Search Here Any Thing 
                      <ArrowForwardIcon/>
                </Typography>  
                <SearchIcon /> 
                  {/* <TextField id="standard-search" label="Search field" type="search" />  */}
                <InputBase 
                    value={this.state.term}
                    onChange={ y=>this.setState({term: y.target.value})}  
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
              </Toolbar>
            </AppBar>
          </MuiThemeProvider>  
        </form>
      </div>
         )
     }
 }

// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import { fade, makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//     display: 'none',
//     [theme.breakpoints.up('sm')]: {
//       display: 'block',
//     },
//   },
//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: fade(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(1),
//       width: 'auto',
//     },
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputRoot: {
//     color: 'inherit',
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: '70ch',
//       '&:focus': {
//         width: '90ch',
//       },
//     },
//   },
// }));

// class SearchBar extends React.Component {
//   render(){
 
//   return (
//     <div>
//       
//          
//           <div >
//             <div >
//             </div>
//             
//           </div>
//       </div>
//   );
// }
// }



export default SearchBar ;