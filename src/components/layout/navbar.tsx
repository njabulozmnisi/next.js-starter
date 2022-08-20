import SvgIcon from '../../core/svg-icons';
import { navigation } from '../../store/navigation';


export default function Navbar() {
  
  return (
    <>
      <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
        <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="#">
              <SvgIcon>heroicons-outline:star</SvgIcon>
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
      </nav>

    </>
  )
}
  