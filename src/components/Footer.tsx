import { GraduationCap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/70 bg-gradient-to-r from-rosa-50 to-lila-50 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-rosa-500 to-lila-600 text-white shadow-soft">
            <GraduationCap className="h-4 w-4" strokeWidth={2.2} />
          </span>
          <span className="font-display text-lg font-semibold text-lila-900">
            Jan García
          </span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-lila-600 sm:gap-6">
          <a href="#cursos" className="transition-colors hover:text-rosa-500">
            Cursos
          </a>
          <a href="#cuestionarios" className="transition-colors hover:text-rosa-500">
            Cuestionarios
          </a>
          <a href="#modalidades" className="transition-colors hover:text-rosa-500">
            Modalidades
          </a>
          <a href="#sobre-mi" className="transition-colors hover:text-rosa-500">
            Sobre mí
          </a>
          <a href="#contacto" className="transition-colors hover:text-rosa-500">
            Contacto
          </a>
        </nav>
        <p className="text-sm text-lila-500">
          © {new Date().getFullYear()} Jan García. Cursos de regularización.
        </p>
      </div>
    </footer>
  );
}
