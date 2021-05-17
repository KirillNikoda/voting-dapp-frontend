import Head from 'next/head'
import Link from 'next/link'
import MenuButton from './DefaultLayout/MenuButton'
import { ImHome } from "react-icons/im";
import { FiGrid, FiPlusCircle } from "react-icons/fi";
export default function MainContainer({ children }) {
  return <>
  <Head>
      <title>xDAO App</title>
      <meta charSet="utf-8"/>
      <meta name="keywords" content="xDAO, DAO"/>
      <meta name="description" content="Main page xDAO"/>
  </Head>
  <header className="flex justify-between p-2 lg:p-4 items-center  w-full">
  <img
    src="/assets/img/logo_full_blue.svg"
    className="self-start h-10 hidden md:block ml-5 mt-1"
    alt=""/>
  <img src="/assets/img/logo_blue.svg" className="h-10 md:hidden" alt=""/>

  <div className="md:flex space-x-4 items-center self-end hidden">
      <button className="btn btn-ghost">
        Add BSC to Metamask
      </button>

    <a className="btn btn-ghost" href="#/create">

      <p>Create DAO</p>
    </a>
  </div>
  <div className="flex space-x-2 items-center self-end md:hidden">
      <button
        className="btn-mobile btn-mobile-ghost">
        Add BSC to Metamask
      </button>
    <a className="btn-mobile btn-mobile-ghost" href="#/create">
      <p>Create DAO</p>
    </a>
  </div>
  </header>
  <div className="flex">
  <aside className="h-screen top-0">
    <div
      className="hidden md:flex md:flex-col md:space-y-2 md:px-5 md:py-12 md:w-64">
      <MenuButton text="Home" pagelink={'/'}>
        <ImHome size={20}/>
      </MenuButton>
      <MenuButton text="Ecosystem" pagelink={'/ecosystem'}>
          <FiGrid size={20}/>
    </MenuButton>
      <MenuButton text="Create" pagelink={'/create'}>
        <FiPlusCircle size={20}/>
      </MenuButton>
    </div>
  </aside>
      <div
          className="bg-darkactive fixed bottom-0 w-full md:hidden grid grid-cols-3 gap-2 z-50 p-2">
          <div className="col-span-1">
              <MenuButton text="Home" pagelink={'/'}>
                  <ImHome size={20}/>
              </MenuButton>
          </div>
          <div className="col-span-1">
              <MenuButton text="Ecosystem" pagelink={'/ecosystem'}>
                  <FiGrid size={20}/>
              </MenuButton>
          </div>
          <div className="col-span-1">
              <MenuButton text="Create" pagelink={'/create'}>
                  <FiPlusCircle size={20}/>
              </MenuButton>
          </div>
      </div>
  <main className="flex-1 py-8 px-4 md:py-12 md:px-16 lg:py-9 lg:px-16 w-full">
  {children}
  </main>
  </div>
  </>;
}
