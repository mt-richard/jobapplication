const Profile = () =>{
    return (
        <div>
            <div class="flex h-[100vh]">
                <div class="sidebar bg-gray-800 w-[300px]">
                        <h4 class="p-5 font-bold text-center text-gray-200 text-3xl border-b">APPILCATION</h4>
                        
                        <div class="sidebar-nav p-5 pr-0 ">
                            <ul>
                                <li class="p-2 text-gray-300 cursor-pointer hover:bg-gray-300 hover:text-blue-500 hover:font-normal w-full mb-2 rounded-l-xl font-light"><a   class="active" href="/dashboard" ><span><i 
                                 class="fas fa-window-restore"></i>Dashboard</span></a></li>
                                <li class="p-2 text-gray-300 cursor-pointer hover:bg-gray-300 hover:text-blue-500 hover:font-normal w-full mb-2 rounded-l-xl font-light"><a   href="/applicants"><span><i  
                                 class="fas fa-archive"></i>Applicants</span></a></li>
                                <li class="p-2  cursor-pointer hover:bg-gray-300 hover:text-blue-500 hover:font-normal bg-gray-300 text-blue-500 font-normal  w-full mb-2 rounded-l-xl font-light"><a    href="/profile"><span><i  
                                 class="fas fa-archive"></i>Profile</span></a></li>
                                <li class="p-2 text-gray-300 cursor-pointer hover:bg-gray-300 hover:text-blue-500 hover:font-normal w-full mb-2 rounded-l-xl font-light"><a   href="../"><span><i  
                                 class="fas fa-sign-out-alt"></i>Logout</span></a></li>
                            </ul>
                        </div>
                </div>
                <div class="main-content pl-10 pr-10 p-2 w-full bg-gray-300">
                    <div class="flex w-full justify-between border-b border-gray-400">
                        <h4 class=" text-xl text-gra-600 p-2">All Applicants </h4>
                    
                        <div class="flex">
                            <img src="/images/user.png" alt="" class="w-10 h-10 rounded-full" />
                            <h6 class="p-2" id="userlog"></h6>
                       
                        </div>
                    </div>
                    <div class="main p-10">
                        <h1 class="p-3 font-bold text-gray-700">Welcome to Profile Page Applicants</h1>
                <p class="p-3 pb-5 leading-tight text-gra-600">Here, are the all info you provided during account creatation, so you can update it if you want.</p>
                <div class=" pr-20 pl-20">
                    <form class="w-full " id="signupForm">
                        <h3 id="message" class="text-green-600 text-[16px] text-center  font-bold "></h3>
                        <div>
                        <h3 class="p-4 text-gray-700 font-bold text-xl  text-center">Profile Page</h3>
                        </div>
                            
                                <div class="w-full  px-3 pt-5 p-2">
                                    <label class="block uppercase tracking-wide text-gray-900 text-xs" for="">
                                    Full Name
                                    </label>
                                    <input class="text-xs block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" name="name" type="text" placeholder="Full Name" />
                                </div>
                            
                                <div class="w-full  px-3 p-2">
                                    <label class="block uppercase tracking-wide text-gray-900 text-xs" for="">
                                    Email
                                    </label>
                                    <input class="text-xs block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" name="email" type="email" placeholder="Email adderss" />
                                </div>
                                <div class="w-full px-3 p-5">
                                    <label class="block uppercase tracking-wide text-gray-900 text-xs" for="">
                                    Password
                                    </label>
                                    <input class="text-xs block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="password" name="password" type="password" placeholder="************" />
                                </div>
                                <div class=" w-full px-3 p-2 ">
                                <input type="submit" name="adduser" value="Update info" class=" w-4/5 ml-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
                                
                                
                            </div>
                    </form>

                </div>
            
            </div>
     </div>
        </div>
        </div>
    )
}
export default Profile