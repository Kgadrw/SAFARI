"use client";

import React, { useEffect, useState } from "react";

interface Article {
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  source: {
    name: string;
  };
}

const Intro = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiKey = "9e971c9f76da43c1a663c084017897e1";
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?language=en&apiKey=${apiKey}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }
        const data = await response.json();
        setNews(data.articles || []);
      } catch (error) {
        console.error("Error fetching trending news:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="bg-gray-950 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4 drop-shadow-lg">
          Latest Trending News
        </h2>
        <p className="text-xl font-light mb-8 max-w-2xl mx-auto">
          Stay updated with the latest trending news from across the globe.
        </p>

        {isLoading ? (
          <p className="text-lg">Loading news...</p>
        ) : news.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
            {news.slice(0, 8).map((article, index) => (
              <div
                key={index}
                className="bg-gray-800 text-gray-300 shadow-lg rounded-xl overflow-hidden"
              >
              
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-40 object-cover"
                  />
                )}

                
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-teal-400"
                    >
                      {article.title}
                    </a>
                  </h3>
                  <p className="text-sm mb-4">
                    {article.description || "No description available."}
                  </p>
                  <p className="text-xs text-gray-400">
                    Source: {article.source.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-lg">No trending news available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Intro;
