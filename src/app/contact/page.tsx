import Link from "next/link";
import Image from "next/image";

export default function Contact(){
 return(
  <div >
<div className="bg-zinc-200">
    <section className="sm:grid grid-cols-3 bg-zinc-200  ">
    <div data-aos="fade-up"
     data-aos-duration="3000" className="bg-white  w-72 rounded-2xl mx-9 sm:mt-20 hover:scale-105 hover:bg-green-600">
     <Image className="rounded-full ml-16 my-8" height={50} width={100} src="/location.png" alt="location"></Image>
     <h1 className="text-2xl mx-9 my-5"><b>Address Line</b></h1>
     <h1 className="text-2xl mx-8 text-gray-400" ><b>570th 8th Ave,New York,Ny united states</b></h1>
    </div>
    <div data-aos="fade-up"
     data-aos-duration="3000" className="bg-white mx-4 mt-20 hover:scale-105  hover:bg-green-600 rounded-2xl w-72">
    <Image className="rounded-full ml-20 my-8" height={100} width={100} src="/call.png" alt="location"></Image>
     <h1 className="text-2xl mx-9 my-5"><b>Phone Number</b></h1>
     <h1 className="text-2xl mx-8  text-gray-400" ><b>+124-567-890 <br />+125-789-564 </b></h1>
    </div>
    <div data-aos="fade-up"
     data-aos-duration="3000" className="bg-white mx-8 mt-20 hover:scale-105  hover:bg-green-600  w-72 rounded-2xl">
    <Image  className="rounded-full ml-16 my-8" height={100} width={100} src="/mailicon.png" alt="location"></Image>
     <h1 className="text-2xl mx-9 my-5"><b>Mail Address</b></h1>
     <h1 className="text-2xl mx-8  text-gray-400" ><b>email@example.com <br />inf@example.com</b></h1>
    </div>
   </section>


   <section className="bg-zinc-200">
  
   <div data-aos="fade-up"
     data-aos-duration="3000" className="flex justify-between">
  <section className=" w-96 bg-yellow-300 border border-black rounded-2xl mx-11 mt-11">

<div  className="my-3">
   <label className=" mx-4 my-6 sm:h-20  font-serif" htmlFor="name">Enter your Name:
   <input className= "mx-4 h-8 sm:w-60  my-5" type="text" placeholder="Full Name"   required/>
   </label>
   </div>
  <div>
   <label className=" mx-4 my-6 sm:h-20   font-serif " htmlFor="email">Enter your E-mail:
   <input className=" mx-4 h-8 sm:w-60  my-5" type="email" placeholder="Your E-mail"  required/>
   </label>
</div>
   <div className="flex flex-col gap-1">
   <label className=" mx-4     font-serif " htmlFor="message"> Your Message:   </label>
   <textarea  className="   mx-4 sm:w-80 " name="Message" id="msg"  rows={5}></textarea>

</div>
  <button className="  text-2xl   border border-accent h-12 w-20 rounded-2xl bg-rose-700 hover:bg-lime-800 hover:scale-105 my-6  mx-11   p-2 "><b>Send</b></button> 

</section>

<section>
   <Image data-aos="fade-up"
     data-aos-duration="3000" className="sm:mr-52 mt-20" height={500} width={500} src="/contactme.png" alt="contact"></Image>
</section>
</div>
   </section>
   <section className="sm:grid grid-cols-3 gap-3 bg-green-700 mt-28">
   <div>
      <h1 className="text-2xl mt-6 ml-16 text-yellow-500"><b>Crispy,Every Bite Taste</b></h1>
      <h1 data-aos="fade-up"
        data-aos-duration="3000" className="sm:text-6xl ml-16 my-2 mr-4 text-white font-serif"><b>30 minutes Fast</b><b className="text-yellow-500">Delivery</b> <br />Challenge</h1>
   </div>
   <div>
   <Image  data-aos="fade-left" className="ml-16" height={500} width={500} src="/deliverymen.png" alt="burger1"></Image>
   </div>
   <div>
   <Link data-aos="fade-up"
     data-aos-duration="3000" href="/contact"><button className="text-4xl text-green-800 mt-24 ml-20   rounded-2xl flex bg-white h-20 sm:w-38 hover:scale-110 hover:bg-yellow-500"><b className="my-5 mx-2 ">Order Now</b></button></Link>
   </div>
   </section>
 </div>
  </div>
 )
}