import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
})

export class ListComponent {
  @Output()
  public onDeleteCharacterEvent: EventEmitter<string> = new EventEmitter()

  @Input()
  public characterList: Character[] = [{
    id: '0',
    name: 'Trunks',
    power: 10
  }]

  onDelete(id: string){
    this.onDeleteCharacterEvent.emit(id)
  }
}
