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
         bounds: bounds
      }
   });

// $.ajax({
//    method: 'GET',
//    url: 'api/benches',
//    data: {
//       bounds: {
//          northEast: {
//             lng: -122.381032,
//             lat: 37.821726
//          },
//          southWest: {
//             lng: -122.534543,
//             lat: 37.78
//          }
//       }
//    }
// }).then((res) => console.log(res));
