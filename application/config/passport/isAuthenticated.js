// helper method to make sure users have access to pages they are accessing
// used as a security measure
const isAuthenticated = (request, response, next) => {
  if(request.isAuthenticated()) {
      next();        
  }else {
      response.redirect('/');
  }
};

module.exports = isAuthenticated;