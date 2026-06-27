"use client";

import { useState } from "react";

export default function Page() {
  const [step, setStep] = useState(1);
  const [submitted,setSubmitted]=useState(false);

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          🏦 Loan Application Wizard
        </h1>

        <h2 className="text-xl font-semibold mb-4 text-center">
          Step {step} of 8
        </h2>
        <div className="w-full bg-gray-300 rounded-full h-3 mb-6">
  <div
    className="bg-blue-600 h-3 rounded-full"
    style={{ width: `${(step / 8) * 100}%` }}
  ></div>
</div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-2 rounded bg-white text-black placeholder-gray-500"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-2 rounded bg-white text-black placeholder-gray-500"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full border p-2 rounded bg-white text-black placeholder-gray-500"
            />

            <select className="w-full border p-2 rounded bg-white text-black">
              <option>Select Loan Type</option>
              <option>Personal Loan</option>
              <option>Home Loan</option>
              <option>Business Loan</option>
            </select>

            <input
              type="number"
              placeholder="Loan Amount"
              className="w-full border p-2 rounded bg-white text-black placeholder-gray-500"
            />

            <input
              type="number"
              placeholder="Monthly Income"
              className="w-full border p-2 rounded bg-white text-black placeholder-gray-500"
            />

          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Occupation"
              className="w-full border p-2 rounded bg-white text-black placeholder-gray-500"
            />

            <input
              type="text"
              placeholder="Company Name"
              className="w-full border p-2 rounded bg-white text-black placeholder-gray-500"
            />

            <input
              type="number"
              placeholder="Years of Experience"
              className="w-full border p-2 rounded bg-white text-black placeholder-gray-500"
            />
          </div>
        )}

       {step === 3 && (
  <div className="space-y-4">

    <input
      type="text"
      placeholder="House No / Street"
      className="w-full border p-2 rounded bg-white text-black"
    />

    <input
      type="text"
      placeholder="City"
      className="w-full border p-2 rounded bg-white text-black"
    />

    <input
      type="text"
      placeholder="State"
      className="w-full border p-2 rounded bg-white text-black"
    />

    <input
      type="text"
      placeholder="PIN Code"
      className="w-full border p-2 rounded bg-white text-black"
    />

  </div>
)}
{step === 4 && (
  <div className="space-y-4">

    <input
      type="text"
      placeholder="Aadhaar Number"
      className="w-full border p-2 rounded bg-white text-black"
    />

    <input
      type="text"
      placeholder="PAN Number"
      className="w-full border p-2 rounded bg-white text-black"
    />

  </div>
)}
{step === 5 && (
  <div className="space-y-4">

    <select className="w-full border p-2 rounded bg-white text-black">
      <option>Select Loan Tenure</option>
      <option>5 Years</option>
      <option>10 Years</option>
      <option>15 Years</option>
      <option>20 Years</option>
    </select>

    <input
      type="number"
      placeholder="Expected EMI"
      className="w-full border p-2 rounded bg-white text-black"
    />

  </div>
)}
{step === 6 && (
  <div className="space-y-4">

    <input
      type="text"
      placeholder="Bank Name"
      className="w-full border p-2 rounded bg-white text-black"
    />

    <input
      type="text"
      placeholder="Account Number"
      className="w-full border p-2 rounded bg-white text-black"
    />

    <input
      type="text"
      placeholder="IFSC Code"
      className="w-full border p-2 rounded bg-white text-black"
    />

  </div>
)}
{step === 7 && (
  <div className="space-y-4">

    <label className="font-semibold text-black">
      Upload Aadhaar / PAN
    </label>

    <input
      type="file"
      className="w-full border p-2 rounded bg-white text-black"
    />

  </div>
)}
{step === 8 && (
  <div className="text-center space-y-4 bg-green-50 p-6 rounded-lg">

    <h2 className="text-2xl font-bold text-green-600">
      🎉 Application Ready
    </h2>
    

    <p className="text-gray-700 text-lg">
      Please review your details before submitting.
    </p>

    <button
    onClick={() => setSubmitted(true)}
      className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
    >
      Submit Application
    </button>
    {submitted && (
  <p className="mt-4 text-green-700 font-bold">
    ✅ Application Submitted Successfully!
  </p>
)}

  </div>
)}
        {/* BUTTONS */}
        <div className="flex justify-between mt-6">

          <button
            onClick={() => setStep(step - 1)}
            disabled={step === 1}
            className="px-5 py-2 bg-gray-500 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>

          <button
            onClick={() => {
              if (step < 8) setStep(step + 1);
            }}
            className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {step === 8 ? "Finish" : "Next"}
          </button>

        </div>

      </div>
    </div>
  );
}