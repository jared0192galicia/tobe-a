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
      <section className="bg-white overflow-x-hidden relative">
        {/* Figura sólida detrás del título */}
        <div className="absolute top-0 left-0 h-48 w-48 bg-wine-red rounded-full opacity-80 translate-x-[-50%] translate-y-[-50%] blur-sm"></div>
        <h2 className="text-terracotta-pink text-4xl text-center pt-10">
          Publica, vende y envía
        </h2>
        <p className="text-gray-700 text-center text-lg">
          Llega a todo tu público con la plataforma de ventas Tobeña
        </p>
        <div className="w-[90%] border border-solid bg-gray-300 m-auto my-10"></div>

        <section
          className={cn(
            'flex justify-between md:px-[8%] xl:px-[13%] flex-col lg:flex-row gap-10 relative'
          )}
        >
          <div className="absolute top-[450px] -right-2 md:top-64 md:left-24 h-40 w-40 bg-wine-red md:bg-desert-sand rounded-full opacity-90 translate-x-[50%] blur-sm"></div>
          <picture> 
            <img
              src="/images/sombreros.png"
              alt="Sombreros"
              className="relative z-10"
            />
          </picture>

          <div className="flex shadow-lg shadow-gray-500 h-full bg-ivory-light rounded-lg overflow-hidden relative">
            {/* Scroll en el contenedor */}
            <div className="flex-shrink-0 w-1/2 h-full overflow-auto">
              <img
                src="/images/costales.png"
                alt="Costales"
                className="object-cover w-full h-full"
              />
            </div>
            <div
              className={cn(
                'pl-3 flex flex-col justify-center pr-8 w-1/2',
                'bg-gradient-to-br from-desert-sand to-white'
              )}
            >
              <span className="text-wine-red">Únete</span>
              <p className="text-3xl text-sky-900">
                Publica tus <br /> productos
              </p>
              <p className="text-gray-700 pt-5">
                Obtén un mayor alcance con <br /> nosotros!
              </p>
              <div className="py-5"></div>
              <button
                className={cn(
                  'border border-solid border-wine-red px-5 py-1 rounded-full',
                  'hover:bg-wine-red text-wine-red hover:text-white transition-colors duration-300'
                )}
              >
                Contáctanos
              </button>
            </div>
          </div>
        </section>

        <div className="my-20"></div>

        {/* Sección de información */}
        <div className="w-screen flex justify-between lg:px-[13%] flex-col lg:flex-row relative">
            <div
              className={cn('absolute bg-gray-100 w-1/4 h-full top-0 blur-sm z-0')}
            ></div>
          <section className="pl-8 md:pl-20 relative z-10">
            <h3 className="text-3xl text-olive-dark">Artesanías desde</h3>
            <div className="hover:bg-gray-300 p-2 pt-0 cursor-pointer transition-colors duration-300 rounded-lg">
              <div className="flex items-center gap-4 mt-5">
                <FaLocationDot className="text-2xl text-wine-red" />
                <p className="text-wine-red text-lg">San Cristóbal Amatlán</p>
              </div>
              <p className="lg:text-center w-full text-gray-600 text-sm">
                C.P. 70835, OAXACA
              </p>
            </div>
          </section>

          {/* Mapa con borde y figura de fondo */}
          <div className="w-[90%] m-auto h-[350px] md:h-[450px] md:w-[600px] relative">
            <div className="absolute top-0 left-0 h-full w-full border border-wine-red overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15316.369643449772!2d-96.4104658!3d16.3182218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85b8acca86ceb0e3%3A0xf43b1f0aea5ea409!2s70835%20San%20Crist%C3%B3bal%20Amatl%C3%A1n%2C%20Oax.!5e0!3m2!1ses-419!2smx!4v1731272617646!5m2!1ses-419!2smx"
                style={{ width: '100%', height: '100%' }}
                loading="lazy"
                className="border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <div className="my-14"></div>
      <Footer></Footer>
    </>
  );
}
