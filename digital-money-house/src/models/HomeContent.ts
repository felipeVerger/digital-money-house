import { Schema, model, models } from "mongoose";

// Ejemplo de schema -- MODIFICAR
const homeContentSchema = new Schema({
    
    paragraph: {
        type: String,
        required: true,
    }
})

export default models.HomeContent || model("HomeContent", homeContentSchema);
