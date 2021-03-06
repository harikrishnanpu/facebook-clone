import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import { auth, provider } from "./Firebase"
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
    const [state,dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        }).catch((error) => {
            alert(error.message)
        })
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/120px-Facebook_f_logo_%282019%29.svg.png"
                    alt="" />
                <h2>Facebook</h2>
            </div>
            <Button type="submit" onClick={signIn} >Sign In</Button>
        </div>
    )
}

export default Login
