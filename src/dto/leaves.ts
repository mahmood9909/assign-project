import { CheckSelectKeys } from '../types/generics';

export type LeaveRequestDto = {
  leaveId: string;
  status: Status;
  startOn: Date;
  endsOn: Date;
  employeeId: number;
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

enum Status {
  APPROVED,
  PENDING,
  REJECTED,
}

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
