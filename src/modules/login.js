export const LOGIN = 'login/LOGIN'
export const LOGOUT = 'login/LOGOUT'

const initialState = {
  loginCredentials: null,
  loggedIn: false,
  imageListAdmin: [
    {
      "ID": "001",
      "Name": "Apple",
      "Image": "apple.png"
    },
    {
      "ID": "002",
      "Name": "Google",
      "Image": "google.jpg"
    },
    {
      "ID": "003",
      "Name": "Microsoft",
      "Image": "microsoft.png"
    },
    {
      "ID": "004",
      "Name": "Samsung",
      "Image": "samsung.png"
    },
    {
      "ID": "005",
      "Name": "Sony",
      "Image": "sony.gif"
    },
    {
      "ID": "006",
      "Name": "Motorola",
      "Image": "motorola.gif"
    }
  ],
  imageListUser: [
    {
      "ID": "007",
      "Name": "OnePlus",
      "Image": "oneplus.png"
    },
    {
      "ID": "008",
      "Name": "Xiaomi",
      "Image": "xiaomi.jpg"
    },
    {
      "ID": "009",
      "Name": "Huawei",
      "Image": "huawei.gif"
    },
    {
      "ID": "010",
      "Name": "Nokia",
      "Image": "nokia.gif"
    },
    {
      "ID": "011",
      "Name": "HTC",
      "Image": "htc.png"
    },
    {
      "ID": "012",
      "Name": "Lenovo",
      "Image": "lenovo.png"
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginCredentials: action.user,
        loggedIn: true
      }

    case LOGOUT:
      return {
        ...state,
        loginCredentials: null,
        loggedIn: false
      }

    default:
      return state
  }
}

export const login = (userName, password) => {
  if (userName === 'admin' && password === 'admin') {
    return dispatch => {
      dispatch({
        type: LOGIN,
        user: 'admin'
      })
    }
  }
  if (userName === 'user' && password === 'user') {
    return dispatch => {
      dispatch({
        type: LOGIN,
        user: 'user'
      })
    }
  }
  else {
    return dispatch => {
      dispatch({
        type: LOGIN,
        user: 'unknown'
      })
    }
  }
}

export const logout = () => {
  return dispatch => {
    dispatch({
      type: LOGOUT
    })
  }
}

