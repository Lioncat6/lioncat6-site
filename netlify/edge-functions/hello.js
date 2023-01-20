export default async(request, context) => {
    var getJSON = function(url, callback) {

        var xmlhttprequest = new XMLHttpRequest();
        xmlhttprequest.open('GET', url, true);
        xmlhttprequest.setRequestHeader("user-agent","lioncat6");
        xmlhttprequest.responseType = 'json';
    
        xmlhttprequest.onload = function() {
    
            var status = xmlhttprequest.status;
    
            if (status == 200) {
                callback(null, xmlhttprequest.response);
            } else {
                callback(status, xmlhttprequest.response);
            }
        };
    
        xmlhttprequest.send();
    };
    
    getJSON('https://www.planetminecraft.com/texture-pack/behavior-pack-glow-blocks-for-radiant-pack-rtx/stats',  function(err, data) {
    
        if (err != null) {
            console.error(err);
        } else {
    
           var display = data;
        }
      console.log(); 
    });
    return new Response("This was generated with edge with JS!"+display,
    {
        headers: {
            "context-type": "text/html"
        }
    }
    )
}