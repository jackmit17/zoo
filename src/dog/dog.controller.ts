import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { DogService } from './dog.service';
import { query, Request } from 'express';

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get()
  public getHello(): string {
    return this.dogService.getHello();
  }

  @Get('greet/:id')
  public inroduce(@Param() params: any, @Query() query: any): string {
    console.log("params:", params);
    console.log("query:", query);

    return this.dogService.introduce();
  }

  @Post('edit')
  public modifyDetail(@Body() body: string): string {
    console.log("body:", body);
    return this.dogService.modifyDetail();
  }
}
