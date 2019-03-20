import React from 'react';
import moment from 'moment';
import {Card, CardTitle, CardText} from 'reactstrap';

const Chat=(props)=> {

	return (
		<div > {
			props.conversations.map((message, index)=> (
				<div key={index}>
					<div style={{float: props.currentUser===message.username ? 'right':'left' }} >
						<Card body inverse style={{ backgroundColor: '#3F1053', borderColor: 'key={index}#333', width: '450px', margin: '10px'}}>
					        <CardTitle> 
						        <img src={`https://api.adorable.io/avatars/50/${message.username}.png`} alt="profileImage"  className= "mr-2 rounded-circle"/>
						        <span>{message.username} </span>
					        </CardTitle>
					        <CardText>{message.message}</CardText>
					        <CardText> <small>{moment(message.timestamp).format('MMMM Do YYYY, h:mm a')} </small></CardText>
				      	</Card>
					</div>
					<div className="clearfix"></div>
				</div>
			))}
		</div>
	)
}


export default Chat