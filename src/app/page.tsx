"use client"
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import OurClasses from "@/components/OurClasses";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
	const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
	const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

	useEffect(() => {
		if (typeof document !== "undefined") {
			const handleScroll = () => {
			if (window.scrollY === 0) {
				setIsTopOfPage(true);
				setSelectedPage(SelectedPage.Home);
			}
			if (window.scrollY !== 0) setIsTopOfPage(false);
		}
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
		}
	}, []);

  return (
    <main className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Hero setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
			<ContactUs setSelectedPage={setSelectedPage} />
			<Footer />
    </main>
  );
}
