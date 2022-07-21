import { MembersService } from './members.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Members } from './members.entity';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { createNewMember } from './dto/createMember.dto';
import { response } from 'express';
import { UpdateMemberData } from './dto/updateMember.dto';

@Controller('members')
export class MembersController {
  constructor(private MembersService: MembersService) {}
  @Get()
  @ApiTags('get all member')
  findAll() {
    return this.MembersService.getMembers();
  }

  @Get(':id')
  @ApiTags('get member by id')
  @ApiParam({ name: 'id' })
  async findMemberById(@Param('id', ParseIntPipe) id) {
    const member = await this.MembersService.findMemberById(id);
    if (!member) {
      throw new NotFoundException("Member with this id doesn't exits");
    }
    return member;
  }

  @Post()
  async createNewMember(@Body() member: createNewMember) {
    return await this.MembersService.createNewMember(member);
  }

  @Delete(':id')
  async removeMemberById(@Param('id', ParseIntPipe) id) {
    const member = await this.MembersService.findMemberById(id);
    if (!member) {
      throw new NotFoundException("Member with this id doesn't exits");
    }
    this.MembersService.removeMember(id);
  }

  @Patch(':id')
  async editMemberById(
    @Body() member: UpdateMemberData,
    @Param('id') id: number,
  ): Promise<UpdateMemberData> {
    const memberEdited = await this.MembersService.updateMemberData(id, member);
    if (!memberEdited) {
      throw new NotFoundException("Member with this id doesn't exist");
    }
    return memberEdited;
  }
}
