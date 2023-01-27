import React, { useState } from "react";
import { Header } from "../components/Header";
import { Search } from "../components/Search";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { Fetch } from "../components/Fetch";

export const Landing = ({ children }) => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  return (
    <>
      <Header
        setMenuToggle={setMenuToggle}
        menuToggle={menuToggle}
        searchIsOpen={searchIsOpen}
        setSearchIsOpen={setSearchIsOpen}
      />

      {menuToggle && (
        <Nav
        menuToggle={menuToggle}
        setMenuToggle={setMenuToggle}
        />
      )}
      {searchIsOpen && (
        <Search searchIsOpen={searchIsOpen} setSearchIsOpen={setSearchIsOpen} />
      )}

      {/* {children} */}
      {/* <Fetch /> */}
      {/* <Footer /> */}
    </>
  );
};
