
import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white py-12 px-4 justify-items-start">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div >
          <h3 className="font-bold mb-4 text-white">Sitelink</h3>
          <ul className="space-y-2 text-white">
            <li><a href="#" className="hover:underline text-white">Home</a></li>
            <li><a href="#" className="hover:underline  text-white">About Us</a></li>
            <li><a href="#" className="hover:underline  text-white">Consultation</a></li>
            <li><a href="#" className="hover:underline  text-white">Shop</a></li>
            <li><a href="#" className="hover:underline  text-white">Under 500</a></li>
            <li><a href="#" className="hover:underline  text-white">Combos</a></li>
            <li><a href="#" className="hover:underline  text-white">Best Seller</a></li>
            <li><a href="#" className="hover:underline  text-white">Book A Consult</a></li>
          </ul>
          <h3 className="font-bold mb-2 my-24 text-white">Subscribe to our emails</h3>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Email" 
              className="flex-grow bg-transparent border-b box-border border-white "
            />
            
          </div>
          
        </div>
        <div>
          <h3 className="font-bold mb-4 text-white">Our Policy</h3>
          <ul className="space-y-2 text-white">
            <li><a href="#" className=" text-white">Disclaimer</a></li>
            <li><a href="#" className="hover:underline  text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline  text-white">Return & Refund Policy</a></li>
            <li><a href="#" className="hover:underline text-white">Terms & Conditions</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-white">Quick Link</h3>
          <ul className="space-y-2 text-white">
            <li><a href="#" className="hover:underline  text-white">Partner</a></li>
            <li><a href="#" className="hover:underline text-white">Functional Medicine</a></li>
            <li><a href="#" className="hover:underline  text-white">Webinars</a></li>
            <li><a href="#" className="hover:underline  text-white">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-white">Contact us</h3>
          <p className="mb-4 text-white">B8 GK2 Enclave, Opp Masjid Mor, New Delhi-110048</p>
          
        </div>
      </div>
      <div className="container mx-auto mt-8 flex justify-between items-center text-white">
        <p className="text-sm text-white">© 2024, Disha Jelly Powered by Shopify</p>
       
      </div>
    </footer>
  );
};

export default Footer;
