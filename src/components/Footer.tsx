import Link from "next/link";

const Footer = () => {
  
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">RodCode</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/about" className="text-gray-400 hover:text-white">Mi historia</Link>
              <Link href="/home#projects" className="text-gray-400 hover:text-white">Proyectos</Link>
              <Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link>
              <Link href="/home#services" className="text-gray-400 hover:text-white">Servicios</Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">CONTACTO</h3>
            <div className="flex flex-col space-y-2">
               <Link
              href="/contact" 
              className="text-gray-400 hover:text-white"
            >Escríbeme</Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">REDES</h3>
            <div className="flex flex-col space-y-2">
               <Link
                href="https://www.instagram.com/rod.code?igsh=MWhoZmIxb2x0bTZhYQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >Instagram</Link>
               <Link
                href="https://www.linkedin.com/in/rodolforodriguez-desarrolladorweb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >LinkedIn</Link>
               <Link 
                href="https://www.tiktok.com/@rodolfocode?is_from_webapp=1&sender_device=pc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >Tik Tok</Link>
              <Link
                href="https://github.com/rodjoker" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} RodCode · Rodolfo Rodríguez</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
