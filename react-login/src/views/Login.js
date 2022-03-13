import { useState } from "react";
import axios from 'axios';
import ErrorMessage from "./components/ErrorMessage";

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const submitLogin = () => {
        axios.post('http://127.0.0.1:3001/api/login', {email, password})
          .then((response) => {
            setName('')
            setEmail('')
          })
          .catch(err => {
            setError(err.response.data.message)
          })
      }
    
    return (
        <div>
            <div className="heading">
            <h1>Welcome</h1>
            { error? <ErrorMessage error={error} />: null }
            
            </div>
            <div>
            <form className="login-form">
                <div className="input-group">
                <label>Email </label>
                <input type="email" className="form-input" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-group">
                <label>Password </label>
                <input type="password" className="form-input" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="input-group">
                <input type="button" className="form-submit" value="Login" onClick={submitLogin} />
                </div>
            </form>
            </div>
        </div>
    )
}