/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import Loader from "./Loader";
import { CgClose } from "react-icons/cg";

interface NewsDataProps {
  newsData: any;
}

const NewsData: React.FC<NewsDataProps> = ({ newsData }) => {
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

  const openModal = (article: any) => {
    setSelectedArticle(article);
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  return (
    <>
      {newsData ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pb-10 p-5">
          {newsData.articles.map((article: any, index: number) => (
            <div
              key={index}
              className={`rounded-md shadow-sm p-5 transition-colors duration-300 ease-in-out sm:shadow-md hover:scale-105`}
            >
              <div className="flex flex-row sm:flex-col">
                <img
                  src={
                    !article.urlToImage || article.urlToImage == null
                      ? "https://img.freepik.com/free-vector/blue-breaking-news-tv-background_1017-14201.jpg?w=740&t=st=1690186682~exp=1690187282~hmac=18ae451724de2f68fef8eeeb76ac59b526c63aaa33409aa9652b8acd1040ede8"
                      : article.urlToImage
                  }
                  alt={article.title}
                  className="h-20 w-20 rounded-md sm:w-full sm:h-60 mr-5"
                />

                <div className="flex-1 sm:m-5">
                  <h2 className="text-sm text-gray-600">
                    {article.source.name}
                  </h2>
                  <h2 className="text-xs sm:text-xl font-bold mb-2 pt-2">
                    {article.title}
                  </h2>
                  <button
                    className="bg-black text-white px-2 py-1  sm:px-4 sm:py-2 cursor-pointer rounded-md"
                    onClick={() => openModal(article)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Loader />
      )}

      {/* Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-[#f6f4f4] w-full sm:max-w-xl h-full sm:max-h-screen overflow-y-auto p-4 rounded-lg shadow-md relative">
            <CgClose
              className="text-gray-600 hover:text-gray-800 absolute top-2 right-2 cursor-pointer"
              onClick={closeModal}
            ></CgClose>
            <div className="p-5">
              <img
                src={selectedArticle.urlToImage || ""}
                alt={selectedArticle.title}
                className="w-full h-auto mt-2 rounded-md border"
              />
              {/* <h2 className="text-sm text-gray-600">
                {selectedArticle.source.name}
              </h2> */}
              <h2 className="text-2xl font-semibold mb-2 pt-4">
                {selectedArticle.title}
              </h2>

              <p className="text-lg leading-6  pt-3">
                {selectedArticle.description}
              </p>
              <Link href={selectedArticle.url} target="_blank">
                <button className="bg-black text-white py-2 px-4 rounded-lg mt-4 inline-block cursor-pointer">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsData;
