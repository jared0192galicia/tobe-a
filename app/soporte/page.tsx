'use client';
import React, { useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { FloatLabel } from 'primereact/floatlabel';
import { Button } from 'primereact/button';
import Header from '@/components/header';

export default function SupportForm() {
  
  useEffect(() => {
    document.title = 'Tobeña - Soporte';
  }, []);

  const handleSubmit = () => {
    // Aquí va la lógica de la llamada a la API REST para enviar el formulario.
    console.log('Formulario enviado a la API');
  };

  return (
    <>
      <Header></Header>
      <div className="relative min-h-screen flex items-center justify-center bg-ivory-light py-10 overflow-hidden">
        {/* Decoraciones de fondo */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-olive-dark rounded-full opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-terracotta-pink rounded-full opacity-20 transform translate-x-1/2 translate-y-1/2"></div>

        {/* Contenedor del formulario */}
        <div className="relative bg-white shadow-2xl rounded-lg p-8 w-full max-w-lg border border-desert-sand">
          <h2 className="text-2xl font-semibold text-wine-red mb-6 text-center">
            Soporte de Tobeña
          </h2>

          <p className="text-sm text-gray-500 text-center mb-8">
            Por favor llena el siguiente formulario y nuestro equipo de soporte
            se pondrá en contacto contigo a la brevedad.
          </p>

          <section className="space-y-6">
            {/* Nombre */}
            <FloatLabel>
              <InputText
                id="name"
                type="text"
                placeholder=" "
                className="w-full p-inputtext-sm bg-desert-sand/30 text-gray-700 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-terracotta-pink"
              />
              <label htmlFor="name" className="text-wine-red">
                Nombre
              </label>
            </FloatLabel>

            {/* Correo Electrónico */}
            <FloatLabel>
              <InputText
                id="email"
                type="email"
                placeholder=" "
                className="w-full p-inputtext-sm bg-desert-sand/30 text-gray-700 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-terracotta-pink"
              />
              <label htmlFor="email" className="text-wine-red">
                Correo Electrónico
              </label>
            </FloatLabel>

            {/* Asunto */}
            <FloatLabel>
              <InputText
                id="issue"
                type="text"
                placeholder=" "
                className="w-full p-inputtext-sm bg-desert-sand/30 text-gray-700 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-terracotta-pink"
              />
              <label htmlFor="issue" className="text-wine-red">
                Asunto
              </label>
            </FloatLabel>

            {/* Mensaje */}
            <FloatLabel>
              <InputTextarea
                id="message"
                placeholder=" "
                rows={5}
                className="w-full p-inputtextarea-sm bg-desert-sand/30 text-gray-700 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-terracotta-pink"
              />
              <label htmlFor="message" className="text-wine-red">
                Mensaje
              </label>
            </FloatLabel>

            {/* Botón Enviar */}
            <div className="flex justify-center">
              <Button
                label="Enviar"
                icon="pi pi-send"
                className="bg-wine-red text-white hover:bg-terracotta-pink font-semibold px-6 py-2 rounded-md"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
