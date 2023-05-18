import { useState } from "react";
import axios from "axios";

const Login = () => {

   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cmsg, setMsg] = useState('');

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const loginForm = async (e) =>{
        e.preventDefault()
        var formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        const headers = {
            'Content-Type': 'application/json',
          };
    
        const url = 'http://localhost:3300/users/login';
        const apply = await axios.post(url, formData, { headers })
        
            if(apply.data.status == 200){
                // setEmail('');
                // setPassword('');
                window.location.href= '/dashboard';
            }else{
                // alert(apply.data.message)
                setMsg(apply.data.message)
            }
        }

    return (
        <div>
            <div class="p-40 pt-20  w-full  h-[100vh] bg-gray-800">
                <div class="w-full max-w-xs ml-[40%]">
                
                <form id="loginForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={loginForm}>
                    <h3 id="message" class="text-red-600 text-[16px] text-center border-b font-bold ">{cmsg}</h3>
                    <div>
                    <h3 class="p-4 text-gray-700 font-bold text-xl border-b text-center">Login Page</h3>
                    </div>
                <div class="mb-4 pt-5">
                        <label class="block text-gray-600 text-sm font-bold mb-2" for="email">
                        Email
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name="email" placeholder="Enter your Email adderss" value={email} onChange={handleEmailChange}/>
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-600 text-sm font-bold mb-2" for="password">
                        Password
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name="password" placeholder="******************"  onChange={handlePasswordChange}/>
                    
                    </div>
                    <div class="items-center justify-between">
                        <input type="submit" name="login" value="Sign In" class="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
                        
                        
                        <div class="p-5 w-full">
                        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                        </a>
                                    <p class="text-[12px] text-gray-600">If you don't have account, <a class="text-blue-500 font-bold" href="/create">SignUp</a></p>
                    
                        </div>
                        
                    </div>
                    </form>
                    <p class="text-center text-gray-500 text-xs">
                    &copy;2023  Corp. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;