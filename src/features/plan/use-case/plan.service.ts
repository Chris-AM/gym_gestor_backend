import { Injectable } from '@nestjs/common';
import { CreatePlanDto } from '../domain/dto/create-plan.dto';
import { UpdatePlanDto } from '../domain/dto/update-plan.dto';

@Injectable()
export class PlanService {
  create(createPlanDto: CreatePlanDto) {
    return `This action adds a new plan at ${createPlanDto}`;
  }

  findAll() {
    return `This action returns all plan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} plan`;
  }

  update(id: number, updatePlanDto: UpdatePlanDto) {
    return `This action updates a #${id}, ${updatePlanDto} plan`;
  }

  remove(id: number) {
    return `This action removes a #${id} plan`;
  }
}
