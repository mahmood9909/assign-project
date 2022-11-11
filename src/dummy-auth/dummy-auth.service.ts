import { Injectable } from '@nestjs/common';

@Injectable()
export class DummyAuthService {
  create() {
    return 'This action adds a new dummyAuth';
  }

  findAll() {
    return `This action returns all dummyAuth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dummyAuth`;
  }

  update() {
    return `This action updates a #$ dummyAuth`;
  }

  remove(id: number) {
    return `This action removes a #${id} dummyAuth`;
  }
}
