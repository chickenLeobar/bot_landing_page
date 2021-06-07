import React from "react";
import { NextPage } from "next";
import Header from "./components/Header";
import Navbar from "./shared/Navbar";
import { NextSeo } from "next-seo";
import { ThemeProvider } from "styled-components";
import { landingTheme } from "../../globals/theme";
const Index: NextPage = () => {
  return (
    <ThemeProvider theme={landingTheme}>
      <NextSeo title="Hola" description="Hello world"></NextSeo>
      <Navbar />
      <Header />
    </ThemeProvider>
  );
};

export default Index;
