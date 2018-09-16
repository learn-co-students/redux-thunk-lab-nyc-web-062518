export default function fetchCats() {
  return (dispatch) => {
    fetch('http://localhost:4000/db').then(response => {
    return response.json()
  }).then(responseJSON => {
    return dispatch({type: "FETCH_CATS", payload: responseJSON.images})
  })
  }

}


// export default function fetchCats() {
//   return (dispatch) => {
//     console.log(dispatch)
//     return fetch('http://localhost:4000/db')
//       .then(response => response.json())
//       .then(cats => dispatch({ type: 'LOADING_CATS', payload: cats }));
//   };
// }
