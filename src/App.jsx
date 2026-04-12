import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Hero from './components/Hero';
import FeaturedPlants from './components/FeaturedPlants';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

export default function App() {
  const [page, setPage] = useState('home');

  const renderAuthPage = () => {
    if (page === 'login') {
      return (
        <main className="pt-28 min-h-[calc(100vh-6rem)] flex items-center justify-center px-6">
          <div className="w-full max-w-md rounded-[2rem] border border-[#d6e3c2] bg-white/95 p-8 shadow-xl shadow-[#1d421a]/5">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-[#2d5a27]">Sign In</h1>
                <p className="mt-2 text-sm text-gray-600">Use your email and password to login.</p>
              </div>
              <button
                type="button"
                onClick={() => setPage('home')}
                className="rounded-full border border-[#cbd5d1] px-4 py-2 text-sm text-[#2d5a27] transition hover:bg-[#eef5e8]"
              >
                Home
              </button>
            </div>
            <Login onRegisterClick={() => setPage('signup')} />
          </div>
        </main>
      );
    }

    if (page === 'signup') {
      return (
        <main className="pt-28 min-h-[calc(100vh-6rem)] flex items-center justify-center px-6">
          <div className="w-full max-w-md rounded-[2rem] border border-[#d6e3c2] bg-white/95 p-8 shadow-xl shadow-[#1d421a]/5">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-[#2d5a27]">Sign Up</h1>
                <p className="mt-2 text-sm text-gray-600">Create an account to access Verdant shopping and guides.</p>
              </div>
              <button
                type="button"
                onClick={() => setPage('home')}
                className="rounded-full border border-[#cbd5d1] px-4 py-2 text-sm text-[#2d5a27] transition hover:bg-[#eef5e8]"
              >
                Home
              </button>
            </div>
            <Signup onLoginClick={() => setPage('login')} />
          </div>
        </main>
      );
    }

    return (
      <>
        <Hero />
        <FeaturedPlants />
        <ContactUs />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-[#f9faec] text-gray-800 font-sans">
      <Navbar onSignupClick={() => setPage('signup')} onLoginClick={() => setPage('login')} />
      {renderAuthPage()}
      <Footer />
    </div>
  );
}
