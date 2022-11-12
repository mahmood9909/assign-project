import { HttpStatus, Injectable } from '@nestjs/common';
import { AuthException } from 'src/filters/custom-exception/auth.excpetion';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DummyAuthService {
  constructor(private readonly prisma: PrismaService) {}

  async login(email: string) {
    const employee = await this.prisma.employee.findFirst({
      select: {
        id: false,
        email: true,
        name: true,
        username: true,
      },
      where: {
        email: email,
      },
    });

    if (employee) return employee;

    throw new AuthException({
      message: `user with email: ${email} not found `,
      statusCode: HttpStatus.FORBIDDEN,
    });
  }
}
