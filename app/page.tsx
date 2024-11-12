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
      <section className="bg-white overflow-x-hidden">
        <h2 className="text-terracotta-pink text-3xl text-center pt-3">
          Publica, vende y envía
        </h2>
        <p className="text-gray-700 text-center">
          Llega a todo tu público con la plataforma de ventas Tobeña
        </p>
        <div className="w-[90%] border border-solid bg-gray-300 m-auto my-10"></div>
        {/* <div className="w-screen border border-solid bg-gray-300 my-10"></div> */}
        <section className="flex justify-between md:px-[8%] xl:px-[13%] flex-col lg:flex-row gap-10">
          <picture>
            <img src="/images/sombreros.png" alt="" />
          </picture>
          <div className="flex shadow-lg shadow-gray-500 h-full">
            <picture className="flex-shrink-0 w-1/2 h-full">
              <img
                src="/images/costales.png"
                alt=""
                className="object-cover w-full h-full"
              />
            </picture>
            <div className="pl-3 flex flex-col justify-center pr-8 w-1/2">
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
                  'border border-solid border-sky-950 px-5 py-1',
                  'rounded-full hover:bg-sky-950',
                  'text-sky-950 hover:text-white',
                  'transition-colors duration-300'
                )}
              >
                Contáctanos
              </button>
            </div>
          </div>
        </section>
        <div className="my-20 border border-solid mx-20"></div>
        <div className="w-screen flex justify-between lg:px-[13%] flex-col lg:flex-row">
          <section className="pl-8 md:pl-20">
            <h3 className="text-3xl text-olive-dark">Artesanías desde</h3>
            <div className="hover:bg-gray-300 p-2 pt-0 cursor-pointer transition-colors duration-300">
              <div className="flex items-center gap-4 mt-5">
                <FaLocationDot className="text-2xl" />
                <p className="text-wine-red text-lg">San Cristóbal Amatlán</p>
              </div>
              <p className="lg:text-center w-full text-gray-600 text-sm">
                C.P. 70835, OAXACA
              </p>
            </div>
          </section>
          <div className="w-[90%] m-auto h-[350px] md:h-[450px] md:w-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15316.369643449772!2d-96.4104658!3d16.3182218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85b8acca86ceb0e3%3A0xf43b1f0aea5ea409!2s70835%20San%20Crist%C3%B3bal%20Amatl%C3%A1n%2C%20Oax.!5e0!3m2!1ses-419!2smx!4v1731272617646!5m2!1ses-419!2smx"
              style={{ width: '100%', height: '100%' }}
              loading="lazy"
              className="border border-solid border-gray-400"
            ></iframe>
          </div>
        </div>
      </section>
      <div className="my-14"></div>
      <Footer></Footer>
    </>
  );
}
