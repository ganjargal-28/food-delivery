"use client";

import { Card } from "./_components/card/Card";
import { Category } from "./_components/category/Category";
import { Header } from "./_components/header/Header";
import { Hero } from "./_components/Hero";

export default function home() {
  return (
    <div>
      <Hero />
      <Category />
    </div>
  );
}
