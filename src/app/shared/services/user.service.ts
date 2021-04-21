import {Injectable} from '@angular/core'
import {IBestUser} from '../interfaces/best-user.interface'

@Injectable({providedIn: 'root'})
export class UserService {
  getBestWeek(): IBestUser[] {
    return [
      {
        name: 'Janna D\`ark',
        desc: 'Best of the best Best of the best',
        img: '/assets/img/mock/ph2.png',
        link: '',
        countView: '2k'
      },
      {
        name: 'Janna D\`ark',
        desc: 'Best of the best Best of the best',
        img: '/assets/img/mock/ph2.png',
        link: '',
        countView: '2k'
      },
      {
        name: 'Janna D\`ark',
        desc: 'Best of the best Best of the best',
        img: '/assets/img/mock/ph2.png',
        link: '',
        countView: '2k'
      },
      {
        name: 'Janna D\`ark',
        desc: 'Best of the best Best of the best',
        img: '/assets/img/mock/ph2.png',
        link: '',
        countView: '2k'
      },
      {
        name: 'Janna D\`ark',
        desc: 'Best of the best Best of the best',
        img: '/assets/img/mock/ph2.png',
        link: '',
        countView: '2k'
      },
      {
        name: 'Janna D\`ark',
        desc: 'Best of the best Best of the best',
        img: '/assets/img/mock/ph2.png',
        link: '',
        countView: '2k'
      },
    ]
  }
}
