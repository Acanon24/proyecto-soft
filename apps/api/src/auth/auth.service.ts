import { ConflictException, Injectable } from '@nestjs/common';
import {CreateUserDto} from '../user/dto/create.user.dto'
import { UserService } from 'src/user/user.service';
@Injectable()
export class AuthService {
  constructor(private readonly userService:UserService ){}
  registerUser(CreateUserDto: CreateUserDto) {
    const patient = this.userService.findByEmail(CreateUserDto.email);
    if(patient) throw new ConflictException("patient exists")
      return this.userService.create(CreateUserDto);
  }
    
}
 