import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { TypedEventEmitter } from 'src/event-emitter/typed-event-emitter.class';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService, private readonly eventEmitter: TypedEventEmitter) { }

    @Post('/register')
    create(@Body() createUserDto: CreateUserDto) {
        this.eventEmitter.emit('user.welcome', {
            name: createUserDto.name,
            email: createUserDto.email,
        });
        return true
    }

    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(+id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.userService.remove(+id);
    }
}
