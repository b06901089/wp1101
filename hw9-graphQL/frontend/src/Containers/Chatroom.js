import { Button, Input, Tag, Tabs } from 'antd'
import AppTitle from '../Components/Title.js'
import AppMessages from '../Components/Message.js'
import { useEffect } from "react";
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import { CREATE_CHATBOX_MUTATION, CREATE_MESSAGE_MUTATION } from  '../graphql'

const Wrapper = styled(Tabs)`
	width: 100%;
	height: 300px;
	background: #eeeeee52; 
	border-radius: 10px;
	margin: 20px;
	padding: 20px;
	display: flex;
`;

const ChatRoom = ({messages, sendMessage, clearMessages, body, setBody, bodyRef, displayStatus, me, signedIn, LOCALSTORAGE_KEY}) => {

	const [startChat] = useMutation(CREATE_CHATBOX_MUTATION)
	const [sendMessageGraphQL] = useMutation(CREATE_MESSAGE_MUTATION)

    useEffect(() => {
        if (signedIn) {
            localStorage.setItem(LOCALSTORAGE_KEY, me);
        }
    }, [signedIn, me]);

	return (
		<>
			<AppTitle>
				<h1>{`${me}'s Chat Room`}</h1>
				<Button type="primary" danger onClick={clearMessages}>
					Clear
				</Button>
			</AppTitle>
			{/* <>
				<Wrapper>

				</Wrapper>
			</> */}
			<AppMessages>
				{messages.length === 0 ? (
					<p style={{ color: '#ccc' }}>No messages...</p>
				) : (
					messages.map(({ name, body }, i) => (
						<p className="App-message" key={i}>
							<Tag color='blue'>{name}</Tag> {body}
						</p>
					))
				)}
			</AppMessages>
			{/* <Input
				placeholder="Username"
				value={username}
				onChange={e => setUsername(e.target.value)}
				style={{ marginBottom: 10 }}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						bodyRef.current.focus()
					}
				}}
			></Input> */}
			<Input.Search
				ref={bodyRef}
				value={body}
				onChange={e =>setBody(e.target.value)}
				enterButton="Send"
				placeholder="Type a message here..."
				onSearch={(msg) =>{
					if (!msg || !me) {
						displayStatus({
							type: 'error',
                            msg: 'Please enter a message body.'
	  						// msg: 'Please enter a username and a message body.'
						})
  						return
					}
					sendMessage({ name: me, body: msg })
					setBody('')
				}}
			></Input.Search>
		</>
	)
}

export default ChatRoom;
