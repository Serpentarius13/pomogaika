import { computed, ref } from "vue";

export interface IStep {
  title: string;
  options: string[];
}

export default function stepsForm(steps: IStep[]) {
  const initialState: Record<number, string[]> = steps.reduce(
    (acc, cur, ix) => {
      acc[ix + 1] = [];
      return acc;
    },
    {}
  );

  const currentStep = ref<number>(1);

  const form = ref(initialState);

  function handleOption(option: string) {
    const step = currentStep.value;
    const formState = form.value[step];

    if (formState.includes(option)) {
      form.value[step] = formState.filter((el) => el !== option);
    } else form.value[step].push(option);
  }

  function nextStep(): void {
    if (currentStep.value + 1 > steps.length) return;
    else if (currentStep.value === steps.length) {
      console.log("done");
    } else {
      currentStep.value++;
    }
  }

  function prevStep(): void {
    currentStep.value--;
  }

  const hasPrevStep = computed<boolean>(() => currentStep.value > 1);

  return { hasPrevStep, prevStep, nextStep, handleOption, form };
}
