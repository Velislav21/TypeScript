enum LoggingLevel {
    Info = "Info",

    Error = "Error",

    Warning = "Warning",

    Debug = "Debug",
}
enum LoggingFormat {
    Standard = "[%level][%date] %text",

    Minimal = "*%level* %text",
}
interface CachingLogger<T extends LoggingLevel, V extends LoggingFormat> {
    cachedLogs: Map<T, string[]>;

    log(logLevel: T, message: string): void;

    getFormat(): V;
}

class Logger<T extends LoggingLevel, V extends LoggingFormat> implements CachingLogger<T, V> {

    cachedLogs: Map<T, string[]> = new Map();
    private format: V;

    constructor(format: V) {
        this.format = format;
    }

    log(logLevel: T, message: string): void {
        const date = new Date().toISOString();

        const filledMessage = this.format
            .replace("%level", logLevel)
            .replace("%date", date)
            .replace("%text", message);
        
        const currentMessages = this.cachedLogs.get(logLevel);

        if (currentMessages) {
            currentMessages.push(filledMessage);
            this.cachedLogs.set(logLevel, currentMessages)    
        } else {
            this.cachedLogs.set(logLevel, [filledMessage]) 
        }
    };

    getFormat(): V {
        return this.format
    };
}

let logger2 = new Logger<LoggingLevel, LoggingFormat>(LoggingFormat.Standard);

logger2.log(LoggingLevel.Info, "This is an info message.");

logger2.log(LoggingLevel.Info, "Another message.");

logger2.log(LoggingLevel.Error, "Something went wrong.");

logger2.log(LoggingLevel.Warning, "Be careful with the type assertions.");

logger2.log(LoggingLevel.Debug, "Running the debugger.");


console.log('-----------')

console.log([...logger2.cachedLogs.entries()].map(x => x[1].join('\n')).join('\n')) 