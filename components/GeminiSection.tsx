import React, { useState } from 'react';
// FIX: Using the stable Google Generative AI SDK
import { GoogleGenerativeAI } from '@google/generative-ai';
import { SERVICES_DATA } from '../constants';

interface GeminiResult {
  projectNameSuggestions: string[];
  coreMvpFeatures: string[];
  recommendedServices: string[];
}

const GeminiSection: React.FC = () => {
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<GeminiResult | null>(null);

  const handleGenerate = async () => {
    if (!idea.trim()) {
      setError('Please enter a business idea.');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // Access the API key from Vite environment variables
      const apiKey = import.meta.env.VITE_API_KEY;

      if (!apiKey) {
        throw new Error("API Key is missing. Please set VITE_API_KEY in your .env file.");
      }

      // Initialize the Stable SDK
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        generationConfig: { responseMimeType: "application/json" }
      });
      
      const serviceTitles = SERVICES_DATA.map(s => s.title).join(', ');

      // Construct a prompt that enforces JSON structure
      const prompt = `
        You are a business startup assistant. 
        Based on this business idea: "${idea}", generate a JSON response with the following structure:
        {
          "projectNameSuggestions": ["name1", "name2", "name3"],
          "coreMvpFeatures": ["feature1", "feature2", "feature3"],
          "recommendedServices": ["service1", "service2"]
        }
        
        The "recommendedServices" must be selected ONLY from this list: ${serviceTitles}.
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const jsonString = response.text();
      
      const parsedResult: GeminiResult = JSON.parse(jsonString);
      setResult(parsedResult);

    } catch (e: any) {
      console.error("Gemini Error:", e);
      setError(e.message || 'An error occurred while generating ideas. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  const ResultCard: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
    <div className="bg-white dark:bg-[#1E1E1E] p-6 rounded-xl border border-gray-200 dark:border-white/10">
      <h3 className="text-lg font-bold text-[#1D4ED8] mb-4">{title}</h3>
      <ul className="space-y-2">
        {items?.map((item, index) => (
          <li key={index} className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span className="text-[#6B7280] dark:text-[#9CA3AF]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#111827] dark:text-[#F9FAFB]">
            Kickstart Your <span className="text-[#1D4ED8]">Next Big Idea</span>
          </h2>
          <p className="mt-4 text-lg text-[#6B7280] dark:text-[#9CA3AF] max-w-2xl mx-auto">
            Have a concept but not sure where to start? Describe your business idea below, and let our AI-powered assistant generate a creative launchpad for your project.
          </p>
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <div className="flex flex-col gap-4">
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="e.g., An AI-powered app that creates personalized travel itineraries based on user preferences and budget."
              rows={4}
              className="w-full bg-gray-100 dark:bg-[#1E1E1E] border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-[#111827] dark:text-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition-all"
              aria-label="Business idea input"
              disabled={loading}
            />
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full bg-[#1D4ED8] text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-[#3B82F6] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#121212] focus:ring-[#3B82F6] disabled:bg-gray-400 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </>
              ) : 'Generate Ideas'}
            </button>
          </div>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </div>

        {result && (
          <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <ResultCard title="Project Name Suggestions" items={result.projectNameSuggestions} />
            <ResultCard title="Core MVP Features" items={result.coreMvpFeatures} />
            <ResultCard title="Recommended Services" items={result.recommendedServices} />
          </div>
        )}
      </div>
    </section>
  );
};

export default GeminiSection;