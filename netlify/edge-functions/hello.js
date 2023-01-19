export default async(request, context) => {
    return new Response("This was generated with edge with JS!",
    {
        headers: {
            "context-type": "text/html"
        }
    }
    )
}