import Image from "next/image";
import Link from "next/link";
export default function About(){
 return(
  <div>
  <section className="sm:flex bg-zinc-200">
   
   <div data-aos="fade-up"
     data-aos-duration="3000" className="sm:mt-16 gap-4 mx-6">
    <h1 className="text-3xl text-red-600 my-3"><b>About Our Food</b></h1>
    <h1 className="sm:text-6xl py-5 gap-2 "><b>WHERE QUALITY MEET EXCELLENT </b><b className="text-red-700">SERVICE.</b></h1>
    <p className="my-5">It's the perfect dining exprience where every dish is crafted with fresh,
     high-quality exprience quick and efficient service that ensure your food is served fresh 
     It's the dinning exprience where evey dish is crafted with fresh,high-quality ingredients.
    </p>
   </div>
   <div>
   <Image  data-aos="fade-up"
     data-aos-duration="3000" className="mt-8" height={2000} width={2000} src="/burger4.png" alt="burger1"></Image>
   </div>
  </section>
  <section className="sm:grid grid-cols-4 bg-black sm:mt-16 mx-11">
   <div data-aos="fade-up"
     data-aos-duration="3000">
    <Image className="ml-16 my-8" height={100} width={100} src="/burcold.png" alt="burger"></Image>
    <h1 className="text-2xl mx-4 text-white my-3"><b>Super Quality Food</b></h1>
    <p className="text-white mx-4">A team of dreamers and doers builders unique interactive and music art.</p>
   </div>
   <div data-aos="fade-up"
     data-aos-duration="3000">
    <Image className="ml-16 my-8" height={100} width={100} src="/mixbowl.png" alt="burger"></Image>
    <h1 className="text-2xl mx-4 text-white my-3"><b>Original Recipe</b></h1>
    <p className="text-white mx-4"> A team of dreamers and doers builders unique interactive and music art.</p>
   </div>
   <div data-aos="fade-up"
     data-aos-duration="3000">
    <Image className="ml-16 my-8" height={100} width={100} src="/deliveryboy.png" alt="burger"></Image>
    <h1 className="text-2xl mx-4 text-white my-3"><b>Quick Fast Delivery</b></h1>
    <p className="text-white mx-4">A team of dreamers and doers builders unique interactive and music art.</p>
   </div>
   <div data-aos="fade-up"
     data-aos-duration="3000">
    <Image className="ml-16 my-8" height={100} width={100} src="/burcold.png" alt="burger"></Image>
    <h1 className="text-2xl mx-4 text-white my-3"><b>100% Fresh Foods</b></h1>
    <p className="text-white mx-4">A team of dreamers and doers builders unique interactive and music art.</p>
   </div>
  </section>
  </div>
 )
}