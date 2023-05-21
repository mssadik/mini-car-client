import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-10 bg-slate-800 text-yellow-50 px-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4">
            <div className="logo">
            <img className="w-1/2" src="https://i.ibb.co/hHMWDH2/logo.png" alt="" />
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <nav className="quick-links">
              <ul className="list-none">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/AllToy">All Toy</Link></li>
                <li><Link to="/signUp">Sign Up</Link></li>
              </ul>
            </nav>
          </div>
          <div className="w-full md:w-1/4">
            <div className="social-media flex">
              <a href="https://example.com/facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a className="mx-3" href="https://example.com/twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://example.com/instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <div className="">
              <input className='rounded-md w-60 mb-2' type="email" name="email" placeholder='Your Email' id="" /><br />
              <textarea className='rounded-md w-60' name="text" id="" placeholder='Write Your Message Here' cols="30" rows="3"></textarea><br />
              <button className='btn btn-sm btn-warning text-white'>Submit</button>
            </div>
          </div>
        </div>
        <hr className="my-6" />
        <div className="text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} The Mini car world. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
