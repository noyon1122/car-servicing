import { Link, useNavigate } from 'react-router-dom'
import login from '../../assets/images/login/login.svg'
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa6'
import Navbar from '../Navbar/Navbar'
import { Bounce, ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { AuthContext } from '../Providers/Providers';

const Login = () => {
  
    const {signIn,signInWithGoogle}=useContext(AuthContext)
    const navigate=useNavigate()

    const handleLogin =e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;

        signIn(email,password)
        .then(userCredential=>{
            const user=userCredential.user;
            console.log(user)
            toast.success('🦄 Wow Successfully Login!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
                navigate('/')
        })
        .catch(error => {
           console.log("Error",error)
        })
    }

    const hangleGoogleSignIn=()=>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log("Error",error.message)
        })
    }

  return (
    <>
    <Navbar></Navbar>
    <div className="hero bg-base-200 min-h-screen items-center mx-auto">
  <div className="hero-content flex-col md:flex-row gap">
    <div className="w-1/2 text-center mr-6 lg:text-left">
     <img src={login} alt="" />
    </div>
    <div className="card bg-base-100 w-1/2 max-w-sm shrink-0 shadow-2xl">
        <h1 className='text-center font-bold mt-4'>Please Login</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#ff4d00] font-bold text-white">Login</button>
        </div>
        <p className='text-center'>Or Sign In with</p>
        <div className='flex justify-center gap-4 text-2xl'>
         <Link >  <FaFacebook></FaFacebook></Link>
          <Link onClick={hangleGoogleSignIn}> <FaGoogle></FaGoogle></Link>
          <Link> <FaLinkedin></FaLinkedin></Link>
        </div>
        <p className='text-center'>Don't Have an account? Please <Link  className='font-bold text-blue-600' to={'/register'}>Register</Link></p>
      </form>
    </div>
  </div>
</div>
</>
  )
  
}

export default Login