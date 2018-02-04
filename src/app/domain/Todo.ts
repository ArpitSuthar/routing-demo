export class Todo {

    userId: number;
    id: number;
    title: string;
    completed: boolean;

    public constructor() {
        this.userId = 0;
        this.id = 0;
        this.title = null;
        this.completed = false;
    }
}
