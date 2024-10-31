import Image from "next/image";
import Link from "next/link";
export default function Card(){
 return(
  <div>
   <div className="mt-20 mx-4">
    <h1 className="text-2xl my-4 font-serif text-red-600 "><b>Crispy,Every Bite</b></h1>
    <h1 className="text-5xl font-mono"><b>POPULAR FOOOD ITEMS</b></h1>
   </div>
   <section className="sm:grid grid-cols-3 mx-5 my-11">
    <div data-aos="zoom-out-down" className="bg-zinc-300 h-96 w-72 rounded-3xl mx-9 hover:scale-105 hover:bg-yellow-600">
     <Image className="rounded-full ml-14 mt-10" height={150} width={150} src="/chowmein.png" alt="chowmein"></Image>
     <h1 className="text-2xl mx-9 my-5"><b>MEXICAN CHOWMEIN</b></h1>
     <h1 className="text-2xl mx-8 text-red-600" ><b>5 products</b></h1>
    </div>
    <div data-aos="zoom-out-down" className="bg-zinc-300 mx-4 h-96 hover:scale-105  hover:bg-yellow-600 rounded-3xl w-72">
     <Image className="rounded-full ml-14 mt-10" height={120} width={120} src="/manchurian.png" alt="chowmein"></Image>
     <h1 className="text-2xl mx-9 my-5"><b>CHICKEN MANCHURIAN</b></h1>
     <h1 className="text-2xl mx-8 text-red-600" ><b>5 products</b></h1>
    </div>
    <div data-aos="zoom-out-down" className="bg-zinc-300 mx-8 hover:scale-105  hover:bg-yellow-600 h-96 w-72 rounded-3xl">
     <Image className="rounded-full ml-11 mt-10" height={200} width={200} src="/pizza.png" alt="chowmein"></Image>
     <h1 className="text-2xl mx-9 my-5"><b>ALFREDO PIZZA</b></h1>
     <h1 className="text-2xl mx-8 text-red-600" ><b>5 products</b></h1>
    </div>
   </section>
   <section className="mx-4 my-11">
    <div className="sm:flex ">
     <Image data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="sm:ml-16 sm:mt-16 rounded-3xl hover:scale-105" height={200} width={400} src="/burgerposter.jpg" alt="burgerposter"></Image>
     <Image data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="sm:ml-20 mt-16 rounded-3xl hover:scale-105" height={200} width={600} src="/pizzaposter.jpg" alt="burgerposter"></Image>
    </div>
   </section>
  </div>
 )
}