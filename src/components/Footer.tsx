
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-healthcare-blue rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">RT</span>
              </div>
              <span className="font-bold text-xl text-gray-900">RTEMPORARY Multiservices</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Providing affordable OPD healthcare membership plans since 2020. 
              Trusted by thousands for quality healthcare support.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 XXXXX-XXXXX</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="h-4 w-4 mr-2" />
                <span>support@rtemporary.com</span>
              </div>
              <p className="text-gray-600">Salt Lake, Kolkata, India</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Plans", href: "/plans" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-600 hover:text-healthcare-blue transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>OPD Health Plans</li>
              <li>Medical Consultations</li>
              <li>Health Checkups</li>
              <li>Expert Support</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 RTEMPORARY Multiservices Pvt. Ltd. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-500 text-sm">
                Founded in 2020 • Serving healthcare needs across India
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
