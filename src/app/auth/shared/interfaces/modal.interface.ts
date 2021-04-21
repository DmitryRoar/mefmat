export type ModalTypes = 'register' | 'login' | 'model'

export interface IModal {
  type: ModalTypes,
  confirmPassword: boolean;
  desc?: {
    text: string;
    img: string;
  }[]
}
