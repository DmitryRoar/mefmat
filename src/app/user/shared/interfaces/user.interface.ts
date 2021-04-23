export interface IUser {
  name: string
  img: string
  country: string
  status: string
  balance?: string
  owner: boolean
  rank?: string
  about?: string
  subscribers?: {
    img: string
    url: string;
  }[]
}

export interface IVerifyEmail {
  data: {
    verifyEmail: {
      errorMessage: string
      success: boolean
    }
  }
}

export interface IChangePassword {
  data: {
    changeUserPassword: {
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
