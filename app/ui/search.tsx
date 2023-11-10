"use client";

import { useRouter } from "next/navigation";

function Search() {
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
      <form onSubmit={onSubmit} className="w w-full">
        <div className="flex justify-center">
          <input
            name="search"
            type="text"
            placeholder="tetris"
            className="w-96 border p-2 border-gray-600 rounded-tl-xl rounded-bl-xl"
          />
          <button
            className="text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-bold py-1 px-4 rounded-s-sm rounded-tr-xl rounded-br-xl"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </section>
  );
}

export default Search;
