import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todoList';
  filter: string
  oldEdit: number = -1
  date = new Date()
  todos = [
    {
      id: 1,
      title: 'Study HTML, CSS, Javascript',
      isCompleted: true,
      createdDate: this.date,
      isEdit: false //flat EDIT
    },
    {
      id: 2,
      title: 'Study Angular, React',
      isCompleted: false,
      createdDate: this.date,
      isEdit: false //flat EDIT
    },
    {
      id: 3,
      title: 'Study Java, C#, Python',
      isCompleted: false,
      createdDate: this.date,
      isEdit: false //flat EDIT
    }
  ];
  getDataAdd(todo: string) {
    var newTodo = {
      id: Math.floor(Math.random() * 10),
      title: todo,
      isCompleted: false,
      createdDate: this.date,
      isEdit: false //flat EDIT
    }
    this.todos.unshift(newTodo)
  }

  getEditId(id: number) {
    let index = this.todos.findIndex(t => t.id == id)
    this.todos[index].isEdit = true
    if (this.oldEdit != -1) {
      this.todos[this.oldEdit].isEdit = false;
    }
    this.oldEdit = index;
  }

  getDeleteId(id: number) {
    let index = this.todos.findIndex(t => t.id == id)
    this.todos.splice(index, 1)
  }

  getDataUpdate(id: number) {
    let index = this.todos.findIndex(t => t.id == id)
    this.todos[index].isEdit = false
    this.oldEdit = -1
  }

  getCancelId(id: number) {
    let index = this.todos.findIndex(t => t.id == id)
    this.todos[index].isEdit = false
    this.oldEdit = -1
  }
}
