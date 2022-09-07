import React,{ useState,useContext } from 'react';
import {firebaseContext} from '../../store/Context'
import Logo from '../../olx-logo.png';
import './Signup.css';
import { useHistory } from 'react-router-dom';

export default function Signup() {
  const history = useHistory()
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [password,setPassword]=useState('')
  const {firebase} = useContext(firebaseContext)
  const handleSubmit = (e)=>{
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:name}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username : name,
          phone : phone 
        }).then(()=>{
          history.push('/login')
        })
      })
    })
  }
  return (

    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt=""></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            onChange={(e)=>{
              setName(e.target.value)
            }}
            className="input"
            type="text"
            id="fname"
            name="name"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
             onChange={(e)=>{
              setEmail(e.target.value)
            }}
            className="input"
            type="email"
            id="fname"
            name="email"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
             onChange={(e)=>{
              setPhone(e.target.value)
            }}
            className="input"
            type="number"
            id="lname"
            name="phone"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
             onChange={(e)=>{
              setPassword(e.target.value)
            }}
            className="input"
            type="password"
            id="lname"
            name="password"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
