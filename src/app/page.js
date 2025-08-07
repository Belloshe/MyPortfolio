'use client';
import Hero from './components/Hero/page';
import About from './components/About/page';
import Navbar from './components/Navbar';
import Projects from './components/Project/page';
import ContactForm from './components/Contact/page';

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <ContactForm />
    </div>
  );
}
