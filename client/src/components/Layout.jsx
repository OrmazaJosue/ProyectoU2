import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />

      <main className='flex flex-col flex-grow bg-gradient-to-tl from-gray-100 via-gray-300 to-white'>
        <Outlet />
      </main>

      <footer className='bg-gray-800 py-3 md:px-8 px-4 text-center text-white'>
        <p>&copy; {new Date().getFullYear()} Generador de certificados. Proyecto de Arquitectura de Software - grupo2.</p>
      </footer>
    </div>
  );
};

export default Layout;