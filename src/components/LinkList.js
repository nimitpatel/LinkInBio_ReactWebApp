import React from 'react';
import { Link } from 'react-router-dom';
import './LinkList.css';

const LinkList = (props) => {
    const {
        title,
        //url
    } = props.link;
    //const href = `http://${url}`
    return (
        <div className="container">
            <div className="text">
                <h2 className="link cursor">{title.toUpperCase()}</h2>
            </div>
            <div className="action">
                <Link className="link" to='/edit' onClick={() => props.onLinkSelect(props.link)}><i class="far fa-edit"></i></Link>
                <Link className="link" to='#' onClick={() => {props.delete(props.link._id)}}><i class="far fa-trash-alt"></i></Link>
            </div>
        </div>
    )
}

export default LinkList;