import React from 'react';
import { Badge } from 'reactstrap';

const UserList =(props)=> {

  return (
    <div className="text-center"> {
      props.onlineUser.map((user)=>(
          <div key={user.id}>
            <Badge color="dark" style= {{margin: '5px', minWidth: '150px'}}> 
              <img src={`https://api.adorable.io/avatars/80/${user.username}.png`} alt="profileImage"  className= "mr-2 rounded-circle"/>
              <h6>{user.username} </h6>
            </Badge>
          </div>
    ))}
    </div>
  )
}

export default UserList