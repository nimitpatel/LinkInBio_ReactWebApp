import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Axios from 'axios'; 
import Links from './Links';
import Tree from './Tree';
import Header from './Header';
import EditLink from './EditLink';

class App extends React.Component {

  state = {
    links: [],
    selectedLink: null
  }

  getData = () => {
    Axios.get('http://localhost:3001/links')
      .then(res => {
        //console.log(res.data);
        this.setState({
          links: res.data
        });
        //console.log(this.state.links);
      });
  }

  delete = (id) => {
    Axios.delete('http://localhost:3001/links/' + id)
      .then(res => console.log(res.data))

    this.setState({
      links: this.state.links.filter(element => element._id !== id)
    })
  }

  componentDidMount() {
    this.getData();
  }

  onLinkSelect = async link => {
    //console.log(link);
    this.setState({
      selectedLink: link
    })
    //console.log(this.state.selectedLink);
  }

  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header />
          <Route exact path='/' render={(props) => (
            <Tree {...props} links={this.state.links} />
          )}
          />
          <Route path='/mylinks' render={(props) => (
            <Links {...props} 
              links={this.state.links} 
              delete={this.delete} 
              onLinkSelect={this.onLinkSelect} />
          )}
          />
          <Route path='/edit' render={(props) => (
            <EditLink {...props} selectedLink={this.state.selectedLink} />
          )}
          />
        </div> 
      </Router>
    )
  }
}

export default App;