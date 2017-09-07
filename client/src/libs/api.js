
import { fetch } from 'isomorphic-fetch';

function fetchData(query) {
  return fetch(` https://pokeapi.co/api/v2/${query} ` ,{
    mode: 'cors',
    method:  'GET',
    headers: {
      'Content-type': 'plain/text'
    }
  }).then(r => r.json()).then((result)=> {return result;}).catch(alert);  

}

// function auth(authObject) {
//   return fetch(`${API_DOMAIN}/auth`, {
//     method: 'POST',
//     body:   JSON.stringify(authObject)
//   }).then(r => r.json());
// }

// async function submittedData(values) {
//   console.log(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
// }

async function socialAuth(social) {
  return fetch('localhost:6000/auth/' + social, {
    method: 'GET',
    headers: {
      'Content-type': 'plain/text'
    }
  })
    .then(function(r) {
      return r.json();
    })
    .then(function(result) {
      return result;
    })
    .catch(function() {
      return {};
    });
}

function isObjEmpty(obj){
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      return false;
    }
  }
  return true;
} 

export { fetchData, isObjEmpty, socialAuth };
