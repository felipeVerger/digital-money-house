import { dbConnect } from "@/utils/db";
import HomeContent from "@/models/HomeContent";
import { NextApiRequest, NextApiResponse } from "next";

dbConnect()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method, body } = req;
    if (method === "POST") {
        const newContent = new HomeContent(body);
        const savedContent = await newContent.save();
        return res.status(201).json(savedContent);
    }
    
    const content = await HomeContent.find();
    console.log(content);
    res.status(200).json(content)
}