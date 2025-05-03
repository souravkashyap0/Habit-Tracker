export interface CheckboxProps {
  label: string;
  value: CheckedTypes;
  onChange: () => void;
}

export enum CheckedTypes {
  Checked = "Checked",
  Indeterminate = "Indeterminate",
  Empty = "Empty",
}

export interface CheckboxRefType {
  checked: boolean;
  indeterminate: boolean;
}
