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

export interface IOutputVerifyEmail {
  data: {
    verifyEmail: {
      errorMessage: string
      success: boolean
    }
  }
}

export interface IOutputChangePassword {
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

export interface IChangePassword {
  oldPassword: string
  newPassword: string
}
