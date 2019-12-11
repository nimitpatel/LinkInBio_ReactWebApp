import React from 'react';
import './Links.css'
import './LinkList.css'

class Tree extends React.Component {
    render() {
        //console.log(this.props.links);
        const links = this.props.links.map(link => {
            //console.log(link);
            return (
                <List key={link._id} list={link} />
            )
        })
        return (
            <div className="links">{links}</div>
        );
    }
}

const List = ({list}) => {
    const {
        title,
        url
    } = list;
    const href = `http://${url}`
    return (
        <div className="container" style={{display: 'flsx', justifyContent: 'center', alignItems: 'center'}}>
            <a className="link" href={href}>{title.toUpperCase()}</a>
        </div>
    )
}

export default Tree;