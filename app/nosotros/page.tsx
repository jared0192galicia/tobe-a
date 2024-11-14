'use client';

import ChatBot from '@/components/chatbot';
import Footer from '@/components/footer';
import Header from '@/components/header';
import cn from '@/utilities/clsx';
import { useEffect } from 'react';
import { FaLocationDot } from 'react-icons/fa6';

export default function Home() {
  useEffect(() => {
    document.title = 'Tobeña - Nosotros';
  }, []);

  return (
    <>
      <Header></Header>
      <ChatBot></ChatBot>
      <section className="bg-white py-10">
        <div className="w-[90%] mx-auto text-center relative">
          <div className="absolute flex w-full -top-10 md:top-0 justify-between">
            <img
              src="/images/bird-l.png"
              alt="decoracion"
              className="w-10 md:w-24 z-10"
            />
            <img
              src="/images/bird-r.png"
              alt="decoracion"
              className="w-10 md:w-24 z-10"
            />
          </div>
          <h2 className="text-terracotta-pink text-4xl font-bold mb-4">
            Sobre Nosotros
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Somos Tobeña, una plataforma de comercio electrónico dedicada a
            promover y vender artesanías de palma hechas por las manos
            talentosas de las mujeres de San Cristóbal Amatlán. Nuestra misión
            es preservar y dar a conocer las técnicas ancestrales de estas
            artesanas, asegurando un comercio justo que beneficie directamente a
            sus familias y a toda su comunidad.
          </p>
        </div>

        <div className="w-[90%] mx-auto my-10 border-t border-solid border-gray-300"></div>

        <section className="w-[90%] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="flex-1">
            <h3 className="text-sky-900 text-3xl font-semibold mb-3">
              Nuestro Objetivo
            </h3>
            <p className="text-gray-700">
              En Tobeña, queremos generar un impacto social y económico
              positivo. Buscamos que cada artesana reciba un precio justo por su
              trabajo, eliminando intermediarios y creando oportunidades de
              desarrollo. Así, no solo contribuimos al bienestar económico de
              sus familias, sino también a la sostenibilidad y crecimiento de la
              comunidad de San Cristóbal Amatlán.
            </p>
          </div>

          <div className="flex-1">
            <h3 className="text-sky-900 text-3xl font-semibold mb-3">
              Nuestra Propuesta de Valor
            </h3>
            <p className="text-gray-700">
              Ofrecemos una plataforma de ventas que conecta a las artesanas con
              sus clientes, enfocándonos en productos auténticos y de alta
              calidad. Además, brindamos formación en finanzas personales,
              tecnología y exportación para que puedan competir en el mercado
              global, promoviendo al mismo tiempo la cultura y el arte
              oaxaqueño.
            </p>
          </div>
        </section>

        <div className="w-[90%] mx-auto my-10 border-t border-solid border-gray-300"></div>

        <section className="w-[90%] mx-auto text-center relative">
          <div className="absolute flex w-full -top-10 md:top-0 justify-between">
            <img
              src="/images/flower-decoration.png"
              alt="decoracion"
              className="w-24 md:w-44 z-10"
            />
            <img
              src="/images/flower-decoration.png"
              alt="decoracion"
              className="w-24 md:w-44 z-10"
            />
          </div>
          <h3 className="text-olive-dark text-3xl font-semibold mb-3">
            Nuestros Principales Valores
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Tobeña tiene un firme compromiso con el desarrollo sostenible.
            Estamos alineados con los Objetivos de Desarrollo Sostenible (ODS)
            de la ONU, especialmente en cuanto a la igualdad de género y la
            creación de comunidades sostenibles. Trabajamos para mejorar la
            calidad de vida de nuestras artesanas, promoviendo un comercio justo
            que impulse el crecimiento de sus familias y su comunidad.
          </p>
        </section>

        <div className="w-[90%] mx-auto my-10 border-t border-solid border-gray-300"></div>

        <section className="w-[90%] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-sky-900 text-3xl font-semibold mb-3">Misión</h3>
            <p className="text-gray-700">
              Utilizamos la tecnología para generar un comercio justo,
              impulsando comunidades sostenibles donde las artesanas puedan
              transmitir su cultura y arte a través de productos hechos a mano.
              Promovemos diseños innovadores que honran las técnicas
              ancestrales, preservando la riqueza cultural de Oaxaca.
            </p>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-sky-900 text-3xl font-semibold mb-3">Visión</h3>
            <p className="text-gray-700">
              Queremos que Tobeña se convierta en un referente de comercio justo
              en México, escalando nuestro modelo para incluir a otras
              comunidades de artesanos en Oaxaca y más allá, ayudando a
              preservar sus tradiciones y mejorando su calidad de vida.
            </p>
          </div>
        </section>
      </section>
      <Footer></Footer>
    </>
  );
}
