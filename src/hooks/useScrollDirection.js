import { useEffect, useState } from 'react';
export default function useScrollDirection(){const [direction,setDirection]=useState('up');useEffect(()=>{let last=window.scrollY;const fn=()=>{const next=window.scrollY;setDirection(next>last?'down':'up');last=next};window.addEventListener('scroll',fn,{passive:true});return()=>window.removeEventListener('scroll',fn)},[]);return direction}
