import React from 'react';
import List from './List';

class Links extends React.Component {
    render() {
        //console.log(this.props.links);
        const links = this.props.links.map(link => {
            //console.log(link);
            return (
                <List key={link._id} list={link} />
            )
        })
        return (
            <h1>{links}</h1>
        );
    }
}

export default Links;
