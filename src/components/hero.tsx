import Link from "next/link";
import Image from "next/image";
export default function Hero(){
 return(
  <div>
   <section className="sm:flex justify-between bg-black">
    <div className="mx-4 sm:mt-20">
     <h1  data-aos="fade-up"
     data-aos-duration="3000" className="text-4xl text-red-600"><b>Crispy,Every Bite Taste</b></h1>
     <h1 data-aos="fade-up"
     data-aos-duration="3000" className="sm:text-9xl ml-16 my-2 text-white font-serif"><b>Just One <br /> More Bite</b></h1>
     <Link data-aos="fade-up"
     data-aos-duration="3000" href="/contact"><button className="text-4xl text-white my-9 ml-20   rounded-2xl flex bg-green-900 h-20 sm:w-38 hover:scale-110 hover:bg-yellow-500"><b className="my-5 mx-2 ">Order Now</b></button></Link>
    </div>
    <div>
     <Image data-aos="fade-up"
     data-aos-duration="3000" className="" height={500} width={500} src="/burger2.jpg" alt="burger1"></Image>
    </div>
   </section>
  </div>
 )
}