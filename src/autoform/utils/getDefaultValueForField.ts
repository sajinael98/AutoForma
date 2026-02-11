import { FieldType } from '../types';

export function getDefaultValueForField<TCustom extends string = never>(
  type: FieldType<TCustom>
): any {
  switch (type) {
    case 'array':
      return [];
    case 'object':
    default:
      return null;
  }
}
