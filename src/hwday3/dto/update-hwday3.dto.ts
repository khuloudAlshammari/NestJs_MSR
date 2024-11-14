import { PartialType } from '@nestjs/mapped-types';
import { CreateHwday3Dto } from './create-hwday3.dto';

export class UpdateHwday3Dto extends PartialType(CreateHwday3Dto) {}
