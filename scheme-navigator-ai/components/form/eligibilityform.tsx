"use client";

import { useState } from "react";

export default function EligibilityForm() {
    const [age,setAge]=useState("");
const [gender,setGender]=useState("");
const [state,setState]=useState("");
const [occupation,setOccupation]=useState("");
const [income,setIncome]=useState("");

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  console.log({
    age,
    gender,
    state,
    occupation,
    income,
  });

  alert("Form Submitted Successfully!");
};
  return (
    <section className="py-20">
      <div className="mx-auto max-w-2xl rounded-xl border bg-white p-10 shadow">

        <h2 className="mb-8 text-center text-4xl font-bold">
          Check Your Eligibility
        </h2>

        <form
onSubmit={handleSubmit}
className="space-y-6"
>

          <div>
            <label className="mb-2 block font-semibold">
              Age
            </label>

           <input
type="number"
placeholder="Enter age"
value={age}
onChange={(e)=>setAge(e.target.value)}
className="w-full rounded-lg border p-3"
/>
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Gender
            </label>

            <select
value={gender}
onChange={(e)=>setGender(e.target.value)}
className="w-full rounded-lg border p-3"
>

<option value="">Select Gender</option>
<option value="Male">Male</option>
<option value="Female">Female</option>
<option value="Other">Other</option>

</select>
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              State
            </label>

            <input
placeholder="Enter State"
value={state}
onChange={(e)=>setState(e.target.value)}
className="w-full rounded-lg border p-3"
/>
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Occupation
            </label>

            <select
value={occupation}
onChange={(e)=>setOccupation(e.target.value)}
className="w-full rounded-lg border p-3"
>

<option value="">Select Occupation</option>
<option>Student</option>
<option>Farmer</option>
<option>Business</option>
<option>Employee</option>

</select>
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Annual Income
            </label>

            <input
type="number"
placeholder="Income"
value={income}
onChange={(e)=>setIncome(e.target.value)}
className="w-full rounded-lg border p-3"
/>
          </div>

          <button
type="submit"
className="w-full rounded-lg bg-indigo-600 py-3 text-white hover:bg-indigo-700"
>
Find My Schemes
</button>
            

        </form>

      </div>
    </section>
  );
}