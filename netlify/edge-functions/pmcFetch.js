export default async (request, context) => {
  function axiosTest() {
    fetch("https://planetminecraft.com/exture-pack/behavior-pack-glow-blocks-for-radiant-pack-rtx/stats")
        .then(response => response.data)
        .catch(error => error);
  }

  async function getResponse () {
          axiosTest().then(response => {
                  return response;
          });
  }


  return new Response(getResponse())
//  const jsonData = await pmcStats.json();
//  return Response.json(jsonData);
};