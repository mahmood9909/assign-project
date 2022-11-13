import { Expose } from "class-transformer";
import { IsDefined } from "class-validator";

export class HeaderDto {
    @IsDefined()
    @Expose({ name: 'email' })
    "email" : string;
    
}