import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // 1. บอกให้ไปดึงบัตร (Token) มาจาก Header ของ Request
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, // บัตรหมดอายุห้ามเข้า
      secretOrKey: 'BORN2CODE_SECRET_KEY_1234', // **ต้องตรงกับรหัสลับที่ตั้งใน AuthModule**
    });
  }

  // 2. ถ้าบัตรถูกต้อง จะดึงข้อมูลข้างในบัตรมาให้
  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email };
  }
}