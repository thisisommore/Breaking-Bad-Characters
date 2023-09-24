import "./mongodb"
import mongoose from "mongoose";

type TQuotes = {
    quote: string,
    author: string,
    series: string
}

const quotesSchema = new mongoose.Schema<TQuotes>({
    quote: String,
    author: String,
    series: String
});
export const MQuotes = mongoose.models.Quotes as mongoose.Model<TQuotes> || mongoose.model('Quotes', quotesSchema);