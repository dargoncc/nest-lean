import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController, PersonController1 } from './person.controller';

@Module({
  controllers: [PersonController, PersonController1],
  providers: [PersonService],
})
export class PersonModule {}
