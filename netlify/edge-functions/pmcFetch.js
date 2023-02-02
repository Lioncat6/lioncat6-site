import { Context } from "https://edge.netlify.com";

export default async (request, context) => {

  const pmcStats = await fetch("https://planetminecraft.com/exture-pack/behavior-pack-glow-blocks-for-radiant-pack-rtx/stats", {
    "headers": {
      "Accept": "application/json"
    }
  });
  
  const jsonData = await pmcStats.json();
  return Response.json(jsonData);
};