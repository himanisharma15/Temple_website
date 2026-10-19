import { motion } from 'framer-motion';
export default function ScrollReveal({ children, delay=0 }) { return <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.5,delay}}>{children}</motion.div>; }
