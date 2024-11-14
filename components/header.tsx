import cn from '@/utilities/clsx';
import { useRouter } from 'next/navigation';
import { MdHome } from 'react-icons/md';

export default function Header() {
  const router = useRouter();

  return (
    <>
      <header
        className={cn(
          'relative w-full flex justify-between items-center py-6 px-4 bg-white text-gray-700',
          'md:justify-around md:py-10'
        )}
      >
        {/* Fondo de imágenes */}
        <div className="absolute inset-0 flex justify-between items-center">
          <div className="hidden md:block w-12 max-w-xs mx-auto">
            <img
              src="/images/left.png"
              alt="Left decoration"
              className="w-full h-auto object-cover"
              />
          </div>
          <div className="w-20 max-w-2xl mx-auto flex justify-center items-center flex-col ">
            <img
              src="/images/center.png"
              alt="Center decoration"
              className="w-full h-auto object-cover"
              />
              <h1 className="text-3xl md:text-5xl text-wine-red text-center">Tobeña</h1>
          </div>
          <div className="hidden md:block w-12 max-w-xs mx-auto">
            <img
              src="/images/right.png"
              alt="Right decoration"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Contenido del header */}
        <div className="relative z-10 flex w-full justify-between items-center">
          <div
            className="flex items-center gap-2 cursor-pointer mb-14"
            onClick={() => router.push('/')}
          >
            <span className="hidden sm:inline">Inicio</span>
            <MdHome className="text-3xl sm:text-xl" />
          </div>
          {/* <h1 className="text-3xl md:text-5xl text-wine-red">Tobeña</h1> */}
          <div className="flex items-center gap-2 cursor-pointer">
            {/* Aquí puedes agregar más íconos o contenido */}
          </div>
        </div>
      </header>

      <div className="w-[90%] border border-solid bg-gray-300 mx-auto"></div>

      {/* Navbar de navegación */}
      <nav className="w-[90%] mx-auto mt-4">
        <div
          className={cn(
            'flex flex-col items-center space-y-2',
            'md:flex-row md:justify-around md:space-y-0 md:space-x-4'
          )}
        >
          <a
            href="/cursos"
            className="hover:text-terracotta-pink text-gray-600 font-light text-sm md:text-lg"
          >
            Capacitación y Recursos
          </a>
          <div className="h-6 w-px bg-gray-200 hidden md:block"></div>
          <a
            href="/soporte"
            className="hover:text-terracotta-pink text-gray-600 font-light text-sm md:text-lg"
          >
            Soporte
          </a>
          <div className="h-6 w-px bg-gray-200 hidden md:block"></div>
          <a
            href="#opcion3"
            className="hover:text-terracotta-pink text-gray-600 font-light text-sm md:text-lg"
            onClick={() => router.push('/nosotros')}
          >
            Sobre Nosotros
          </a>
          <div className="h-6 w-px bg-gray-200 hidden md:block"></div>
          <a
            href="#opcion4"
            className="hover:text-terracotta-pink text-gray-600 font-light text-sm md:text-lg"
            onClick={() => router.push('/beneficios')}
          >
            Beneficios
          </a>
        </div>
      </nav>

      <div className="w-[90%] border border-solid bg-gray-300 mx-auto mt-4"></div>
    </>
  );
}
