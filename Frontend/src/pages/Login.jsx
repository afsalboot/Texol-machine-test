import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Button, InputGroup, InputNum, InputPass, InputSelectBox, Label, LoginBox, LoginContainer, RegisterContainer, Select, Title } from '../styles/LoginStyles'
import { Link, useNavigate } from 'react-router'
import { LoginUser } from '../api'
import { useDispatch, useSelector } from 'react-redux'

function Login() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData,setFormData] = useState({
    mobile:'',
    password:''
  })

  const user = useSelector((state)=>state.userData.userInfo)

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  function handleChange (event) {
    const {name,value} = event.target;
    setFormData({...formData,[name]: value})
  }

  async function handleSubmit () {
    try {
      const userLogged = await LoginUser(formData, dispatch)
      if(userLogged) {
        navigate('/question', { replace: true })
      }
    } catch (err) {
      console.log(err.message)
    }    
  }
  
  return (
    <>
      <Header profile/>
      <LoginContainer>
        <LoginBox>
            <Title><span>Login</span></Title>
            <InputGroup>
                <Label>Mobile Number</Label>
                <InputSelectBox>
                <Select>
                <option value="+91">🇮🇳 +91</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                </Select>
                <InputNum name='mobile' type="text" placeholder="Enter your phone number" onChange={handleChange} />
                </InputSelectBox>
            </InputGroup>
            <InputGroup>
                <Label>Password</Label>
                <InputPass name='password' type="password" placeholder="Enter Password" onChange={handleChange} />
            </InputGroup>
            <Button onClick={handleSubmit}>Login</Button>
            <RegisterContainer>
            Don’t have an account? <Link to={'/signup'}><span>Register Now</span></Link>
            </RegisterContainer>
        </LoginBox>
      </LoginContainer>
    </>
  )
}

export default Login
