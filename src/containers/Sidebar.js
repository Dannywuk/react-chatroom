import React from 'react';
import { Col, Badge } from 'reactstrap';
import Socket from '../utils/socket';
import UserList from '../components/UserList'

class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userList: [],
      currentUser: ''
    }

    Socket.on('GET_CURRENT_USER', user => {
      this.setState({
        currentUser: user
      })
    })

    Socket.on('UPDATE_USER_LIST', users => {
      this.setState({
        userList: users
      })
    })

  }

  render(){

    const {userList, currentUser}= this.state

    const onlineUser= userList.filter(function(user){
      return user.id !== currentUser.id
    })
    
   return(
      <Col md='3' className="p-0">
        <div className= "sideBar" style={{height: '100vh', overflow: 'hidden', overflowY: 'scroll'}}>
          
            <Badge color='info' className='py-3 w-100'>
              <img src={`https://api.adorable.io/avatars/100/${currentUser.username}.png`} alt="profileImage"  className= "mr-2 rounded-circle"/>
              <h5 className='pt-2'>{currentUser.username} </h5>
            </Badge>

            <div className="sidebar-sticky bg-dark">
              <div className="sidebar-title border border-muted text-center" style={{ height: 'auto', background:'#F9F7F3'}}>
                
                <h2 className="pt-3 text-center" style={{marginBottom: '20px', fontFamily: "Lobster"}}>
                  ChatRoom
                </h2>
                
              </div>
            </div>

            <UserList onlineUser= {onlineUser} currentUser= {currentUser}/>

        </div>
      </Col>
    )
  }
}

export default Sidebar
