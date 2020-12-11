import React from 'react';

function UserItem(props) {
    // console.log(props);
    const {name, email, salary, img, alt} = props;

    return(
        <div className="userItem"> 
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{salary}</p>
            <img src={img} width="100px;" alt={alt}/>
        </div>
    )   
}

export default UserItem;