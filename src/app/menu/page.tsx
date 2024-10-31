import Link from "next/link";
import Image from "next/image";
export default function Menu(){
 return(
  <div>
    <h1 className="text-5xl text-red-600 mx-9 my-5 font-extrabold"><b>Popular Items:</b></h1>
   <section className="sm:grid grid-cols-3 mx-5 my-11 gap-7">
   
    <div className="bg-zinc-100 h-96 w-72 rounded-3xl mx-9 hover:scale-105 hover:bg-yellow-600">
     <Image className="rounded-full ml-14 mt-10" height={150} width={150} src="/alfredobroast.png" alt="chowmein"></Image>
     <h1 className="text-2xl text-gray-600 mx-9 my-5"><b>45.00$</b></h1>
     <h1 className="text-1xl mx-8 " ><b>Alfredo Broast</b></h1>
     <Link href="/contact"><button className="text-1xl text-white  ml-20   rounded-2xl flex bg-green-900 h-10 w-28 hover:scale-110 hover:bg-red-700"><b className="mx-2 mt-2">Order Now</b></button></Link>
     <Image className="mx-5" height={100} width={100} src="/star.png" alt="star"></Image>
    </div>

    <div className="bg-zinc-100 mx-4 h-96 hover:scale-105  hover:bg-yellow-600 rounded-3xl w-72">
     <Image className="rounded-full ml-14 mt-10" height={120} width={120} src="/chicagodeeppizza.png" alt="chowmein"></Image>
     <h1 className="text-2xl mx-9 text-gray-600  my-5"><b>50.00$</b></h1>
     <h1 className="text-1xl mx-8 " ><b>Chickago Deep Pizza</b></h1>
     <Link href="/contact"><button className="text-1xl text-white  ml-20   rounded-2xl flex bg-green-900 h-10 w-28 hover:scale-110 hover:bg-red-700"><b className="mx-2 mt-2">Order Now</b></button></Link>
     <Image className="mx-5" height={100} width={100} src="/star.png" alt="star"></Image>
    </div>

    <div className="bg-zinc-100 mx-8 hover:scale-105  hover:bg-yellow-600 h-96 w-72 rounded-3xl">
     <Image className="rounded-full ml-11 mt-10" height={200} width={200} src="/chinesepasta.png" alt="chowmein"></Image>
     <h1 className="text-2xl mx-9 text-gray-600  "><b>18.00$</b></h1>
     <h1 className="text-1xl mx-8 " ><b>Chinese Pasta</b></h1>
     <Link href="/contact"><button className="text-1xl text-white  ml-20   rounded-2xl flex bg-green-900 h-10 w-28 hover:scale-110 hover:bg-red-700"><b className="mx-2 mt-2">Order Now</b></button></Link>
    <Image className="mx-5" height={100} width={100} src="/star.png" alt="star"></Image>
    </div>

    <div className="bg-zinc-100 h-96 w-72 rounded-3xl mx-9 hover:scale-105 hover:bg-yellow-600">
     <Image className="rounded-full ml-14 mt-10" height={150} width={150} src="/rutiwithbeef.png" alt="chowmein"></Image>
     <h1 className="text-2xl text-gray-600 mx-9 my-5"><b>15.00$</b></h1>
     <h1 className="text-1xl mx-8 " ><b>Ruti With Beef Roll</b></h1>
     <Link href="/contact"><button className="text-1xl text-white  ml-20   rounded-2xl flex bg-green-900 h-10 w-28 hover:scale-110 hover:bg-red-700"><b className="mx-2 mt-2">Order Now</b></button></Link>
     <Image className="mx-5" height={100} width={100} src="/star.png" alt="star"></Image>
    </div>

    <div className="bg-zinc-100 mx-4 h-96 hover:scale-105  hover:bg-yellow-600 rounded-3xl w-72">
     <Image className="rounded-full ml-14 mt-10" height={120} width={120} src="/manchurian.png" alt="chowmein"></Image>
     <h1 className="text-2xl mx-9 text-gray-600 "><b>50.00$</b></h1>
     <h1 className="text-1xl mx-8 " ><b>Chicken and Vegetable Machurian</b></h1>
     <Link href="/contact"><button className="text-1xl text-white ml-20   rounded-2xl flex bg-green-900 h-10 w-28 hover:scale-110 hover:bg-red-700"><b className="mx-2 mt-2">Order Now</b></button></Link>
     <Image className="mx-5" height={100} width={100} src="/star.png" alt="star"></Image>
    </div>

    <div className="bg-zinc-100 mx-8 hover:scale-105  hover:bg-yellow-600 h-96 w-72 rounded-3xl">
     <Image className="rounded-full ml-11 mt-10" height={200} width={200} src="/rutiwithchicken.png" alt="chowmein"></Image>
     <h1 className="text-2xl mx-9 text-gray-600  "><b>20.00$</b></h1>
     <h1 className="text-1xl mx-8 " ><b>Chicken Ruti Roll</b></h1>
     <Link href="/contact"><button className="text-1xl text-white  ml-20   rounded-2xl flex bg-green-900 h-10 w-28 hover:scale-110 hover:bg-red-700"><b className="mx-2 mt-2">Order Now</b></button></Link>
     <Image className="mx-5" height={100} width={100} src="/star.png" alt="star"></Image>
    </div>

    <div className="bg-zinc-100 h-96 w-72 rounded-3xl mx-9 hover:scale-105 hover:bg-yellow-600">
     <Image className="rounded-full ml-14 mt-10" height={150} width={150} src="/whopperburger.png" alt="chowmein"></Image>
     <h1 className="text-2xl text-gray-600 mx-9 "><b>53.00$</b></h1>
     <h1 className="text-2xl mx-8 " ><b>Whopper Burger</b></h1>
     <Link href="/contact"><button className="text-1xl text-white  ml-20   rounded-2xl flex bg-green-900 h-10 w-28 hover:scale-110 hover:bg-red-700"><b className="mx-2 mt-2">Order Now</b></button></Link>
     <Image className="mx-5" height={100} width={100} src="/star.png" alt="star"></Image>
    </div>

    <div className="bg-zinc-100 mx-4 h-96 hover:scale-105  hover:bg-yellow-600 rounded-3xl w-72">
     <Image className="rounded-full ml-14 mt-10" height={120} width={120} src="/grillchicken.png" alt="chowmein"></Image>
     <h1 className="text-2xl mx-9 text-gray-600  my-5"><b>50.00$</b></h1>
     <h1 className="text-1xl mx-8 " ><b>Grill Chicken</b></h1>
     <Link href="/contact"><button className="text-1xl text-white  ml-20   rounded-2xl flex bg-green-900 h-10 w-28 hover:scale-110 hover:bg-red-700"><b className="mx-2 mt-2">Order Now</b></button></Link>
     <Image className="mx-5" height={100} width={100} src="/star.png" alt="star"></Image>
    </div>

    <div className="bg-zinc-100 mx-8 hover:scale-105  hover:bg-yellow-600 h-96 w-72 rounded-3xl">
     <Image className="rounded-full ml-11 mt-10" height={200} width={200} src="/hotpasta.png" alt="chowmein"></Image>
     <h1 className="text-2xl mx-9 text-gray-600  "><b>18.00$</b></h1>
     <h1 className="text-1xl mx-8 " ><b>Chilli dry hot pasta</b></h1>
     <Link href="/contact"><button className="text-1xl text-white  ml-20   rounded-2xl flex bg-green-900 h-10 w-28 hover:scale-110 hover:bg-red-700"><b className="mx-2 mt-2">Order Now</b></button></Link>
     <Image className="mx-5" height={100} width={100} src="/star.png" alt="star"></Image>
     </div>
   </section>
  </div>
 )
}
