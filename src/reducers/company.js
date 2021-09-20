import { initialState } from '../store'

const companyReducer = (state = initialState.favoriteCompany, action) => {
  switch (action.type) {
    case 'ADD_Companies_To_favorite':
      return {
        ...state,
        
          companies: [...state.companies, action.payload],
        
      }
    case 'Remove_Companies_From_favorite':
      return {
        ...state,
       
          companies: state.companies.filter((company, i) => i !== action.payload),
        
      }
   
    default:
      return state
  }
}

export default companyReducer
