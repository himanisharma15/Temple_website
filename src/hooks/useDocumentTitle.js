import { useEffect } from 'react';
export default function useDocumentTitle(title){useEffect(()=>{document.title=`${title} | Shree Dhabaleswar Mandira`},[title])}
