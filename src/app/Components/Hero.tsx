"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Country {
  name: {
    common: string;
  };
  region: string;
  capital?: string[];
  population: number;
  area: number;
  timezones: string[];
  languages?: Record<string, string>;
  flags: {
    png: string;
  };
}

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [countryDetails, setCountryDetails] = useState<Country | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchQuery) {
      setSuggestions([]);
      setCountryDetails(null);
      return;
    }

    const fetchSuggestions = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${searchQuery}`);
        if (!response.ok) {
          throw new Error("No suggestions found");
        }
        const data: Country[] = await response.json();
        setSuggestions(data.map((country) => country.name.common).slice(0, 5));
      } catch (error) {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [searchQuery]);

  const handleSearch = async (countryName: string) => {
    if (!countryName) return;

    setIsLoading(true);
    setCountryDetails(null);
    setSuggestions([]);

    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
      if (!response.ok) {
        throw new Error("Country not found");
      }
      const data: Country[] = await response.json();
      setCountryDetails(data[0]);
    } catch (error) {
      console.error("Error fetching country details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch(searchQuery);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    handleSearch(suggestion);
    setSuggestions([]);
  };

  return (
    <section className="bg-gray-950 text-white text-center py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-extrabold mb-6">
          Discover the World Like Never Before
        </h1>
        <p className="text-lg font-light mb-8 max-w-3xl mx-auto">
          Search for any country and instantly access essential geographic and tourist details!
        </p>
        <div className="relative flex flex-col items-center mb-8">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter a country name..."
              className="w-full px-5 py-3 rounded-lg border border-gray-400 text-gray-900 shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              onClick={() => {
                handleSearch(searchQuery);
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700"
            >
              Search
            </button>
          </div>
          {suggestions.length > 0 && (
            <div className="w-full max-w-lg bg-gray-800 text-gray-200 shadow-lg rounded-lg mt-2 z-10">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="block w-full text-left px-4 py-2 hover:bg-teal-600"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>
        {isLoading ? (
          <p className="text-lg font-medium">Loading...</p>
        ) : (
          countryDetails && (
            <div className="mt-10 bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">{countryDetails.name.common}</h2>
              <p>
                <strong>Region:</strong> {countryDetails.region}
              </p>
              <p>
                <strong>Capital:</strong> {countryDetails.capital?.[0] || "N/A"}
              </p>
              <p>
                <strong>Population:</strong> {countryDetails.population.toLocaleString()}
              </p>
              <p>
                <strong>Area:</strong> {countryDetails.area.toLocaleString()} km²
              </p>
              <p>
                <strong>Timezones:</strong> {countryDetails.timezones.join(", ")}
              </p>
              <p>
                <strong>Languages:</strong>{" "}
                {Object.values(countryDetails.languages || {}).join(", ")}
              </p>
              <Image
                src={countryDetails.flags.png}
                alt={`${countryDetails.name.common} flag`}
                width={128}
                height={80}
                className="mt-4 mx-auto"
              />
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Hero;
