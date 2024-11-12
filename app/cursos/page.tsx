'use client';

import ChatBot from '@/components/chatbot';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { useEffect } from 'react';

export default function Home() {
  
  useEffect(() => {
    document.title = 'Tobeña - Capacitación';
  }, []);

  return (
    <>
      <Header />
      <ChatBot />
      <section className="bg-white">
        <div className="w-[90%] border border-solid bg-gray-300 m-auto"></div>

        {/* Cursos de Capacitación */}
        <section className="my-12 px-8">
          <h2 className="text-terracotta-pink text-3xl text-center mb-6">
            Cursos de Capacitación
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Curso 1: Apoyos FONART */}
            <div className="bg-ivory-light p-6 border-2 border-wine-red rounded-lg shadow-lg">
              <h3 className="text-xl text-olive-dark font-semibold mb-4">
                Apoyos FONART
              </h3>
              <p className="text-gray-700 mb-4">
                Capacitación integral, asistencia técnica, apoyos para impulsar
                la producción, y más.
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Capacitación integral y asistencia técnica</li>
                <li>Apoyos para impulsar la producción</li>
                <li>Apoyos para la salud ocupacional</li>
                <li>Acopio de artesanías</li>
                <li>Promoción artesanal en ferias y exposiciones</li>
                <li>Concursos de arte popular</li>
                <li>
                  Desarrollo de espacios artesanales en destinos turísticos
                </li>
                <li>Proyectos artesanales estratégicos</li>
              </ul>
              <a
                href="https://www.fonart.gob.mx/gobmx/t005.php"
                target="_blank"
                rel="noopener noreferrer"
                className="text-olive-dark hover:text-terracotta-pink font-semibold"
              >
                Más información sobre Apoyos FONART
              </a>
            </div>

            {/* Curso 2: Consejos para tu bolsillo */}
            <div className="bg-ivory-light p-6 border-2 border-wine-red rounded-lg shadow-lg">
              <h3 className="text-xl text-olive-dark font-semibold mb-4">
                Consejos para tu bolsillo
              </h3>
              <p className="text-gray-700 mb-4">
                Aprende sobre la inflación y cómo puede afectar tus finanzas
                personales.
              </p>
              <a
                href="https://www.gob.mx/condusef/articulos/sabes-que-es-la-inflacion?idiom=es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-olive-dark hover:text-terracotta-pink font-semibold"
              >
                Más información sobre Consejos para tu bolsillo
              </a>
            </div>

            {/* Curso 3: Diplomado en educación financiera */}
            <div className="bg-ivory-light p-6 border-2 border-wine-red rounded-lg shadow-lg">
              <h3 className="text-xl text-olive-dark font-semibold mb-4">
                Diplomado en educación financiera
              </h3>
              <p className="text-gray-700 mb-4">
                Diplomado que te ayuda a mejorar tus conocimientos sobre
                educación financiera.
              </p>
              <a
                href="https://inscripcion-diplomado.condusef.gob.mx/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-olive-dark hover:text-terracotta-pink font-semibold"
              >
                Más información sobre el Diplomado
              </a>
            </div>

            {/* Curso 4: Proyecto Minerva */}
            <div className="bg-ivory-light p-6 border-2 border-wine-red rounded-lg shadow-lg">
              <h3 className="text-xl text-olive-dark font-semibold mb-4">
                Proyecto Minerva
              </h3>
              <p className="text-gray-700 mb-4">
                Proporciona herramientas y conocimientos a mujeres para
                fortalecer sus capacidades financieras y mejorar su calidad de
                vida.
              </p>
              <a
                href="https://webappsos.condusef.gob.mx/EducaTuCartera/minerva.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-olive-dark hover:text-terracotta-pink font-semibold"
              >
                Más información sobre Proyecto Minerva
              </a>
            </div>

            {/* Curso 5: Educación Financiera para Todos */}
            <div className="bg-ivory-light p-6 border-2 border-wine-red rounded-lg shadow-lg">
              <h3 className="text-xl text-olive-dark font-semibold mb-4">
                Educación Financiera para Todos
              </h3>
              <p className="text-gray-700 mb-4">
                Curso en línea que brinda información sencilla sobre finanzas
                personales y elabora un plan financiero.
              </p>
              <a
                href="https://cursoenlinea.condusef.gob.mx/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-olive-dark hover:text-terracotta-pink font-semibold"
              >
                Más información sobre Educación Financiera para Todos
              </a>
            </div>

            {/* Curso 6: Curso de emprendimiento */}
            <div className="bg-ivory-light p-6 border-2 border-wine-red rounded-lg shadow-lg">
              <h3 className="text-xl text-olive-dark font-semibold mb-4">
                Curso de emprendimiento
              </h3>
              <p className="text-gray-700 mb-4">
                Desarrolla ideas de negocio y competencias en gestión
                empresarial.
              </p>
              <a
                href="https://emprendimiento.condusef.gob.mx/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="text-olive-dark hover:text-terracotta-pink font-semibold"
              >
                Más información sobre Curso de emprendimiento
              </a>
            </div>

            {/* Curso 7: Mujeres con propósito */}
            <div className="bg-ivory-light p-6 border-2 border-wine-red rounded-lg shadow-lg">
              <h3 className="text-xl text-olive-dark font-semibold mb-4">
                Mujeres con propósito
              </h3>
              <ul className="list-disc pl-5 mb-4">
                <li>Plan de vida</li>
                <li>Habilidades para el desempeño exitoso</li>
                <li>Redes y networking</li>
                <li>Finanzas personales y para pequeños negocios</li>
              </ul>
              <a
                href="https://www.mujeresconproposito.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-olive-dark hover:text-terracotta-pink font-semibold"
              >
                Más información sobre Mujeres con propósito
              </a>
            </div>

            {/* Curso 8: El ABC de tus finanzas */}
            <div className="bg-ivory-light p-6 border-2 border-wine-red rounded-lg shadow-lg">
              <h3 className="text-xl text-olive-dark font-semibold mb-4">
                El ABC de tus finanzas
              </h3>
              <ul className="list-disc pl-5 mb-4">
                <li>Presupuesto personal</li>
                <li>Ahorro</li>
                <li>Inversiones básicas</li>
                <li>Seguro de vida y protección financiera</li>
                <li>Control de deudas</li>
                <li>Planificación para la jubilación</li>
                <li>Herramientas digitales</li>
                <li>Educación financiera</li>
                <li>Impuestos</li>
                <li>Finanzas sostenibles</li>
              </ul>
              <a
                href="https://ideasmexico.com.mx/educacion_financiera/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-olive-dark hover:text-terracotta-pink font-semibold"
              >
                Más información sobre El ABC de tus finanzas
              </a>
            </div>

            {/* Curso 9: Mi aventura financiera */}
            <div className="bg-ivory-light p-6 border-2 border-wine-red rounded-lg shadow-lg">
              <h3 className="text-xl text-olive-dark font-semibold mb-4">
                Mi aventura financiera
              </h3>
              <a
                href="https://forma.banxico.org.mx/bf/course/view.php?id=28"
                target="_blank"
                rel="noopener noreferrer"
                className="text-olive-dark hover:text-terracotta-pink font-semibold"
              >
                Más información sobre Mi aventura financiera
              </a>
            </div>

            {/* Curso 10: Toma de decisiones */}
            <div className="bg-ivory-light p-6 border-2 border-wine-red rounded-lg shadow-lg">
              <h3 className="text-xl text-olive-dark font-semibold mb-4">
                Toma de decisiones
              </h3>
              <p className="text-gray-700 mb-4">
                Enfocado en jóvenes, ayuda a desarrollar habilidades de análisis
                y a tomar decisiones basadas en información financiera.
              </p>
              <a
                href="https://www.cnbv.gob.mx/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-olive-dark hover:text-terracotta-pink font-semibold"
              >
                Más información sobre Toma de decisiones
              </a>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
