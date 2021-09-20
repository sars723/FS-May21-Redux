export const addToFavoriteCompanyAction = (companyToAdd) => ({
  type: 'ADD_Jobs_To_favorite',
  payload: companyToAdd,
})

export const removeFromFavoriteCompanyAction = (index) => ({
  type: 'Remove_Jobs_From_favorite',
  payload: index,
})




export const addToFavoriteCompanyThunk = (companyToAdd) => {
  return async (dispatch, getState) => {
    dispatch({
      type: 'ADD_Companies_To_favorite',
      payload: companyToAdd,
    })
  }
}

export const removeFromFavoriteCompanyThunk = (index) => {
  return async (dispatch, getState) => {
    dispatch({
      type: 'Remove_Companies_From_favorite',
      payload: index,
    })
  }
}
export const fillJobsAction = (searchString) => {
  return async (dispatch, getState) => {
    console.log('fetching the Jobs...')
    try {
    const baseUrl='https://strive-jobs-api.herokuapp.com/jobs?limit=20'
    /* let resp = await fetch(searchString ? baseUrl + '&title=' + searchString : baseUrl) */
      let resp = await fetch('https://strive-jobs-api.herokuapp.com/jobs?limit=20')
      if (resp.ok) {
        let jobs = await resp.json()
        dispatch({
          type: 'FILL_Jobs_LOADING',
          payload: false,
        })
        dispatch({
          type: 'FILL_Jobs_ERROR',
          payload: false,
        })
        dispatch({
          type: 'FILL_Jobs',
          payload: jobs.data,
        })
      } else {
        console.log('error')
        dispatch({
          type: 'FILL_Jobs_LOADING',
          payload: false,
        })
        dispatch({
          type: 'FILL_Jobs_ERROR',
          payload: true,
        })
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: 'FILL_Jobs_LOADING',
        payload: false,
      })
      dispatch({
        type: 'FILL_Jobs_ERROR',
        payload: true,
      })
    }
  }
}


