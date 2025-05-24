type HttpCode = {
    code: 200 | 201 | 301;
    text: string;
}

type HttpCodeWithPrint = {
    code: 400 | 404 | 500;
    text: string;
    printChars?: number;
}

function httpCodes(httpCode: HttpCode | HttpCodeWithPrint) {
 
    if ('printChars' in httpCode) {
        console.log(httpCode.text.slice(0, httpCode.printChars))
    } else {
        console.log(httpCode.text);
    }
}