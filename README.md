# 🎓 Plataforma Educativa & Cuestionarios de Ingreso - Jan García

¡Bienvenido/a al repositorio oficial del proyecto! Este sitio web fue desarrollado mediante **Vibe Coding** utilizando la interacción fluida entre herramientas de Inteligencia Artificial para crear una landing page interactiva orientada a la preparación académica y regularización de estudiantes de nivel secundaria, preparatoria y universidad.

---

## 🌐 Enlaces del Proyecto

* 🔗 **Sitio Web Publicado (Demo en línea):** [https://janregularizaciones.bolt.host/](https://janregularizaciones.bolt.host/)
* 📦 **Repositorio de Cuestionarios (GitHub Pages):** [https://jannie23.github.io/MentesBrillantes/](https://jannie23.github.io/MentesBrillantes/)

---

## 💻 Stack Tecnológico

* **Frontend:** React 18, TypeScript
* **Empaquetador y Build Tool:** Vite
* **Estilos y UI:** Tailwind CSS, PostCSS, Lucide React (iconografía)
* **Configuración de IA:** Bolt.new Environment Configuration (`.bolt`)

---

## 🛠️ Herramientas de Inteligencia Artificial Utilizadas

En el desarrollo de este proyecto se empleó un enfoque colaborativo multi-IA:

1. **Bolt.new (Generación de Código & Maquetación):**
   * Utilizado como entorno de desarrollo asistido (Vibe Coding) para la construcción de componentes React, maquetación UI/UX, integración de estilos en Tailwind CSS, lógica de navegación y resolución de errores de compilación en tiempo real.
2. **Gemini (Consultoría, Arquitectura & Ingeniería de Prompts):**
   * Utilizado como *Co-Pilot / Thought Partner* estratégico para la formulación de prompts estructurados (Rol, Tarea, Contexto y Restricciones), diseño de copywriting motivacional, arquitectura del mapeo de cuestionarios mediante JSON/JS, estrategia de redirección a WhatsApp y optimización visual de paleta pastel (rosa y lila).

---

## 📋 Descripción del Proyecto y Propósito

El sitio web de **Jan García** tiene un doble propósito educativo:
1. **Asesoría y Cursos de Regularización:** Presentar las modalidades de enseñanza (a domicilio o en salón de clases) para materias clave de ciencia y matemáticas en nivel Preparatoria y Universidad.
2. **Catálogo Interactivo de Cuestionarios de Práctica:** Permitir a los estudiantes acceder de forma estructurada e intuitiva a bancos de preguntas alojados en GitHub Pages para exámenes de admisión a nivel preparatoria (ECOEMS/COMIPEMS) y universidad (UNAM, IPN, UAM).

---

## 🎨 Paleta de Colores y Diseño UI/UX

* **Estilo:** Minimalista, fresco, accesible y enfocado al estudiante (*Soft Glassmorphism / Pastel Light*).
* **Colores Principales:** Rosa pastel y Lila radiante con degradados vibrantes (`from-pink-500 to-purple-600`).
* **Soportes Neutros:** Blanco puro (`#FFFFFF`) y fondo suave rosa tenue (`#FDF2F8`) para máxima legibilidad de lectura.

---

## 🧠 Ingeniería de Prompts e Iteración del Desarrollo

A continuación se detallan los prompts clave utilizados durante el flujo de trabajo iterativo, aplicando la estructura **Rol, Tarea, Contexto y Restricciones**:

### 1. Prompt Inicial de Generación (Bolt.new)
> **Rol:** Eres un desarrollador web senior con conocimientos de UI/UX.  
> **Tarea:** Desarrollar una landing page para que el usuario elija entre cursos de preparatoria y universidad.  
> **Contexto:** Soy una profesionista (Jan García) que brinda cursos de regularización y preparación para ingreso. Las sesiones pueden ser a domicilio o en salón de clases.  
> **Restricciones:** Estilo minimalista, usando colores pastel lila y rosa, optimizado para dispositivos móviles. Titular principal: "Esa materia difícil tiene solución. Empecemos hoy."

### 2. Prompt de Mapeo Técnico de Cuestionarios (Gemini ➔ Bolt.new)
> **Rol:** Desarrollador Frontend TypeScript.  
> **Tarea:** Estructurar un objeto de configuración para asociar etiquetas legibles con archivos estáticos en GitHub Pages sin renombrar los archivos existentes.  
> **Contexto:** Los cuestionarios están alojados en `https://jannie23.github.io/MentesBrillantes/` con nombres de archivo desordenados (ej. `SUP_S5_Química.html`, `ECOEMS_S10_Sabatino_Fisica.html`).  
> **Restricciones:** Mapear cada archivo para que el usuario vea etiquetas ordenadas y consecutivas ("Cuestionario de Química 1", "Cuestionario de Química 2", etc.) según el nivel (ECOEMS vs. Superior) y abrir en una pestaña nueva al hacer clic.

### 3. Prompt de Automatización de WhatsApp (Gemini ➔ Bolt.new)
> **Rol:** Ingeniero de Integración Web.  
> **Tarea:** Configurar mensajes predeterminados dinámicos para el botón de contacto por WhatsApp.  
> **Contexto:** El usuario puede solicitar informes generales o específicos según la sección desde donde hace clic.  
> **Restricciones:** El mensaje debe enviarse 100% redactado (sin plantillas vacías por llenar). Utilizar estrictamente `encodeURIComponent` en la URL (`https://wa.me/...`) para preservar saltos de línea y acentos. No usar emojis si provocan incompatibilidad de codificación (caracteres `?`).

---

## 🐞 Detección, Corrección de Errores y Gestión de Tokens

Durante el ciclo de desarrollo se identificaron y resolvieron los siguientes fallos técnicos:

1. **Incompatibilidad de Iconos en Lucide React:**
   * *Error:* Ocurrió un fallo de compilación al intentar usar el icono `Molecule`.
   * *Diagnóstico y Solución:* Se identificó que no existía en la librería Lucide. Se reemplazó por `Hexagon` y `Atom`, logrando una representación visual correcta del módulo de Química Orgánica.
2. **Corrupción de Caracteres en WhatsApp (Emojis como `?`):**
   * *Error:* Al transferir cadenas con emojis complejos mediante la URL de WhatsApp, algunos dispositivos interpretaban los símbolos como signos de interrogación (`?`).
   * *Diagnóstico y Solución:* Se refinaron los mensajes para eliminar emojis conflictivos y se aplicó la codificación limpia mediante `encodeURIComponent` sobre el texto plano enriquecido con acentos y signos de apertura.
3. **Alineación Tipográfica en Header:**
   * *Error:* La letra "J" inicial del logotipo en texto se apreciaba desplazada respecto al resto del nombre debido al espaciado serrado (*serif bearing*).
   * *Solución:* Se ajustó la propiedad de `tracking` en Tailwind CSS para equilibrar el *kerning* de la tipografía.
4. **Optimización de Tokens:**
   * La estructura de las consultas se segmentó previamente en **Gemini** antes de enviarse a **Bolt**, evitando prompts redundantes y logrando construir la landing page completa dentro de los límites de créditos gratuitos.

---

## 📁 Estructura del Repositorio

```text
.
├── .bolt/                  # Configuración del entorno e instrucciones de Bolt.new
├── src/                    # Código fuente de la aplicación React + TypeScript
│   ├── components/         # Componentes React (Header, CourseSelector, Cuestionarios, etc.)
│   ├── data/               # Configuración JSON y mapeo de URLs de GitHub Pages
│   ├── App.tsx             # Componente principal de la aplicación
│   ├── index.css           # Estilos globales y directivas de Tailwind
│   └── main.tsx            # Punto de entrada de la aplicación
├── .gitignore              # Archivos y carpetas excluidos del control de versiones
├── eslint.config.js        # Configuración de linter para código JavaScript/TypeScript
├── index.html              # Plantilla HTML principal
├── package.json            # Dependencias y scripts del proyecto
├── package-lock.json       # Árbol de dependencias exacto
├── postcss.config.js       # Configuración de procesado para Tailwind CSS
├── tailwind.config.js      # Personalización de la paleta de colores y tema Tailwind
├── tsconfig.json           # Configuración principal de TypeScript
├── tsconfig.app.json       # Configuración TypeScript específica de la app
├── tsconfig.node.json      # Configuración TypeScript para entornos Node/Vite
└── vite.config.ts          # Configuración del empaquetador Vite
