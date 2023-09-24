import "./mongodb"
import mongoose from "mongoose";

type TCharacters = {
    name: string,
    portrayed: string,
    image_url: string,
    full_name: string,
    birth_date: string,
    occupation: string[],
    episodes_count: string,
    series: string,
    appearances: string[]
}

const charactersSchema = new mongoose.Schema<TCharacters>({
    name: String,
    portrayed: String,
    image_url: String,
    full_name: String,
    birth_date: String,
    occupation: [String],
    episodes_count: String,
    series: String,
    appearances: [String]
});
export const MCharactors = mongoose.models.Characters as mongoose.Model<TCharacters> || mongoose.model('Characters', charactersSchema);