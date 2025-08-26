import React, { useState, useEffect } from "react";
import { 
  Users, 
  MessageCircle, 
  Calendar, 
  Star, 
  Filter, 
  Search, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Phone, 
  Mail, 
  X,
  Check,
  Clock,
  Award,
  BookOpen
} from "lucide-react";

const Connect = () => {
  const [mentors, setMentors] = useState([
    {
      id: 1,
      name: "Aditi Sharma",
      field: "Computer Science",
      year: "4th Year",
      img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 4.8,
      sessions: 45,
      bio: "Passionate about AI/ML and full-stack development. Currently working on research in computer vision.",
      skills: ["Python", "React", "Machine Learning", "Data Structures"],
      availability: "Available",
      location: "Delhi, India",
      experience: "2+ years",
      specialties: ["Coding Interviews", "Project Guidance", "Career Advice"],
      linkedin: "https://linkedin.com/in/aditisharma",
      email: "aditi.sharma@college.edu",
      phone: "+91-9876543210",
      connectionStatus: "available",
      responseTime: "Within 2 hours",
      languages: ["English", "Hindi"],
      achievements: ["Google Summer of Code 2023", "Dean's List", "Hackathon Winner"]
    },
    {
      id: 2,
      name: "Rahul Mehta",
      field: "Electronics Engineering",
      year: "3rd Year",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 4.6,
      sessions: 32,
      bio: "Electronics enthusiast specializing in IoT and embedded systems. Love helping juniors with circuit design.",
      skills: ["Arduino", "Circuit Design", "IoT", "Signal Processing"],
      availability: "Busy",
      location: "Mumbai, India",
      experience: "1.5+ years",
      specialties: ["Hardware Projects", "PCB Design", "Lab Help"],
      linkedin: "https://linkedin.com/in/rahulmehta",
      email: "rahul.mehta@college.edu",
      phone: "+91-9876543211",
      connectionStatus: "busy",
      responseTime: "Within 6 hours",
      languages: ["English", "Hindi", "Marathi"],
      achievements: ["IEEE Student Member", "Best Project Award", "Technical Society Lead"]
    },
    {
      id: 3,
      name: "Priya Nair",
      field: "Mechanical Engineering",
      year: "4th Year",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      sessions: 67,
      bio: "Mechanical design expert with focus on CAD modeling and manufacturing processes. Always ready to help!",
      skills: ["SolidWorks", "AutoCAD", "Manufacturing", "3D Printing"],
      availability: "Available",
      location: "Bangalore, India",
      experience: "3+ years",
      specialties: ["CAD Design", "Manufacturing Processes", "Internship Prep"],
      linkedin: "https://linkedin.com/in/priyanair",
      email: "priya.nair@college.edu",
      phone: "+91-9876543212",
      connectionStatus: "available",
      responseTime: "Within 1 hour",
      languages: ["English", "Hindi", "Malayalam"],
      achievements: ["ASME Member", "Industry Internship", "Research Publication"]
    },
    {
      id: 4,
      name: "Arjun Singh",
      field: "Civil Engineering",
      year: "4th Year",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 4.7,
      sessions: 28,
      bio: "Structural engineering enthusiast with expertise in construction technology and project management.",
      skills: ["AutoCAD", "Structural Analysis", "Construction", "Project Management"],
      availability: "Available",
      location: "Chennai, India",
      experience: "2+ years",
      specialties: ["Structural Design", "Site Management", "Software Training"],
      linkedin: "https://linkedin.com/in/arjunsingh",
      email: "arjun.singh@college.edu",
      phone: "+91-9876543213",
      connectionStatus: "available",
      responseTime: "Within 3 hours",
      languages: ["English", "Hindi", "Tamil"],
      achievements: ["Construction Internship", "Best Thesis Award", "Student Council Member"]
    },
    {
      id: 5,
      name: "Sneha Gupta",
      field: "Information Technology",
      year: "3rd Year",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      rating: 4.5,
      sessions: 21,
      bio: "Full-stack developer passionate about web technologies and database management systems.",
      skills: ["JavaScript", "Node.js", "MongoDB", "Web Development"],
      availability: "Available",
      location: "Pune, India",
      experience: "1+ years",
      specialties: ["Web Development", "Database Design", "API Development"],
      linkedin: "https://linkedin.com/in/snehagupta",
      email: "sneha.gupta@college.edu",
      phone: "+91-9876543214",
      connectionStatus: "available",
      responseTime: "Within 4 hours",
      languages: ["English", "Hindi"],
      achievements: ["Coding Bootcamp Graduate", "Open Source Contributor", "Tech Event Organizer"]
    },
    {
      id: 6,
      name: "Vikram Patel",
      field: "Chemical Engineering",
      year: "4th Year",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 4.6,
      sessions: 39,
      bio: "Process engineering specialist with focus on chemical plant design and process optimization.",
      skills: ["Process Design", "MATLAB", "Chemical Analysis", "Plant Operations"],
      availability: "Busy",
      location: "Ahmedabad, India",
      experience: "2.5+ years",
      specialties: ["Process Engineering", "Lab Techniques", "Industry Connections"],
      linkedin: "https://linkedin.com/in/vikrampatel",
      email: "vikram.patel@college.edu",
      phone: "+91-9876543215",
      connectionStatus: "busy",
      responseTime: "Within 8 hours",
      languages: ["English", "Hindi", "Gujarati"],
      achievements: ["Process Design Competition Winner", "Industry Internship", "Research Assistant"]
    }
  ]);

  const [filteredMentors, setFilteredMentors] = useState(mentors);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedField, setSelectedField] = useState("all");
  const [selectedAvailability, setSelectedAvailability] = useState("all");
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [connectionRequests, setConnectionRequests] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const fields = [...new Set(mentors.map(m => m.field))];
  const availabilityOptions = [...new Set(mentors.map(m => m.availability))];

  useEffect(() => {
    let filtered = mentors;

    if (searchTerm) {
      filtered = filtered.filter(mentor => 
        mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentor.field.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentor.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedField !== "all") {
      filtered = filtered.filter(mentor => mentor.field === selectedField);
    }

    if (selectedAvailability !== "all") {
      filtered = filtered.filter(mentor => mentor.availability === selectedAvailability);
    }

    setFilteredMentors(filtered);
  }, [searchTerm, selectedField, selectedAvailability, mentors]);

  const handleConnect = (mentorId) => {
    const newRequest = {
      id: Date.now(),
      mentorId,
      status: "pending",
      timestamp: new Date().toISOString()
    };
    setConnectionRequests([...connectionRequests, newRequest]);
  };

  const getConnectionStatus = (mentorId) => {
    const request = connectionRequests.find(req => req.mentorId === mentorId);
    return request ? request.status : "none";
  };

  const getAvailabilityColor = (availability) => {
    switch(availability) {
      case "Available": return "text-green-600 bg-green-100";
      case "Busy": return "text-orange-600 bg-orange-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const getConnectionButtonContent = (mentorId, availability) => {
    const status = getConnectionStatus(mentorId);
    
    if (status === "pending") {
      return { text: "Request Sent", icon: <Clock className="w-4 h-4" />, disabled: true, color: "bg-yellow-500" };
    }
    if (status === "connected") {
      return { text: "Connected", icon: <Check className="w-4 h-4" />, disabled: true, color: "bg-green-500" };
    }
    if (availability === "Busy") {
      return { text: "Request", icon: <MessageCircle className="w-4 h-4" />, disabled: false, color: "bg-purple-600 hover:bg-purple-700" };
    }
    return { text: "Connect", icon: <MessageCircle className="w-4 h-4" />, disabled: false, color: "bg-purple-600 hover:bg-purple-700" };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-700 mb-3">
            🤝 Connect with Seniors
          </h1>
          <p className="text-purple-600 text-lg mb-6">Get guidance from experienced seniors across different fields</p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-purple-100">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-purple-600" />
                <span className="text-2xl font-bold text-purple-700">{mentors.length}</span>
              </div>
              <p className="text-sm text-purple-600">Active Mentors</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-purple-100">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MessageCircle className="w-5 h-5 text-green-600" />
                <span className="text-2xl font-bold text-green-600">
                  {mentors.filter(m => m.availability === "Available").length}
                </span>
              </div>
              <p className="text-sm text-green-600">Available Now</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-purple-100">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-5 h-5 text-yellow-600" />
                <span className="text-2xl font-bold text-yellow-600">
                  {(mentors.reduce((acc, m) => acc + m.rating, 0) / mentors.length).toFixed(1)}
                </span>
              </div>
              <p className="text-sm text-yellow-600">Avg Rating</p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-8 border border-purple-100">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, field, or skills..."
                className="w-full pl-10 pr-4 py-3 border-2 border-purple-200 focus:border-purple-500 rounded-xl outline-none transition-colors"
              />
            </div>

            {/* Filter Toggle Button (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden bg-purple-100 text-purple-700 px-4 py-3 rounded-xl hover:bg-purple-200 transition-colors flex items-center gap-2"
            >
              <Filter className="w-5 h-5" />
              Filters
            </button>

            {/* Filters */}
            <div className={`flex flex-col sm:flex-row gap-4 lg:flex ${showFilters ? 'block' : 'hidden lg:flex'}`}>
              <select
                value={selectedField}
                onChange={(e) => setSelectedField(e.target.value)}
                className="px-4 py-3 border-2 border-purple-200 focus:border-purple-500 rounded-xl outline-none bg-white"
              >
                <option value="all">All Fields</option>
                {fields.map(field => (
                  <option key={field} value={field}>{field}</option>
                ))}
              </select>

              <select
                value={selectedAvailability}
                onChange={(e) => setSelectedAvailability(e.target.value)}
                className="px-4 py-3 border-2 border-purple-200 focus:border-purple-500 rounded-xl outline-none bg-white"
              >
                <option value="all">All Availability</option>
                {availabilityOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-purple-700">{filteredMentors.length}</span> mentor{filteredMentors.length !== 1 ? 's' : ''}
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* Mentors Grid */}
        {filteredMentors.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No mentors found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.map((mentor) => {
              const buttonConfig = getConnectionButtonContent(mentor.id, mentor.availability);
              
              return (
                <div
                  key={mentor.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-purple-100 hover:border-purple-300"
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative">
                        <img
                          src={mentor.img}
                          alt={mentor.name}
                          className="w-16 h-16 rounded-full object-cover border-3 border-purple-200"
                        />
                        <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
                          mentor.availability === "Available" ? "bg-green-500" : "bg-orange-500"
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{mentor.name}</h3>
                        <p className="text-purple-600 font-medium mb-1">{mentor.field}</p>
                        <p className="text-sm text-gray-500">{mentor.year}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{mentor.rating}</span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(mentor.availability)}`}>
                          {mentor.availability}
                        </span>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">{mentor.bio}</p>

                    {/* Skills */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {mentor.skills.slice(0, 3).map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-purple-100 text-purple-700 rounded-md text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                        {mentor.skills.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
                            +{mentor.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{mentor.sessions} sessions</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{mentor.responseTime}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleConnect(mentor.id)}
                        disabled={buttonConfig.disabled}
                        className={`flex-1 ${buttonConfig.color} text-white px-4 py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed`}
                      >
                        {buttonConfig.icon}
                        {buttonConfig.text}
                      </button>
                      <button
                        onClick={() => setSelectedMentor(mentor)}
                        className="bg-purple-100 text-purple-700 px-4 py-3 rounded-xl hover:bg-purple-200 transition-colors"
                      >
                        <Users className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Mentor Profile Modal */}
        {selectedMentor && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Mentor Profile</h2>
                  <button
                    onClick={() => setSelectedMentor(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                {/* Profile Header */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="relative">
                    <img
                      src={selectedMentor.img}
                      alt={selectedMentor.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-purple-200"
                    />
                    <div className={`absolute -bottom-2 -right-2 w-6 h-6 rounded-full border-3 border-white ${
                      selectedMentor.availability === "Available" ? "bg-green-500" : "bg-orange-500"
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedMentor.name}</h3>
                    <p className="text-lg text-purple-600 font-medium mb-1">{selectedMentor.field}</p>
                    <p className="text-gray-600 mb-2">{selectedMentor.year} • {selectedMentor.location}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="font-medium">{selectedMentor.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{selectedMentor.sessions} sessions</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{selectedMentor.experience}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">About</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedMentor.bio}</p>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Skills & Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMentor.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Specialties</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedMentor.specialties.map((specialty, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <Award className="w-4 h-4 text-purple-600" />
                        <span>{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Achievements</h4>
                  <div className="space-y-2">
                    {selectedMentor.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <GraduationCap className="w-4 h-4 text-purple-600" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMentor.languages.map((language, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => handleConnect(selectedMentor.id)}
                      className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 font-medium"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Connect Now
                    </button>
                    <button
                      className="border-2 border-purple-200 text-purple-600 px-6 py-3 rounded-xl hover:bg-purple-50 transition-colors flex items-center justify-center gap-2 font-medium"
                    >
                      <Calendar className="w-5 h-5" />
                      Schedule Call
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Connect;
