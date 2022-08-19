import Icon from '@mui/material/Icon';
import { navigation } from '../../store/navigation';

export default function Navbar() {
  
  return (
    <>
      <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
        <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="#">
              <Icon>star</Icon>
            </a>
          </div>
        </div>
        <div className="hidden md:flex md:space-x-10">
          {
            navigation.main.map((item) => (
              <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                {item.name}
              </a>
            ))
          }
        </div>
        <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
          <span className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500"
            >
              Log in
            </a>
          </span>
        </div>
      </nav>

    </>
  )
}
  