async function fetchData(query) {
  const data = await fetch(` https://pokeapi.co/api/v2/${query} ` ,{
    mode: 'cors',
    method:  'GET',
    headers: {
      'Content-type': 'plain/text'
    }
  }).then(r => r.json())
  .then((result)=> {return result;})
  .catch(alert);  
  return data;
}

async function socialAuth(social) {
  const auth = await fetch('paulkotov.localtest.me:5000/auth/' + social, {
    method: 'GET',
    headers: {
      'Content-type': 'plain/text'
    }
  })
    .then(function(r) {
      return r.json();
    })
    .then((result) => {
      return result;
    })
    .catch(function() {
      return {};
    });
  return auth;
}

async function getProfile(){
  const profile = await fetch('http://paulkotov.localtest.me:5000/auth/', {
    mode: 'no-cors',
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-type': 'plain/text'
    }
  }).then((response)=>response.json());
  return profile;
}

function isObjEmpty(obj){
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      return false;
    }
  }
  return true;
} 

export { fetchData, isObjEmpty, socialAuth, getProfile };
