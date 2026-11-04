import {
  Atom,
  FlaskConical,
  Calculator,
  Hexagon,
  Gauge,
  CircuitBoard,
  GraduationCap,
  Building2,
  Dna,
  Microscope,
  Languages,
} from 'lucide-react';

export type MateriaId =
  | 'fisica'
  | 'quimica'
  | 'matematicas'
  | 'biologia'
  | 'quimica-organica'
  | 'teoria-control'
  | 'circuitos';

export interface Materia {
  id: MateriaId;
  nombre: string;
  descripcion: string;
  temas: string[];
  duracion: string;
  icon: typeof Atom;
  accent: 'lila' | 'rosa';
}

export interface Nivel {
  id: 'preparatoria' | 'universidad';
  nombre: string;
  subtitle: string;
  descripcion: string;
  icon: typeof GraduationCap;
  materias: Materia[];
}

export const niveles: Nivel[] = [
  {
    id: 'preparatoria',
    nombre: 'Preparatoria',
    subtitle: 'Para estudiantes de bachillerato',
    descripcion:
      'Refuerza las materias que más pesan en tu promedio. Sesiones claras, prácticas y sin rodeos para que entiendas de verdad.',
    icon: GraduationCap,
    materias: [
      {
        id: 'fisica',
        nombre: 'Física',
        descripcion:
          'Cinemática, dinámica, energía y electricidad explicadas desde cero, con ejercicios resueltos paso a paso.',
        temas: ['Cinemática', 'Dinámica', 'Energía y trabajo', 'Electricidad'],
        duracion: '8 sesiones',
        icon: Atom,
        accent: 'lila',
      },
      {
        id: 'quimica',
        nombre: 'Química',
        descripcion:
          'Tabla periódica, enlaces, reacciones y estequiometría, con ejemplos de la vida cotidiana.',
        temas: ['Estructura atómica', 'Enlaces', 'Reacciones', 'Estequiometría'],
        duracion: '8 sesiones',
        icon: FlaskConical,
        accent: 'rosa',
      },
      {
        id: 'matematicas',
        nombre: 'Matemáticas',
        descripcion:
          'Álgebra, geometría, trigonometría y funciones. De los fundamentos a aplicaciones, con mucha práctica.',
        temas: ['Álgebra', 'Geometría', 'Trigonometría', 'Funciones'],
        duracion: '10 sesiones',
        icon: Calculator,
        accent: 'lila',
      },
      {
        id: 'biologia',
        nombre: 'Biología',
        descripcion:
          'Célula, genética, evolución y ecosistemas. Conceptos claros con esquemas y ejercicios prácticos.',
        temas: ['La célula', 'Genética', 'Evolución', 'Ecosistemas'],
        duracion: '8 sesiones',
        icon: Dna,
        accent: 'rosa',
      },
    ],
  },
  {
    id: 'universidad',
    nombre: 'Universidad',
    subtitle: 'Para estudiantes universitarios',
    descripcion:
      'Materias troncales que suelen truncar el avance del semestre. Enfoque en exámenes y proyectos reales.',
    icon: Building2,
    materias: [
      {
        id: 'quimica-organica',
        nombre: 'Química Orgánica',
        descripcion:
          'Nomenclatura, mecanismos de reacción y síntesis, con esquemas y mnemotécnicas que sí funcionan.',
        temas: ['Nomenclatura', 'Estereoquímica', 'Mecanismos', 'Síntesis'],
        duracion: '12 sesiones',
        icon: Hexagon,
        accent: 'rosa',
      },
      {
        id: 'teoria-control',
        nombre: 'Teoría del Control',
        descripcion:
          'Sistemas LTI, estabilidad y control PID con ejercicios en Matlab y Simulink.',
        temas: ['Modelos LTI', 'Estabilidad', 'Lugar de raíces', 'Control PID'],
        duracion: '10 sesiones',
        icon: Gauge,
        accent: 'lila',
      },
      {
        id: 'circuitos',
        nombre: 'Teoría de los Circuitos',
        descripcion:
          'Análisis en DC y AC, fasores y circuitos de primer y segundo orden, con práctica constante.',
        temas: ['Leyes de Kirchhoff', 'Análisis nodal', 'Fasores', 'Respuesta transitoria'],
        duracion: '10 sesiones',
        icon: CircuitBoard,
        accent: 'rosa',
      },
    ],
  },
];

export interface Cuestionario {
  archivo: string;
  url: string;
}

export interface CuestionarioMateria {
  id: string;
  nombre: string;
  descripcion: string;
  icon: typeof Atom;
  accent: 'lila' | 'rosa';
  cuestionarios: Cuestionario[];
}

export interface CuestionarioNivel {
  id: 'preparatoria' | 'universidad';
  nombre: string;
  subtitle: string;
  descripcion: string;
  icon: typeof GraduationCap;
  materias: CuestionarioMateria[];
}

const baseCuestionarios = 'https://jannie23.github.io/MentesBrillantes/';

function crearCuestionarios(archivos: string[]): Cuestionario[] {
  return archivos.map((archivo) => ({
    archivo,
    url: `${baseCuestionarios}${encodeURIComponent(archivo)}`,
  }));
}

export const cuestionarios: CuestionarioNivel[] = [
  {
    id: 'preparatoria',
    nombre: 'Ingreso a Preparatoria',
    subtitle: 'Cuestionarios de admisión ECOEMS',
    descripcion:
      'Pon a prueba tus conocimientos antes del examen de ingreso a preparatoria.',
    icon: GraduationCap,
    materias: [
      {
        id: 'fisica',
        nombre: 'Física',
        descripcion: 'Cinemática, dinámica y energía a nivel bachillerato.',
        icon: Atom,
        accent: 'lila',
        cuestionarios: crearCuestionarios([
          'ECOEMS_SEM2_Fisica.html',
          'ECOEMS_SEM4_Fisica.html',
          'ECOEMS_S6_Fisica.html',
          'ECOEMS_S9_Fisica.html',
          'ECOEMS_S10_Sabatino_Fisica.html',
        ]),
      },
      {
        id: 'matematicas',
        nombre: 'Matemáticas',
        descripcion: 'Álgebra, geometría y trigonometría esenciales.',
        icon: Calculator,
        accent: 'rosa',
        cuestionarios: crearCuestionarios([
          'ECOEMS_SEM2_Matematicas.html',
          'ECOEMS_SEM4_Matematicas.html',
          'ECOEMS_S10_Sabatino_Mate.html',
        ]),
      },
      {
        id: 'biologia',
        nombre: 'Biología',
        descripcion: 'Célula, genética y procesos biológicos fundamentales.',
        icon: Dna,
        accent: 'lila',
        cuestionarios: crearCuestionarios([
          'ECOEMS_S6_Biologia.html',
          'ECOEMS_S9_Biologia.html',
        ]),
      },
    ],
  },
  {
    id: 'universidad',
    nombre: 'Ingreso a Universidad',
    subtitle: 'Cuestionarios de admisión superior',
    descripcion:
      'Prepárate para el examen de admisión universitario con práctica por materia.',
    icon: Building2,
    materias: [
      {
        id: 'quimica',
        nombre: 'Química',
        descripcion: 'Química general y orgánica para examen de admisión.',
        icon: FlaskConical,
        accent: 'rosa',
        cuestionarios: crearCuestionarios([
          'SUP_S5_Química.html',
          'SUP_SEM7_Quimica.html',
          'SUP_S8_Quimica.html',
          'SUP_S9_Quimica.html',
        ]),
      },
      {
        id: 'fisica',
        nombre: 'Física',
        descripcion: 'Mecánica, electricidad y óptica a nivel avanzado.',
        icon: Atom,
        accent: 'lila',
        cuestionarios: crearCuestionarios([
          'SUPERIOR_SEM2_Fisica.html',
          'SUPERIOR_SEM3_Fisica.html',
          'SUP_S4_Fisica.html',
          'SUP_S6_Fisica.html',
          'SUP_S9_Fisica.html',
        ]),
      },
      {
        id: 'matematicas-algebra',
        nombre: 'Matemáticas / Álgebra',
        descripcion: 'Álgebra superior, cálculo y probabilidad.',
        icon: Calculator,
        accent: 'rosa',
        cuestionarios: crearCuestionarios([
          'SUPERIOR_SEM2_Matematicas.html',
          'SUPERIOR_SEM3_Matematicas.html',
          'SUP_S4_Algebra.html',
          'SUP_S5_Matematicas.html',
          'SUP_SEM7_Matematicas.html',
          'SUP_S10_Mate.html',
        ]),
      },
      {
        id: 'biologia',
        nombre: 'Biología',
        descripcion: 'Biología celular, genética y fisiología a nivel superior.',
        icon: Microscope,
        accent: 'lila',
        cuestionarios: crearCuestionarios([
          'SUP_S6_Biologia.html',
          'SUP_S8_Biologia.html',
        ]),
      },
      {
        id: 'ingles',
        nombre: 'Inglés',
        descripcion: 'Comprensión y habilidades de inglés para admisión.',
        icon: Languages,
        accent: 'rosa',
        cuestionarios: crearCuestionarios(['SUP_S10_Ingles.html']),
      },
    ],
  },
];
