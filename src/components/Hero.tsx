import { ArrowDown, Sparkles, MessageCircle } from 'lucide-react';
import { crearWhatsappUrl } from '@/data/contacto';

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-rosa-50 via-white to-lila-50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-lila-200 opacity-50 blur-3xl" />
        <div className="absolute -right-24 top-32 h-80 w-80 rounded-full bg-rosa-200 opacity-50 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-lila-100 opacity-60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-20 sm:px-8 sm:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="chip mx-auto mb-6 bg-gradient-to-r from-rosa-100 to-lila-100 text-rosa-700 shadow-soft animate-fade-in">
            <Sparkles className="h-4 w-4" />
            Cursos de regularización personalizados
          </span>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-lila-900 sm:text-6xl">
            Esa materia difícil tiene solución.{' '}
            <span className="gradient-heading">Empecemos hoy.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-lila-700">
            Sesiones claras y prácticas para prepararatoria y universidad. A
            domicilio o en salón de clases, con un plan hecho a la medida de lo
            que necesitas aprobar.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a href="#cursos" className="btn-primary w-full sm:w-auto">
              Elige tu curso
              <ArrowDown className="h-4 w-4" />
            </a>
            <a href={crearWhatsappUrl('ingreso')} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-all duration-300 hover:bg-[#1ebe5d] hover:shadow-soft-lg active:scale-[0.98] sm:w-auto">
              <MessageCircle className="h-4 w-4" />
              Cursos de ingreso
            </a>
            <a href="#modalidades" className="btn-secondary w-full sm:w-auto">
              Ver modalidades
            </a>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-4 text-center sm:gap-6">
          {[
            { num: '+120', label: 'Alumnos apoyados' },
            { num: '2', label: 'Modalidades' },
            { num: '6', label: 'Materias' },
          ].map((s) => (
            <div key={s.label} className="glass-card rounded-2xl p-4 transition-transform duration-300 hover:-translate-y-1">
              <p className="font-display text-2xl font-semibold text-lila-700 sm:text-3xl">
                {s.num}
              </p>
              <p className="mt-1 text-xs font-medium text-lila-600 sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
