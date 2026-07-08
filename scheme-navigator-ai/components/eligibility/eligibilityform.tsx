"use client";

import { useState } from "react";
import ProgressBar from "./progressbar";

export default function EligibilityForm() {
  const [step, setStep] = useState(1);

  return (
    <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-xl">
      <ProgressBar step={step} totalSteps={5} />

      <h2 className="mt-8 text-3xl font-bold">
        AI Eligibility Finder
      </h2>

      <p className="mt-2 text-gray-600">
        Step {step} of 5
      </p>

      <div className="mt-10">
        {step === 1 && (
          <>
            <label className="block mb-3 font-semibold">
              How old are you?
            </label>

            <input
              type="number"
              className="w-full rounded-xl border p-4"
              placeholder="Enter your age"
            />
          </>
        )}
      </div>

      <div className="mt-10 flex justify-end">
        <button
          onClick={() => setStep(step + 1)}
          className="rounded-xl bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
        >
          Next →
        </button>
      </div>
    </div>
  );
}