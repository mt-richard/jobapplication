import axios from "axios";
import { useEffect, useState } from "react"

const Applicants = () => {
    const [appl, setAppl ] = useState([{}])

    useEffect(() => {
         
        const applicant = async () => {
            const url = 'http://localhost:3300/applicant';
            const applicants = await axios.get(url, { headers : { 'Content-Type' : 'application/json'}})
            // console.log(applicants.data);
            setAppl(applicants.data)
            console.log(appl)
        }

        applicant();
    },[])

    return (
        <div>
            <div class="flex h-[100vh]">
                <div class="sidebar bg-gray-800 w-[300px]">
                        <h4 class="p-5 font-bold text-center text-gray-200 text-3xl border-b">APPILCATION</h4>
                        
                        <div class="sidebar-nav p-5 pr-0 ">
                            <ul>
                                <li class="p-2 text-gray-300 cursor-pointer hover:bg-gray-300 hover:text-blue-500 hover:font-normal w-full mb-2 rounded-l-xl font-light"><a   class="active" href="/dashboard" ><span><i class="fas fa-window-restore"></i>Dashboard</span></a></li>
                                <li class="p-2  cursor-pointer hover:bg-gray-300 hover:text-blue-500 hover:font-normal bg-gray-300 text-blue-500 font-normal  w-full mb-2 rounded-l-xl font-light"><a   href="/applicants"><span><i  class="fas fa-archive"></i>Applicants</span></a></li>
                                <li class="p-2 text-gray-300 cursor-pointer hover:bg-gray-300 hover:text-blue-500 hover:font-normal w-full mb-2 rounded-l-xl font-light"><a    href="/profile"><span><i  class="fas fa-archive"></i>Profile</span></a></li>
                                <li class="p-2 text-gray-300 cursor-pointer hover:bg-gray-300 hover:text-blue-500 hover:font-normal w-full mb-2 rounded-l-xl font-light"><a   href="../"><span><i  class="fas fa-sign-out-alt"></i>Logout</span></a></li>
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
                        <h1 class="p-3 font-bold text-gray-700">All Applicants</h1>
                    <p class="p-3 pb-5 leading-tight text-gra-600">Here, are the all applicants details requested via Application form.</p>
                    <div class=" pr-20 pl-20">
                        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table  id="dataTable" class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            ID
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Name
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            <div class="flex items-center">
                                                email
                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                                            </div>
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            <div class="flex items-center">
                                                phone number
                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                                            </div>
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            <div class="flex items-center">
                                                position
                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                                            </div>
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            <div class="flex items-center">
                                                CV link
                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                                            </div>
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            <span class="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="pl-2 pr-2">
                                    {appl.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.position}</td>
                                            <td>{item.link}</td>
                                        
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Applicants