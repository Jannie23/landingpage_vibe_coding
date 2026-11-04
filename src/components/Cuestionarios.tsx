import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  FileQuestion,
  GraduationCap,
  Building2,
  ListChecks,
} from 'lucide-react';
import {
  cuestionarios,
  type CuestionarioNivel,
  type CuestionarioMateria,
} from '@/data/cursos';

export default function Cuestionarios() {
  const [nivel, setNivel] = useState<CuestionarioNivel | null>(null);
  const [materia, setMateria] = useState<CuestionarioMateria | null>(null);

  function elegirNivel(n: CuestionarioNivel) {
    setNivel(n);
    setMateria(null);
    document
      .getElementById('cuestionarios-materias')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function elegirMateria(m: CuestionarioMateria) {
    setMateria(m);
    document
      .getElementById('cuestionarios-lista')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function volverANiveles() {
    setNivel(null);
    setMateria(null);
    document
      .getElementById('cuestionarios')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function volverAMaterias() {
    setMateria(null);
    document
      .getElementById('cuestionarios-materias')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <section
      id="cuestionarios"
      className="scroll-mt-20 bg-gradient-to-b from-rosa-50 via-crema to-lila-50 px-5 py-20 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="section-label">Catálogo de cuestionarios</p>
          <h2 className="gradient-heading mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Practica con cuestionarios de admisión
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lila-700">
            Elige tu nivel de ingreso, selecciona una materia y abre el
            cuestionario que quieras resolver.
          </p>
        </div>

        {!nivel && (
          <div className="grid gap-5 sm:grid-cols-2">
            {cuestionarios.map((n, i) => {
              const Icon = n.icon;
              return (
                <button
                  key={n.id}
                  onClick={() => elegirNivel(n)}
                  style={{ animationDelay: `${i * 80}ms` }}
                  className="group flex animate-fade-up flex-col items-start rounded-3xl border border-lila-100 bg-white/80 p-8 text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-rosa-300 hover:shadow-soft-lg"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-rosa-100 text-rosa-600 transition-colors duration-300 group-hover:bg-rosa-500 group-hover:text-white">
                    <Icon className="h-7 w-7" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-lila-900">
                    {n.nombre}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-rosa-500">
                    {n.subtitle}
                  </p>
                  <p className="mt-3 text-lila-700">{n.descripcion}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-lila-700 transition-all group-hover:gap-2.5 group-hover:text-rosa-500">
                    Ver materias
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {nivel && !materia && (
          <div id="cuestionarios-materias" className="animate-fade-in scroll-mt-20">
            <button
              onClick={volverANiveles}
              className="mb-6 flex items-center gap-1.5 text-sm font-medium text-lila-600 transition-colors hover:text-rosa-500"
            >
              <ArrowLeft className="h-4 w-4" />
              Cambiar de nivel
            </button>

            <div className="mb-6 flex items-center gap-2.5 text-sm font-medium text-lila-600">
              {nivel.id === 'preparatoria' ? (
                <GraduationCap className="h-4 w-4" />
              ) : (
                <Building2 className="h-4 w-4" />
              )}
              {nivel.nombre}
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {nivel.materias.map((m, i) => {
                const Icon = m.icon;
                const accentClasses =
                  m.accent === 'lila'
                    ? 'bg-lila-100 text-lila-700 group-hover:bg-lila-600 group-hover:text-white'
                    : 'bg-rosa-100 text-rosa-600 group-hover:bg-rosa-500 group-hover:text-white';
                return (
                  <button
                    key={m.id}
                    onClick={() => elegirMateria(m)}
                    style={{ animationDelay: `${i * 70}ms` }}
                    className="group flex animate-fade-up flex-col items-start rounded-3xl border border-lila-100 bg-white/80 p-6 text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-lila-300 hover:shadow-soft-lg"
                  >
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 ${accentClasses}`}
                    >
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </span>
                    <h3 className="mt-4 font-display text-xl font-semibold text-lila-900">
                      {m.nombre}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-lila-700">
                      {m.descripcion}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-lila-700">
                      {m.cuestionarios.length}{' '}
                      {m.cuestionarios.length === 1 ? 'cuestionario' : 'cuestionarios'}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {nivel && materia && (
          <div id="cuestionarios-lista" className="mx-auto max-w-3xl animate-fade-up scroll-mt-20">
            <button
              onClick={volverAMaterias}
              className="mb-6 flex items-center gap-1.5 text-sm font-medium text-lila-600 transition-colors hover:text-rosa-500"
            >
              <ArrowLeft className="h-4 w-4" />
              Cambiar de materia
            </button>

            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-lila-100 text-lila-700">
                <ListChecks className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-medium text-rosa-500">{nivel.nombre}</p>
                <h3 className="font-display text-2xl font-semibold text-lila-900">
                  Cuestionarios de {materia.nombre}
                </h3>
              </div>
            </div>

            <div className="space-y-3">
              {materia.cuestionarios.map((cuestionario, index) => (
                <a
                  key={cuestionario.archivo}
                  href={cuestionario.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-lila-100 bg-white/85 p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-lila-300 hover:shadow-soft-lg sm:p-5"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-rosa-100 text-sm font-bold text-rosa-600">
                      {index + 1}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-semibold text-lila-900">
                        Cuestionario de {materia.nombre} {index + 1}
                      </span>
                      <span className="mt-0.5 block text-xs text-lila-500">
                        Preparación para examen de admisión
                      </span>
                    </span>
                  </span>
                  <span className="flex shrink-0 items-center gap-2 text-sm font-semibold text-lila-600 transition-colors group-hover:text-rosa-500">
                    Abrir
                    <ExternalLink className="h-4 w-4" />
                  </span>
                </a>
              ))}
            </div>

            <p className="mt-6 flex items-center justify-center gap-2 text-center text-sm text-lila-500">
              <FileQuestion className="h-4 w-4" />
              Cada cuestionario se abrirá en una nueva pestaña.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
