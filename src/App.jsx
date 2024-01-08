// @ts-nocheck

import React from "react";
import { Header } from "./components/header/header";
import { Sidebar } from "./components/sidebar/sidebar";
import { MainContent } from "./components/main-content/main-content";
import { Footer } from "./components/footer/footer";

export const App = () => {
  return (
    <>
    <Header/>
    <Sidebar />
    <MainContent />
    <Footer />
    </>
  )
}