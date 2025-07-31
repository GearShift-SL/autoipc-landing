import { useState } from 'react';

const PricingTable = () => {
  const [isYearly, setIsYearly] = useState(true);

  const handleClick = (plan: string) => {
    // Get the email key from the url
    const emailKey = new URLSearchParams(window.location.search).get('email');
    console.log(emailKey);

    // If there is no email, redirect to the #hero section
    if (!emailKey) {
      window.location.href = '/#hero';
      return;
    }

    // If plan is enterprise, redirect to contact form
    if (plan === 'enterprise') {
      window.location.href = '/contact/';
      return;
    }

    // If plan is investor, redirect to investor page
    if (plan === 'investor') {
      if (isYearly) {
        const stripeUrl = 'https://buy.stripe.com/28E28rdkd7swagudic1Nu02';
        window.open(`${stripeUrl}?prefilled_email=${emailKey}`, '_blank');
      } else {
        const stripeUrl = 'https://buy.stripe.com/fZu9AT6VP14874i7XS1Nu01';
        window.open(`${stripeUrl}?prefilled_email=${emailKey}`, '_blank');
      }
      return;
    }

    // If plan is basic, redirect to basic page
    if (plan === 'basic') {
      if (isYearly) {
        const stripeUrl = 'https://buy.stripe.com/9B614nbc53cgcoC7XS1Nu03';
        window.open(`${stripeUrl}?prefilled_email=${emailKey}`, '_blank');
      } else {
        const stripeUrl = 'https://buy.stripe.com/eVqcN5bc5dQU88m7XS1Nu04';
        window.open(`${stripeUrl}?prefilled_email=${emailKey}`, '_blank');
      }
      return;
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-default mb-4">Precios transparentes</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Elige el plan perfecto para tus necesidades. Sin letra pequeña, sin sorpresas.
          </p>

          {/* Billing Toggle */}
          <div className="flex flex-col items-center mt-8 mb-8">
            <div className="flex items-center justify-center">
              <span className={`mr-3 text-lg font-medium ${!isYearly ? 'text-default' : 'text-muted'}`}>Mensual</span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative hover:cursor-pointer inline-flex items-center h-8 rounded-full w-16 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  isYearly ? 'bg-primary' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block w-6 h-6 transform bg-white rounded-full transition-transform ${
                    isYearly ? 'translate-x-9' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`ml-3 text-lg font-medium ${isYearly ? 'text-default' : 'text-muted'}`}>Anual</span>
            </div>
            <div className="mt-3 h-6 flex items-center">
              {isYearly && (
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  2 meses gratis!
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-default mb-2">Básico</h3>
              <p className="text-muted mb-6">Solo actualizaciones de renta</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-default">💶 {isYearly ? '1' : '2'}€</span>
                <span className="text-muted ml-2">al mes por inmueble</span>
              </div>
              {isYearly ? (
                <div className="text-center mb-6">
                  <span className="text-lg text-muted font-medium">12€ por inmueble al año</span>
                  <span className="block text-sm text-green-600 font-medium">Tienes 6 meses gratis!</span>
                </div>
              ) : (
                <div className="text-center mb-6">
                  <span
                    className="text-lg text-muted hover:cursor-pointer underline decoration-1 decoration-blue-400 hover:text-blue-400"
                    onClick={() => setIsYearly(true)}
                  >
                    o 1€ al mes por inmueble
                  </span>
                  <span
                    onClick={() => setIsYearly(true)}
                    className="block text-sm text-green-600 font-medium hover:cursor-pointer hover:underline decoration-1 decoration-blue-400 hover:text-blue-400"
                  >
                    Ahorra 6 meses al pagar anualmente!
                  </span>
                </div>
              )}
              <button
                data-umami-event="Basic plan"
                onClick={() => handleClick('basic')}
                className="flex w-full text-center justify-center hover:cursor-pointer bg-gray-100 text-default py-3 px-6 rounded-full font-semibold hover:bg-gray-200 transition-colors"
              >
                Empezar →
              </button>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-default">Envío automático de actualizaciones de renta</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-default">Cálculo IPC/IRAV</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-default">Notificación certificada al inquilino</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-default">Resumen PDF o certificado</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-muted">
                  <strong>Opcional:</strong> "Recordatorio año próximo" (gratis)
                </span>
              </div>
            </div>
          </div>

          {/* Investor Plan (Popular) */}
          <div className="bg-white border-2 border-primary rounded-2xl p-8 shadow-lg relative transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold"> Más popular </span>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-default mb-2">Inversor</h3>
              <p className="text-muted mb-6">Para gestores profesionales</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">💶 {isYearly ? '7,50' : '9'}€</span>
                <span className="text-muted ml-2">/mes</span>
              </div>
              {isYearly ? (
                <div className="text-center mb-6">
                  <span className="text-lg text-muted font-medium">90€ facturado anualmente</span>
                  <span className="block text-sm text-green-600 font-medium">Tienes 2 meses gratis!</span>
                </div>
              ) : (
                <div className="text-center mb-6">
                  <span
                    className="text-lg text-muted hover:cursor-pointer underline decoration-1 decoration-blue-400 hover:text-blue-400"
                    onClick={() => setIsYearly(true)}
                  >
                    o 7,50€/mes
                  </span>
                  <span
                    onClick={() => setIsYearly(true)}
                    className="block text-sm text-green-600 font-medium hover:cursor-pointer hover:underline decoration-1 decoration-blue-400 hover:text-blue-400"
                  >
                    Ahorra 2 meses al pagar anualmente
                  </span>
                </div>
              )}
              <button
                data-umami-event="Investor plan"
                onClick={() => handleClick('investor')}
                className="w-full cta-primary mb-6"
              >
                {isYearly ? 'Comenzar plan anual' : 'Comenzar plan mensual'}
              </button>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-default">
                  <strong>Actualizaciones de renta ilimitadas</strong>
                </span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-default">Generación de contratos y firmas electrónicas ilimitadas</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-default">Dashboard de rentabilidad</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-default">Análisis de renta de mercado</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-default">Exportación a Excel</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-default">Hasta 10 propiedades</span>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-default mb-2">Enterprise</h3>
              <p className="text-muted mb-6">Para grandes carteras</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-default">Contacta</span>
                <span className="block text-muted">con nosotros</span>
              </div>
              <button
                data-umami-event="Enterprise plan"
                onClick={() => handleClick('enterprise')}
                className="w-full bg-gray-100 text-default py-3 px-6 rounded-full font-semibold hover:bg-gray-200 hover:cursor-pointer transition-colors mb-6"
              >
                Formulario de contacto
              </button>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-default">Todo lo del plan Inversor</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-default">Propiedades ilimitadas</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-default">API personalizada</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-default">Soporte prioritario 24/7</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-default">Integraciones personalizadas</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-default">Formación y onboarding dedicado</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          {/* Money Back Guarantee - Prominent */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="text-lg font-semibold text-green-800">Garantía de devolución de 30 días</span>
            </div>
            <p className="text-green-700">
              Si no estás completamente satisfecho, te devolvemos tu dinero, sin preguntas
            </p>
          </div>

          <p className="text-muted mb-6">
            ¿Tienes dudas?{' '}
            <a href="#faq" className="text-primary hover:underline">
              Consulta nuestras preguntas frecuentes
            </a>{' '}
            o{' '}
            <a href="/contact/" className="text-primary hover:underline">
              contacta con nosotros
            </a>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-muted">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              30 días de prueba gratis
            </div>
            <div className="flex items-center text-muted">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Sin permanencia
            </div>
            <div className="flex items-center text-muted">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Cancelación inmediata
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
