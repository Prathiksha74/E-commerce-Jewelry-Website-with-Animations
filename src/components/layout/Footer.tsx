import React from 'react';
import { InstagramIcon, FacebookIcon, TwitterIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-pink-400 mb-4">
              ARTISAN GEMS
            </h3>
            <p className="text-gray-400 mb-4">
              Handcrafted jewelry pieces that tell a story and celebrate your
              unique style.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
          {/* Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Shop', 'Collections', 'About Us', 'Contact', 'FAQs'].map(item => <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-amber-400 transition-colors inline-block">
                    {item}
                  </a>
                </li>)}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPinIcon size={20} className="text-amber-400 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  123 Jewelry Lane, Artisan City, AC 12345
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon size={20} className="text-amber-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+91 9164150850</span>
              </li>
              <li className="flex items-center">
                <MailIcon size={20} className="text-amber-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">contact@artisangems.com</span>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">
              Subscribe to Our Newsletter
            </h4>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest collections and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input type="email" placeholder="Your email address" className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400" />
              <button type="submit" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-4 py-2 rounded-md transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Artisan Gems. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-4 text-sm">
            <a href="#" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Shipping Information
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;