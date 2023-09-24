import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { page, pagesize } = req.query;
    const API_KEY = process.env.NEXT_PUBLIC_NewsApi_Key;
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&page=${page}&pageSize=${pagesize}`
    );
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
