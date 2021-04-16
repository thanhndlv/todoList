import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-on-input',
  templateUrl: './on-input.component.html',
  styleUrls: ['./on-input.component.scss']
})
export class OnInputComponent implements OnInit {
  @Output() sendDataAdd = new EventEmitter()
  @Input() todos
  todo: string
  isError: boolean

  addData() {
    if (this.todo.trim().length >= 5) {
      this.isError = false;
      this.sendDataAdd.emit(this.todo)
    }
    else {
      this.isError = true
    }
  }
  

  searchData() {
    this.todosCopy = this.todos.filter(t => t.title.includes(this.todo))
    console.log("TodosCopy: ", this.todosCopy);
    //this.todos = this.todosCopy
    console.log("Todos: ", this.todos);
  }

  constructor() { }
  todosCopy = []
  ngOnInit(): void {
    this.todosCopy = this.todos
  }

}
