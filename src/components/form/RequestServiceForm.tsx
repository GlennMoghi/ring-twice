import { useState } from "react";

import { data } from "../../lib/data";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { requestFormSchema } from "../../lib/requestFormSchema";
import { CategoryCard } from "./CategoryCard";

type FormData = z.infer<typeof requestFormSchema>;

const steps = ["Step 1", "Step 2", "Step 3", "Success"];

export default function RequestServiceForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(requestFormSchema),
    defaultValues: { services: [] },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <section className="px-4 py-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        {currentStep === 0 && (
          <>
            <div className="mb-5 flex flex-col gap-4">
              <h1 className="text-2xl font-semibold mb-2">
                Je hebt hulp nodig en wil een aanvraag plaatsen
              </h1>
              <p className="opacity-60">
                Plaats je aanvraag in enkele stappen en ontvang snel reacties
                van dienstverleners in jouw buurt.
              </p>
              <div className="flex flex-row items-center gap-2">
                <div className="w-4 h-4 bg-neutral-200"></div>
                <span className="font-medium text-sm">Hoe werkt het ?</span>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-lg font-semibold mb-2">Select a category</h2>
              <div className="flex flex-col gap-2">
                {data.map((cat) => (
                  <CategoryCard
                    key={cat.name}
                    category={cat}
                    name="category"
                    register={register}
                    setValue={setValue}
                    selected={watch("category")?.name === cat.name}
                    onSelect={nextStep}
                  />
                ))}
              </div>
              {errors.category && (
                <p className="text-red-500 text-sm">
                  {errors.category.message}
                </p>
              )}
            </div>
          </>
        )}
        {currentStep === 1 && (
          <>
            <h1>Dites-nous de quelle aide vous avez besoin</h1>
            <p>Vous recevrez des offres sous 4 heures.</p>
            <div>
              <h2>Catégorie d'aide que je demande</h2>
              <button
                onClick={prevStep}
                className="flex flex-row border justify-between w-full"
              >
                <div className="w-4 h-4 bg-gray-500"></div>
                <div className="flex flex-1">
                  <span>{watch("category")?.name}</span>
                </div>
                <div className="w-4 h-4 bg-gray-500"></div>
              </button>
            </div>
            <div>
              <h2>Type d'aide ?</h2>
              <div className="flex flex-col gap-2">
                {watch("category")?.types?.map((type) => (
                  <label
                    key={type.name}
                    className="flex flex-col border p-2 rounded-lg cursor-pointer hover:bg-gray-100"
                  >
                    <input
                      type="radio"
                      {...register("type")}
                      value={type.name}
                      onChange={() => setValue("type", type)}
                    />
                    <span className="font-semibold">{type.name}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h2>Pour quels services ?</h2>
              <p>Vous pouvez sélectionner plusieurs options.</p>
              <div className="flex flex-col gap-2">
                {watch("type")?.services?.map((service) => (
                  <label
                    key={service}
                    className="border p-2 rounded-lg cursor-pointer hover:bg-gray-100 flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      {...register("services")}
                      value={service}
                    />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
            </div>
            <button type="button" onClick={nextStep}>
              Continue
            </button>
          </>
        )}
      </form>
    </section>
  );
}
