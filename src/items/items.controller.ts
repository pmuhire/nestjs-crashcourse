import { Controller,Get,Post,Put,Delete,Body,Req,Res,Param} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './schemas/item.schema';
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
    findAll():Promise<Item[]>{
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id):Promise<Item>{
       return this.itemsService.findOne(id);
    }
    @Post()
    async create(@Body() createItemDto:CreateItemDto):Promise<Item>{
      return await this.itemsService.create(createItemDto);
    }

    @Delete(':id')
    async delete(@Param('id') id):Promise<Item>{
      return await this.itemsService.delete(id);
    }
    @Put(':id')
    async update(@Param('id') id,@Body() updateItemDto:CreateItemDto):Promise<Item> {
      return await this.itemsService.updateItem(id,updateItemDto);
    }

}
