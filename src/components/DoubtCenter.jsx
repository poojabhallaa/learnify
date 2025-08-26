import React, { useState, useEffect } from "react";
import { Search, MessageSquare, Clock, User, X, CheckCircle, AlertCircle } from "lucide-react";

const DoubtCenter = () => {
  const [doubt, setDoubt] = useState("");
  const [doubtsList, setDoubtsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAnswerForm, setShowAnswerForm] = useState(null);
  const [answer, setAnswer] = useState("");

  const categories = ["all", "academic", "technical", "general"];


  useEffect(() => {
    const savedDoubts = [];
    setDoubtsList(savedDoubts);
  }, []);

  useEffect(() => {
    console.log("Saving doubts:", doubtsList);
  }, [doubtsList]);

  const handleSubmit = () => {
    if (doubt.trim() !== "") {
      const newDoubt = {
        id: Date.now(),
        text: doubt.trim(),
        timestamp: new Date().toISOString(),
        category: "general",
        status: "pending",
        answers: [],
        author: "You"
      };
      setDoubtsList([newDoubt, ...doubtsList]);
      setDoubt("");
    }
  };

  const handleAnswerSubmit = (doubtId) => {
    if (answer.trim() !== "") {
      setDoubtsList(doubtsList.map(d => 
        d.id === doubtId 
          ? { 
              ...d, 
              answers: [...d.answers, {
                id: Date.now(),
                text: answer.trim(),
                timestamp: new Date().toISOString(),
                author: "Helper"
              }],
              status: "answered"
            }
          : d
      ));
      setAnswer("");
      setShowAnswerForm(null);
    }
  };

  const deleteDoubt = (id) => {
    setDoubtsList(doubtsList.filter(d => d.id !== id));
  };

  const formatTime = (timestamp) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diff = Math.floor((now - time) / 1000);
    
    if (diff < 60) return "just now";
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  };

  const filteredDoubts = doubtsList.filter(d => {
    const matchesSearch = d.text.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || d.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const pendingCount = doubtsList.filter(d => d.status === "pending").length;
  const answeredCount = doubtsList.filter(d => d.status === "answered").length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-700 mb-3">
            💡 Doubt Center
          </h1>
          <p className="text-purple-600 text-lg">Ask questions, get answers, learn together</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-purple-100">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-2 rounded-lg">
                <MessageSquare className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-700">{doubtsList.length}</p>
                <p className="text-sm text-purple-600">Total Doubts</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-purple-100">
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-2 rounded-lg">
                <AlertCircle className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-600">{pendingCount}</p>
                <p className="text-sm text-orange-600">Pending</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-purple-100">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">{answeredCount}</p>
                <p className="text-sm text-green-600">Answered</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ask Doubt Form */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-purple-100">
          <h2 className="text-xl font-semibold text-purple-700 mb-4">Ask a New Doubt</h2>
          <div className="space-y-4">
            <div className="relative">
              <textarea
                value={doubt}
                onChange={(e) => setDoubt(e.target.value)}
                placeholder="Describe your doubt in detail..."
                rows={3}
                className="w-full border-2 border-purple-200 focus:border-purple-500 p-4 rounded-xl outline-none resize-none transition-colors"
              />
              <div className="absolute bottom-3 right-3 text-sm text-gray-400">
                {doubt.length}/500
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleSubmit}
                disabled={!doubt.trim()}
                className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                Post Doubt
              </button>
              <button
                onClick={() => setDoubt("")}
                className="border-2 border-purple-200 text-purple-600 px-6 py-3 rounded-xl hover:bg-purple-50 transition-colors"
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6 border border-purple-100">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search doubts..."
                className="w-full pl-10 pr-4 py-2 border-2 border-purple-200 focus:border-purple-500 rounded-lg outline-none transition-colors"
              />
            </div>
            <div className="flex gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-purple-600 text-white"
                      : "bg-purple-100 text-purple-700 hover:bg-purple-200"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Doubts List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            📌 {filteredDoubts.length === doubtsList.length ? "All Doubts" : "Search Results"}
            {filteredDoubts.length > 0 && ` (${filteredDoubts.length})`}
          </h2>
          
          {filteredDoubts.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-purple-600" />
              </div>
              <p className="text-gray-500 text-lg">
                {doubtsList.length === 0 ? "No doubts yet. Be the first to ask!" : "No doubts match your search."}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredDoubts.map((d) => (
                <div
                  key={d.id}
                  className="bg-white border border-purple-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="bg-purple-100 rounded-full p-2">
                          <User className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{d.author}</p>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock className="w-3 h-3" />
                            {formatTime(d.timestamp)}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          d.status === "answered" 
                            ? "bg-green-100 text-green-700" 
                            : "bg-orange-100 text-orange-700"
                        }`}>
                          {d.status === "answered" ? "Answered" : "Pending"}
                        </span>
                        <button
                          onClick={() => deleteDoubt(d.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-gray-800 leading-relaxed">{d.text}</p>
                    </div>

                    {/* Answers Section */}
                    {d.answers.length > 0 && (
                      <div className="border-t border-gray-100 pt-4 mt-4">
                        <h4 className="font-medium text-purple-700 mb-3">Answers ({d.answers.length})</h4>
                        <div className="space-y-3">
                          {d.answers.map(ans => (
                            <div key={ans.id} className="bg-purple-50 rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="bg-purple-200 rounded-full p-1">
                                  <User className="w-3 h-3 text-purple-600" />
                                </div>
                                <span className="font-medium text-purple-700">{ans.author}</span>
                                <span className="text-xs text-purple-600">{formatTime(ans.timestamp)}</span>
                              </div>
                              <p className="text-gray-700">{ans.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Answer Form */}
                    <div className="border-t border-gray-100 pt-4 mt-4">
                      {showAnswerForm === d.id ? (
                        <div className="space-y-3">
                          <textarea
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            placeholder="Write your answer..."
                            rows={3}
                            className="w-full border-2 border-purple-200 focus:border-purple-500 p-3 rounded-lg outline-none resize-none"
                          />
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleAnswerSubmit(d.id)}
                              disabled={!answer.trim()}
                              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              Submit Answer
                            </button>
                            <button
                              onClick={() => {
                                setShowAnswerForm(null);
                                setAnswer("");
                              }}
                              className="border-2 border-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <button
                          onClick={() => setShowAnswerForm(d.id)}
                          className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center gap-1"
                        >
                          <MessageSquare className="w-4 h-4" />
                          Answer this doubt
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoubtCenter;
