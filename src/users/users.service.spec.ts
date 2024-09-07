import { Test } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let userService: UsersService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    userService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  it('should return an array of users', () => {
    const users = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Luke Coleman' },
      { id: 3, name: 'Jack' },
    ];

    expect(userService.findAll()).toEqual(users);
  });
});
