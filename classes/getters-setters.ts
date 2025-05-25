class UserProfile {
    username: string = "";
    email: string = "";
    birthdate: Date = new Date();

    constructor(username: string, email: string, birthdate: Date) {
        this.setUsername(username);
        this.setEmail(email);
        this.setBirthDate(birthdate);
    }

    setUsername(username: string) {
        if (username !== " ") {
            this.username = username;
        } else {
            throw new Error('Invalid username.')
        }
    }
    setEmail(email: string) {
        if (email.includes("@")) {
            this.email = email;
        } else {
            throw new Error('Invalid email.')
        }
    }
    setBirthDate(birthdate: Date) {

        const date = new Date(birthdate).toISOString().slice(0, 10)

        if (date) {
            this.birthdate = birthdate;
        } else {
            throw new Error('Invalid birthdate.')
        }
    }
}
// new Date(2025, 04, 25).toISOString().slice(0, 10);