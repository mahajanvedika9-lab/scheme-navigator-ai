import StepCard from "@/components/common/stepcard";
import { howItWorksSteps } from "@/constants/howitworks";

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-12 text-center text-4xl font-bold">
        How It Works
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {howItWorksSteps.map((step) => (
          <StepCard
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
}