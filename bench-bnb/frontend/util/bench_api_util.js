export const fetchBenches = () =>
   $.ajax({
      method: 'GET',
      url: 'api/benches'
   });

export const newFetchBenches = (bounds) =>
   $.ajax({
      method: 'GET',
      url: 'api/benches',
      data: {
         bounds
      }
   });
