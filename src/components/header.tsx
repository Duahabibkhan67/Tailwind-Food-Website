import Link from "next/link";
import React, { use } from "react";
import { PiHamburgerBold } from "react-icons/pi";
export default function Header(){
 return(
<div>
<section className=" sm:grid grid-cols-3 shadow-black " >
 <div className="sm:flex mx-4 sm:mt-11 gap-2 ">
<p className=" mt-6 size-* "><  PiHamburgerBold /></p>
<h1 className="text-5xl text-black "><b className="text-yellow-400">DUA</b><b>LAB</b></h1>
</div>
<div className="sm:flex gap-2 sm:my-9 sm:mt-14">
<Link href="/"><button className="text-2xl  mx-4  hover:scale-110"><b>Home</b></button></Link>
<Link href="/menu"><button className="text-2xl  mx-4  hover:scale-110"><b>Menu</b></button></Link>
<Link href="/about"><button  className="text-2xl  mx-4 hover:scale-110"><b>About</b></button></Link>
<Link href="/contact"><button className="text-2xl  mx-4  hover:scale-110"> <b>Contact</b></button></Link>
</div>
<div>
<Link href="/bookatable"><button className="text-2xl mt-12 ml-48 flex bg-yellow-400 sm:h-10 sm:w-44 hover:scale-110 hover:bg-lime-600"><b className="my-1 mx-2">Book A Table</b></button></Link>
</div>
</section>
</div>
 )
}
