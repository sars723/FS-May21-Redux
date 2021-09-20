import { initialState } from '../store'

const jobReducer = (state = initialState.job, action) => {
  switch (action.type) {
    case 'FILL_Jobs':
      return {
        ...state,
        
         jobs: [...state.jobs, ...action.payload],
        
      }
    case 'Remove_Jobs':
      return {
        ...state,
       
          jobs: state.jobs.filter((company, i) => i !== action.payload),
        
      }
      case 'FILL_Jobs_LOADING':
        return {
          ...state,
          loading: action.payload,
        }
  
      case 'FILL_Jobs_ERROR':
        return {
          ...state,
          error: action.payload,
        }
    default:
      return state
  }
}

export default jobReducer
