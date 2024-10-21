import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'


const Banner = () => {
  return (
    <div className="carousel max-w-7xl mx-10">
  <div id="slide1" className="carousel-item relative  h-[120vh] w-full">
    <img
      src={img1}
      className="w-full" />
    <div className="absolute left-5 right-5 bottom-0 justify-end gap-4 flex -translate-y-1/2 transform ">
      <a href="#slide4" className="btn btn-circle bg-red-500">❮</a>
      <a href="#slide2" className="btn btn-circle  bg-red-500">❯</a>
    </div>

    <div className="absolute w-full h-full   mb-5 bg-gradient-to-r from-[#080808] to-black-0">
   <div className='mx-20 mt-56 space-y-4 '>
   <div className='text-white font-bold text-4xl w-1/5'>
      <h1>Affordable Price For Car Servicing</h1>
     </div>
     <div className='text-white w-1/3'>
     <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
     </div>
     <div className='space-x-5'>
     <button className="btn btn-error text-white">Discover More</button>
     <button className="btn btn-outline btn-secondary">Latest Project</button>
     </div>
   </div>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={img2}
      className="w-full" />
    <div className="absolute left-5 right-5 bottom-0 justify-end gap-4 flex -translate-y-1/2 transform ">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={img3}
      className="w-full" />
    <div className="absolute left-5 right-5  flex -translate-y-1/2 transform bottom-0 justify-end gap-4">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={img4}
      className="w-full" />
    <div className="absolute left-5 right-5 bottom-0 justify-end gap-4 flex -translate-y-1/2 transform ">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  )
}

export default Banner