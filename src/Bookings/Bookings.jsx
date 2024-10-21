import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../components/Providers/Providers"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import MyBookings from "./MyBookings"


const Bookings = () => {
    const {user}=useContext(AuthContext)
    const [bookings,setBookings]=useState([])

    //console.log(user.email)

    const uri=`http://localhost:5000/bookings?email=${user?.email}`
    useEffect(()=>{
       fetch(uri)
       .then(res=>res.json())
       .then(data => {
        setBookings(data)
       })
    },[])
    
  return (
    <div>
        <Navbar></Navbar>
        <div>
            My Bookings : {bookings.length}

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Date</th>
        <th></th>
      </tr>
    </thead>
    {
        bookings.map((booking,index)=> <MyBookings key={booking._id} booking={booking} index={index}></MyBookings>)
    }
   
  </table>
</div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Bookings