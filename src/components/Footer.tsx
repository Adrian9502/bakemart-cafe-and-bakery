import { Facebook, Instagram, Twitter } from 'lucide-react';
import { FaReact,FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Footer() {
  return (
   <footer className="bg-amber-800 text-white  playwrite-font py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold font-serif">BakeMart</h3>
              <p className="text-amber-300 text-xs">Handcrafted Daily, Baked to Perfection.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-amber-200 delius-font">About Us</a></li>
                <li><a href="#products" className="hover:text-amber-200 delius-font">Menu</a></li>
                <li><a href="#specialties" className="hover:text-amber-200 delius-font">Specialties</a></li>
                <li><a href="#contact" className="hover:text-amber-200 delius-font">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li className='delius-font'>Coffee</li>
                <li className='delius-font'>Fresh Pastries</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/bakemartbakeshop?mibextid=ZbWKwL" className="hover:text-amber-200"><Facebook /></a>
                <a href="#" className="hover:text-amber-200"><Instagram /></a>
                <a href="#" className="hover:text-amber-200"><Twitter /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-amber-700 mt-8 pt-8 text-center">
            <p>&copy; 2025 BakeMart Cafe & Bakery. All rights reserved.</p>
         
        </div>
      <div className="mt-10 italic">
        <span className="text-amber-200 text-sm font-sans flex  items-center justify-center space-x-2">
          <span className="mr-1">Made with </span>
          <span className="text-lg flex items-center space-x-2">
            <FaReact color="cyan" />
            <RiTailwindCssFill color="cyan" />
          </span>
          <span className="ml-2">by John Adrian Bonto. See more at my </span>
          <a href="https://github.com/Adrian9502" target="_blank" rel="noopener noreferrer" className="text-cyan-400 flex items-center space-x-1">
            <FaGithub />
            <span>GitHub</span>
          </a>
        </span>
      </div>


        </div>
      </footer>
  )
}
