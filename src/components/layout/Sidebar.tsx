import { NavLink } from 'react-router-dom';
import { Music, Mic, FlaskConical, Search, Library } from 'lucide-react';

const navItems = [
  { to: '/', icon: Music, label: 'Originals Studio' },
  { to: '/karaoke', icon: Mic, label: 'Karaoke & Sing-Along' },
  { to: '/voice-lab', icon: FlaskConical, label: 'Voice Lab' },
  { to: '/discover', icon: Search, label: 'Discover' },
  { to: '/my-studio', icon: Library, label: 'My Studio' },
];

const Sidebar = () => {
  return (
    <aside className='w-64 flex flex-col bg-black/80 text-white p-4 space-y-6'>
      <div className='flex items-center space-x-2 px-2'>
        <img src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/19646cec-918e-4d27-b53d-0fe72fc6d345/lunarvox-logo-rklg4ru-1765132863284.webp' alt='LunarVox Logo' className='h-10 w-10' />
        <span className='text-xl font-bold'>LUNARVOX</span>
      </div>
      <nav className='flex-grow'>
        <ul>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'bg-purple-600/30 text-white'
                      : 'text-gray-400 hover:bg-purple-600/10 hover:text-white'
                  }`
                }
              >
                <item.icon className='h-5 w-5' />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;