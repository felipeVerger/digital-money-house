const { MongoClient } = require("mongodb");
import { MainContainer, ServicesContainer, CardTitle, GreenBackground, LineTitle, Subtitle, Title, ImgTabletDesktop, ImgMobile } from '../../indexStyled';
// Replace the uri string with your connection string.
const uri = "mongodb+srv://grupo9:iUQcYVASwhgin9tb@grupo9.bgnv8qm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('sgrupo09database');
    const movies = database.collection('grupo09database');
    // Query for a movie that has the title 'Back to the Future'
    const query = { url: "https://g9-bucket.s3.us-east-2.amazonaws.com/desktop-landing.png"  };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
  return(
    <ImgTabletDesktop
            src= {movie.url}
            alt="image background"
          />
  )
}
run().catch(console.dir);