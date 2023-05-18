const signupForm = () =>{
    return(
        <div>
           <div class="pr-60 pl-60 pt-14 h-[100vh] w-full bg-gray-800">
                <div class="flex  w-full pt-20">
                    <div class="w-1/2 pt-20 p-5 ">
                        <h3 class="p-4 text-gray-300 font-bold text-2xl">Online Eve IAP</h3>
                        <p class=" text-gray-200 font-light p-4 leading-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis illo suscipit nulla ducimus sunt, molestias, explicabo voluptas nostrum rem autem id odio ex nihil dolorum error fugiat voluptates aut fugit?</p>
                        <a href="/"><button class="ml-5 pr-10 pl-10 mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  type="submit">Sign In</button></a>
                    </div>
                    <div class=" w-2/5 bg-white p-10 rounded ">
                        <form class="w-full " id="signupForm">
                        <h3 id="message" class="text-green-600 text-[16px] text-center border-b font-bold "></h3>
                            <div>
                            <h3 class="p-4 text-gray-700 font-bold text-xl border-b text-center">SignUp Page</h3>
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
                                    <input type="submit" name="adduser" value="Sign Up" class=" w-4/5 ml-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
                                    
                                    <div class="pb-1 text-center p-5">
                                        <p class="text-xs text-gray-600"> If you have Account, <a class="text-blue-500 font-bold"  href="/">Sign In</a> </p>
                                    </div>
                                </div>
                        </form>
                    </div>
                        
                </div>

                </div>

        </div>
    )
}

export default signupForm;