'use client';
import Link from "next/link";
import Hero from "@/components/hero";
import Card from "@/components/card";
import Discount from "@/components/discountland";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Home(){
  useEffect(()=>{
    AOS.init({
     easing:"ease-out-back",
     duration:1200,
     delay:200,
     mirror:true,
     anchorPlacement:"bottom-bottom",
     offset:160,
    })
    AOS.refresh();
   } ,[]);
 return(
  <div className="bg-zinc-100">
  < Hero />
< Card />
< Discount />
<div className="bg-zinc-300"></div>
</div>
 )
}