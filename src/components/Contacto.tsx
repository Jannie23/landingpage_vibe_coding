import { useState, type FormEvent } from 'react';
import { Send, Mail, Phone, Check, MessageCircle } from 'lucide-react';
import { correoContacto, crearWhatsappUrl } from '@/data/contacto';

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <section
      id="contacto"
      className="scroll-mt-20 bg-gradient-to-br from-crema via-rosa-50 to-lila-50 px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <p className="section-label">Contacto</p>
          <h2 className="gradient-heading mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Empecemos hoy
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lila-700">
            Cuéntame qué materia necesitas y en qué modalidad. Te respondo en
            menos de 24 horas con un plan de sesiones.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 shadow-soft-lg sm:p-10">
          {enviado ? (
            <div className="flex flex-col items-center py-10 text-center animate-fade-in">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-rosa-100 text-rosa-600">
                <Check className="h-8 w-8" strokeWidth={3} />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-lila-900">
                ¡Mensaje enviado!
              </h3>
              <p className="mt-2 max-w-sm text-lila-700">
                Gracias por escribirme. Me pondré en contacto contigo muy pronto
                con tu plan de sesiones.
              </p>
              <button
                onClick={() => setEnviado(false)}
                className="btn-secondary mt-6"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nombre" name="nombre" placeholder="Tu nombre" />
                <Field
                  label="Correo"
                  name="email"
                  type="email"
                  placeholder="tu@correo.com"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <SelectField
                  label="Nivel"
                  name="nivel"
                  options={['Preparatoria', 'Universidad']}
                />
                <SelectField
                  label="Materia"
                  name="materia"
                  options={[
                    'Física',
                    'Química',
                    'Cálculo',
                    'Química Orgánica',
                    'Teoría del Control',
                    'Teoría de los Circuitos',
                  ]}
                />
              </div>
              <SelectField
                label="Modalidad"
                name="modalidad"
                options={['A domicilio', 'En salón de clases']}
              />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-lila-800">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  rows={3}
                  placeholder="Cuéntame en qué necesitas apoyo"
                  className="w-full resize-none rounded-xl border border-lila-200 bg-crema px-4 py-3 text-lila-900 outline-none transition-colors placeholder:text-lila-400 focus:border-lila-500"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Enviar mensaje
                <Send className="h-4 w-4" />
              </button>

              <a
                href={crearWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-all duration-300 hover:bg-[#1ebe5d] hover:shadow-soft-lg active:scale-[0.98]"
              >
                <MessageCircle className="h-5 w-5" />
                Pedir información por WhatsApp
              </a>

              <div className="flex flex-col gap-2 border-t border-lila-100 pt-5 text-sm text-lila-600 sm:flex-row sm:justify-center sm:gap-6">
                <a href={`mailto:${correoContacto}`} className="inline-flex items-center gap-2 transition-colors hover:text-rosa-500">
                  <Mail className="h-4 w-4 text-rosa-400" />
                  {correoContacto}
                </a>
                <a href={crearWhatsappUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-rosa-500">
                  <Phone className="h-4 w-4 text-rosa-400" />
                  55 8491 5638
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-lila-800">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-lila-200 bg-crema px-4 py-3 text-lila-900 outline-none transition-colors placeholder:text-lila-400 focus:border-lila-500"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-lila-800">
        {label}
      </label>
      <select
        name={name}
        required
        defaultValue=""
        className="w-full rounded-xl border border-lila-200 bg-crema px-4 py-3 text-lila-900 outline-none transition-colors focus:border-lila-500"
      >
        <option value="" disabled>
          Selecciona una opción
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
