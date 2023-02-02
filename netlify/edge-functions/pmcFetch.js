export default async (request, context) => {

  const pmcStats = await fetch("https://planetminecraft.com/exture-pack/behavior-pack-glow-blocks-for-radiant-pack-rtx/stats");


  return new Response(pmcStats.text())
//  const jsonData = await pmcStats.json();
//  return Response.json(jsonData);
};