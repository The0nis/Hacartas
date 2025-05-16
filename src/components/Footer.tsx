
import React from "react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-10 px-4 md:px-10 lg:px-20 bg-white text-[#054D72]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#003049] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">HC</span>
              </div>
              <h3 className="ml-3 text-lg font-bold text-[#003049]">Há Cartas?</h3>
            </div>
            <p className="mt-2 text-sm">Make memories anywhere</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-[#003049]">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>About Us</li>
                <li>Team</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#003049]">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#003049]">Download</h4>
              <ul className="space-y-2 text-sm">
                <li>Android APK</li>
                <li>QR Code</li>
              </ul>
            </div>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">© {currentYear} Há Cartas?. All rights reserved.</p>
          <div className="flex space-x-4">
            <span className="text-sm">Terms</span>
            <span className="text-sm">Privacy</span>
            <span className="text-sm">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
