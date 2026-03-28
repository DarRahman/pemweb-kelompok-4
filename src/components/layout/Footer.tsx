export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-100 bg-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold text-xs">N</div>
          <span className="font-bold text-lg text-gray-900">nitec.</span>
        </div>
        
        <p className="text-sm text-gray-500 font-medium">
          &copy; {new Date().getFullYear()} Nitec Store. Tugas Kuliah Semester 4.
        </p>
        
        <div className="flex gap-4 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-gray-900 transition-colors">Instagram</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
