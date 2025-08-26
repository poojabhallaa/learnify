import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [user, setUser] = useState(null); // Replace with actual auth context later
  const navigate = useNavigate();

  useEffect(() => {
    // Example: Check if token exists in localStorage
    const token = localStorage.getItem("authToken");
    if (token) {
      setUser({ name: "Student User" }); // Replace with API call if needed
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
    navigate("/login");
  };

  useEffect(() => {
    // Smooth scrolling for in-page anchors
    const handleClick = (e) => {
      if (e.target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.style.background = "rgba(255, 255, 255, 0.98)";
        navbar.style.borderBottomColor = "rgba(229, 231, 235, 0.5)";
      } else {
        navbar.style.background = "rgba(255, 255, 255, 0.95)";
        navbar.style.borderBottomColor = "rgba(229, 231, 235, 0.3)";
      }
    };

    // Feature cards animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${
            entry.target.dataset.delay || 0
          }ms`;
          entry.target.style.animation = "slideInLeft 0.8s ease-out forwards";
        }
      });
    }, observerOptions);

    document.addEventListener("click", handleClick);
    window.addEventListener("scroll", handleScroll);

    document.querySelectorAll(".feature-card").forEach((card, index) => {
      card.dataset.delay = index * 150;
      card.style.opacity = "0";
      observer.observe(card);
    });

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="font-inter bg-white text-gray-800 leading-relaxed overflow-x-hidden">
      {/* Navbar */}
      <nav className="navbar fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200/30 z-50 transition-all duration-300">
        <div className="nav-container max-w-screen-xl mx-auto px-8 flex justify-between items-center h-[70px]">
          {/* Logo */}
          <div className="logo-section flex items-center gap-3">
            <div className="logo w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
              L
            </div>
            <span className="platform-name text-2xl font-bold text-gray-800">
              Learnify
            </span>
          </div>

          {/* Nav Links */}
          <ul className="nav-links hidden md:flex gap-8 list-none">
            <li>
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <Link to="/resources" className="nav-link">
                Resources
              </Link>
            </li>
            <li>
              <Link to="/connect" className="nav-link">
                Connect
              </Link>
            </li>
            <li>
              <Link to="/doubt-center" className="nav-link">
                Doubt Center
              </Link>
            </li>
            <li>
              <a href="#about" className="nav-link">
                About Us
              </a>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="hidden md:flex gap-4">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="bg-white text-indigo-500 border-2 border-indigo-500 px-5 py-2 rounded-full font-semibold transition hover:bg-indigo-500 hover:text-white"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2 rounded-full font-semibold hover:shadow-lg transition"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <span className="text-gray-700 font-medium">
                  Hi, {user.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="hero min-h-screen flex items-center px-8 pt-[120px] pb-20 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden"
      >
        <div className="hero-container max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left side */}
          <div className="hero-content z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-br from-gray-800 to-indigo-500 bg-clip-text text-transparent">
              Notes, Mentorship & Doubt Solving – All in One Place
            </h1>
            <p className="text-xl text-gray-500 mb-10">
              Exclusively for our college students.
            </p>
            <div className="flex gap-4">
              {!user ? (
                <>
                  <Link
                    to="/signup"
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-lg transition"
                  >
                    Get Started
                  </Link>
                  <Link
                    to="/login"
                    className="bg-white text-indigo-500 border-2 border-indigo-500 px-8 py-3.5 rounded-full font-semibold transition hover:bg-indigo-500 hover:text-white"
                  >
                    Login
                  </Link>
                </>
              ) : (
                <Link
                  to="/dashboard"
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-lg transition"
                >
                  Go to Dashboard
                </Link>
              )}
            </div>
          </div>

          {/* Right side */}
          <div className="hero-illustration flex justify-center items-center">
            <div className="w-full max-w-md h-96 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 rounded-3xl flex items-center justify-center">
              <span className="text-8xl animate-bounce">📚</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-8">
          <h2 className="text-center text-4xl font-bold mb-12 text-gray-800">
            Everything You Need to Excel
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card p-10 rounded-3xl shadow-lg text-center border">
              <span className="text-5xl mb-6 block">📘</span>
              <h3 className="text-xl font-semibold mb-4">Resources</h3>
              <p className="text-gray-500">
                Access and share study notes, assignments, and learning
                materials with your peers.
              </p>
            </div>
            <div className="feature-card p-10 rounded-3xl shadow-lg text-center border">
              <span className="text-5xl mb-6 block">💬</span>
              <h3 className="text-xl font-semibold mb-4">Doubt Center</h3>
              <p className="text-gray-500">
                Ask questions and get instant help from seniors and subject
                experts.
              </p>
            </div>
            <div className="feature-card p-10 rounded-3xl shadow-lg text-center border">
              <span className="text-5xl mb-6 block">🤝</span>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <p className="text-gray-500">
                Network with seniors, get mentorship, and build meaningful
                connections.
              </p>
            </div>
            <div className="feature-card p-10 rounded-3xl shadow-lg text-center border">
              <span className="text-5xl mb-6 block">ℹ️</span>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-gray-500">
                Discover the mission and vision behind our student-centric
                platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-gradient-to-br from-slate-50 to-slate-100"
      >
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Built by Students, for Students
          </h2>
          <p className="text-xl text-gray-500 mb-8">
            Making learning collaborative, easy, and accessible for everyone in
            our college community.
          </p>
          <Link
            to="/about"
            className="text-indigo-500 font-semibold hover:text-purple-600 hover:underline"
          >
            Learn More About Us →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="flex justify-center gap-8 mb-8 flex-wrap">
            <a href="#home" className="text-gray-400 hover:text-indigo-500">
              Home
            </a>
            <Link
              to="/resources"
              className="text-gray-400 hover:text-indigo-500"
            >
              Resources
            </Link>
            <Link
              to="/connect"
              className="text-gray-400 hover:text-indigo-500"
            >
              Connect
            </Link>
            <Link
              to="/doubt-center"
              className="text-gray-400 hover:text-indigo-500"
            >
              Doubt Center
            </Link>
            <a href="#about" className="text-gray-400 hover:text-indigo-500">
              About Us
            </a>
          </div>
          <div className="text-center pt-8 border-t border-gray-700 text-gray-400 text-sm">
            <p>&copy; 2025 Learnify. Built with ❤️ for our college community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
