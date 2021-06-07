import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { Logo } from "@componets/Logo";
import NextLink from "next/link";
const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.primary};
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const ItemLInk = styled.li`
  a {
    text-decoration: none;
    cursor: pointer;
    &:hover {
      border-bottom: 1px solid white;
    }
  }
`;

const Nav = styled.ul`
  color: ${(props) => props.theme.colors.white};
  list-style: none;
  display: flex;
  /* border: 2px solid white; */
  font-weight: 600;
  li {
    padding: 0 10px;
  }
`;

function Navbar() {
  const menu = [
    {
      route: "/",
      label: "Inicio",
    },
    {
      route: "/",
      label: "Comandos",
    },
    {
      route: "/",
      label: "Documentación",
    },
    {
      route: "/",
      label: "Blog",
    },
  ];

  return (
    <Wrapper>
      <Logo />
      <Nav>
        {menu.map((raw) => {
          return (
            <ItemLInk>
              <NextLink passHref href={raw.route}>
                <a>{raw.label}</a>
              </NextLink>
            </ItemLInk>
          );
        })}
      </Nav>
    </Wrapper>
  );
}

export default Navbar;
