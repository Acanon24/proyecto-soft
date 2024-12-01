import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { createHash } from 'crypto';
import { hash } from 'argon2';



@Injectable()
export class UserService {

  constructor (private readonly prisma:PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const {password, ...patient} = createUserDto;
    const hashedPassword = await hash(password);
    return await this.prisma.patients.create({
      data: {
        password: hashedPassword,
        email: createUserDto.email,
        first_name: createUserDto.first_name ?? null,  // If not provided, set as null
        last_name: createUserDto.last_name ?? null,    // If not provided, set as null
        date_of_birth: createUserDto.date_of_birth ? new Date(createUserDto.date_of_birth) : null,  // If provided, set the date, else null
        gender: createUserDto.gender ?? null,
        phone: createUserDto.phone ?? null,
        address: createUserDto.address ?? null,
        created_at: new Date(),  // Optional, if you want to set it manually
      },
    })
  }

  async findByEmail(email: string) {
    this.prisma.patients.findUnique({
      where: {
        email,
      },
    });
  }


}
