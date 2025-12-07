import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div 
      className="min-h-screen flex bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/19646cec-918e-4d27-b53d-0fe72fc6d345/cosmic-background-keu028x-1765132869246.webp')` }}
    >
      <Sidebar />
      <main className="flex-grow p-8 bg-black/50 backdrop-blur-sm overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;