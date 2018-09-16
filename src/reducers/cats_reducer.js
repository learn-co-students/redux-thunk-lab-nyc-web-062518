import fetchCats from '../actions/catActions'

export default function manageCats(state = {loading: false, pictures: []}, action) {
  switch(action.type) {

    case "LOADING_CATS":
      return fetchCats()

    case "FETCH_CATS":
      return {...state, pictures: action.payload}

    default:
      return state
  }
}
