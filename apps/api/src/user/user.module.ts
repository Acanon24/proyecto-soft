import { Module } from '@nestjs/common';
import { UserService } from './user.service';

import { AuthController } from 'src/auth/auth.controller';
import { AuthService } from 'src/auth/auth.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService, PrismaService],
  exports: [PrismaService]
})
export class UserModule {}
