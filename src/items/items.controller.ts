import { Controller,Get,Post,Put,Delete,Body,Req,Res,Param} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Items } from './interfaces/items.interface';
// import { Response,Request } from 'express';
import { ItemsService } from './items.service';
@Controller('items')
export class ItemsController {
    constructor(private  readonly itemsService:ItemsService){}
    // Use express in nestjs
    // @Get()
    // findAllItems(@Req() req:Request,@Res() res:Response):Response{
    // //   return 'Get all  items';
    // console.log(req.url);
    // return res.send("Hello world!");
    // }
    @Get()
    findAll():Items[]{
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id):string{
       return `item ${id}`;
    }
    @Post()
    create(@Body() createItemDto:CreateItemDto):string{
      return `name ${createItemDto.name} desc:${createItemDto.description}`;
    }

    @Delete(':id')
    delete(@Param('id') id):string{
      return `Delete id ${id}`;
    }

}
