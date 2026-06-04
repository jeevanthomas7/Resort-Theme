import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import AllRooms from './pages/AllRooms';
import StandardRoom from './pages/StandardRoom';
import SingleRoom from './pages/SingleRoom';
import LuxuryRoom from './pages/LuxuryRoom';
import DeluxeRoom from './pages/DeluxeRoom';
import PresidentialRoom from './pages/PresidentialRoom';
import Amenities from './pages/Amenities';
import Booking from './pages/Booking';
import Offers from './pages/Offers';
import Team from './pages/Team';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Standalone routes (No Layout Header/Footer wrapper) */}
        <Route path="/404" element={<NotFound />} />

        {/* Routes wrapped in Main Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/standard-room" element={<StandardRoom />} />
          <Route path="/single-room" element={<SingleRoom />} />
          <Route path="/luxury-room" element={<LuxuryRoom />} />
          <Route path="/deluxe-room" element={<DeluxeRoom />} />
          <Route path="/presidential-room" element={<PresidentialRoom />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Catch-all route to redirect or show 404 */}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  );
}
