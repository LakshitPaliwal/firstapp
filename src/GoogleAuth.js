import React,{Component} from 'react';
import './App.css';

import Button from '@material-ui/core/Button';
import {AiOutlineGoogle}  from "react-icons/ai";

import {connect} from 'react-redux';
import { signIn, signOut} from './components/actions' ;

class GoogleAuth extends Component{


    componentDidMount(){
         window.gapi.load('client:auth2', ()=>{
             window.gapi.client.init({
                 clientId:'701623504372-jg1gclr8fks4tl25k8gg5kjv80fb37am.apps.googleusercontent.com',
                 scope:'email'
             }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();

                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
             });
         });
    }

    onAuthChange=(isSignedIn)=>{
        if(isSignedIn) {
            this.props.signIn();
        } else {
            this.props.signOut();
        }
    };

    onSignInClick =()=>{
        this.auth.signIn();
    };

    onSignOutClick =()=>{
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null){
            // return<div>I don't know If we are Signed in </div>;
            return null;
        } else if(this.props.isSignedIn) {
            return(
            <div>
                <Button
                    onClick={this.onSignOutClick}
                    variant="contained"
                    color="primary"
                    startIcon={<AiOutlineGoogle />}
                >
                  <b>Sign Out</b>
                </Button>
          </div>
            )
        } else {
            return(
            <div>
                <Button
                    onClick={this.onSignInClick}
                    variant="contained"
                    color="secondary"
                    startIcon={<AiOutlineGoogle />}
                >
                  <b>Sign In with Google</b>
                </Button>
            </div>
            )
        }
    }


render(){
    return(
        <div>
            {this.renderAuthButton()}
        </div>
    )
}
}

const mapStateToProps  = state => {
    return { isSignedIn: state.auth.isSignedIn };
};


export default connect(
    mapStateToProps, 
    { signIn,signOut }
    ) (GoogleAuth);