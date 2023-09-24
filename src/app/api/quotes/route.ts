import { MQuotes } from '../quotes'

interface Response {
    name: string,
    birth_date: string,
    occupation: string[],
}

export async function GET(
    req: Request
) {
    const { searchParams } = new URL(req.url)
    const author = searchParams.get('author')

    if (author) {
        const quotes = await MQuotes.find({ author }).exec();
        return Response.json(quotes.map(e => e.quote));
    }
    else {
        return Response.json({ error: 'author is required' }, { status: 400 })
    }
}
