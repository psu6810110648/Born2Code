import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    //หา user จาก email
    const user = await this.usersService.findOneByEmail(email);
    
    //เปรียบเทียบ hash
    if (user && (await bcrypt.compare(pass, user.password))) {
      //ตัด password ออก แล้วส่งข้อมูล User กลับไป
      const { password, ...result } = user;
      return result;
    }
    
    //ถ้าไม่เจอ หรือรหัสผิด
    throw new UnauthorizedException('Email หรือ Password ไม่ถูกต้อง');
  }
}