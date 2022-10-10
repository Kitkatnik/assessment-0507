/*
  Complete the functions below as described in the instructions.

  The `parks` parameter refers to an array of objects with the following shape:
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  }

  The `users` parameter refers to an object with the following shape:
  {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    }
  }
*/

// INPUT Array<obj>, string
function getParksByState(parks, state) {
  // filter --> return parks object that's in the state
  return parks.filter( parkObj => parkObj.location.state === state );
}
// OUTPUT Array<obj>



// INPUT Array<obj>, Obj, String
function getWishlistParksForUser(parks, users, username) {
  // filter through parks, pulled wishlist for each user, check if wishlist includes parks.id
  let wishlist = users[username].wishlist; // [1, 3]
  return parks.filter( parkObj => wishlist.includes( parkObj.id ))
}
// OUTPUT Array<obj>



// INPUT Array<obj>, Array<obj>, String, String
function userHasVisitedAllParksInState(parks, users, state, username) {
  // every == returns true if all is equal
  // some == returns true if one or more is equal
  // if user has visited >>ALL<< parks ( every method )
  let getParks = getParksByState( parks, state );
  return getParks.every ( parkObj => {
    let parkId = parkObj.id;
    let visited = users[username].visited; 
    return visited.includes( parkId ); 
  })
}
// OUTPUT boolean



// INPUT Object, String, String
function userHasVisitedParkOnWishlist(users, usernameOne, usernameTwo) {
  // see if U1 visited includes U2 wishlist
  let userOneVisited = users[usernameOne].visited; // [ 2, 3 ]
  let userTwoWishlist = users[usernameTwo].wishlist; // [ 1, 3 ]
  return userTwoWishlist.some( wishlistNum => {
    return userOneVisited.includes(wishlistNum);
  })
}
// OUTPUT boolean



// INPUT Object, String
function getUsersForUserWishlist(users, username) {
  let result = [];
  const wishlist = users[username].wishlist; // [1,3]
  for( let user in users ){
    const visited = users[user].visited; // [1,2,3]
    // if wishlist is included in visited
    if(match(wishlist, visited)) result.push( user )
  }
  // INPUT Array<number>, Array<number>
  function match(wishlist, visited){
    for(let wish of wishlist){
      if (visited.includes( wish )) return true;
    }
  } //OUTPUT boolean  
  return result;
}
// OUTPUT Array<strings>


module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};
