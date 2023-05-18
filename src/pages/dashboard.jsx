const Dashboard = () =>{
    return (
        <div>
            <div class="flex h-[100vh]">
        <div class="sidebar bg-gray-800 w-[300px]">
                <h4 class="p-5 font-bold text-center text-gray-200 text-3xl border-b">APPILCATION</h4>
                
                <div class="sidebar-nav p-5 pr-0 ">
                    <ul>
                        <li class="p-2  cursor-pointer hover:bg-gray-300 hover:text-blue-500 hover:font-normal bg-gray-300 text-blue-500 font-normal  w-full mb-2 rounded-l-xl font-light"><a   class="active" href="/dashboard" ><span><i  class="fas fa-window-restore"></i>Dashboard</span></a></li>
                        <li class="p-2 text-gray-300 cursor-pointer hover:bg-gray-300 hover:text-blue-500 hover:font-normal w-full mb-2 rounded-l-xl font-light"><a   href="/applicants"><span><i   class="fas fa-archive"></i>Applicants</span></a></li>
                        <li class="p-2 text-gray-300 cursor-pointer hover:bg-gray-300 hover:text-blue-500 hover:font-normal w-full mb-2 rounded-l-xl font-light"><a    href="/profile"><span><i   class="fas fa-archive"></i>Profile</span></a></li>
                        <li class="p-2 text-gray-300 cursor-pointer hover:bg-gray-300 hover:text-blue-500 hover:font-normal w-full mb-2 rounded-l-xl font-light"><a   href="../"><span><i   class="fas fa-sign-out-alt"></i>Logout</span></a></li>
                    </ul>
                </div>
        </div>
        <div class="main-content pl-10 pr-10 p-2 w-full bg-gray-300">
            <div class="flex w-full justify-between border-b border-gray-400">
                <h4 class=" text-xl text-gra-600 p-2">Dashboard Status of the System </h4>
               
                <div class="flex">
                    <img src="/images/user.png" alt="" class="w-10 h-10 rounded-full" />
                    <h6 class="p-2" id="userlog"></h6>
                   
                </div>
            </div>
            <div class="main p-10">

                    <div class="box grid grid-cols-3 gap-10">
                        <div class="flex hover:border-blue-500 border bg-gray-100 p-5 h-32 rounded">
                            <img src="/images/user.png" alt="" class="w-20 h-20" />
                            <div class="content p-2">
                                <h6> Applied as IT</h6>
                                <h5 class="text-blue-500"><b>Total : <span class="" id="itnumber"></span> </b></h5>
                            </div>
                        </div>

                        <div class="flex hover:border-blue-500 border  bg-gray-100 p-5 h-32 rounded">
                            <img src="/images/user.png" alt="" class="w-20 h-20" />
                            <div class="content p-2">
                                <h6> Applied as IT Manager</h6>
                                <h5 class="text-blue-500"><b>Total : <span class="" id="itmnumber"></span></b></h5>
                            </div>
                        </div>

                        <div class="flex hover:border-blue-500 border  bg-gray-100 p-5 h-32 rounded">
                            <img src="/images/user.png" alt="" class="w-20 h-20" />
                            <div class="content p-2">
                                <h6> Applied as CEO</h6>
                                <h5 class="text-blue-500"><b>Total : <span class="" id="ceonumber"></span></b></h5>
                            </div>
                        </div>

                        <div class="flex hover:border-blue-500 border bg-gray-100 p-5 h-32 rounded">
                            <img src="/images/user.png" alt="" class="w-20 h-20" />
                            <div class="content p-2">
                                <h6> Applied as CTO</h6>
                                <h5 class="text-blue-500"><b>Total :<span class="" id="ctonumber"></span></b></h5>
                            </div>
                        </div>

                        <div class="flex hover:border-blue-500 border  bg-gray-100 p-5 h-32 rounded">
                            <img src="/images/user.png" alt="" class="w-20 h-20" />
                            <div class="content p-2">
                                <h6> Applied as CMO</h6>
                                <h5 class="text-blue-500"><b>Total : <span class="" id="cmonumber"></span></b></h5>
                            </div>
                        </div>

                        <div class="flex hover:border-blue-500 border  bg-gray-100 p-5 h-32 rounded">
                            <img src="/images/user.png" alt="" class="w-20 h-20" />
                            <div class="content p-2">
                                <h6> Total Applied</h6>
                                <h5 class="text-blue-500"><b>Total :<span class="" id="totalnumber"></span></b></h5>
                            </div>
                        </div>

                    </div>

                </div>

        </div>
    
    </div>
        </div>
    )
}
export default Dashboard