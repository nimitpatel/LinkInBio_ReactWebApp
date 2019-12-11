import React from 'react';
import LinkList from './LinkList';
import './Links.css'
import AddLink from './AddLink';

class Links extends React.Component {
    render() {
        //console.log(this.props.links);
        const links = this.props.links.map(link => {
            //console.log(link);
            return (
                <LinkList 
                    key={link._id} 
                    link={link} 
                    delete={this.props.delete} 
                    onLinkSelect={this.props.onLinkSelect} 
                />
            )
        })
        return (
            <>
                <AddLink />
                <div className="links">{links}</div>
            </>
        );
    }
}

export default Links;
