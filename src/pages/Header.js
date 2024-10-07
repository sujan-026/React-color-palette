import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Home, BookOpen, Mail } from "lucide-react";

const Header = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 shadow-md">
        <nav className="container mx-auto">
          <ul className="flex justify-center space-x-8">
            <li>
              <Link
                to="/"
                className="flex items-center text-white hover:text-yellow-200 transition-colors duration-200"
              >
                <Home className="mr-2" size={20} />
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="flex items-center text-white hover:text-yellow-200 transition-colors duration-200"
              >
                <BookOpen className="mr-2" size={20} />
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex items-center text-white hover:text-yellow-200 transition-colors duration-200"
              >
                <Mail className="mr-2" size={20} />
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto mt-8 px-4">
        <Outlet />
      </main>
    </>
  );
};

export default Header;