import { Status } from "@prisma/client";
import { IsIn, IsNotEmpty } from "class-validator";

export class ProcessReqDto {
    @IsNotEmpty()
    @IsIn(["APPROVED","PENDING","REJECTED"])
    status : Status;
    @IsNotEmpty()
    leaveId : string;
}