import Link from "next/link";
import Image from "next/image";
export default function Book(){
 return(
  <div >
   
   <div className="relative bg-[url('/bookatab.jfif')] bg-cover bg-center h-screen">
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-5xl font-bold  bg-opacity-50 p-4 rounded">
                Book a Table for Yourself <br /> At a Time Convenient For you
                </h1>
            </div>
        </div>

    
   <section className="sm:grid grid-cols-4 mt-16 ml-28 mr-28 ">
    <div  className="bg-gray-600 flex justify-center  border border-black rounded-xl mx-4 h-20 ">
      <select className="h-5 w-32 mt-8 cursor-pointer  bg-black text-white" name="person" id="person" >Select Person
       <option  value="2Person">2Person</option>
       <option value="3Person">3Person</option>
       <option value="4Person">4Person</option>
       <option value="5Person">5Person</option>
      </select>
    </div>
    <div className="bg-gray-600 flex justify-center  border border-black rounded-xl mx-4 h-20 ">
     <label className="text-white " htmlFor="date">Your Date:
      <input className="h-5 w-32 mt-8   bg-black text-white" type="date" placeholder="choose your date" required />
     </label>
    </div>

    <div className="bg-gray-600 flex justify-center border border-black rounded-xl mx-4 h-20 ">
     <label className="text-white" htmlFor="time">Your Time:
      <input className="h-5 w-32 mt-8 cursor-pointer  bg-black text-white" type="time" placeholder="choose your Time" required />
     </label>
    </div>
    <div className="bg-gray-600 flex justify-center  border border-black rounded-xl mx-4 h-20 ">
     <label className="text-white ml-2 mt-4" htmlFor="number">Your Number:
      <input className="h-5 w-38 cursor-pointer  bg-black text-white" type="phone" placeholder="Enter Your Number" required />
     </label>
    </div>
    <Link href="/bookatable"><button className="text-2xl mt-12 ml-96 flex bg-yellow-400 sm:h-10 sm:w-44 hover:scale-110 hover:bg-lime-600"><b className="my-1 mx-2">Book A Table</b></button></Link>

   </section>
  </div>
 )
}