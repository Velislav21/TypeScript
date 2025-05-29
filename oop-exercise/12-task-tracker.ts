class Task2 {
    title;
    description;
    completed = false;
    private _createdBy;

    constructor(
        title: string,
        description: string,
        createdBy: string,
    ) {
        this.title = title;
        this.description = description;
        this._createdBy = createdBy;
    }

    get createdBy() {
        return this._createdBy;
    }

    toggleStatus(): void {
        this.completed = !this.completed;
    }

    getDetails(): string {
        return `Task ${this.title} - ${this.description} - ${
            this.completed ? "Completed" : "Pending"
        }`;
    }

    static createSampleTask() {
        return [];
    }
}
const task22 = new Task2("Clean room", "Clean the room", "Mary");

console.log(task22.getDetails());
