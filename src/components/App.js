import React from 'react';
import Axios from 'axios';
import Links from './Links';

class App extends React.Component {

  state = {
    links: []
  }

  getData = () => {
    Axios.get('http://localhost:3000/data')
      .then( res => {
        //console.log(res.data);
        this.setState({
          links: res.data
        });
        //console.log(this.state.links);
      });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        Hello!!
        <Links links={this.state.links} />
      </div>
    )
  }
}


export default App;