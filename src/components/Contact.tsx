import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="py-16 pattern-topography">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center font-serif mb-12 text-amber-700">
          Visit Us Today
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left side with map */}
          <div className="lg:col-span-3 bg-white rounded-lg shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.7901922890696!2d121.11190241144743!3d14.207059786176636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd63110c3e1df3%3A0x59207dfd5052c706!2sBakemart%20Bakeshop%20%26%20Cafe!5e0!3m2!1sen!2sph!4v1735811705352!5m2!1sen!2sph"
              className="w-full h-96"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Right side with contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform ">
              <div className="flex items-center">
                <Clock className="w-8 h-8 text-amber-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2 text-lg">Hours</h3>
                  <p className="text-gray-600">Mon-Sat: 10am - 8pm</p>
                  <p className="text-gray-600">Sun: 10am - 6pm</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-transform ">
              <div className="flex items-center">
                <MapPin className="w-8 h-8 text-amber-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2 text-lg">Location</h3>
                  <p className="text-gray-600">Don Bosco Street Purok 1, 0134B</p>
                  <p className="text-gray-600">Calamba, 4027 Laguna</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-transform ">
              <div className="flex items-center">
                <Phone className="w-8 h-8 text-amber-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2 text-lg">Contact</h3>
                  <p className="text-gray-600">0947 322 8675</p>
                  <p className="text-gray-600">bakemart.bakeshop@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}