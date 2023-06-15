
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'matches', async: false })
export class MatchesConstraint implements ValidatorConstraintInterface {
  validate(confirmPassword: string, args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    const password = (args.object as any)[relatedPropertyName];
    return password === confirmPassword;
  }

  defaultMessage(args: ValidationArguments) {
    return `The ${args.property} must match the ${args.constraints[0]} property`;
  }
}
