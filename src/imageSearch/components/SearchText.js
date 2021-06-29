import React from 'react';
import SearchBar from './SearchBar';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import AppBar from '@material-ui/core/AppBar';


class SearchText extends Component{
constructor(props){
    super(props);
    this.state=({ loadingText:'qwertt loading......'})
    
    componentDidMount(){
        setTimeout(()=>{
            this.setState({loadingText:'completly loaded'})
        })
    }
}
    onFormSubmit(event){
        event.preventDefault();
        //this event is for after pressing Enter button , it prevent to refresh the whole page  and see the results
    }


    render(){
        return(
            <div>
                <AppBar>
                <form 
                    onSubmit={this.onFormSubmit}
                >
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
                        
                </form>
                </AppBar>
            </div>

        )
    }
 }
 export default SearchText;