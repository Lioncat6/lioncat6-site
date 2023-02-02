export default async (request, context) => {

  const pmcStats = await fetch("https://planetminecraft.com/exture-pack/behavior-pack-glow-blocks-for-radiant-pack-rtx/stats");
  
  return new Response(pmcStats.text(), 
    {
        headers: {
            "context-type": "text/html"
        }
    })
//  const jsonData = await pmcStats.json();
//  return Response.json(jsonData);
};