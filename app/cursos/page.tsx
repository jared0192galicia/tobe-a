'use client';

import ChatBot from '@/components/chatbot';
import Footer from '@/components/footer';
import Header from '@/components/header';
import cn from '@/utilities/clsx';
import { FaLocationDot } from 'react-icons/fa6';

export default function Home() {
  return (
    <>
      <Header></Header>
      <ChatBot></ChatBot>
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
                <li>
                  Apoyos para la promoción artesanal en ferias y exposiciones
                </li>
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
          </div>
        </section>
      </section>
      <div className="my-14"></div>
      <Footer></Footer>
    </>
  );
}
