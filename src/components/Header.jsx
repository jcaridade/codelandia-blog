import { Search } from "lucide-react";

function Header() {
  return (
    <div className="header">
      <div className="header-box">
        <h1 className="logo">
          Code<span>lândia</span>
        </h1>

        <div className="search">
          <Search color={"#e07b67"} size={32} />
          <input type="search" placeholder="Pesquisar no Blog" />
        </div>
      </div>
    </div>
  );
}

export default Header;
