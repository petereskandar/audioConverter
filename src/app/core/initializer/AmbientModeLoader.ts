import { UserAuthService } from './../../services/user-auth.service';

export function UserLoginFactory(userService: UserAuthService) {
  return (): Promise<any> => {
      return new Promise((resolve, reject) => {
        userService.getUserAuthorized()
        .then((data) => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
