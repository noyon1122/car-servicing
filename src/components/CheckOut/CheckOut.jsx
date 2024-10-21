import { useLoaderData } from "react-router-dom"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
const CheckOut = () => {
    const service=useLoaderData();
    const {_id,title,price}=service;

    const handleCheckout=e=>{
      e.preventDefault();
      const form=e.target;
      const name=form.name.value;
      const date=form.date.value;
      const email=form.email.value;
      const password=form.password.value;
      console.log(date);
      const bookingsinfo={
        name,date,email,password
      }

      fetch('http://localhost:5000/bookings',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(bookingsinfo)
      })
      .then(res=>res.json())
      .then(data => {
        console.log(data)
      })
    }
  return (
    <div>
        <Navbar></Navbar>
          <div className="text-center justify-center items-center my-10">
            <h1 className="text-2xl">Services : {title}</h1>
          <div className="card bg-base-100  max-w-lg shrink-0 shadow-2xl mx-auto">
      <form onSubmit={handleCheckout}  className="card-body">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date"  className="input input-bordered" required />
        </div>
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
        </div>
       </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#ff4d00] font-bold text-white">Press to Book</button>
        </div>
        
       
       
      </form>
    </div>
          </div>
        <Footer></Footer>
    </div>
  )
}

export default CheckOut