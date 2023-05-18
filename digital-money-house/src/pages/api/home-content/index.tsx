import { dbConnect } from "@/utils/db";
import HomeContent from "@/models/HomeContent";
import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import { MainContainer, ServicesContainer, CardTitle, GreenBackground, LineTitle, Subtitle, Title, ImgTabletDesktop, ImgMobile } from '../../indexStyled';


dbConnect()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method, body } = req;
    if (method === "POST") {
        const newContent = new HomeContent(body);
        const savedContent = await newContent.save();
        return res.status(201).json(savedContent);
    }
    
    const client = new MongoClient("mongodb+srv://grupo9:iUQcYVASwhgin9tb@grupo9.bgnv8qm.mongodb.net/?retryWrites=true&w=majority")
    const database = client.db('grupo09database');
    const collection = database.collection('grupo09database');
    const content = await collection.findOne( { url: "https://g9-bucket.s3.us-east-2.amazonaws.com/desktop-landing.png" } );
    console.log(JSON.stringify(content));
    const data = JSON.stringify(content)
    console.log(data)
    res.status(200).json(content)
    
    return(
        <ImgTabletDesktop
            src= {data.url}
            alt="image background"
          />
    )
    
}