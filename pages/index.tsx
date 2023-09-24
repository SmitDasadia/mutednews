/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import NewsData from "@/components/NewsData";
import Loader from "@/components/Loader";

type NewsData = {
  newsData: any;
};

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [newsData, setNewsData] = useState<NewsData>();
  const [pageSize, setPageSize] = useState<number>(10);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchNewsData();
    // Add a scroll event listener
    window.addEventListener("scroll", handleScroll);
  }, [pageSize]); // Add pageSize as a dependency

  const fetchNewsData = async () => {
    try {
      const response = await axios.get("/api/News", {
        params: {
          page: "1",
          pagesize: pageSize,
        },
      });
      setNewsData(response.data);
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    // Check if the user has reached the bottom of the page and not already loading more data
    if (scrollTop + clientHeight >= scrollHeight - 200 && !loading) {
      setLoading(true);
      // Increase the page size and fetch more data
      setPageSize((prevPageSize) => prevPageSize + 10);

      // Simulate loading with a delay (you can replace this with a loading spinner)
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <main>
      <div className={`p-3 `}>
        <Head>
          <title>Muted News</title>
        </Head>

        <h1 className="flex justify-center items-center font-bold text-3xl sm:text-5xl pt-5 pb-5">
          Top Headlines
        </h1>

        <NewsData newsData={newsData} />

        {loading && <Loader />}
      </div>
    </main>
  );
}
