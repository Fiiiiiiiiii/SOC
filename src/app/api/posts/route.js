import Post from "@/models/Post"
import connect  from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async (request) => {

    const url = new URL(request.url)

    const username = url.searchParams.get("username")
    
    try {

        await connect()

        const posts = await Post.find(username && {username})

        return new NextResponse(JSON.stringify(posts), {status: 200});
        
    } catch (err) {
        return new NextResponse("Nefunguje to", {status: 500})
    }

}