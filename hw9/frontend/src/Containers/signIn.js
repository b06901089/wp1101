import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { message } from 'antd'
import AppTitle from '../Components/Title.js'

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

const SignIn = ({ me, setMe, setSignedIn }) => {
    
    return (
        <>
            <AppTitle>
                <h1>My Chat Room</h1>
            </AppTitle>
            <Input.Search
                prefix={<UserOutlined/>}
                value={me}
                enterButton="Sign In"
                onChange={(e) => {setMe(e.target.value)}}
                placeholder="Please Enter Your Name"
                size="large"
                style={{ width: 300, margin: 50 }}
                onSearch={(name) => {
                    if(!name) {
                        displayStatus({
                            type: "error",
                            msg: "Missing user name",
                        });
                    }
                    else setSignedIn(true)
                }}
            />
        </>
    )
}

export default SignIn;