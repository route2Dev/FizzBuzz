"use client";

import { rawInputAtom, entriesAtom } from "@/app/atoms";
import FizzBuzzForm from "@/app/fizz-buzz/FizzBuzzForm";
import FizzBuzzList from "@/app/fizz-buzz/FizzBuzzList";
import { useAtomValue, useAtom } from "jotai";
import React, { useState } from "react";

function FizzBuzzPage() {
  const [arrayInput, setArrayInput] = useState("");
  const [raw, setRaw] = useAtom(rawInputAtom);
  const results = useAtomValue(entriesAtom);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRaw(arrayInput);
    e.currentTarget.reset();
  };

  return (
    <main className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="text-center text-2xl">Welcome to Fizz Buzz!</h1>
        <FizzBuzzForm />
        <FizzBuzzList />
      </div>
    </main>
  );
}

export default FizzBuzzPage;
