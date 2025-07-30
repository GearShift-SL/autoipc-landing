import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const CTA = () => {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const processNewUser = async (email: string) => {
    // Send the email to the waitlist
    try {
      const response = await fetch('https://waitlist.hlab.es/waitlist/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          waitlist_name: 'autoipc_signup',
          email: email,
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Estamos teniendo problemas para registrarte. Por favor, inténtalo de nuevo más tarde.');
    }

    // Add the email to the url
    window.history.pushState({}, '', `#pricing?email=${email}`);

    // Redirect the user to the pricing section #pricing
    // window.location.href = '#pricing';
    // document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
    const section = document.getElementById('pricing');
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY - 116;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get the email from the form
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;

    // The form will not submit if the email is invalid due to the "required" and "type=email" attributes
    setStatus('loading');

    processNewUser(email);
  };

  const handleGoogleLogin = (credentialResponse: any) => {
    console.log('Google login');
    const decoded: any = jwtDecode(credentialResponse.credential);
    const email = decoded.email;
    console.log('Collected email:', email);

    processNewUser(email);
  };

  // CSS animation styles
  const flashButtonStyle = {
    animation: 'flashGradient 5s ease-in-out infinite',
    background: '#000000',
  };

  // Add CSS keyframes to document head
  React.useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `
      @keyframes flashGradient {
        0%, 50% {
          background: #000000;
        }
        25%, 75% {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
        }
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 relative">
      {/* Green Speech Bubble Banner */}
      <div
        className="absolute -top-6 -left-2 bg-green-400 text-white px-8 py-3 rounded-full text-sm font-medium shadow-lg transform rotate-10 whitespace-nowrap hidden sm:block"
        //   style="background: linear-gradient(135deg, #10b981 0%, #34d399 100%);"
      >
        ✨ Genera tu primera actualización en menos de un minuto!
      </div>

      <div className="mt-6">
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="ejemplo@gmail.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800 placeholder-gray-500"
              required
            />
          </div>

          {/* Main CTA Button with Flash Animation */}
          <button
            type="submit"
            data-umami-event="Signup button"
            className="flash-button block w-full text-white py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 mb-4 hover:cursor-pointer hover:scale-105 hover:shadow-lg"
            style={flashButtonStyle}
          >
            Generar actualización de renta ahora →
          </button>
        </form>

        {/* Stats */}
        <div className="text-center text-sm text-gray-600 mb-4">⭐ 1.162 actualizaciones generadas este mes</div>

        {/* <!-- Separator with " o " in the middle --> */}
        <div className="w-full h-px bg-gray-200 my-4"></div>

        {/* Google Button */}
        {/* <button
          onClick={handleGoogleLogin}
          data-umami-event="Google login"
          className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors hover:cursor-pointer"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            ></path>
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            ></path>
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            ></path>
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            ></path>
          </svg>
          Continuar con Google
        </button> */}

        <GoogleOAuthProvider clientId="190711840111-2852nhfbm0ulo2232cabefkk2l7nbd80.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => console.log('Google Login Failed')}
            useOneTap // Optional: show auto-login prompt
            theme="outline"
            type="standard"
            shape="circle"
            text="signin_with"
            size="large"
          />
        </GoogleOAuthProvider>

        <div className="text-center text-xs text-gray-500 mt-3">
          Si ya tienes una cuenta, te logearemos automáticamente
        </div>
      </div>
    </div>
  );
};

export default CTA;
