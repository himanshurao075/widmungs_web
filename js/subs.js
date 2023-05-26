fetch('https://widmungs.azurewebsites.net/subscription',

{
    method: 'POST', 
    mode: 'cors', 
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'null'
    },
    body :
   
    JSON.stringify({
        "mail": "kkkk@gmail.com",
        "date" : "12345678"
    }) // body data type must match "Content-Type" header
  }
  
  )
  .then(response => response.text())
  .then(json => console.log(json))


// $.post("https://deepapii.azurewebsites.net/login",  {
//     username: "kkkk@gmail.com",
//     passowrd: "12345678"
//   },function(data, status){
//     alert("Data: " + data + "\nStatus: " + status);
//   });

// function getData() {
//   var  url ='https://deepapii.azurewebsites.net/login';
// var   data = "{'username':'kkkk@gmail.com','password':'12345678'}";
// var parms= {
//     mehtod : 'POST',
//     headers: {
//         'Content-Type' :'application/json'
//     },
//     body:data
// }
//   fetch(url,parms).then(response=>response.json()).then(data=>console.log(data))
// }

// getData();

