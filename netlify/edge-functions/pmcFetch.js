export default async (request, context) => {

  async function getStats(){
    const pmcStats = await fetch("https://planetminecraft.com/exture-pack/behavior-pack-glow-blocks-for-radiant-pack-rtx/stats");
    return pmcStats
  }

  return new Response(getStats().text())
//  const jsonData = await pmcStats.json();
//  return Response.json(jsonData);
};