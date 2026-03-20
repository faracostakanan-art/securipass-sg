import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#001a3d] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Lock className="text-[#e60028]" size={24} />
              <h3 className="text-lg font-bold">SECURIPASS</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Votre sécurité est notre priorité. Mettez à jour votre Securipass pour bénéficier d'une protection renforcée.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#e60028] transition-colors text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-[#e60028] transition-colors text-sm">
                  Mettre à jour mon Securipass
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-[#e60028] transition-colors text-sm">
                  Questions fréquentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300 text-sm">
                <Phone size={16} className="text-[#e60028]" />
                <span>09 69 39 00 00</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300 text-sm">
                <Mail size={16} className="text-[#e60028]" />
                <span>support@securipass.fr</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300 text-sm">
                <MapPin size={16} className="text-[#e60028] mt-0.5" />
                <span>Service disponible 24h/24, 7j/7</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Informations légales</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#e60028] transition-colors text-sm">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#e60028] transition-colors text-sm">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#e60028] transition-colors text-sm">
                  Conditions d'utilisation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#e60028] transition-colors text-sm">
                  Gestion des cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Securipass. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm">Sécurisé par cryptage SSL 256-bit</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
