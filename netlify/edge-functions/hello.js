export default async(request, context) => {
    var date = new Date();
    var current_hour = date.getHours();
    return new Response("This was generated with edge with JS! The current hour is:"+current_hour,
    {
        headers: {
            "context-type": "text/html"
        }
    }
    )
}