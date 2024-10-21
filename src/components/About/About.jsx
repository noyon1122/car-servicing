import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = ()=>{
    return (
        <div className="hero bg-base-200 min-h-screen p-10">
  <div className="hero-content flex-col lg:flex-row">
   <div className='lg:w-1/2 relative'>
   <img
      src={person}
      className="w-3/4 rounded-lg shadow-2xl" />
      <img
      src={parts}
      className="rounded-lg shadow-2xl w-64 absolute right-5 top-1/2 " />
       <div>
   </div>
   </div>
  
    <div className='lg:w-1/2 space-y-4 '>
      <h1 className="text-3xl font-bold text-orange-500">About US</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get More Info</button>
    </div>
  </div>
</div>
    )
}
export default About