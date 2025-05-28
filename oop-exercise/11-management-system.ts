class Course {
    title;
    duration;

    constructor(title: string, duration: number) {
        this.title = title;
        this.duration = duration;
    }

    getDescription(): string {
        return ``;
    }
}

class ProgrammingCourse extends Course {
    language;

    constructor(title: string, duration: number, language: string) {
        super(title, duration);
        this.language = language;
    }
    getDescription(): string {
        return `Programming Course: ${this.title} in ${this.title} - ${this.duration} hours`;
    }
}
class DesignCourse extends Course {
    tools;

    constructor(title: string, duration: number, tools: string[]) {
        super(title, duration);
        this.tools = tools;
    }
    getDescription(): string {
        return `Design Course: ${this.title} using ${this.tools.join(', ')} - ${this.duration} hour`
    }
}

const jsCourse = new ProgrammingCourse("Intro to JavaScript", 40, "JavaScript");

const uiCourse = new DesignCourse("UX Fundamentals", 30, ["Figma", "Sketch"]);

console.log(jsCourse.getDescription());

console.log(uiCourse.getDescription());
