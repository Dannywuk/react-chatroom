import React from 'react';
import { Col } from 'reactstrap';
import Form from '../components/Form'
import Chat from '../components/Chat';
import Socket from '../utils/socket'

class ChatBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: "",
      message: "",
      username:"",
      conversations: []
    };

    Socket.emit('NEW_USER')

    Socket.on('GET_CURRENT_USER', user => {
      console.log(user)
      this.setState({
        username: user.username
      })
    }) 

    Socket.on('RECEIVE_BROADCAST', data => {
      console.log(data)
      let incoming =[...this.state.conversations]
      incoming.push(data)
      this.setState ({
        conversations: incoming
      })
    })

  }

  handleTextInput= (event)=>{
    let value= event.target.value
    this.setState ({
      text: value
    })
  }

  sendMessage= (event)=>{
    event.preventDefault()
    const {text,  username}= this.state

    if (text.length===500){
      alert('Max characters allowed per message is 500!')
    }
    else if (text.length===0){
      alert('Message cannot be blank!')
    }
    else {
      const newMessage = {
        username:username, 
        message: text, 
        timestamp: Date.now()
      }
      Socket.emit('BROADCAST_MESSAGE', newMessage)
      this.setState ({
        text: ""
      })
    }
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }


  render() {

    const {text, conversations, username}= this.state

    
    return(
      <Col md='9' className="p-0" style={{position:'relative'}}>
        <div className="bg-white border-left border-muted" style={{ height:'40px'}}>
          <div className="chatBox bg-muted" style={{ overflow: 'none', height: '100vh', overflowY:'scroll', paddingBottom: '75px'}}>
            
            <Chat conversations={conversations} currentUser={username}/>   

            <div className="fixed-bottom">
              
              <Form sendMessage={this.sendMessage} handleTextInput={this.handleTextInput} text={text}/>
                
            </div>

            <div style={{ float:"left", clear: "both" }}
                 ref={(el) => { this.messagesEnd = el; }}>
            </div>

          </div>
        </div>
      </Col>
    )
  }
}

export default ChatBox
