import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK) // บอกว่าถ้าสำเร็จ ให้ส่ง code 200 (OK) ไม่ใช่ 201 (Created)
  @Post('login')
  async login(@Body() signInDto: Record<string, any>) {
    // รับ email และ password มาจาก Body
    return this.authService.validateUser(signInDto.email, signInDto.password);
  }
}