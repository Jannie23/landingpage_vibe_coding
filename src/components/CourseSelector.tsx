import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  GraduationCap,
  Building2,
} from 'lucide-react';
import { niveles, type Nivel, type Materia } from '@/data/cursos';
import { crearWhatsappUrl } from '@/data/contacto';

type Step = 'nivel' | 'materia' | 'detalle';

export default function CourseSelector() {
  const [step, setStep] = useState<Step>('nivel');
  const [nivel, setNivel] = useState<Nivel | null>(null);
  const [materia, setMateria] = useState<Materia | null>(null);

  function elegirNivel(n: Nivel) {
    setNivel(n);
    setMateria(null);
    setStep('materia');
  }

  function elegirMateria(m: Materia) {
    setMateria(m);
    setStep('detalle');
  }

  function volver() {
    if (step === 'detalle') {
      setStep('materia');
      setMateria(null);
    } else if (step === 'materia') {
      setStep('nivel');
      setNivel(null);
    }
  }

  return (
    <section id="cursos" className="relative mx-auto max-w-6xl scroll-mt-20 rounded-[2.5rem] px-5 py-20 sm:px-8">
      <div className="mb-10 text-center">
        <p className="section-label">Elige tu curso</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-lila-900 sm:text-4xl">
          Dos niveles, seis materias
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-lila-700">
          Primero elige tu nivel de estudios y después la materia en la que
          necesitas apoyo. Así armamos tu plan de sesiones.
        </p>
      </div>

      {/* Stepper */}
      <div className="mx-auto mb-10 flex max-w-md items-center justify-center gap-2 text-sm font-medium">
        {[
          { key: 'nivel', label: 'Nivel' },
          { key: 'materia', label: 'Materia' },
          { key: 'detalle', label: 'Detalle' },
        ].map((s, i) => {
          const order = ['nivel', 'materia', 'detalle'];
          const active = order.indexOf(step) >= i;
          return (
            <div key={s.key} className="flex items-center gap-2">
              <div
                className={[
                  'grid h-8 w-8 place-items-center rounded-full border transition-all duration-300',
                  active
                    ? 'border-lila-600 bg-lila-600 text-white shadow-soft'
                    : 'border-lila-200 bg-white text-lila-400',
                ].join(' ')}
              >
                {active && order.indexOf(step) > i ? (
                  <Check className="h-4 w-4" />
                ) : (
                  i + 1
                )}
              </div>
              <span
                className={active ? 'text-lila-800' : 'text-lila-400'}
              >
                {s.label}
              </span>
              {i < 2 && (
                <div
                  className={[
                    'h-px w-8 transition-all duration-300 sm:w-12',
                    order.indexOf(step) > i
                      ? 'bg-lila-500'
                      : 'bg-lila-200',
                  ].join(' ')}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Back button */}
      {step !== 'nivel' && (
        <button
          onClick={volver}
          className="mx-auto mb-6 flex items-center gap-1.5 text-sm font-medium text-lila-600 transition-colors hover:text-rosa-500"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver
        </button>
      )}

      {/* Step: Nivel */}
      {step === 'nivel' && (
        <div className="grid gap-5 sm:grid-cols-2">
          {niveles.map((n, i) => {
            const Icon = n.icon;
            return (
              <button
                key={n.id}
                onClick={() => elegirNivel(n)}
                style={{ animationDelay: `${i * 80}ms` }}
                className="group glass-card flex animate-fade-up flex-col items-start rounded-3xl p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:border-rosa-300 hover:shadow-soft-lg"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-lila-100 text-lila-700 transition-colors duration-300 group-hover:bg-lila-600 group-hover:text-white">
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

      {/* Step: Materia */}
      {step === 'materia' && nivel && (
        <div className="animate-fade-in">
          <div className="mb-6 flex items-center gap-2 text-sm font-medium text-lila-600">
            {nivel.id === 'preparatoria' ? (
              <GraduationCap className="h-4 w-4" />
            ) : (
              <Building2 className="h-4 w-4" />
            )}
            {nivel.nombre}
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
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
                  style={{ animationDelay: `${i * 80}ms` }}
                  className="group glass-card flex animate-fade-up flex-col items-start rounded-3xl p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-rosa-300 hover:shadow-soft-lg"
                >
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 ${accentClasses}`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-lila-900">
                    {m.nombre}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-lila-700">
                    {m.descripcion}
                  </p>
                  <span className="chip mt-4 bg-lila-50 text-lila-600">
                    <Clock className="h-3.5 w-3.5" />
                    {m.duracion}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Step: Detalle */}
      {step === 'detalle' && nivel && materia && (
        <Detalle nivel={nivel} materia={materia} />
      )}
    </section>
  );
}

function Detalle({
  nivel,
  materia,
}: {
  nivel: Nivel;
  materia: Materia;
}) {
  const Icon = materia.icon;
  return (
    <div className="mx-auto max-w-2xl animate-fade-up">
      <div className="glass-card rounded-3xl p-8 shadow-soft-lg sm:p-10">
        <div className="flex items-center gap-4">
          <span
            className={`grid h-14 w-14 place-items-center rounded-2xl ${
              materia.accent === 'lila'
                ? 'bg-lila-100 text-lila-700'
                : 'bg-rosa-100 text-rosa-600'
            }`}
          >
            <Icon className="h-7 w-7" strokeWidth={2} />
          </span>
          <div>
            <p className="text-sm font-medium text-rosa-500">{nivel.nombre}</p>
            <h3 className="font-display text-2xl font-semibold text-lila-900">
              {materia.nombre}
            </h3>
          </div>
        </div>

        <p className="mt-5 leading-relaxed text-lila-700">
          {materia.descripcion}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <span className="chip bg-lila-50 text-lila-600">
            <Clock className="h-3.5 w-3.5" />
            {materia.duracion}
          </span>
          <span className="chip bg-rosa-50 text-rosa-600">
            A domicilio o en salón
          </span>
        </div>

        <div className="mt-7">
          <p className="text-sm font-semibold uppercase tracking-wide text-lila-500">
            Temas que cubrimos
          </p>
          <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
            {materia.temas.map((t) => (
              <li
                key={t}
                className="flex items-center gap-2.5 rounded-xl bg-crema px-4 py-2.5 text-sm font-medium text-lila-800"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-rosa-100 text-rosa-600">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={crearWhatsappUrl('regularizacion')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-8 w-full"
        >
          Solicitar regularización
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}


