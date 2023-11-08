"use client";

import { useRouter } from "next/navigation";
import Input from "./input";

function Search({ defName = "react" }) {
  const router = useRouter();
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("search");
    console.log(name);
    router.push(`/repos?name=${name}`);
  };
  return (
    <section className="flex gap-1">
      <form onSubmit={onSubmit}>
        <Input name="search" type="text" defaultValue={defName} />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-s-sm"
          type="submit"
        >
          Search
        </button>
      </form>
    </section>
  );
}

export default Search;
