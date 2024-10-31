import Image from "next/image";
import Link from "next/link";

import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
export default function Footer(){
 return(
  <div>
  
   <section className="sm:grid  grid-cols-4 bg-stone-400 mt-24">
    <div>
  
<h1 className="text-5xl sm:mt-16 mx-9 text-black "><b className="text-yellow-400">DUA</b><b>LAB</b></h1>
   <p className="text-1xl text-gray-600 mx-7 sm:my-7">We believe it has the power to do small things.</p>
   <p className="text-1xl text-gray-600 mx-7 my-7">Interested in working with us?</p>
   <p className="text-1xl text-gray-600 my-2 mx-7">Info@example.com</p>
<p className="flex mx-9 hover:scale-110  gap-6"><FaFacebookF /><FaXTwitter /><FaWhatsapp /> <FaInstagram /></p>
   </div>
   <div>
    <h1 className="text-3xl  mx-7 mt-10"><b>Quick Links</b></h1>

 <ul className="text-1xl text-gray-600 mx-7 ">
  <li className="my-3">
   Service
  </li>
  <li className="my-2">
 About Company
  </li>
  <li className="my-2">
   Latest News
  </li>
  <li className="my-2">
   Team Member
  </li>
  <li className="my-2">
 Testimonials
  </li>
 </ul>
   </div>
   <div>
    <h1 className="text-3xl mx-7 mt-10"><b>My Account</b></h1>

 <ul className="text-1xl text-gray-600 mx-7 ">
  <li className="my-2">
  My profile
  </li>
  <li className="my-2">
 My Order History
  </li>
  <li className="my-2">
My Wish List
  </li>
  <li className="my-2">
Order Tracking
  </li>
  <li className="my-2">
   Shopping Cart
  </li>
 </ul>
   </div>
   <div>
    <h1 className="text-3xl  mx-7 mt-10"><b>Address</b></h1>
    <p className="text-1xl text-gray-600 mx-7 my-3 ">570th 8th Ave,New York,Ny united states</p>
    <h1 className="text-3xl  mx-7 mt-10"><b>Hours </b></h1>
    <p className="text-1xl text-gray-600 mx-7 ">9.30am-6.30pm</p>
    <p className="text-1xl text-gray-600 mx-7 ">ALl days</p>
   </div>
   </section>
  </div>
 )
}