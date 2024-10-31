import Link from "next/link";
import Image from "next/image";
export default function Discount(){
 return(
  <div>
   <section className="mx-8 mt-24 sm:flex justify-between bg-black">
    <div className="mx-4 sm:mt-20">
     <h1 data-aos="fade-up"
     data-aos-duration="3000" className="text-4xl  sm:ml-16 my-2 mt-10 text-white"><b>SAVE 20%</b></h1>
     <h1 data-aos="fade-up"
     data-aos-duration="3000" className="sm:text-7xl sm:ml-16 my-2 text-white font-serif"><b>TODAY'S <b className="text-yellow-500">ASTACKIN</b>DAY</b></h1>
     <h1 data-aos="fade-up"
     data-aos-duration="3000" className="text-3xl sm:ml-16 my-4 text-white"><b>GRILLED <b className="text-yellow-500">CHICKEN$59,00</b></b></h1>
     <Link data-aos="fade-up"
     data-aos-duration="3000" href="/contact"><button className="text-4xl text-white my-9 ml-20   rounded-2xl flex bg-green-900 h-20 w-38 hover:scale-110 hover:bg-yellow-500"><b className="my-5 mx-2 ">Order Now</b></button></Link>
    </div>
    <div>
     <Image data-aos="fade-up"
     data-aos-duration="3000" className="sm:mr-20 sm:mt-20" height={500} width={500} src="/grillchicken.png" alt="burger1"></Image>
    </div>
   </section>
  </div>
 )
}