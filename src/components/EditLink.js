import React from 'react';
import Axios from 'axios';
import './EditLink.css';

class EditLink extends React.Component {
    state = {
        title: this.props.selectedLink.title,
        url: this.props.selectedLink.url
    }
    
    onTitleChange = e => {
        this.setState({
            title: e.target.value
        });
    }

    onUrlChange = e => {
        this.setState({
            url: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const link = {
          title: this.state.title,
          url: this.state.url 
        }
    
        //console.log(link);

        Axios.patch('http://localhost:3001/links/'+this.props.selectedLink._id, link)
        .then(res => console.log(res.data));

        window.location = '/mylinks';
    }

    render() {
        return(  
            <div className="form"> 
                <form onSubmit={this.handleSubmit}>
                    <Input label="Title" onChange={this.onTitleChange } value={this.state.title} />
                    <Input label="Url" onChange={this.onUrlChange } value={this.state.url} />
                    <Button value="Update" />
                    <Button value="Back" />
                </form> 
            </div>
        )
    }
}

export const Input = props => {
    return(
        <div className="form-group">
            <label>{props.label}</label>
            <input type="text" onChange={props.onChange} value={props.value} />
        </div>    
    );
}

export const Button = props => {
    return(
        <div className="button-group">
            <button type="submit" >{props.value}</button> 
        </div>  
    );
}

export default EditLink;