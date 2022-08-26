import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
function Login() {
    const navigat=useNavigate()
    const [showsignin, setshowsignin] = useState(false)
    const [message, setmessage] = useState("")
    const Toggle = () => {
        setshowsignin(!showsignin)
    }
    const sinupsubmit=()=>{
        // console.log(2)
        const fname=document.getElementById('fname').value ;
        const lname=document.getElementById('lname').value ;
        const email=document.getElementById('email').value ;
        const password=document.getElementById('password').value ;
        const cpassword=document.getElementById('cpassword').value
       if(fname && lname && email && password && cpassword){
        localStorage.setItem('fname',fname)
        localStorage.setItem('lname',lname)
        localStorage.setItem('email',email)
        localStorage.setItem('password',password)
       }
       setmessage('account created successfuly')
    //    navigat('./Login')
    // console.log(fname,lname,email,password)

    }
    const loginsub=()=>{
        
       let email=document.getElementById('email1').value
       let password1=document.getElementById('password1').value;         
        let mail=localStorage.getItem("email")
        let password=localStorage.getItem("password")
        console.log(mail,email,password,password1)
     if(mail && password ){
        if(email ===mail && password === password1){
            setmessage('Login successfully')
            navigat('/home')
        }else{
          
            setmessage("please fill coreect login password")
            // setshowsignin(true)
        }
     }else{
        // setshowsignin(true)
          setmessage("please creat account")
     }
    }
 
    return (
        <div >
          {
            showsignin ?   <div className='d-flex justify-content-center align-items-center bg-secondary  shadow-sm p-3 mb-5  rounded vh-100 '>
            <div className=' border rounded p-5 bg-white'>
                <div>
                    <h1>Create Account</h1>
                    <div className='d-flex justify-content-between align-items-center '><div>Already Have an account ? </div> <button className='btn btn-outline'onClick={Toggle}> <b className='text-primary text-decoration-underline'>Signin</b></button></div>
                    {message}
                    </div>
                <div className='w-100'>
                    <form >
                        <input type='text' className='border rounded m-1 w-100 py-2  ' placeholder=' First name' autoFocus required id='fname'/><br />
                        <input type='text' className='border rounded m-1 w-100 p-1' placeholder=' Last name' autoFocus required id='lname'/><br />
                        <input type='email' className='border rounded m-1 p-1 w-100' placeholder=' Email' autoFocus required id='email' /><br />
                        <input type='password' id='password' className='border rounded m-1 p-1 w-100' placeholder=' Password' autoFocus required /><br />
                        <input type='password' className='border rounded m-1 p-1 w-100' placeholder=' Confirm password' id='cpassword' autoFocus required /><br />
                        <div className='d-flex justify-content-center '> <button  className='btn w-100 btn-primary  my-2 p-1'onClick={sinupsubmit}>creat</button></div>
                    </form>
                   <b className='text-secondry'>{message}</b>
                </div>
            </div>


        </div> :   <div className='d-flex justify-content-center align-items-center bg-secondary  shadow-sm p-3 mb-5  rounded vh-100 '>
                <div className=' border rounded p-5 bg-white'>
                    <div>
                        <h1>Create Account</h1>
                        <div className='d-flex justify-content-between align-items-center '><div>New user ? </div> <button className='btn btn-outline'onClick={Toggle}> <b className='text-primary text-decoration-underline'>Signup</b></button></div>
                    </div>
                    <div className='w-100'>
                        <div >

                            <input type='email' className='border rounded m-1 p-1 w-100' placeholder=' Email'id='email1' autoFocus required /><br />
                            <input type='password' className='border rounded m-1 p-1 w-100' placeholder=' Password'id='password1' autoFocus required /><br />

                            <div className='d-flex justify-content-center '> <button className='btn w-100 btn-primary  my-2 p-1'onClick={loginsub}>Signin</button></div>
                            <b className='text-danger'>{message}</b>
                        </div>

                    </div>
                </div>

--
            </div>



          }

         

        </div>
    )
}

export default Login