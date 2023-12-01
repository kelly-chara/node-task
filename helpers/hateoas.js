export const addHateoasLinks = (response, userId) => {
    // Add links for retrieving a list of hobbies for the user
    response.links = [
      {
        rel: 'user-hobbies',
        href: `/users/${userId}/hobbies`,
        method: 'GET',
      },
    ];
  
    return response;
  };