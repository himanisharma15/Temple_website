import { lazy } from 'react';
const page = (name) => lazy(() => import(`./pages/${name}/${name}.jsx`));
const Home = page('Home'); const About = page('About'); const DarshanSeva = page('DarshanSeva');
const SevaBooking = page('SevaBooking'); const Festivals = page('Festivals'); const FestivalDetail = page('FestivalDetail');
const Gallery = page('Gallery'); const Visit = page('Visit'); const Donate = page('Donate'); const ThankYou = page('ThankYou');
const Notices = page('Notices'); const Contact = page('Contact'); const Privacy = page('Privacy'); const Terms = page('Terms'); const NotFound = page('NotFound');
export default [
  { path: '/', label: 'Home', element: Home, showInNav: true }, { path: '/about', label: 'About', element: About, showInNav: true },
  { path: '/darshan-seva', label: 'Darshan & Seva', element: DarshanSeva, showInNav: true }, { path: '/seva-booking', label: 'Seva Booking', element: SevaBooking },
  { path: '/festivals', label: 'Festivals', element: Festivals, showInNav: true },
  { path: '/gallery', label: 'Gallery', element: Gallery, showInNav: true }, { path: '/visit', label: 'Visit Us', element: Visit, showInNav: true },
  { path: '/donate', label: 'Donate', element: Donate }, { path: '/donate/thank-you', label: 'Thank You', element: ThankYou },
  { path: '/notices', label: 'Notices', element: Notices }, { path: '/contact', label: 'Contact', element: Contact, showInNav: true },
  { path: '/privacy', label: 'Privacy', element: Privacy }, { path: '/terms', label: 'Terms', element: Terms }, { path: '/:slug', label: 'Festival detail', element: FestivalDetail }, { path: '*', label: 'Not Found', element: NotFound },
];
