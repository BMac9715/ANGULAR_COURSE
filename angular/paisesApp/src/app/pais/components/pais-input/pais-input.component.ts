import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  constructor() { }

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(1000)
    )
    .subscribe( valor => {
      this.onDebounce.emit( valor );
    });
  }

  buscar(): void {

    if(this.termino.trim().length === 0)
      return;

    this.onEnter.emit( this.termino );
  }

  teclaPresionada(event: any): void {
    this.debouncer.next(this.termino);
  }
}
