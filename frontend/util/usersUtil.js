const TokenRoot = 'http://localhost:3000/api/session';
const UserRoot = 'http://localhost:3000/api/users';

/*Login User*/
export const submitUser = data => {
  const formData = new FormData();
  for ( let key in data ){
    formData.append( key, data[key] );
  }
  return(
    fetch(TokenRoot, {
      method: 'POST',
      body: formData
    }).then( function(r) {
      return r.json();
    })
  );
};

/*Signup User*/
export const submitNewUser = data => {
  const formData = new FormData();
  for ( let key in data ){
    formData.append( key, data[key] );
  }
  return(
    fetch(UserRoot, {
      method: 'POST',
      body: formData
    }).then( function(r) {
      return r.json();
    })
  );
};
