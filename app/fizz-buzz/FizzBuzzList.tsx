import { entriesAtom, rawInputAtom } from "@/app/atoms";
import FizzBuzzResult from "@/app/fizz-buzz/FizzBuzzResult";
import { useAtomValue } from "jotai";
import React from "react";

function FizzBuzzList() {
  const raw = useAtomValue(rawInputAtom);
  const results = useAtomValue(entriesAtom);

  return (
    <>
      <div className="pt-6">
        {raw && (
          <p>
            You entered <span>{raw}</span>
          </p>
        )}
      </div>

      <div className="pt-4">
        <table className="min-w-full divide-y divide-gray-100">
          <thead>
            <tr>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-200 bg-indigo-500 uppercase tracking-wider  border border-gray-900">
                Input
              </th>
              <th className="px-6 py-3 text-xs font-medium text-center text-gray-200 bg-indigo-500 uppercase tracking-wider">
                Result
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
          {results.map((v, i) => (
              <FizzBuzzResult key={i} entry={v} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FizzBuzzList;
