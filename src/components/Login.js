import React from 'react';
import './Login.css';
import { Link, useParams } from "react-router-dom";


function Login(props) {
  const { title } = useParams();
  let newTitle = '';

  if(title === ':signup') {
    newTitle = 'Sign Up'
  }
  else{
    newTitle = 'Login'
  }
  let goto = '';
  if(title === ':signup') {
    goto = 'login'
  }
  else{
    goto = 'signup'
  }

  return (
    <>
      <section>
        <div className="box">
            <div className="square" style={{"--i": "0"}}></div>
            <div className="square" style={{"--i": "1"}}></div>
            <div className="square" style={{"--i": "2"}}></div>
            <div className="square" style={{"--i": "3"}}></div>
            <div className="square" style={{"--i": "4"}}></div>
            <div className="container">
                <div className="form">
                    <h2>{newTitle}</h2>
                    <form action=""
                    onSubmit={(event) => {
                      event.preventDefault();
                      props.newAlert(`Success: ${newTitle} successfull`, "success")
                    }}
                    onError={() => {props.newAlert(`Fail: ${newTitle} unsuccessfull`, "fail")}}
                    >
                        <div className="inputBox">
                            <input type="email" name='email' id="email" placeholder="Email" autoComplete='true' required/>
                        </div>
                        <div className="inputBox">
                            <input type="password" name='pwd' id='pwd' placeholder="Password" autoComplete='true' required/>
                        </div>
                        <div className="inputBox">
                            <input type="submit" value={newTitle} />
                        </div>
                        <p className="forget"><a href="#"> Forgot Password?</a></p>
                        <p className="forget">
                          {title === ':signup' ? "Already have an account?" : "Don't have an account?" } &nbsp;
                          <Link to={`/login/:${goto}`}>
                            {title === ':signup' ? 'Login' : 'Sign Up'}
                          </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Login