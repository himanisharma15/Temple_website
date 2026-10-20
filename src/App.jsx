import { lazy, Suspense, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './layout/Layout';
import routes from './routes';
import Skeleton from './components/Skeleton/Skeleton';

function ScrollManager() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    else window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);
  return null;
}

export default function App() {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const isFestivalRoute = /^\/(festivals|shivaratri|bada-osha|sitalasasti|makar-sankranti|naga-chaturthi|pana-sankranti|pausha-purnima|dola-purnima|kartika-purnima)$/.test(location.pathname);
  const transitionProps = isFestivalRoute
    ? { initial: prefersReducedMotion ? false : { opacity: 0 }, animate: { opacity: 1 }, exit: prefersReducedMotion ? undefined : { opacity: 0 }, transition: { duration: prefersReducedMotion ? 0 : 0.25 } }
    : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -16 }, transition: { duration: 0.35 } };
  return (
    <Layout>
      <ScrollManager />
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname} {...transitionProps}>
          <Suspense fallback={<Skeleton variant="page" />}><Routes>{routes.map(({ path, element: Page }) => <Route key={path} path={path} element={<Page />} />)}</Routes></Suspense>
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
