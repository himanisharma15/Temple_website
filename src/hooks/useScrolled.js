import { useEffect, useState } from 'react';
export default function useScrolled(threshold=40){const [scrolled,setScrolled]=useState(false);useEffect(()=>{const fn=()=>setScrolled(window.scrollY>threshold);window.addEventListener('scroll',fn,{passive:true});fn();return()=>window.removeEventListener('scroll',fn)},[threshold]);return scrolled}
