class User2 {
    private _username!: string;

    constructor(username: string) {
        if (username.length <= 3) {
            throw new Error("Error: Username must be at least 3 characters long")
        }
        this.username = username;
    }

    get username() {
        return this._username;
    }

    set username(newUsername: string) {
        if (newUsername.length < 3) {
            throw new Error("Error: Username must be at least 3 characters long")
        }
        this._username = newUsername;
    }
}
const user2 = new User2("jo");