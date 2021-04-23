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
