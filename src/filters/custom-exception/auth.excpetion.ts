import { NotFoundException  } from '@nestjs/common';

export class AuthException extends NotFoundException {
    
    constructor(objectError : {message : string , statusCode : number}){
        super(objectError);
    }
} 