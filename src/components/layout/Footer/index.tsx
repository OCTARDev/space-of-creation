import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-1 items-start">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.svg"
                alt="Space of Creation Logo"
                width={200}
                height={300}
                className="h-auto w-auto"
                priority
              />
            </Link>

            <p className="text-gray-600 leading-relaxed">
              Transforming objectives into immersive experiences through
              innovative AR, VR, and interactive technologies.
            </p>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Solutions
            </h3>
            <ul className="space-y-3 text-gray-600">
              {[
                "OCTAR Ecosystem",
                "VCLAB Virtual Labs",
                "Life Digital Environment",
                "AR Stories & Campaigns",
                "Learning Support",
                "Educational Planetarium",
                "VR Experiences",
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="hover:text-gray-900 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Company
            </h3>
            <ul className="space-y-3 text-gray-600">
              {[
                { name: "Home", link: "/" },
                { name: "Impact", link: "/impact" },
                { name: "About Us", link: "/about" },
                { name: "Contact Us", link: "/contact" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="hover:text-gray-900 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Contact
            </h3>
            <div className="space-y-3 text-gray-600 text-sm">
              <p>
                <span className="font-medium text-gray-900">Email:</span>{" "}
                <a
                  href="mailto:support@fadaatech.com"
                  className="hover:text-gray-900 transition-colors"
                >
                  support@fadaatech.com
                </a>
              </p>

              <p>
                <span className="font-medium text-gray-900">Phone:</span>{" "}
                <a
                  href="tel:+971547975397"
                  className="hover:text-gray-900 transition-colors"
                >
                  +971 54 797 5397
                </a>
              </p>

              <p>
                <span className="font-medium text-gray-900">Location:</span>{" "}
                Dubai, UAE
              </p>

              <p>
                <span className="font-medium text-gray-900">License:</span>{" "}
                1571670
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Space of Creation. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
