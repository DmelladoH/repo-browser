import Search from "./search";

function Header() {
  return (
    <header className="grid justify-center">
      <h1 className="text-4xl font-bold uppercase text-center">
        GitHub Repo Finder 🚀
      </h1>
      <Search />
    </header>
  );
}

export default Header;
