import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Artists = lazy(() => import('./pages/Artists'));
const ArtistProfile = lazy(() => import('./pages/ArtistProfile'));
const Releases = lazy(() => import('./pages/Releases'));
const Studio = lazy(() => import('./pages/Studio'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));
const Blog = lazy(() => import('./pages/Blog'));

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/artists', element: <Artists /> },
  { path: '/artists/:id', element: <ArtistProfile /> },
  { path: '/releases', element: <Releases /> },
  { path: '/studio', element: <Studio /> },
  { path: '/contact', element: <Contact /> },
  { path: '/privacy', element: <PrivacyPolicy /> },
  { path: '/terms', element: <Terms /> },
  { path: '/blog', element: <Blog /> },
];