import Image from "next/image";
import Link from "next/link";
import { AiOutlineAlignRight, AiOutlineMail, AiOutlineClose } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import React, {useState} from "react";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
  return (
    <div className="fixed w-full h-20 shadow-xl bg-white z-[100]">
      <div className="container w-full m-auto h-20">
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <Image
            src="/../public/assets/dslogo.png"
            alt=""
            width="125"
            height="50"
          />

          <div>
            <ul className="hidden md:flex">
              <li className="ml-10 text-sm uppercase font-semibold font-Poppins hover:border-b">
                <Link href="/">Home</Link>
              </li>
              <li className="ml-10 text-sm uppercase font-semibold font-Poppins hover:border-b">
                <Link href="/">About</Link>
              </li>
              <li className="ml-10 text-sm uppercase font-semibold font-Poppins hover:border-b">
                <Link href="/">Skill</Link>
              </li>
              <li className="ml-10 text-sm uppercase font-semibold font-Poppins hover:border-b">
                <Link href="/">Projects</Link>
              </li>
              <li className="ml-10 text-sm uppercase font-semibold font-Poppins hover:border-b">
                <Link href="/">LResume</Link>
              </li>
              <li className="ml-10 text-sm uppercase font-semibold font-Poppins hover:border-b">
                <Link href="/">Contact</Link>
              </li>
            </ul>

            <div
                onClick={handleNav} 
                className="md:hidden">
              <AiOutlineAlignRight size={25} />
            </div>
          </div>
        </div>
      </div>

      <div
       className={
        nav 
            ?  'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-slate-200 p-10 ease-in duration-500'
            :  ' fixed left-[-100%] top-0 w-full h-screen bg-slate-400 ease-in duration-400'
          }
       >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/assets/dslogo.png"
                alt=""
                width="87"
                height="35"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose/>
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>
                  contact
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/clint-briley-50056920a/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/fireclint'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
