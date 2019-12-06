import React from 'react';

const List = ({list}) => {
    const {
        title,
        url
    } = list;
    const href = `http://${url}`
    return (
        <div>
            <a href={href}>{title}</a>
        </div>
    )
}

export default List;