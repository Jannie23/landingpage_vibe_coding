import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CourseSelector from '@/components/CourseSelector';
import Cuestionarios from '@/components/Cuestionarios';
import Modalidades from '@/components/Modalidades';
import SobreMi from '@/components/SobreMi';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-crema">
      <Header />
      <main>
        <Hero />
        <CourseSelector />
        <Cuestionarios />
        <Modalidades />
        <SobreMi />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
