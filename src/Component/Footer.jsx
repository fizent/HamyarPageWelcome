import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* بخش درباره ما */}
        <div>
          <h2 className="text-xl font-bold mb-4">درباره ما</h2>
        </div>

        {/* بخش لینک‌ها */}
        <div>
          <h2 className="text-xl font-bold mb-4">لینک‌های سریع</h2>
          <ul>
            <li><a href="/" className="hover:text-white transition-colors">خانه</a></li>
            <li><a href="https://www.linkedin.com/in/ernan-smart-8903a7378/" className="hover:text-white transition-colors">درباره ما</a></li>
            <li><a href="/courses" className="hover:text-white transition-colors">دوره‌ها</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors">تماس با ما</a></li>
          </ul>
        </div>

        {/* بخش شبکه‌های اجتماعی */}
        <div>
          <h2 className="text-xl font-bold mb-4">شبکه‌های اجتماعی</h2>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors"><FaFacebook size={24} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors"><FaInstagram size={24} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors"><FaTwitter size={24} /></a>
            <a href="https://www.linkedin.com/in/fazel-zare-4b4639272/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors"><FaLinkedin size={24} /></a>
          </div>
        </div>
      </div>

      {/* خط جداکننده */}
      <hr className="my-8 border-gray-700" />

      {/* کپی‌رایت */}
      <p className="text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} HamyarFani(Mohammad Fazel Zare) همه حقوق محفوظ است.
      </p>
    </footer>
  );
}
