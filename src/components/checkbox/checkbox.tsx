import { useRef, useEffect } from "react";
import {
  CheckboxProps,
  CheckedTypes,
  CheckboxRefType,
} from "../../types/checkbox";

function Checkbox(CheckboxProps: CheckboxProps) {
  //  const checkboxRef = useRef<CheckboxRefType>({
  //   checked: false,
  //   indeterminate: false,
  // });

  // useEffect(() => {
  //   if (CheckboxProps.value === CheckedTypes.Checked) {
  //     checkboxRef.current.checked = true;
  //     checkboxRef.current.indeterminate = false;
  //   } else if (CheckboxProps.value === CheckedTypes.Empty) {
  //     checkboxRef.current.checked = false;
  //     checkboxRef.current.indeterminate = false;
  //   } else if (CheckboxProps.value === CheckedTypes.Indeterminate) {
  //     checkboxRef.current.checked = false;
  //     checkboxRef.current.indeterminate = true;
  //   }
  // }, [CheckboxProps.value]);

  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate =
        CheckboxProps.value === CheckedTypes.Indeterminate;
    }
  }, [CheckboxProps.value]);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          ref={checkboxRef}
          checked={CheckboxProps.value === CheckedTypes.Checked}
          onChange={CheckboxProps.onChange}
        />
        {CheckboxProps.label}
      </label>
    </div>
  );
}

export default Checkbox;

/* Type 'RefObject<CheckboxRefType>' is not assignable to type 'Ref<HTMLInputElement> | undefined'.
  Type 'RefObject<CheckboxRefType>' is not assignable to type 'RefObject<HTMLInputElement | null>'.
    Type 'CheckboxRefType' is missing the following properties from type 'HTMLInputElement': accept, align, alt, autocomplete, and 360 more.ts(2322)
index.d.ts(291, 9): The expected type comes from property 'ref' which is declared here on type 'DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>'*/
