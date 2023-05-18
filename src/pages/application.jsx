import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Application = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [position, setPosition] = useState('');
    const [link, setLink] = useState('');
    const [cmsg, setMsg] = useState('');

    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePhoneChange = (e) => {
      setPhone(e.target.value);
    };
  
    const handlePositionChange = (e) => {
      setPosition(e.target.value);
    };
  
    const handleLinkChange = (e) => {
      setLink(e.target.value);
    };

    const submitForm = async (e) =>{
        e.preventDefault()
        // console.log(name,email,phone,position,link);
        var formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('position', position);
        formData.append('link', link);
        // console.log(formData);
        const headers = {
            'Content-Type': 'application/json',
          };
    
        const url = 'http://localhost:3300/applicant/add';
        const apply = await axios.post(url, formData, { headers })
        // console.log(apply.data.message)
        
            if(apply.data.status == 200){
                setName('');
                setEmail('');
                setLink('');
                setPosition('');
                setPhone('');
                setMsg(apply.data.message)
                // const msg = JSON.stringify(apply.data.message)
                // console.log(msg)
            }else{
                setMsg('')
                alert(apply.data.message)
                // setMsg(apply.data.message)

            }

           
    }

    return (
        <div>
            <div class="pl-60 pr-60 pt-10  w-full  h-full bg-gray-800">
                <div class="ml-[5%] p-10 ">
                
                <form id="applyForm" method="post" class="bg-white shadow-md rounded px-8 pt-6 pb-8 pr-28 pl-28 mb-4" onSubmit={submitForm}>
                    <h3 id="message" class="text-green-600 text-xl text-center border-b font-bold ">{cmsg}</h3>
                    <div>
                    <h3 class="p-4 text-gray-700 font-bold text-xl border-b text-center">Job Application Form</h3>
                    <p class="pt-3">As the CEO, CTO, CMO of QWERTY Ltd, you will be responsible for providing strategic leadership, driving growth, and overseeing the overall operations of the company. You will play a pivotal role in shaping the company's vision, leading teams, and ensuring the achievement of business objectives..</p>
                    <p class="pt-5 text-red-500"><span class="text-red-500 text-xl font-bold">*</span> Indicates required question</p>
                    </div>
                    <div class="mb-4 pt-5">
                        <label class="block text-gray-600 text-sm font-bold mb-2" for="email">
                        Name <span class="text-red-500 text-xl font-bold">*</span>
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" name="name" placeholder="Enter your Names" value={name} onChange={handleNameChange} required/>
                    </div>
                    <div class="mb-4 pt-5">
                        <label class="block text-gray-600 text-sm font-bold mb-2" for="email">
                        Email <span class="text-red-500 text-xl font-bold">*</span>
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name="email" placeholder="Enter your Email adderss" value={email} required onChange={handleEmailChange} />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-600 text-sm font-bold mb-2" for="password">
                        Phone Number <span class="text-red-500 text-xl font-bold">*</span>
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="number" name="phone" placeholder="+250787654212" value={phone} required onChange={handlePhoneChange} />
                    
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-600 text-sm font-bold mb-2" for="password">
                        Which position(s) are you interested in?
                        </label>
                            <div class="flex gap-3">
                                <input class="" id="job" type="radio" name="job" value="it"  onChange={handlePositionChange}/>
                                <label>Head Information Technology</label>
                            </div>
                            <div class="flex gap-3">
                                <input class="" id="job" type="radio" name="job" value="cmo" onChange={handlePositionChange}/>
                                <label>Chief Marketing Officer</label>
                            </div>
                            <div class="flex gap-3">
                                <input class="" id="job" type="radio" name="job" value="ceo" onChange={handlePositionChange}/>
                                <label>Chief Executive Officer</label>
                            </div>
                            <div class="flex gap-3">
                                <input class="" id="job" type="radio" name="job" value="it-manager"  onChange={handlePositionChange}/>
                                <label>IT Manager</label>
                            </div>
                    
                    </div>

                    <div class="mb-6">
                        <label class="block text-gray-600 text-sm font-bold mb-2" for="password">
                            Submit your cover letter or resume link <span class="text-red-500 text-xl font-bold">*</span>
                        </label>
                        <textarea class="shadow appearance-none border rounded w-full py-2 px-2 text-gray-600 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="link" name="link" placeholder="Enter the link" required value={link} onChange={handleLinkChange}></textarea>
                    
                    </div>


                    <div class="items-center justify-between flex">
                        <input type="submit" name="login" value="Submit" class="bg-blue-500 w-1/6 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"/>
                        <button  onclick="window.location.reload();" class="bg-blue-300 w-1/6 hover:bg-blue-700 text-grey-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Clear All</button>
                        
                        </div>
                        <div class="p-5 w-full">
                            <p>This Offer was provided by QWERTY Ltd, trust us .....</p>                         
                        </div>
                        
                    
                    </form>
                
                </div>
            </div>
        </div>
    )
}

export default Application;