import { useState } from "react";
import { SliderProps } from "../../navigation/StackNavigation";
import FirstSlider from "./components/FirstSlider";
import SecondSlider from "./components/SecondSlider";

export default function Slider({ navigation }: SliderProps) {
  const [activeStep, setActiveStep] = useState<"first" | "second">("first");

  const handleNextPage = () => setActiveStep("second");
  const handleLogin = () => navigation.navigate("Login");

  return (
    <>
      {activeStep === "first" && (
        <FirstSlider navigate={handleLogin} handleNextPage={handleNextPage} />
      )}
      {activeStep === "second" && <SecondSlider navigate={handleLogin} />}
    </>
  );
}
