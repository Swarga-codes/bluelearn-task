'use client'
import Image from "next/image";
import Navbar from "./ui/Navbar";
import Header from "./ui/Header";
import Lectures from "./ui/Lectures";
import Mentors from "./ui/Mentors";

export default function Home() {
  return (
    <main>
    <Navbar/>
    <Header/>
    <Lectures/>
    <Mentors/>
    </main>
  );
}
