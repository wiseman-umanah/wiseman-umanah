import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
  FaTiktok,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-between bg-black min-h-screen text-white">
      {/* Contact prompt */}
      <div className="space-y-4">
        <h2 className="text-3xl md:text-5xl font-light leading-tight">
          Got a brilliant idea in mind? Let’s turn it into something remarkable together.
        </h2>
        <div className="flex items-center gap-3 text-lg">
          <FaTelegramPlane className="text-white text-2xl" />
          <a href="mailto:info@marcelodesignx.com" className="hover:underline">
            Info@marcelodesignx.com
          </a>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap md:justify-end gap-6 text-sm font-light">
        <a href="#" className="hover:underline">About Us</a>
        <a href="#" className="hover:underline">Services</a>
        <a href="#" className="hover:underline">Contact Us</a>
        <a href="#" className="hover:underline">Blog post</a>
      </div>

      <hr className="border-gray-700" />

      {/* MDX Logo */}
      <div className="flex justify-center items-center text-[100px] md:text-[180px] font-black space-x-8 text-white">
        <span>M</span>
        <span>D</span>
        <span>X</span>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        {/* Social icons */}
        <div className="flex items-center gap-4 text-xl">
          <FaFacebookF />
          <FaYoutube />
          <FaLinkedinIn />
          <FaTwitter />
          <FaTiktok />
        </div>

        {/* Legal links */}
        <div className="flex items-center gap-6 text-sm">
          <span>©2025 MDX. All rights reserved</span>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
        </div>

        {/* Scroll to top */}
        <a href="#" className="hover:underline text-white text-sm">
          SCROLL TOP ⏫
        </a>
      </div>
    </footer>
  );
}
