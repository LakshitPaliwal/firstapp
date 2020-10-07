import React from 'react';
import {Field, reduxForm} from 'redux-form';


class StreamCreate extends React.Component{
 renderInput(){
    return <input/>
 }

    render(){
        return(
        <div>
            <h1>StreamCreate</h1>
            <form>
                <Field name="title" component={this.renderInput} />
                <Field name="desciption" component={this.renderInput} />
            </form>
        </div>
    );
}};

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);

