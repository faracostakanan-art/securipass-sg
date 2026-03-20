import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Lock, Menu, X, Search, HelpCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Mise à jour', path: '/login' },
    { name: 'Aide', path: '/faq' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-[#002855] text-white sticky top-0 z-50 shadow-lg">
      {/* Top bar */}
      <div className="bg-[#001a3d] py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="text-gray-300">Particuliers</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/faq" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1">
              <HelpCircle size={16} />
              <span className="hidden sm:inline">Aide et contacts</span>
            </Link>
            <span className="text-gray-300 flex items-center gap-1">
              <Lock size={16} />
              <span className="hidden sm:inline">Sécurité</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-white p-2 rounded">
              <Lock className="text-[#e60028]" size={32} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight">SECURIPASS</span>
              <span className="text-xs text-gray-300 uppercase tracking-wide">Votre sécurité renforcée</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-200 hover:text-[#e60028] relative group ${
                  isActive(link.path) ? 'text-[#e60028]' : 'text-white'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#e60028] transition-all duration-200 ${
                    isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white hover:text-[#e60028] hover:bg-white/10">
              <Search size={20} />
            </Button>
            {isAuthenticated ? (
              <Button
                onClick={logout}
                className="bg-[#e60028] hover:bg-[#c00020] text-white font-semibold px-6 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Déconnexion
              </Button>
            ) : (
              <Button
                asChild
                className="bg-[#e60028] hover:bg-[#c00020] text-white font-semibold px-6 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Link to="/login">Espace client</Link>
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#001a3d] border-t border-white/10 animate-in slide-in-from-top duration-200">
          <nav className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-md transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-[#e60028] text-white font-semibold'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/10">
              {isAuthenticated ? (
                <Button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-[#e60028] hover:bg-[#c00020] text-white font-semibold"
                >
                  Déconnexion
                </Button>
              ) : (
                <Button
                  asChild
                  className="w-full bg-[#e60028] hover:bg-[#c00020] text-white font-semibold"
                >
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                    Espace client
                  </Link>
                </Button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
