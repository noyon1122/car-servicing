import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { IoBagOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useContext } from 'react';
import { AuthContext } from '../Providers/Providers';
const Navbar = () => {
  const {user}=useContext(AuthContext)
  return (
    <div className='mt-5 shadow-md' >
        <div className='flex justify-between px-5 items-center mx-6'>
            <div ><img className='sm:w-2/3 w-1/3' src={logo} alt="" /></div>
            <div className='font-bold space-x-3'>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/services'}>Services</Link>
            <Link to={'blogs'}>Blogs</Link>
            <Link to={'/contact'}>Contact</Link>
            {
              user? <>
                <Link to={'/bookings'}>My Bookings</Link>
                <Link to={'/login'}>Sign OUt</Link>
              </>: <Link to={'/login'}>Login</Link>
             
            }
           
        </div>
        <div className='ml-3 flex gap-3 items-center'>
             <IoBagOutline></IoBagOutline>
             <CiSearch></CiSearch>
            <Link><button className='font-bold border-2 border-orange-500  px-4 py-2 text-orange-500'>Appointment</button></Link>
        </div>
        </div>
       
    </div>
  )
}

export default Navbar