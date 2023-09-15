import React, { useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";

function Signup() {
  let navigate = useNavigate();
  const [attributes, setAttributes] = useState({first:"",last:"",email:"",user:"",password:""});

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const response = await fetch(process.env.REACT_APP_SERVER+"/api/user", 
      {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body:JSON.stringify({first:attributes.first, last:attributes.last, email:attributes.email, user:attributes.user, password:attributes.password})
      }
    );
    const json = await response.json();
    console.log(json);
      if(json.errors){
        alert("Enter Valid Information");
      }
      if(!json.errors){
        navigate("/");
      }
  } 

  const onChange=(e)=>{
    setAttributes({...attributes,[e.target.name]:e.target.value});
  }
  return (
    <>
      <div className={`${styles.container}`}>
        <img
          src="https://source.unsplash.com/random/1920x1080?sig=1"
          alt="present"
          className={`${styles.poster}`}
        />
        <div className={`${styles.formSpace}`}>
          <h1>
            <BsFillEyeFill></BsFillEyeFill>
          </h1>
          <h1>Join EyeLid</h1>
          <p style={{ fontFamily: "Inter"}}>
            Already have an account? <Link to="/login" style={{color:"black"}}>Login</Link>
          </p>
          <form className={`${styles.formed}`} onSubmit={handleSubmit}>
            <div className={`${styles.inliner}`}>
              <div>
                <p className={`${styles.para}`}>First Name</p>
                <input
                  className={`${styles.inputHalf}`}
                  type="text"
                  name="first"
                  value={attributes.first}
                  onChange={onChange}
                />
              </div>
              <div>
                <p className={`${styles.para}`}>Last Name</p>
                <input
                  className={`${styles.inputHalf}`}
                  type="text"
                  name="last"
                  value={attributes.last}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className={`${styles.particular}`}>
              <p className={`${styles.parsed}`}>Email</p>
              <input
                className={`${styles.inputSpace}`}
                type="text"
                name="email"
                value={attributes.email}
                onChange={onChange}
              />
            </div>
            <div className={`${styles.particular}`}>
              <p className={`${styles.parsed}`}>Username</p>
              <input
                className={`${styles.inputSpace}`}
                type="text"
                name="user"
                value={attributes.user}
                onChange={onChange}
              />
            </div>
            <div className={`${styles.particular}`}>
              <p className={`${styles.parsed}`}>Password</p>
              <input
                className={`${styles.inputSpace}`}
                type="password"
                name="password"
                value={attributes.password}
                onChange={onChange}
              />
            </div>
            <div className={`${styles.button}`}>
              <input type="submit" value="Join" className={`${styles.but}`}/>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
