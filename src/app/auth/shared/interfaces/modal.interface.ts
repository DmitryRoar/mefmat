export interface IModal {
  type: 'register' | 'login' | 'model',
  confirmPassword: boolean;
  desc?: {
    text: string;
    img: string;
  }[]
}
