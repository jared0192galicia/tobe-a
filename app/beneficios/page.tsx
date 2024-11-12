"use client"
import ChatBot from '@/components/chatbot';
import Header from '@/components/header';
import { useEffect } from 'react';

export default function Benefits() {

  useEffect(() => {
    document.title = 'Tobeña - Beneficios';
  }, []);

  return (
    <>
      <Header></Header>
      <ChatBot></ChatBot>
      <section className="bg-light-blue py-10">
        <div className="w-[90%] mx-auto text-center">
          <h2 className="text-terracotta-pink text-4xl font-bold mb-4">
            Beneficios
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            En Tobeña, buscamos ser un intermediario regulado que apoya a los
            artesanos sin cobrar comisiones excesivas. Así, logramos que los
            consumidores obtengan productos de calidad a precios justos, y que
            los artesanos incrementen sus ingresos directamente, generando un
            impacto positivo en sus comunidades.
          </p>
        </div>

        <section className="w-[90%] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-sky-900 text-3xl font-semibold mb-4">
              Para Artesanos
            </h3>
            <ul className="text-gray-700 list-disc list-inside">
              <li>
                <strong>Cursos de Capacitación:</strong> Ofrecemos formación
                continua en áreas como finanzas, exportación y marketing para
                potenciar sus habilidades.
              </li>
              <li>
                <strong>Soporte Técnico:</strong> Brindamos asistencia en el uso
                de nuestra plataforma para facilitar su experiencia en ventas
                online.
              </li>
              <li>
                <strong>Gestión de Ventas:</strong> Simplificamos el proceso de
                ventas para que los artesanos puedan concentrarse en lo que
                hacen mejor: crear.
              </li>
            </ul>
          </div>

          <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-sky-900 text-3xl font-semibold mb-4">
              Para Consumidores
            </h3>
            <ul className="text-gray-700 list-disc list-inside">
              <li>
                <strong>Compras Seguras y Directas:</strong> Nuestra plataforma
                garantiza que las compras lleguen directamente del productor al
                cliente, eliminando intermediarios.
              </li>
              <li>
                <strong>Apoyo a Artesanos:</strong> Al comprar en Tobeña, los
                consumidores apoyan el comercio justo, beneficiando directamente
                a las familias de artesanos.
              </li>
              <li>
                <strong>Productos Auténticos y Únicos:</strong> Ofrecemos piezas
                artesanales auténticas que reflejan la cultura y tradición de
                Oaxaca.
              </li>
            </ul>
          </div>
        </section>
      </section>
    </>
  );
}
