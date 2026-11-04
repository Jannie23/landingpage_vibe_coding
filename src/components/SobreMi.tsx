import { Quote } from 'lucide-react';
import fotoJan from '@/components/IMG-20251127-WA0017 copy.jpg';

export default function SobreMi() {
  return (
    <section
      id="sobre-mi"
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8"
    >
      <div className="grid items-center gap-10 sm:grid-cols-5">
        <div className="sm:col-span-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[19rem] sm:max-w-sm">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-lila-200 to-rosa-200" />
            <div className="absolute inset-3 overflow-hidden rounded-[1.7rem] border-4 border-white bg-white/80 shadow-soft-lg">
              <img
                src={fotoJan}
                alt="Jan García, profesionista y tutora"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white px-5 py-4 shadow-soft-lg">
              <p className="font-display text-2xl font-semibold text-lila-700">
                +5 años
              </p>
              <p className="text-xs font-medium text-lila-500">
                de experiencia
              </p>
            </div>
          </div>
        </div>

        <div className="sm:col-span-3">
          <p className="section-label">Sobre mí</p>
          <h2 className="gradient-heading mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Hola, soy Jan García
          </h2>
          <p className="mt-4 leading-relaxed text-lila-700">
            Soy profesionista y brindo cursos de regularización a estudiantes de
            preparatoria y universidad. Mi método parte de una idea simple:
            entender primero, memorizar después. Cada sesión se arma a la
            medida del alumno, sin recetas genéricas.
          </p>
          <p className="mt-3 leading-relaxed text-lila-700">
            Acompaño a mis estudiantes hasta que la materia deja de ser un
            obstáculo y se convierte en una herramienta que saben usar.
          </p>

          <figure className="mt-7 rounded-2xl border border-lila-100 bg-lila-50 p-5">
            <Quote className="h-5 w-5 text-rosa-400" />
            <blockquote className="mt-2 font-display text-lg italic text-lila-800">
              “Aprobé cálculo en mi tercer intento gracias a las sesiones.
              Por fin entendí de qué iba todo.”
            </blockquote>
            <figcaption className="mt-2 text-sm font-medium text-lila-500">
              — Alumna de preparatoria
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
