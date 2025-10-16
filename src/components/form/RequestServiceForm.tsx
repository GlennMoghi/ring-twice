import { useState } from "react";

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

  return <div>RequestServiceFormShell</div>;
}
