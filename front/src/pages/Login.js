import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import InputField from './components/InputField';
import SubmitButton from './components/SubmitButton';
// import UserStore from './stores/UserStores';
const defaultValue = { 
    email: '',
    password: '', 
}

function Login (props) {
    const [form, setForm] = useState(defaultValue)
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const history = useHistory()
//   constructor(props) {
//     super(props);
    // this.state = {
    //   username: '',
    //   password: '',
    //   buttonDisabled: false 
    // }
//   }

  function setInputValue(property, val) {
    val = val.trim();
    if (val.length > 120){ //maximum length for username and password
      return;
    }

    setForm({...form, [property]: val})
  }

//   function resetForm() {
//     this.setState({
//       username: '',
//       password: '',
//       buttonDisabled: false
//     })
//   }

  function doLogin() {
    history.push('/')
  }
//   function async doLogin() {
//     if (!this.state.username){
//       return;
//     }
//     if (!this.state.password){
//       return;
//     }
//     this.setState({
//       buttonDisabled: true
//     })

    // try {
    //   let res = await fetch('/login', {
    //     method: 'post',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       username: this.state.username,
    //       password: this.state.password
    //     })
    //   });
//       let result = await res.json();
//       if (result && result.success) {
//         UserStore.isLoggedIn = true;
//         UserStore.username = result.username;
//       }
//       else if (result && result.success === false){
//         this.resetForm();
//         alert(result.msg);
//       }

//     }
//     catch (e){
//       console.log(e);
//       this.resetForm();
//     }

//   }

    return (
      <div className="login">
        login
        <InputField
          type = 'text'
          placeholder = "email"
          value = {form.email ? form.email : ''}
          onChange = { (val) => setInputValue('email', val)}
          />

        <InputField
          type = 'password'
          placeholder = "Password"
          value = {form.password ? form.password : ''}
          onChange = { (val) => setInputValue('password', val)}
          />

        <SubmitButton
          text = 'Login'
          disabled = {buttonDisabled}
           onClick = { () => doLogin() }
          />
      </div>
    );
}


export default Login;