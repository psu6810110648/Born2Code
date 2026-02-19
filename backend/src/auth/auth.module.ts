import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UsersModule,
    JwtModule.register({
      global: true, 
      secret: 'BORN2CODE_SECRET_KEY_1234',      // รหัสลับตอกบัตร (ของจริงจะเก็บในไฟล์ .env)
      signOptions: { expiresIn: '1d' },         // อายุของคีย์การ์ด (1d = 1 วัน)
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
