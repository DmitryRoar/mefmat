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
