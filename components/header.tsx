import cn from '@/utilities/clsx';
import { useRouter } from 'next/navigation';
import { MdContactSupport, MdEmail, MdHome } from 'react-icons/md';

export default function Header() {
  const router = useRouter();

  return (
    <>
      <header
        className={cn(
          'flex w-full justify-between items-center py-6 px-4 bg-white text-gray-700',
          'md:justify-around md:py-10'
        )}
      >
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => router.push('/')}
        >
          <span className="hidden sm:inline">La Empresa</span>
          <MdHome className="text-lg sm:text-xl" />
        </div>
        <h1 className="text-3xl md:text-5xl text-wine-red">Tobeña</h1>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => router.push('/soporte')}
        >
          <span className="hidden sm:inline">Soporte</span>
          <MdContactSupport className="text-lg sm:text-xl" />
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
          >
            Sobre Nosotros
          </a>
          <div className="h-6 w-px bg-gray-200 hidden md:block"></div>
          <a
            href="#opcion4"
            className="hover:text-terracotta-pink text-gray-600 font-light text-sm md:text-lg"
          >
            Beneficios
          </a>
        </div>
      </nav>

      <div className="w-[90%] border border-solid bg-gray-300 mx-auto mt-4"></div>
    </>
  );
}
