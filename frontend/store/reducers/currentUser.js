export default function(oldState = [], action){
  switch(action.type) {
    case 'RECEIVE_USER':
      return action.user;
    default:
      return oldState;
  }
}
