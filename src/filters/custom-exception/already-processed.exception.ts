import { NotAcceptableException, NotFoundException  } from '@nestjs/common';

export class AlreadyProcessedException extends NotAcceptableException {
    
    constructor(objectError : {message : string , statusCode : number}){
        super(objectError);
    }
} 