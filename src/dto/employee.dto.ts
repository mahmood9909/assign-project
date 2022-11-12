import { CheckSelectKeys } from 'src/types/generics';

type EmployeeSelection = {
  id? : boolean
  name?:boolean;
  email?: boolean;
  username?: boolean;
};


export function createEmployeeSelection<T extends EmployeeSelection>(
  args: CheckSelectKeys<T, EmployeeSelection>,
) {
  return args;
}
export const employeeSelection = createEmployeeSelection({
    id: false,
    email : true, 
    username : true,
  });