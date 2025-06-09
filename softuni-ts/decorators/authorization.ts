class MockAuthrizationService {
    constructor(
        private userRole: "Guest" | "PersonalDataAdministrator" | "Admin"
    ) {}

    canViewData(property: string) {
        switch (this.userRole) {
            case "Admin":
                return true;

            case "PersonalDataAdministrator":
                return ["name", "age"].includes(property);

            default:
                return false;
        }
    }
}
let mockAuthorizationService = new MockAuthrizationService("Admin");

class User4 {
    private _name: string;
    private _age: number;
    private _creditCardNumber: string;

    constructor(name: string, age: number, creditCardNumber: string) {
        this._name = name;
        this._age = age;
        this._creditCardNumber = creditCardNumber;
    }

    @authorized(mockAuthorizationService)
    get name(): string {
        return this._name;
    }

    @authorized(mockAuthorizationService)
    get age(): number {
        return this._age;
    }

    @authorized(mockAuthorizationService)
    get creditCardNumber(): string {
        return this._creditCardNumber;
    }
}

const user4 = new User4("John Doe", 30, "ABCD-1234");

console.log(user4.name);

console.log(user4.age);

console.log(user4.creditCardNumber);

function authorized(authService: MockAuthrizationService) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {

        const originalGetter = descriptor.get;

        descriptor.get = function () {
        const isAllowed = authService.canViewData(propertyKey);

            if (!isAllowed) {
                throw new Error("You are not authorized to view this information");
            };
            return originalGetter?.call(this);
        }
        return descriptor;
    };
}
