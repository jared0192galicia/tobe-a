'use client';

import cn from '@/utilities/clsx';
import Image from 'next/image';
import { InputText } from 'primereact/inputtext';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
} from 'react-icons/fa6';
import { IoIosSend } from 'react-icons/io';
import { MdEmail, MdHome } from 'react-icons/md';

export default function Home() {
  return (
    <>
      <section className="h-[calc(100vh+500px)]">
        <header className="flex w-screen justify-around py-10 text-gray-700">
          <div className="flex justify-center items-center gap-2 cursor-pointer">
            <span>La Empresa</span>
            <MdHome />
          </div>
          <h1 className="text-[50px] text-wine-red">Tobeña</h1>
          <div className="flex justify-center items-center gap-2 cursor-pointer">
            <span>Contacto</span>
            <MdEmail />
          </div>
        </header>
        <div className="w-screen border border-solid bg-gray-300"></div>
        <h2 className="text-terracotta-pink text-3xl text-center pt-3">
          Publica, vende y entrega
        </h2>
        <p className="text-gray-700 text-center">
          Llega a todo tu publico con la plataforma de ventas Tobeña
        </p>
        <div className="w-screen border border-solid bg-gray-300 my-10"></div>
        <section className="flex justify-between px-[13%]">
          <picture>
            <img src="/images/sombreros.png" alt="" />
          </picture>
          <div className="flex shadow-lg shadow-gray-500">
            <picture>
              <img src="/images/costales.png" alt="" />
            </picture>
            <div className="pl-3 flex flex-col justify-center pr-8">
              <span className="text-wine-red">Únete</span>
              <p className="text-3xl text-sky-900">
                Publica tus <br /> productos
              </p>
              <p className="text-gray-700 pt-5">
                Obten un mayor alcance con <br /> nosotros!
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
                Contactanos
              </button>
            </div>
          </div>
        </section>
        <div className="py-20"></div>
        <div className="w-screen border border-solid flex justify-between px-[13%]">
          <section className="pl-20">
            <h3 className="text-3xl text-olive-dark">Artesanias desde</h3>
            <div className="hover:bg-gray-300 p-2 pt-0 cursor-pointer transition-colors duration-300">
              <div className="flex items-center gap-4 mt-5">
                <FaLocationDot className="text-2xl" />
                <p className="text-wine-red text-lg">San Cristobal Amatlán</p>
              </div>
              <p className="text-center w-full text-gray-600 text-sm">
                C.P 70835, OAXACA
              </p>
            </div>
          </section>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15316.369643449772!2d-96.4104658!3d16.3182218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85b8acca86ceb0e3%3A0xf43b1f0aea5ea409!2s70835%20San%20Crist%C3%B3bal%20Amatl%C3%A1n%2C%20Oax.!5e0!3m2!1ses-419!2smx!4v1731272617646!5m2!1ses-419!2smx"
            width="600"
            height="450"
            // style="border:0;"
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
            className="border border-solid border-gray-400"
          ></iframe>
        </div>
      </section>
      <footer className="bg-wine-red text-white py-10 flex justify-evenly items-center relative">
        <div className="flex flex-col items-center gap-1">
          <p className="text-lg pb-1">Siguenos</p>
          <div className="flex gap-2">
            <FaFacebookF className="cursor-pointer text-sm" />
            <FaInstagram className="cursor-pointer text-sm" />
            <FaLinkedinIn className="cursor-pointer text-sm" />
          </div>
        </div>
        {/* <InputText></InputText> */}
        <div className="flex border-b border-solid border-gray-200 items-center text-gray-300">
          <input
            type="text"
            placeholder="Correo electronico"
            className={cn(
              'bg-transparent', // Fondo transparente
              'text-base', // Tamaño de texto base
              'border-0', // Eliminar borde
              'placeholder-gray-300', // Placeholder en color blanco
              'focus:border-0', // Eliminar borde al enfocar
              'focus:outline-none', // Eliminar outline al enfocar
              'ring-0'
            )}
          />
          <div
            onClick={() => {
              console.log('hola');
            }}
          >
            <IoIosSend className="cursor-pointer" />
          </div>
        </div>
        <p className="text-xs absolute bottom-3 left-3">
          © 2024 Tobeña S.A. de C.V.
        </p>
      </footer>
    </>
  );
}
