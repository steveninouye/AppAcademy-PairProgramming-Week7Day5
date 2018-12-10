export const signup = (user) =>
   $.ajax({
      method: 'POST',
      url: '/api/users',
      data: {
         user
      }
   });
// does user need to be in braces

export const login = (user) =>
   $.ajax({
      method: 'POST',
      url: '/api/session',
      data: {
         user
      }
   });

// login is not a function? error

export const logout = () =>
   $.ajax({
      method: 'DELETE',
      url: 'api/session'
   });
