import React, {useState} from 'react'
import styles from "./Login.module.css";
import { BsFillEyeFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  let navigate = useNavigate();
  const [attributes, setAttributes] = useState({email:"", password:""});

  const handleSubmit = async(e)=>{
    e.preventDefault();

    const response = await fetch(process.env.REACT_APP_SERVER+"/api/user/login", {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body:JSON.stringify({email:attributes.email, password:attributes.password})
    });
    const json = await response.json();
    if(!json.success){
      alert("Try using another credentials");
    } 
    if(json.success){
      localStorage.setItem("userEmail", attributes.email);
      localStorage.setItem("authToken", json.authToken);
      navigate("/");
    }
  }

  const handleChange = (e)=>{
    setAttributes({...attributes,[e.target.name]: e.target.value});
  }
  return (
    <>
      <div className={`${styles.formSpace}`}>
          <h1>
            <BsFillEyeFill></BsFillEyeFill>
          </h1>
          <h1>Login</h1>
          <p style={{ fontFamily: "Inter"}}>
            Welcome Back
          </p>
          <form className={`${styles.formed}`} onSubmit={handleSubmit}>
            <div className={`${styles.particular}`}>
              <p className={`${styles.parsed}`}>Email</p>
              <input
                className={`${styles.inputSpace}`}
                type="text"
                name="email"
                value={attributes.email}
                onChange={handleChange}
              />
            </div>
            <div className={`${styles.particular}`}>
              <p className={`${styles.parsed}`}>Password</p>
              <input
                className={`${styles.inputSpace}`}
                type="text"
                name="password"
                value={attributes.password}
                onChange={handleChange}
              />
            </div>
            <div className={`${styles.button}`}>
              <input type="submit" value="Login" className={`${styles.but}`}/>
            </div>
          </form>
          <div>
            <p style={{ fontFamily: "Inter"}}>Don't have an account? <Link to="/signup" style={{color: "black"}}>Join EyeLid</Link></p>
          </div>
        </div>
    </>
  )
}

export default Login