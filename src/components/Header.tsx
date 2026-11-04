import { MessageCircle, GraduationCap } from 'lucide-react';
import { crearWhatsappUrl } from '@/data/contacto';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/75 shadow-soft backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#inicio" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-rosa-500 to-lila-600 text-white shadow-soft">
            <GraduationCap className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <span className="font-display text-xl font-semibold tracking-normal text-lila-900">
            Jan García
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-lila-800 sm:flex">
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
        <a
          href={crearWhatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary !px-5 !py-2.5 !text-sm"
        >
          <MessageCircle className="h-4 w-4" />
          Pedir informes
        </a>
      </div>
    </header>
  );
}
