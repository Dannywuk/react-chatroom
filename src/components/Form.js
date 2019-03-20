import React from 'react';
import Send from '../images/send.png';

const Form=(props)=> {

	return (

		<form onSubmit={props.sendMessage}>
	        <input 
	          className="border border-muted pl-3"
	          style={ {width: '65%', height:'50px', position: 'absolute', bottom: '7px', right: '9%'} }
	          onChange={props.handleTextInput}
	          placeholder="Type a message..."
	          maxLength="500"
	          value= {props.text}
	        />
	        <img src={Send} alt="Send" style={{height:'50px', position: 'absolute', bottom: '8px', right: '3.75%', cursor: 'pointer'}} onClick={props.sendMessage}/>
	    </form>
	)
}

export default Form

