import styles from "../styles/Home.module.css";
import { FiShield } from "react-icons/fi";
import { BiCode, BiDockBottom, BiBookAlt } from "react-icons/bi";
import { ImLink } from "react-icons/im";
export default function Home() {
  return (
    <>
      <div className="card">
        <p className="text-h4 font-semibold">4 Simple Steps to Start</p>
        <div className="w-full grid grid-cols-4 gap-8 mt-4">
          <div className="col-span-4 md:col-span-2 lg:col-span-1">
            <a href="https://metamask.io/download.html" target="_blank">
              <img src="/assets/img/home/01.svg" alt="" className="w-full" />
            </a>
          </div>
          <div className="col-span-4 md:col-span-2 lg:col-span-1">
            <button className="w-full">
              <img src="/assets/img/home/02.svg" alt="" className="w-full" />
            </button>
          </div>
          <div className="col-span-4 md:col-span-2 lg:col-span-1">
            <button className="w-full">
              <img src="/assets/img/home/03.svg" alt="" className="w-full" />
            </button>
          </div>
          <div className="col-span-4 md:col-span-2 lg:col-span-1">
            <a href="#/create">
              <img src="/assets/img/home/04.svg" alt="" className="w-full" />
            </a>
          </div>
        </div>

        <a href="https://docs.xdao.app/manual/how-to-start" target="_blank">
          <button className="btn btn-ghost w-full h-7.5 mt-12">
            <BiBookAlt size={22}/>
            <p>Guide</p>
          </button>
        </a>
      </div>
      <div className="card mt-2">
        <hr className="text-grey my-6" />

        <div className="grid grid-cols-2 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <p className="text-h6 font-medium">About xDAO Project</p>
            <p className="text-body text-grey mt-1">
              xDAO is a DeFi protocol for quick and easy creation of
              Decentralized Autonomous Organizations — DAOs. Combine your crypto
              assets to manage them in more efficient and secure way by using
              auto-generated smart contracts. A clear voting system allows you
              to make collective decisions and be confident in their exact
              execution.
            </p>
          </div>
          <div className="col-span-2 lg:col-span-1 space-y-2">
            <div className="flex space-x-2 items-center text-primary">
              <a href="/" className="font-medium underline flex">
                <FiShield size={22}/>
                Audit
              </a>
            </div>

            <div className="flex space-x-2 items-center text-primary">
              <a href="/" className="font-medium underline flex">
                <BiCode size={22}/>
                Source Code
              </a>
            </div>

            <div className="flex space-x-2 items-center text-primary">
              <a href="/" className="font-medium underline flex">
                <ImLink size={22}/>
                Official Website
              </a>
            </div>

            <div className="flex space-x-2 items-center text-primary">
              <a
                href="https://docs.xdao.app/"
                target="_blank"
                className="font-medium underline flex"
              >
                <BiDockBottom size={22}/>
                Docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
