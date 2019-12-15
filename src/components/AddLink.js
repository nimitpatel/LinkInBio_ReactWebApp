import React from 'react';
import Axios from 'axios';
import { Input, Button } from './EditLink';
import './EditLink.css';

export class AddLink extends React.Component {
    state = {
        title: '',
        url: ''
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
    
        console.log(link);

        Axios.post('http://localhost:3001/links/', link)
        .then(res => console.log(res.data));

        window.location = '/mylinks';
    }
    render() {
        return ( 
            <div className="form"> 
                <form onSubmit={this.handleSubmit}>
                    <Input label="Title" onChange={this.onTitleChange } value={this.state.title} />
                    <Input label="Url" onChange={this.onUrlChange } value={this.state.url} />
                    <Button  value="Add" />
                    <a className="a" href="/" >Back</a>
                </form> 
            </div> 
        )
    }
}

export default AddLink;
