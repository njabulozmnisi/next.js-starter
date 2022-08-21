import SvgIcon from '../../core/svg-icons';
import { navigation } from '../../store/navigation';

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="no-underline text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <SvgIcon>{item.icon}</SvgIcon>
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">&copy; 2020 Workflow, Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}
