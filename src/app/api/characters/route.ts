import { MCharactors } from '../character'

interface Response {
    name: string,
    birth_date: string,
    occupation: string[],
}

export async function GET(
    req: Request
) {
    const { searchParams } = new URL(req.url)
    const limit = searchParams.get('limit')
    const offset = searchParams.get('offset')


    if (limit && offset != null) {
        const chars = await MCharactors.find({ series: "Breaking Bad" }).limit(+limit).skip(+offset).exec()
        return Response.json(chars)
    }
    else {
        return Response.json({ error: 'limit and offset are required' }, { status: 400 })
    }
}
