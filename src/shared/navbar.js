/* eslint-disable jsx-a11y/img-redundant-alt */
import { BsGithub } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './navbar.css';
export default function Navbar() {
  return (
    <>
      <div className="w-full flex-grow text-gray-800">
        <header className="flex items-center h-20 px-6 sm:px-10 bg-white shadow-lg w-full">
          <div className="flex flex-row items-center w-full max-w-md">
            <img
              className="rounded-md"
              width={60}
              src="/atlan-logo.png"
              alt="atlan-logo"
            />
            <h1 className="font-bold text-sm md:text-2xl px-2">SQL Editor</h1>
          </div>
             <div>
                <ul className="nav-links">
      <li>
        <Link to="/query-history">Query History</Link>
      </li>
      <li className="forward">
        <Link to="/query-available">Query Available</Link>
      </li>
      <li className="center">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="upward">
        <Link to="/about">About</Link>
      </li>
    </ul>
             </div>
          <div className="flex flex-shrink-0 items-center ml-auto">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/nimish-star"
            >
              <p className="relative inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
                <BsGithub className="mx-2" size={18} />
                View on GitHub
              </p>
            </a>
          </div>
        </header>
      </div>
    </>
  );
}
