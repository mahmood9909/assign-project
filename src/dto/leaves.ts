import { Status } from '@prisma/client';
import { IsDateString, IsNotEmpty, Validate } from 'class-validator';
import { IsBeforeConstraint } from 'src/decorators/date.validator';
import { CheckSelectKeys } from '../types/generics';

export class CreateLeaveRequestDto {
  @IsNotEmpty()
  @IsDateString({}, { each: true })
  @Validate(IsBeforeConstraint, ['endsOn'])
  startOn: Date;

  @IsDateString({}, { each: true })
  @IsNotEmpty()
  endsOn: Date;
};

type LeaveSelection = {
  leaveId?: boolean;
  status?: boolean;
  startOn?: boolean;
  endsOn?: boolean;
  employeeId?: boolean;
  id?: boolean;
  createdAt?: boolean;
};


export function createLeaveSelection<T extends LeaveSelection>(
  args: CheckSelectKeys<T, LeaveSelection>,
) {
  return args;
}

export const leaveSelection = createLeaveSelection({
  employeeId: true,
  endsOn: true,
  startOn: true,
  createdAt: false,
  leaveId: true,
  status: true,
});
