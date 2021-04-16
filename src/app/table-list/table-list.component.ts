import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {

  @Input() todos
  @Input() filter: string
  @Output() sendEditId = new EventEmitter()
  @Output() sendDeleteId = new EventEmitter()
  @Output() sendDataUpdate = new EventEmitter()
  @Output() sendCancelId = new EventEmitter()

  todoEdit: string
  isDone: boolean
  isError = false;

  test(id: any) {
    let index = this.todos.findIndex(t => t.id == id)
    this.todos.splice(index, 1)


  }

  editData(id: number) {
    this.isError = false
    let index = this.todos.findIndex(t => t.id == id)
    this.todoEdit = this.todos[index].title
    this.isDone = this.todos[index].isCompleted
    this.sendEditId.emit(id)
  }

  deleteData(id: number) {
    this.sendDeleteId.emit(id)
  }

  unCheck() {
    this.isDone = false

  }
  checked() {
    this.isDone = true
  }


  updateData(id: number) {
    if (this.todoEdit.trim().length >= 5) {
      this.isError = false
      let index = this.todos.findIndex(t => t.id == id)
      this.todos[index].title = this.todoEdit
      this.todos[index].isCompleted = this.isDone
      this.sendDataUpdate.emit(id)
    }
    else {
      this.isError = true
    }
  }

  cancelData(id: number) {
    this.sendCancelId.emit(id)
  }

  sortList() {
    if (this.filter == 'all') {
      this.todosCopy = this.todos
    }
    else if (this.filter == 'new') {
      this.todosCopy = this.todos.filter(t => t.isCompleted == false)
    }
    else if (this.filter == 'completed') {
      this.todosCopy = this.todos.filter(t => t.isCompleted == true)
      console.log(this.todos);
    }
    // switch (this.filter) {
    //   case 0:
    //     this.todosCopy = this.todos.filter(t => t.isCompleted == false)

    //   case 1:
    //     this.todosCopy = this.todos.filter(t => t.isCompleted == true)
    // }

  }



  constructor() { }
  todosCopy = [];
  ngOnInit(): void {
    //this.todosCopy=[...[...this.todos]]; 
    //this.todosCopy = [...this.todos];  //rã todos thành các object không kèm theo ô nhớ đẩy vào todosCopy
    this.todosCopy = this.todos
  }
}
