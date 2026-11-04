import { Home, School, Check } from 'lucide-react';

export default function Modalidades() {
  const modalidades = [
    {
      icon: Home,
      titulo: 'A domicilio',
      desc: 'Voy a tu casa en horarios que se acomoden a tu rutina. Ideal si prefieres estudiar en un entorno cómodo.',
      puntos: [
        'Atención 100% personal',
        'Sin tiempos de traslado',
        'Horarios flexibles',
      ],
      accent: 'lila',
    },
    {
      icon: School,
      titulo: 'En salón de clases',
      desc: 'Sesiones en un espacio acondicionado para concentrarse, con pizarrón y material listo.',
      puntos: [
        'Ambiente de estudio',
        'Grupos reducidos',
      ],
      accent: 'rosa',
    },
  ];

  return (
    <section
      id="modalidades"
      className="scroll-mt-20 bg-gradient-to-br from-lila-50 via-white to-rosa-50 px-5 py-20 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="section-label">Modalidades</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-lila-900 sm:text-4xl">
            Donde tú te sientas cómodo
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lila-700">
            Elige la forma de tomar tus sesiones. Ambas opciones incluyen
            seguimiento y material de apoyo.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {modalidades.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.titulo}
                className="group glass-card rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-rosa-300 hover:shadow-soft-lg"
              >
                <span
                  className={`grid h-14 w-14 place-items-center rounded-2xl shadow-soft transition-transform duration-300 group-hover:scale-105 ${
                    m.accent === 'lila'
                      ? 'bg-lila-100 text-lila-700'
                      : 'bg-rosa-100 text-rosa-600'
                  }`}
                >
                  <Icon className="h-7 w-7" strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-lila-900">
                  {m.titulo}
                </h3>
                <p className="mt-2 text-lila-700">{m.desc}</p>
                <ul className="mt-5 space-y-2.5">
                  {m.puntos.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2.5 text-sm font-medium text-lila-800"
                    >
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-rosa-100 text-rosa-600">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
