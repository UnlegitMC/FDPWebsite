var json=
{
  version:"v1.2.3",
  website: "fdp.liulihaocai.pw",
  updatelog: [
    {text:"FDPClient offical discord: https://discord.gg/dJtjF7swH9",color:{r:0,g:255,b:0,a:160}},
      "",
      "New things in FDPClient v1.2.3",
      {text:"[+] INSANE RedeSky Velocity",color:{rainbow:"SKY",rainbow_index:0,alpha:160}}
    ]
};

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

var url="https://fdp.liulihaocai.workers.dev/"

async function handleRequest(request) {
  var path="/"+request.url.split(url)[1]
  return new Response(JSON.stringify(json), {
        status: 200,
        headers: {
          "content-type": "text/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*"
        },
      })
}