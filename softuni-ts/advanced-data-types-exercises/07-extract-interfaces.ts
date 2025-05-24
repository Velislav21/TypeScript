type Status = "Logged" | "Started" | "InProgress" | "Done";

type UserData = {
    username: string;
    signupDate: Date;
};

type Task = {
    status: Status;
    title: string;
    daysRequired: number;
    assignedTo: UserData | undefined;
    changeStatus: (newStatus: Status) => void;
};

function assignTask(user: UserData,task: Task) {
    if (task.assignedTo == undefined) {
        task.assignedTo = user;

        console.log(`User ${user.username} assigned to task '${task.title}'`);
    }
}
let user = {
    username: "Margaret",
    signupDate: new Date(2022, 1, 13),
    passwordHash: "random",
};

let task1 = {
    status: <"Logged" | "Started" | "InProgress" | "Done">"Logged",
    title: "Need assistance",
    daysRequired: 1,
    assignedTo: undefined,
    changeStatus(newStatus: "Logged" | "Started" | "InProgress" | "Done") {
        this.status = newStatus;
    },
};
let task2 = {
    status: <"Logged" | "Started" | "InProgress" | "Done">"Done",
    title: "Test",
    daysRequired: 12,
    assignedTo: undefined,
    changeStatus(newStatus: "Logged" | "Started" | "InProgress" | "Done") {
        this.status = newStatus;
    },
    moreProps: 300,
    evenMore: "wow",
};
assignTask(user, task1);
assignTask(user, task2);
