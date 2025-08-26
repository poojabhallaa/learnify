import React, { useEffect } from 'react';

const LandingPage = () => {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleClick = (e) => {
      if (e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.borderBottomColor = 'rgba(229, 231, 235, 0.5)';
      } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.borderBottomColor = 'rgba(229, 231, 235, 0.3)';
      }
    };

    // Feature cards intersection observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${entry.target.dataset.delay || 0}ms`;
          entry.target.style.animation = 'slideInLeft 0.8s ease-out forwards';
        }
      });
    }, observerOptions);

    // Add event listeners
    document.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll);

    // Setup intersection observer
    document.querySelectorAll('.feature-card').forEach((card, index) => {
      card.dataset.delay = index * 150;
      card.style.opacity = '0';
      observer.observe(card);
    });

    // Cleanup
    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="font-inter bg-white text-gray-800 leading-relaxed overflow-x-hidden">
      {/* Navigation */}
      <nav className="navbar fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200/30 z-50 transition-all duration-300">
        <div className="nav-container max-w-screen-xl mx-auto px-8 flex justify-center items-center h-[70px] gap-16">
          <div className="logo-section flex items-center gap-3">
            <div className="logo w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
              L
            </div>
            <span className="platform-name text-2xl font-bold text-gray-800">Learnify</span>
          </div>
          <ul className="nav-links hidden md:flex gap-8 list-none">
            <li><a href="#home" className="text-gray-500 font-medium hover:text-indigo-500 hover:-translate-y-0.5 transition-all duration-300 relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:transition-all after:duration-300 hover:after:w-full">Home</a></li>
            <li><a href="#resources" className="text-gray-500 font-medium hover:text-indigo-500 hover:-translate-y-0.5 transition-all duration-300 relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:transition-all after:duration-300 hover:after:w-full">Resources</a></li>
            <li><a href="#connect" className="text-gray-500 font-medium hover:text-indigo-500 hover:-translate-y-0.5 transition-all duration-300 relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:transition-all after:duration-300 hover:after:w-full">Connect</a></li>
            <li><a href="#doubt-center" className="text-gray-500 font-medium hover:text-indigo-500 hover:-translate-y-0.5 transition-all duration-300 relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:transition-all after:duration-300 hover:after:w-full">Doubt Center</a></li>
            <li><a href="#about" className="text-gray-500 font-medium hover:text-indigo-500 hover:-translate-y-0.5 transition-all duration-300 relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:transition-all after:duration-300 hover:after:w-full">About Us</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero min-h-screen flex items-center px-8 pt-[120px] pb-20 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden" id="home">
        <div className="hero-bg absolute top-0 right-0 w-1/2 h-full opacity-5 animate-float"></div>
        <div className="hero-container max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="hero-content z-10">
            <h1 className="hero-tagline text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-br from-gray-800 to-indigo-500 bg-clip-text text-transparent animate-slideInLeft">
              Notes, Mentorship & Doubt Solving – All in One Place
            </h1>
            <p className="hero-subtext text-xl text-gray-500 mb-10 animate-slideInLeft" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
              Exclusively for our college students.
            </p>
            <div className="hero-buttons flex gap-4 animate-slideInLeft" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
              <a href="#" className="btn bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30">
                Get Started
              </a>
              <a href="#" className="btn bg-white text-indigo-500 border-2 border-indigo-500 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:bg-indigo-500 hover:text-white hover:-translate-y-0.5">
                Login
              </a>
            </div>
          </div>
          <div className="hero-illustration flex justify-center items-center animate-slideInRight">
            <div className="illustration w-full max-w-md h-96 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 rounded-3xl flex items-center justify-center relative overflow-hidden">
              <span className="text-8xl animate-bounce">📚</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-24 bg-white" id="features">
        <div className="features-container max-w-screen-xl mx-auto px-8">
          <h2 className="section-title text-center text-4xl font-bold mb-12 text-gray-800">
            Everything You Need to Excel
          </h2>
          <div className="features-grid grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card bg-white p-10 rounded-3xl shadow-lg text-center transition-all duration-300 hover:-translate-y-2.5 hover:shadow-indigo-500/15 border border-gray-200/30">
              <span className="feature-icon text-5xl mb-6 block">📘</span>
              <h3 className="feature-title text-xl font-semibold mb-4 text-gray-800">Resources</h3>
              <p className="feature-desc text-gray-500 leading-relaxed">
                Access and share study notes, assignments, and learning materials with your peers.
              </p>
            </div>
            <div className="feature-card bg-white p-10 rounded-3xl shadow-lg text-center transition-all duration-300 hover:-translate-y-2.5 hover:shadow-indigo-500/15 border border-gray-200/30">
              <span className="feature-icon text-5xl mb-6 block">💬</span>
              <h3 className="feature-title text-xl font-semibold mb-4 text-gray-800">Doubt Center</h3>
              <p className="feature-desc text-gray-500 leading-relaxed">
                Ask questions and get instant help from seniors and subject experts.
              </p>
            </div>
            <div className="feature-card bg-white p-10 rounded-3xl shadow-lg text-center transition-all duration-300 hover:-translate-y-2.5 hover:shadow-indigo-500/15 border border-gray-200/30">
              <span className="feature-icon text-5xl mb-6 block">🤝</span>
              <h3 className="feature-title text-xl font-semibold mb-4 text-gray-800">Connect</h3>
              <p className="feature-desc text-gray-500 leading-relaxed">
                Network with seniors, get mentorship, and build meaningful connections.
              </p>
            </div>
            <div className="feature-card bg-white p-10 rounded-3xl shadow-lg text-center transition-all duration-300 hover:-translate-y-2.5 hover:shadow-indigo-500/15 border border-gray-200/30">
              <span className="feature-icon text-5xl mb-6 block">ℹ️</span>
              <h3 class="feature-title text-xl font-semibold mb-4 text-gray-800">About Us</h3>
              <p className="feature-desc text-gray-500 leading-relaxed">
                Discover the mission and vision behind our student-centric platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about py-24 bg-gradient-to-br from-slate-50 to-slate-100" id="about">
        <div className="about-container max-w-4xl mx-auto px-8 text-center">
          <h2 className="section-title text-4xl font-bold mb-8 text-gray-800">
            Built by Students, for Students
          </h2>
          <p className="about-text text-xl text-gray-500 mb-8 leading-relaxed">
            Making learning collaborative, easy, and accessible for everyone in our college community. 
            Join thousands of students already using Learnify to enhance their academic journey.
          </p>
          <a href="#" className="about-link text-indigo-500 font-semibold transition-all duration-300 hover:text-purple-600 hover:underline">
            Learn More About Us →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-gray-800 text-white py-16">
        <div className="footer-container max-w-screen-xl mx-auto px-8">
          <div className="footer-links flex justify-center gap-8 mb-8 flex-wrap">
            <a href="#home" className="text-gray-400 transition-all duration-300 hover:text-indigo-500">Home</a>
            <a href="#resources" className="text-gray-400 transition-all duration-300 hover:text-indigo-500">Resources</a>
            <a href="#connect" className="text-gray-400 transition-all duration-300 hover:text-indigo-500">Connect</a>
            <a href="#doubt-center" className="text-gray-400 transition-all duration-300 hover:text-indigo-500">Doubt Center</a>
            <a href="#about" className="text-gray-400 transition-all duration-300 hover:text-indigo-500">About Us</a>
          </div>
          <div className="footer-bottom text-center pt-8 border-t border-gray-700 text-gray-400 text-sm">
            <p>&copy; 2025 Learnify. Built with ❤️ for our college community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;