import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { UseGuards } from '@nestjs/common';

import JwtAuthenticationGuard from '@common/guards/jwt-authentication.guard';
import { RideService } from './ride.service';
import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';
import RequestWithUser from '@features/authentication/models/request-with-user.model';

@Controller('ride')
@UseGuards(JwtAuthenticationGuard)
export class RideController {
  constructor(private readonly rideService: RideService) {}

  @Post()
  create(
    @Body() createRideDto: CreateRideDto,
    @Req() request: RequestWithUser,
  ) {
    return this.rideService.create(createRideDto, request.user);
  }

  @Get()
  findAll(@Req() request: RequestWithUser) {
    return this.rideService.findAll(request.user);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() request: RequestWithUser) {
    return this.rideService.findOne(+id, request.user);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRideDto: UpdateRideDto,
    @Req() request: RequestWithUser,
  ) {
    return this.rideService.update(+id, updateRideDto, request.user);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() request: RequestWithUser) {
    return this.rideService.remove(+id, request.user);
  }
}
