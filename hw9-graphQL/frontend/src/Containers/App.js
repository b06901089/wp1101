import styled from 'styled-components'
import { message } from 'antd'
import { useEffect, useRef, useState } from 'react'
import useChat from '../Hooks/useChat.js'
import ChatRoom from './Chatroom.js'
import SignIn from './signIn.js'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 500px;
	margin: auto;
`

const LOCALSTORAGE_KEY = "save-me";

function App() {
	const savedMe = localStorage.getItem(LOCALSTORAGE_KEY)
	const { status, messages, sendMessage, clearMessages } = useChat()
	const [username, setUsername] = useState('')
	const [body, setBody] = useState('')	//testBody
	const [me, setMe] = useState(savedMe || '')
	const [signedIn, setSignedIn] = useState(false)
	const bodyRef = useRef(null)

	const displayStatus = (payload) => {
		if (payload.msg) {
			const { type, msg } = payload;
			const content = { content: msg, duration: 0.5 }
			switch (type) {
				case 'success':
					message.success(content);
					break;
				case 'info':
					message.info(content);
					break;
				case 'error':
				default:
					message.error(content);
					break;
			}
		}
	}

	useEffect(() => {displayStatus(status)}, [status])
	
	return (
		<Wrapper>
			{signedIn ? (
				<ChatRoom
					messages={messages}
					sendMessage={sendMessage}
					clearMessages={clearMessages}
					body={body}
					setBody={setBody}
					bodyRef={bodyRef}
					displayStatus={displayStatus}
					me={me}
					signedIn={signedIn}
					LOCALSTORAGE_KEY={LOCALSTORAGE_KEY}
				/>
			) : (
				<SignIn
					me={me}
					setMe={setMe}
					setSignedIn={setSignedIn}
				/>
			)}
		</Wrapper>
	)
}

export default App;
