import { FieldType } from '../types';

export function getDefaultValueForField<TCustom extends string = never>(
  type: FieldType<TCustom>
): any {
  switch (type) {
    case 'text':
      return '';
    case 'number':
      return 0;
    case 'array':
      return [];
    case 'checkbox':
      return false;
    case 'object':
      return {};
    case 'select':
      return null;
    case 'date':
      return new Date().toISOString().slice(0, 10);
    case 'datetime-local':
      return new Date().toISOString().slice(0, 16);
    case 'time':
      return new Date().toISOString().slice(11, 16);
    default:
      return null;
  }
}
