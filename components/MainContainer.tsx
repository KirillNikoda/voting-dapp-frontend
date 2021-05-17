import Head from "next/head";
import Link from "next/link";
import MenuButton from "./DefaultLayout/MenuButton";
import { ImHome } from "react-icons/im";
import { FiGrid, FiPlusCircle } from "react-icons/fi";
export default function MainContainer({ children }) {
  return (
    <>
      <main className="flex-1 py-8 px-4 md:py-12 md:px-16 lg:py-9 lg:px-16 w-full">{children}</main>
    </>
  );
}
