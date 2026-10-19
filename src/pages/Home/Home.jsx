import { Helmet } from 'react-helmet-async';
import Placeholder from '../../components/Placeholder/Placeholder';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import styles from './Home.module.css';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Shree Dhabaleswar Mandira</title>
        <meta name="description" content="Shree Dhabaleswar Mandira on an island in the Mahanadi River near Cuttack, Odisha." />
      </Helmet>
      <HeroSlider />
      <section className="section">
        <div className="container">
          <h2>A serene island sanctuary</h2>
          <p><Placeholder kind="add">Home introduction copy</Placeholder></p>
          <div className={styles.todo}>TODO: Build the home page content, quick actions, seva cards, festival highlights, gallery preview and trust strip.</div>
        </div>
      </section>
    </>
  );
}
