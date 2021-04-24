export interface IAuthorizeUser {
  email: string
  password: string
}

export interface IOutputAuthorizeUser {
  data: {
    authorizeUser: {
      result: {
        session: {
          token: string
        }
      }
      errorMessage: string
      success: boolean
    }
  }
}

export interface ICreateUser {
  email: string
  password: string
  username: string
}

export interface IOutputCreateUser {
  data: {
    registerUser: {
      success: boolean;
    }
  }
}

export interface IOutputLogout {
  success: boolean
  errorMessage: string
}
