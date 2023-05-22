import mongoose from "mongoose";

// interface for city schema
interface ICity {
    _id?: string;
    country_id: string;
    name: string;
    lat: number;
    lng: number;
}

const citySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    country_id: {
        type: String,
        required: true
    },
    lat: {
        type: String,
        required: false
    },
    lng: {
        type: String,
        required: false
    },
});


const City = mongoose.model<ICity>("city", citySchema);
citySchema.index({ name: "text" });


export { City, ICity };
