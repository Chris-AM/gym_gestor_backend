import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from '../domain/dto/create-admin.dto';
import { UpdateAdminDto } from '../domain/dto/update-admin.dto';

@Injectable()
export class AdminService {
  create(createAdminDto: CreateAdminDto) {
    return `This action adds a new admin at ${createAdminDto}`;
  }

  findAll() {
    return `This action returns all admin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id}, ${updateAdminDto} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
