"use client";

import BusinessGoals from "../../components/BusinessGoals";
import QuoteGenerator from "../../components/QuoteGenerator";
import Header from "../../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <BusinessGoals />
      <QuoteGenerator />
    </>
  );
}
