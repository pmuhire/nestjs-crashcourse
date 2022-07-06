import { Injectable } from '@nestjs/common';
import { Items } from './interfaces/items.interface';

@Injectable()
export class ItemsService {
  private readonly items: Items[] = [
    {
      id: 1202,
      name: 'Item one',
      description: 'This is item one',
      qty: 100,
    },

    {
      id: 12020303,
      name: 'Item two',
      description: 'This is item two',
      qty: 190,
    },

    {
      id: 12076303,
      name: 'Item three',
      description: 'This is item three',
      qty: 110,
    },
  ];
  findAll():Items[]{
    return this.items;
  }

  findOne(id){
    return this.items.find(item=>item.id==id);
  }
}
