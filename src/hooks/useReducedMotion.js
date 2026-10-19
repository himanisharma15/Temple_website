import { useEffect, useState } from 'react';
export default function useReducedMotion(){const [reduced,setReduced]=useState(false);useEffect(()=>{const q=matchMedia('(prefers-reduced-motion: reduce)');const fn=()=>setReduced(q.matches);fn();q.addEventListener('change',fn);return()=>q.removeEventListener('change',fn)},[]);return reduced}
