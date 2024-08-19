import mongoose from "mongoose";
import Course from "./model/Course";

const seedDB = async () => {
  try {
    // Crear el curso de Desarrollo Front-End con módulos y clases embebidos
    const frontEndCourse = new Course({
      title: "Desarrollo Front-End",
      description:
        "Un curso completo que cubre todos los aspectos del desarrollo web front-end.",
      modules: [
        {
          title: "Git y GitHub",
          classes: [
            {
              className: "Introducción a Git",
              description:
                "Aprende los conceptos básicos del control de versiones con Git.",
              duration: "1 hora",
            },
            {
              className: "Configuración de Git y GitHub",
              description:
                "Cómo instalar y configurar Git y conectarlo con GitHub.",
              duration: "1 hora",
            },
            {
              className: "Comandos Básicos de Git",
              description:
                "Introducción a los comandos esenciales de Git como commit, push, pull y clone.",
              duration: "1.5 horas",
            },
            {
              className: "Ramas y Fusión",
              description: "Aprende a crear y gestionar ramas en Git.",
              duration: "2 horas",
            },
            {
              className: "Resolución de Conflictos de Fusión",
              description: "Comprender y resolver conflictos de fusión en Git.",
              duration: "1.5 horas",
            },
            {
              className: "Técnicas Avanzadas de Git",
              description:
                "Profundización en rebase, cherry-pick y otros comandos avanzados de Git.",
              duration: "2 horas",
            },
            {
              className: "Flujos de Trabajo en Git",
              description:
                "Explora diferentes flujos de trabajo en Git como Git Flow y GitHub Flow.",
              duration: "2 horas",
            },
          ],
        },
        {
          title: "HTML",
          classes: [
            {
              className: "Fundamentos de HTML",
              description: "Introducción a HTML y las etiquetas básicas.",
              duration: "1 hora",
            },
            {
              className: "Estructura del Documento HTML",
              description: "Comprender la estructura de un documento HTML.",
              duration: "1 hora",
            },
            {
              className: "Formularios y Tablas en HTML",
              description: "Aprende a crear formularios y tablas en HTML.",
              duration: "1.5 horas",
            },
            {
              className: "HTML Semántico",
              description:
                "Uso de etiquetas semánticas para mejorar la accesibilidad.",
              duration: "1 hora",
            },
            {
              className: "Multimedia en HTML",
              description:
                "Incorporar imágenes, videos y audio en tus páginas web.",
              duration: "1 hora",
            },
            {
              className: "Nuevos Elementos en HTML5",
              description:
                "Explora los nuevos elementos introducidos en HTML5.",
              duration: "1.5 horas",
            },
            {
              className: "Buenas Prácticas en HTML",
              description:
                "Consejos y mejores prácticas para escribir HTML limpio y mantenible.",
              duration: "1 hora",
            },
          ],
        },
        {
          title: "CSS",
          classes: [
            {
              className: "Fundamentos de CSS",
              description:
                "Introducción a CSS y cómo estilizar elementos HTML.",
              duration: "1.5 horas",
            },
            {
              className: "Selectores y Especificidad",
              description:
                "Comprender los selectores de CSS y el concepto de especificidad.",
              duration: "1.5 horas",
            },
            {
              className: "Modelo de Caja y Diseño",
              description:
                "Aprende sobre el modelo de caja de CSS y cómo estructurar diseños.",
              duration: "2 horas",
            },
            {
              className: "Flexbox",
              description: "Aprende a crear diseños flexibles usando Flexbox.",
              duration: "2 horas",
            },
            {
              className: "CSS Grid",
              description: "Crear diseños complejos utilizando CSS Grid.",
              duration: "2 horas",
            },
            {
              className: "Diseño Responsivo",
              description:
                "Creando diseños web responsivos que funcionen en todos los dispositivos.",
              duration: "2 horas",
            },
            {
              className: "Variables en CSS",
              description:
                "Aprende a usar variables en CSS para optimizar tus estilos.",
              duration: "1 hora",
            },
            {
              className: "Animaciones en CSS",
              description:
                "Añadiendo animaciones y transiciones a tus diseños web.",
              duration: "1.5 horas",
            },
            {
              className: "Preprocesadores de CSS",
              description:
                "Introducción a Sass y otros preprocesadores de CSS.",
              duration: "1.5 horas",
            },
          ],
        },
        {
          title: "JavaScript",
          classes: [
            {
              className: "Fundamentos de JavaScript",
              description:
                "Introducción al lenguaje de programación JavaScript.",
              duration: "2 horas",
            },
            {
              className: "Tipos de Datos y Variables",
              description:
                "Comprender los tipos de datos en JavaScript y cómo usar variables.",
              duration: "1.5 horas",
            },
            {
              className: "Flujo de Control",
              description:
                "Aprende sobre condicionales, bucles y estructuras de control.",
              duration: "1.5 horas",
            },
            {
              className: "Funciones en JavaScript",
              description: "Definir y utilizar funciones en JavaScript.",
              duration: "1.5 horas",
            },
            {
              className: "Manipulación del DOM",
              description:
                "Aprende cómo interactuar con el DOM usando JavaScript.",
              duration: "1.5 horas",
            },
            {
              className: "Manejo de Eventos",
              description:
                "Responder a eventos de usuario como clics y pulsaciones de teclas.",
              duration: "1.5 horas",
            },
            {
              className: "JavaScript Asíncrono",
              description: "Comprender callbacks, promesas y async/await.",
              duration: "2 horas",
            },
            {
              className: "ES6 y Más Allá",
              description: "Características y sintaxis modernas de JavaScript.",
              duration: "2 horas",
            },
            {
              className: "Módulos de JavaScript",
              description: "Uso de módulos para organizar tu código.",
              duration: "1.5 horas",
            },
            {
              className: "Manejo de Errores en JavaScript",
              description:
                "Aprende a manejar errores de manera eficiente en JavaScript.",
              duration: "1.5 horas",
            },
          ],
        },
        {
          title: "React",
          classes: [
            {
              className: "Introducción a React",
              description:
                "Aprende los conceptos básicos de React y la arquitectura basada en componentes.",
              duration: "2 horas",
            },
            {
              className: "JSX y Renderizado",
              description: "Comprender JSX y cómo React renderiza componentes.",
              duration: "1.5 horas",
            },
            {
              className: "Estado y Props",
              description:
                "Comprender la gestión del estado y las props en React.",
              duration: "1.5 horas",
            },
            {
              className: "Ciclo de Vida de Componentes en React",
              description:
                "Aprende sobre los métodos de ciclo de vida de los componentes en React.",
              duration: "1.5 horas",
            },
            {
              className: "Manejo de Eventos en React",
              description:
                "Cómo manejar eventos como clics y envíos de formularios en React.",
              duration: "1.5 horas",
            },
            {
              className: "Hooks de React",
              description:
                "Aprende sobre React Hooks como useState, useEffect y hooks personalizados.",
              duration: "2 horas",
            },
            {
              className: "API de Contexto en React",
              description:
                "Gestión del estado global con la API de Contexto en React.",
              duration: "2 horas",
            },
            {
              className: "React Router",
              description: "Implementando navegación y enrutamiento en React.",
              duration: "1.5 horas",
            },
            {
              className: "Formularios y Validación en React",
              description:
                "Manejo de formularios y validación de entradas de usuario en React.",
              duration: "2 horas",
            },
            {
              className: "Optimización de Aplicaciones React",
              description: "Técnicas de optimización del rendimiento en React.",
              duration: "2 horas",
            },
          ],
        },
        {
          title: "Next.js",
          classes: [
            {
              className: "Introducción a Next.js",
              description:
                "Aprende sobre Next.js y el renderizado del lado del servidor.",
              duration: "2 horas",
            },
            {
              className: "Páginas y Enrutamiento en Next.js",
              description:
                "Comprender el sistema de enrutamiento basado en archivos en Next.js.",
              duration: "1.5 horas",
            },
            {
              className: "Rutas API en Next.js",
              description:
                "Crear y utilizar rutas API en aplicaciones Next.js.",
              duration: "1.5 horas",
            },
            {
              className: "Obtención de Datos en Next.js",
              description:
                "Aprende sobre métodos de obtención de datos como getStaticProps y getServerSideProps.",
              duration: "2 horas",
            },
            {
              className: "Rutas Dinámicas en Next.js",
              description:
                "Cómo implementar el enrutamiento dinámico en Next.js.",
              duration: "1.5 horas",
            },
            {
              className: "Estilos en Next.js",
              description:
                "Explora diferentes opciones de estilo en Next.js como CSS Modules y Styled Components.",
              duration: "1.5 horas",
            },
            {
              className: "Autenticación en Next.js",
              description:
                "Implementación de autenticación en una aplicación Next.js.",
              duration: "2 horas",
            },
            {
              className: "Despliegue de Aplicaciones Next.js",
              description: "Aprende a desplegar tu aplicación Next.js.",
              duration: "1.5 horas",
            },
            {
              className: "Internacionalización en Next.js",
              description: "Implementación de soporte multi-idioma en Next.js.",
              duration: "1.5 horas",
            },
            {
              className: "Middleware en API de Next.js",
              description: "Aprende a usar middleware en rutas API de Next.js.",
              duration: "1.5 horas",
            },
          ],
        },
      ],
    });

    await frontEndCourse.save();
    console.log("¡Base de datos sembrada exitosamente!");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    mongoose.connection.close();
  }
};

export default seedDB();
