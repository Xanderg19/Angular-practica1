import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList:Character[] = [{
    name: 'Krillin',
    power: 5000
  },
 ];

 @Output()
 public ondelete:EventEmitter<string> = new EventEmitter();

 onDeleteCharacter(id?:string):void{
  //TODO emitir el id

  if(!id) return;
  this.ondelete.emit(id);
 }

}
