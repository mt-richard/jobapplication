import {Link} from 'react-router-dom'

const NotFound = () =>{
    return(
        <div className=' text-center w-full pt-60'>
            <h1 className='font-bold text-2xl text-grey-800 pt-5'>404</h1>
            <h1 className='font-bold text-2xl text-grey-800 pt-5'>Not Found</h1>
            <p className='pt-3 font-light'>Back to login page <Link className='text-blue-600 font-bold' to='/login'>Back to Login</Link> </p>
        </div>
    )
}

export default NotFound;