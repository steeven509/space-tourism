import React from 'react';

const TextTop = ({title, number}) => {
    return (
        <div className="text-top">
            <span>{number}</span> 
            <h2 className="title">{title}</h2>
        </div>
    );
};

export default TextTop;