import cn from '@/utilities/clsx';
import { useRouter } from 'next/navigation';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { IoIosSend } from 'react-icons/io';

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="bg-purple-950 text-white py-12 flex justify-evenly items-center relative">
      <div className="flex flex-col items-center gap-1">
        <p className="text-lg pb-1">Síguenos</p>
        <div className="flex gap-2">
          <FaFacebookF className="cursor-pointer text-sm" />
          <FaInstagram className="cursor-pointer text-sm" />
        </div>
      </div>
      <div className="flex border-b border-solid border-gray-200 items-center text-gray-300">
        <input
          type="text"
          placeholder="Correo electrónico"
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
            console.log('Hola');
          }}
        >
          <IoIosSend className="cursor-pointer" />
        </div>
      </div>
      <p className="text-xs absolute bottom-3 left-3 md:left-24">© 2024 Tobeña A.C.</p>
      <div className='absolute w-full bottom-2 h-auto flex justify-between items-center'>
        <img src="/images/bird-l.png" alt="" className='w-0 md:w-20' />
        <img src="/images/flower.png" alt="" className='w-0 md:w-32' />
        <img src="/images/bird-r.png" alt="" className='w-0 md:w-20' />
      </div>
      <div className='absolute md:hidden w-full top-2 h-auto flex justify-between items-center'>
        <img src="/images/flower-decoration.png" alt="" className='w-24' />
        <img src="/images/flower-decoration.png" alt="" className='w-24' />
      </div>
    </footer>
  );
}
