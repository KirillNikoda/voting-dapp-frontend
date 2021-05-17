import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { VOTE_ABI } from "../abis/VOTE_ABI";

declare const window: any;

export default function Home() {
  const [name, setName] = useState("");
  const [registrationDuration, setRegistrationDuration] = useState("");
  const [votingDuration, setVotingDuration] = useState("");
  const VoteContractAddress = "0xd944Ac855bD4fF660E1874bC876bB314D0d70B05";

  const changeName = (e: any) => {
    setName(e.currentTarget.value);
  };

  const changeRegistrationDuration = (e: any) => {
    setRegistrationDuration(e.currentTarget.value);
  };

  const changeVotingDuration = (e: any) => {
    setVotingDuration(e.currentTarget.value);
  };

  const createVoting = async (name: string, regDuration: string, votingDuration: string) => {
    const signer = new ethers.providers.Web3Provider(window.ethereum).getSigner();
    const voteContract = new ethers.Contract(VoteContractAddress, VOTE_ABI, signer);
    await voteContract.createVoting(name, +regDuration * 60, +votingDuration * 60, false);
    setName("");
    setRegistrationDuration("");
    setVotingDuration("");
  };

  return (
    <>
      <div className="card space-y-8">
        <p className="text-center text-h4">Here you can create your own voting!</p>
        <input
          type="text"
          value={name}
          onChange={changeName}
          className="input-primary"
          placeholder="Type the desired name of your voting"
        />
        <input
          onChange={changeRegistrationDuration}
          value={registrationDuration}
          type="number"
          className="input-primary"
          placeholder="Type the desired registration duration of your voting in minutes"
        />
        <input
          onChange={changeVotingDuration}
          value={votingDuration}
          type="number"
          className="input-primary"
          placeholder="Type the desired duration of your voting in minutes"
        />
        <button
          className="btn btn-primary w-full"
          onClick={() => {
            createVoting(name, registrationDuration, votingDuration);
          }}>
          Create Voting
        </button>
      </div>
      <div className="card mt-8">
        <p className="text-center text-h4">Votings</p>
      </div>
    </>
  );
}
