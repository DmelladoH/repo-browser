import Search from "./search";

function Header() {
  return (
    <header className="justify-center m-5 justify-items-center ">
      <h1 className="text-4xl mb-5 font-bold uppercase text-center">
        GitHub Repo Finder 🚀
      </h1>
      <Search />
    </header>
  );
}

export default Header;
