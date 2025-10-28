
import { Link, useRouterState } from '@tanstack/react-router';

const Navbar: React.FC = () => {
  const router = useRouterState();

  return (
    <aside className="flex flex-col h-full w-48 border-r border-slate-200 bg-gray-700 p-4">
     
      <nav className="flex flex-col gap-2 flex-1">
        <Link
          to="/"
          className={`px-3 py-2 rounded-md text-sm font-medium ${
            router.location.pathname === '/'
              ? 'bg-white text-black'
              : 'text-white hover:text-yellow-500'
          }`}
        >
          Inbox
        </Link>
        <Link
          to="/archive"
          className={`px-3 py-2 rounded-md text-sm font-medium ${
            router.location.pathname === '/archive'
              ? 'bg-white text-black'
              : 'text-white hover:text-yellow-500'
          }`}
        >
          Archive
        </Link>
      </nav>

      <button className="mt-auto border border-slate-200 rounded-md px-3 py-2 text-sm text-white hover:bg-black">
        Logout
      </button>
    </aside>
  );
};

export default Navbar;