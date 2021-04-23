export interface IQuery {
  data: string
}

export interface IAuthorizeUser {
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
  data: {
    registerUser: {
      success: boolean;
    }
  }
}
