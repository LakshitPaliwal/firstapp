import React,{Component} from 'react';


class GoogleAuth extends Component{
    state = { isSignedIn:null };

    
    componentDidMount(){
         window.gapi.load('client:auth2', ()=>{
             window.gapi.client.init({
                 clientId:'701623504372-jg1gclr8fks4tl25k8gg5kjv80fb37am.apps.googleusercontent.com',
                 scope:'email'
             }).then(()=>{
                 this.auth = window.gapi.auth2.getAuthInstance();
                 this.setState({isSignedIn: this.auth.isSignedIn.get()    })
             })
         });
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null){
            return<div>I don't know If we are Signed in </div>;
        } else if(this.state.isSignedIn) {
            return<div>I am Signed in</div>;
        } else {
            return<div>I am not Signed in</div>;
        }
    }
    render(){
    return(
        <div>
            {this.renderAuthButton()}
        </div>
    )
}
};       
export default GoogleAuth;