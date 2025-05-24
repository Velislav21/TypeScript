type User = {
    id: number | string;
    username: string;
    passwordHash: string | string[];
    status: "Locked" | "Unlocked" | "Deleted";
    email?: string;
};

function isValidUser(user: User): boolean {
    let isValid = true;

    if (typeof user.id === "number" && user.id < 100) {
        isValid = false;
        return isValid;
    }
    if (typeof user.id === "string" && user.id.length !== 14) {
        isValid = false;
        return isValid;
    }

    if (!(user.username.length >= 5) && !(user.username.length <= 10)) {
        isValid = false;
        return isValid;
    }

    if (
        typeof user.passwordHash === "string" &&
        user.passwordHash.length !== 20
    ) {
        isValid = false;
        return isValid;
    }
    if (Array.isArray(user.passwordHash)) {
        if (user.passwordHash.length !== 4) {
            isValid = false;
            return isValid;
        }

        user.passwordHash.forEach((item) => {
            if (item.length !== 8) {
                isValid = false;
            }
        });
        return isValid;
    }

    if (user.status === "Deleted") {
        isValid = false;
        return isValid;
    }

    return isValid;
}
console.log(
    isValidUser({
        id: 1344,
        username: "wow123",
        passwordHash: "123456-123456-1234567",

        status: "Locked",
        email: "something@abv.bg",
    })
);
