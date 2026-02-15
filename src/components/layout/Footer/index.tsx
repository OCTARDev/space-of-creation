

 import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Solutions Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Solutions
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>OCTAR Ecosystem</li>
              <li>VCLAB Virtual Labs</li>
              <li>Life Digital Environment</li>
              <li>AR Stories & Compaigns</li>
              <li>Learning Support</li>
              <li>Educational Planetarium</li>
              <li>VR Experiences</li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>Home</li>
              <li>Impact</li>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Contact
            </h3>
            <div className="space-y-2 text-gray-600">
              <p>
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:b2b@spaceforcreation.ae"
                  className="hover:underline"
                >
                  b2b@spaceforcreation.ae
                </a>
              </p>
              <p>
                <span className="font-medium">Phone:</span> +971 58 214 5330
              </p>
              <p>
                <span className="font-medium">Location:</span> Dubai, UAE
              </p>
              <p>
                <span className="font-medium">License:</span> 1571670
              </p>
            </div>
          </div>
        </div>
      </div>

           <div className="max-w-5xl mx-auto px-4 py-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Space of creation - All rights reserved.
          </p>
      </div>
    </footer>
  );
};

export default Footer;
  