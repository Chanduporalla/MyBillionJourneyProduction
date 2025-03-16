import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Menu, X } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm text-white p-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 hover:text-purple-300 transition">
            <Grid className="w-8 h-8" />
            <h1 className="text-2xl font-bold">MyBillionJourney</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-purple-300 transition">Home</Link>
            <Link to="/about" className="hover:text-purple-300 transition">About</Link>
            <Link to="/buy" className="bg-purple-500 px-4 py-2 rounded-lg hover:bg-purple-400 transition">
              Buy Pixels
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-purple-800/50 rounded-lg transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-purple-800/30">
            <nav className="max-w-7xl mx-auto py-4 px-6 flex flex-col space-y-4">
              <Link 
                to="/" 
                className="hover:text-purple-300 transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="hover:text-purple-300 transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/buy" 
                className="bg-purple-500 px-4 py-2 rounded-lg hover:bg-purple-400 transition inline-block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Buy Pixels
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black/50 text-white mt-12 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link to="/" className="hover:text-purple-300 transition">Home</Link>
                <Link to="/about" className="hover:text-purple-300 transition">About</Link>
                <Link to="/buy" className="hover:text-purple-300 transition">Buy Pixels</Link>
              </nav>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <p className="text-purple-200">Email: hello@mybillionjourney.com</p>
              <p className="text-purple-200">Support: support@mybillionjourney.com</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <nav className="flex flex-col space-y-2">
                <Link to="/terms" className="hover:text-purple-300 transition">Terms of Service</Link>
                <Link to="/privacy" className="hover:text-purple-300 transition">Privacy Policy</Link>
              </nav>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-purple-800/30">
            <p>© 2025 MyBillionJourney. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}