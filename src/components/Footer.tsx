import Link from "next/link";

const Footer = () => {
  
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">RodCode</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/about" className="text-gray-400 hover:text-white">About Me</Link>
              <Link href="/project" className="text-gray-400 hover:text-white">My Work</Link>
              <Link href="/service" className="text-gray-400 hover:text-white">Services</Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">CONTACT</h3>
            <div className="flex flex-col space-y-2">
               <Link
              href="/contact" 
              className="text-gray-400 hover:text-white"
            >Email</Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">SOCIAL</h3>
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
          <div>
            <h3 className="font-bold mb-4">LEGAL</h3>
            <div className="flex flex-col space-y-2">
              <p className="text-gray-400 hover:text-white">Privacy Policy</p>
              <p className="text-gray-400 hover:text-white">Terms of Service</p>
              <p className="text-gray-400 hover:text-white">Cookie Policy</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Rodcode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
