addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    return new Response(JSON.stringify({version:"v114.514"})
      , {
          status: 200,
          headers: {
            "content-type": "text/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*"
          },
        })
  } 
