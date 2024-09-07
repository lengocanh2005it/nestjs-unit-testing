import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Luke Coleman' },
    { id: 3, name: 'Jack' },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    const user = this.users.find((user) => user.id === +id);
    if (!user) return null;
    return user;
  }
}
