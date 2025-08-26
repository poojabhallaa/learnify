import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Resources = () => {
  const [selectedSemester, setSelectedSemester] = useState(1);
  const [selectedBranch, setSelectedBranch] = useState('CSE');
  const [isBranchMenuOpen, setIsBranchMenuOpen] = useState(false);

  const branches = [
    { code: 'CSE', name: 'Computer Science & Engineering' },
    { code: 'CSE AI', name: 'CSE - Artificial Intelligence' },
    { code: 'IT', name: 'Information Technology' },
    { code: 'ECE', name: 'Electronics & Communication' },
    { code: 'ECE AI', name: 'ECE - Artificial Intelligence' },
    { code: 'MAC', name: 'Mathematics & Computing' },
    { code: 'ME', name: 'Mechanical Engineering' }
  ];

  const sampleResources = [
    { id: 1, title: 'Data Structures Notes', type: 'PDF', downloads: 245, uploadedBy: 'Rahul Sharma', date: '2 days ago' },
    { id: 2, title: 'Algorithm Analysis PPT', type: 'PPT', downloads: 189, uploadedBy: 'Priya Singh', date: '1 week ago' },
    { id: 3, title: 'Database Management System', type: 'PDF', downloads: 321, uploadedBy: 'Amit Kumar', date: '3 days ago' },
    { id: 4, title: 'Operating System Lab Manual', type: 'DOC', downloads: 156, uploadedBy: 'Sneha Gupta', date: '5 days ago' },
    { id: 5, title: 'Computer Networks Assignment', type: 'PDF', downloads: 98, uploadedBy: 'Vikash Yadav', date: '1 day ago' },
    { id: 6, title: 'Software Engineering Notes', type: 'PDF', downloads: 278, uploadedBy: 'Anita Patel', date: '4 days ago' }
  ];

  // Close branch menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.branch-menu-container')) {
        setIsBranchMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleBranchSelect = (branch) => {
    setSelectedBranch(branch);
    setIsBranchMenuOpen(false);
  };

  const getFileIcon = (type) => {
    switch (type) {
      case 'PDF': return '📄';
      case 'PPT': return '📊';
      case 'DOC': return '📝';
      default: return '📄';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Custom animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-slide-down {
          animation: slideDown 0.3s ease-out;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        
        .hamburger-line {
          transition: all 0.3s ease;
        }
        
        .hamburger-open .hamburger-line:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        
        .hamburger-open .hamburger-line:nth-child(2) {
          opacity: 0;
        }
        
        .hamburger-open .hamburger-line:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }
      `}</style>

      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Navigation */}
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                L
              </div>
              <span className="text-2xl font-bold text-gray-800">Learnify</span>
            </Link>

            {/* Branch Selector (Hamburger Menu) */}
            <div className="branch-menu-container relative">
              <button
                onClick={() => setIsBranchMenuOpen(!isBranchMenuOpen)}
                className={`hamburger-menu ${isBranchMenuOpen ? 'hamburger-open' : ''} flex flex-col justify-center items-center w-12 h-12 bg-indigo-500 hover:bg-indigo-600 rounded-lg transition-colors duration-200`}
                aria-label="Toggle branch menu"
              >
                <div className="hamburger-line w-6 h-0.5 bg-white mb-1"></div>
                <div className="hamburger-line w-6 h-0.5 bg-white mb-1"></div>
                <div className="hamburger-line w-6 h-0.5 bg-white"></div>
              </button>

              {/* Branch Dropdown */}
              {isBranchMenuOpen && (
                <div className="animate-slide-down absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Select Branch</h3>
                  </div>
                  {branches.map((branch) => (
                    <button
                      key={branch.code}
                      onClick={() => handleBranchSelect(branch.code)}
                      className={`w-full text-left px-4 py-3 hover:bg-indigo-50 transition-colors duration-200 flex items-center justify-between group ${
                        selectedBranch === branch.code ? 'bg-indigo-50 border-r-4 border-indigo-500' : ''
                      }`}
                    >
                      <div>
                        <div className="font-semibold text-gray-800">{branch.code}</div>
                        <div className="text-sm text-gray-600">{branch.name}</div>
                      </div>
                      {selectedBranch === branch.code && (
                        <div className="text-indigo-500 font-bold">✓</div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Semester Navigation */}
          <div className="border-t border-gray-200">
            <div className="flex space-x-1 py-3 overflow-x-auto">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((semester) => (
                <button
                  key={semester}
                  onClick={() => setSelectedSemester(semester)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 whitespace-nowrap ${
                    selectedSemester === semester
                      ? 'bg-indigo-500 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:transform hover:scale-105'
                  }`}
                >
                  Sem {semester}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-gray-800 font-medium">Resources</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Resources - {selectedBranch}
              </h1>
              <p className="text-gray-600">
                Semester {selectedSemester} • {sampleResources.length} resources available
              </p>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
              <span>📤</span>
              Upload Resource
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">Filter by:</span>
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
              <option>All Types</option>
              <option>PDF</option>
              <option>PPT</option>
              <option>DOC</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
              <option>Sort by Recent</option>
              <option>Sort by Downloads</option>
              <option>Sort by Name</option>
            </select>
            <div className="flex-1"></div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search resources..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-64"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid gap-6">
          {sampleResources.map((resource) => (
            <div
              key={resource.id}
              className="animate-fade-in bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="text-4xl">
                    {getFileIcon(resource.type)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {resource.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                        {resource.type}
                      </span>
                      <span className="flex items-center gap-1">
                        📥 {resource.downloads} downloads
                      </span>
                      <span className="flex items-center gap-1">
                        👤 {resource.uploadedBy}
                      </span>
                      <span className="flex items-center gap-1">
                        🕒 {resource.date}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors duration-200 flex items-center gap-2">
                    <span>👁️</span>
                    Preview
                  </button>
                  <button className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors duration-200 flex items-center gap-2">
                    <span>📥</span>
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-300 hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300">
            Load More Resources
          </button>
        </div>
      </div>

      {/* Upload Modal Overlay (for future implementation) */}
      {/* You can add modal functionality here */}
    </div>
  );
};

export default Resources;