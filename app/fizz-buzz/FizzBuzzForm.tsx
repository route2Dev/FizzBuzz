import { entriesAtom, rawInputAtom } from "@/app/atoms";
import { useAtomValue, useSetAtom } from "jotai";
import React, { useState } from "react";

function FizzBuzzForm() {
  const [arrayInput, setArrayInput] = useState("");
  const setRaw = useSetAtom(rawInputAtom);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRaw(arrayInput);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="arrayInput"
              className="block text-sm font-medium leading-6 text-white"
            >
              Enter an Array of Values
            </label>
            <div className="mt-2">
              <input
                id="arrayInput"
                name="arrayInput"
                placeholder="ex. 1,2,3,4,5,6,7"
                onChange={(e) => setArrayInput(e.target.value)}
                required
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                data-testid="array-input"
              />
            </div>
          </div>
        </div>
        <div className="pt-6">
          <button
            type="submit"
            disabled={!arrayInput}
            className="disabled:opacity-40 flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            data-testid="fizz-buzz-submit"
          >
            Process
          </button>
        </div>
      </div>
    </form>
  );
}

export default FizzBuzzForm;
