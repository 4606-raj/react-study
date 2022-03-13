import { useState } from "react";
import axios from 'axios';
import ErrorMessage from "./components/ErrorMessage";

function Register() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();


  const submitRegister = () => {
    axios.post('http://127.0.0.1:3001/api/register', {name, email, password})
      .then((response) => {
        console.log(response);
        setName('')
        setEmail('')
        setPassword('')
      })
  }
  
  return (
    <div>
          { error? <ErrorMessage error={error} />: null }

      <div>
        <div className="heading">
          <h1>Register</h1>
        </div>
        <div>
          <form className="login-form">
            <div className="input-group">
              <label>Name </label>
              <input type="email" className="form-input" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="input-group">
              <label>Email </label>
              <input type="email" className="form-input" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-group">
              <label>Password </label>
              <input type="password" className="form-input" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="input-group">
              <input type="button" className="form-submit" value="Register" onClick={submitRegister} />
            </div>
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default Register;
