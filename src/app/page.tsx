import NavBar from "@/components/common/NavBar";
import TopBar from "@/components/common/TopBar";
import WebLayout from "@/components/layouts/WebLayout";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <TopBar />
      <NavBar />
      <WebLayout/>
    </>
  );
}
