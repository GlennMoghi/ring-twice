import { PiArrowRightBold } from "react-icons/pi";

import type {
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

type Category = {
  name: string;
  description: string;
};

type Props<TFormValues extends FieldValues> = {
  category: Category;
  name: keyof TFormValues;
  register: UseFormRegister<TFormValues>;
  setValue: UseFormSetValue<TFormValues>;
  onSelect?: () => void;
  selected?: boolean;
};

export function CategoryCard<TFormValues extends FieldValues>({
  category,
  name,
  register,
  setValue,
  onSelect,
}: Props<TFormValues>) {
  return (
    <label
      className={`flex items-center justify-between gap-x-3 bg-white rounded-lg py-4 px-5 cursor-pointer transition hover:bg-[#f2eae2]`}
    >
      <input
        type="radio"
        {...register(name as any)}
        value={category.name}
        className="hidden"
        onChange={() => {
          setValue(name as any, category as any, { shouldValidate: true });
          onSelect?.();
        }}
      />
      <div className="w-8 h-8 bg-[#eaddd1] rounded-lg flex-shrink-0"></div>
      <div className="flex flex-col">
        <span className="font-medium">{category.name}</span>
        <span className="text-xs text-gray-400">{category.description}</span>
      </div>
      <PiArrowRightBold size={24} />
    </label>
  );
}
