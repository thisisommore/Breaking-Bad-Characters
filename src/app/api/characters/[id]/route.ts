import { MCharactors } from '../../character'

export async function GET(
    req: Request
) {
    const id = req.url.split("/").reverse()[0];
    if (id != null) {
        const chars = await MCharactors.findById(id).exec()
        if (!chars) {
            console.error(`getting character details for id(${id}): chars is null`);
            return Response.json({ error: 'character not found' }, { status: 404 })
        }
        return Response.json(chars)
    }
    else {
        return Response.json({ error: 'id is required' }, { status: 400 })
    }
}
