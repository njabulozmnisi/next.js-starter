import Image from "next/image";
import Link from "next/link";
import useSticky from '../../core/hooks/use-sticky';
import { navigation } from '../../store/navigation';


export default function Header() {
  
  const { headerSticky } = useSticky();

  return (
    <>
      <header id="header-sticky" className="absolute z-50 w-full">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-1/6">
              <div className="w-[180px] h-[100px] bg-gray-500 flex justify-center items-center rounded-b-lg"> 
                <Link href="/">
                  <div className="w-[113px] h-[35px] flex flex-col justify-center items-center text-white">
                    <span className="font-extrabold">Company Logo</span>
                    <span className="capitalize text-sm">Goes here</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="w-7/12">
              <div className="menu-area menu-padding">
                <div className="main-menu">
                  <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
                    <div className="hidden md:flex md:space-x-10">
                      {
                        navigation.main.map((item) => (
                          <a key={item.name} href={item.href} className="no-underline font-medium text-gray-50 hover:text-gray-900">
                            {item.name}
                          </a>
                        ))
                      }
                    </div>
                  </nav>
                </div>
              </div>
              {/* 
                Insert responsive menu here
              */}
            </div>
            <div className="w-3/12">
              <div className="flex">
                <div className="flex flex-col mr-10">
                  <span className="text-xs text-gray-50">Phone Number</span>
                  <a className="text-sm text-gray-50 no-underline" href="tel:+27821231234">082 123 1234</a>
                </div>
                <div className="flex flex-col mr-10">
                  <span className="text-xs text-gray-50">Free Quote/Consultancy</span>
                  <a className="text-sm text-gray-50 no-underline" href="mailto:email@domain.co.za">email@domain.co.za</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
  