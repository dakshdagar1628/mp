export default function Footer() {
  return (
    <footer className="relative z-20 py-16 px-8 md:px-24 bg-[#121212]/30 backdrop-blur-md border-t border-white/10 text-[#ededed]/60">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div>
          <h4 className="text-2xl font-bold text-white mb-2">Mahesh Rawat</h4>
          <p className="max-w-xs">Senior Design Lead & Architect</p>
          <p className="mt-4 text-sm">Holi chowk sector -58, NIT-1, Faridabad</p>
        </div>

        <div className="flex flex-col gap-2 text-right">
          <a href="mailto:mahesh61909@gmail.com" className="hover:text-white transition-colors duration-300">
            mahesh61909@gmail.com
          </a>
          <a href="tel:+919599512632" className="hover:text-white transition-colors duration-300">
            +91 9599512632
          </a>
        </div>

      </div>
      
      <div className="max-w-6xl mx-auto mt-16 text-center text-xs text-white/30">
        &copy; {new Date().getFullYear()} Mahesh Rawat. All Rights Reserved.
      </div>
    </footer>
  );
}
