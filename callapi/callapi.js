function getMyIpHttp() {
 var request = new XMLHttpRequest();

 // open a new connection, using GET

 request.open('GET', 'https://api.ipify.org?format=json', true);

 // en caso de exito, regresa en resp el resultado
 request.onload = function (resp) {
   console.log(resp);
   console.log(resp.target.response);

 }

 // send request
 request.send();
}

function getMyIpFetch() {

  // Create request object
   var request = new Request('https://randomuser.me/api/?results=3',
         {
           method: 'GET',
           headers: new Headers({ 'Content-Type': 'application/json' })
         });
   // Now use it!
   fetch(request)
   .then(function(response) {
        response.json().then(function(respjson) {
           console.log (respjson.results);
        });
    })
    .catch(err => {
          console.log(err);
     });
}

function getMyIp() {
    $.getJSON("https://api.ipify.org?format=json",
      function(json) {
        console.log(json);
        $('#resultado').text(JSON.stringify(json));
      }
    );
}

function getMyData(randomNumber) {
    $.getJSON("https://randomuser.me/api/?results="+ randomNumber,
      function(json) {
       console.log(json.results);
       $('#resultado').text(JSON.stringify(json.results));
      }
    );
}
