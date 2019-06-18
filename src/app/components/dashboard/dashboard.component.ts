import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todo-item.model';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    todoItems: TodoItem[] = [];
    private form: FormGroup;

    constructor() {}

    ngOnInit() {
        this.initForm();
        this.initTodoList();
    }

    /**
     * Initialises this component's form.
     */
    private initForm(): void {
        // Initialise form
        this.form = new FormGroup({
            itemDescription: new FormControl(null, Validators.required),
        });
    }

    /**
     * Initialises the to-do list.
     */
    initTodoList(): void {
        // @TODO: check if the user is logged in, show their items?
        this.todoItems = [new TodoItem('Click the plus to add new items', new Date())];
    }

    /**
     * Adds a new item.
     */
    onAddItem(): void {
        const description = this.form.value['itemDescription'];
        this.todoItems = this.todoItems.concat([new TodoItem(description, new Date())]);
        this.form.reset();
    }

    /**
     * Removes the specified item.
     *
     * @param item Item to remove.
     */
    onRemoveItem(item: TodoItem): void {
        setTimeout(() => {
            this.todoItems = this.todoItems.filter((_item: TodoItem) => _item !== item);
        }, 70);
    }
}
