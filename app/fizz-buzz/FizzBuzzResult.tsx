import { Entry } from "@/app/models";
import React from "react";

const formatInput = (value: string) => {
  return value !== "" ? value : "<empty>";
};

interface Props {
  entry: Entry;
}

function FizzBuzzResult({ entry }: Props) {

  return (
    <>
      {entry.result !== "" ? (
        <tr>
          <td className="text-center py-4 border border-b">{formatInput(entry.value)}</td>
          <td className="pl-4 border border-b">{entry.result}</td>
        </tr>
      ) : (
        <>
          <tr>
            <td
              className="text-center py-4 whitespace-nowrap
            row-span-2 align-top border border-b"
              rowSpan={2}
            >
              {entry.value}
            </td>
            <td className="py-4 whitespace-nowrap pl-4 border border-b">
              Divided <span>{entry.value}</span> by 3
            </td>
          </tr>
          <tr>
            <td className="py-4 whitespace-nowrap pl-4 border border-b">
              Divided <span>{entry.value}</span> by 5
            </td>
          </tr>
        </>
      )}
    </>
  );
}

export default FizzBuzzResult;
