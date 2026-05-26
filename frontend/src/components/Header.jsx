import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Search, HelpCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* Top red bar */}
      <div className="bg-[#e60028] py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="text-white">Particuliers</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/faq" className="text-white hover:text-red-100 transition-colors flex items-center gap-1">
              <HelpCircle size={16} />
              <span className="hidden sm:inline">Aide et contacts</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-3">
          {/* Logo SG */}
          <Link to="/" className="flex items-center group shrink-0">
            <img
              src="/sg-logo.jpeg"
              alt="SG - C'est vous l'avenir"
              className="h-10 sm:h-14 w-auto"
            />
          </Link>

          {/* Right side actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Recherche"
              data-testid="header-search-btn"
              className="text-gray-700 hover:text-[#e60028]"
            >
              <Search size={20} />
            </Button>
            {isAuthenticated ? (
              <Button
                onClick={logout}
                data-testid="header-logout-btn"
                className="bg-[#e60028] hover:bg-[#c00020] text-white font-semibold px-4 sm:px-6 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Déconnexion
              </Button>
            ) : (
              <Button
                asChild
                data-testid="header-update-btn"
                className="bg-[#e60028] hover:bg-[#c00020] text-white font-semibold px-4 sm:px-6 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Link to="/login">Mise à jour</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
