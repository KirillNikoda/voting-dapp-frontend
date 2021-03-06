import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { VOTE_ABI } from "../abis/VOTE_ABI";
import { BSC_RPC, VoteContractAddress } from "../constants/constants";

declare const window: any;

export default function Home() {
  const provider = new ethers.providers.JsonRpcProvider(BSC_RPC);

  const [votings, setVotings] = useState([]);

  const [name, setName] = useState("");
  const [registrationDuration, setRegistrationDuration] = useState("");
  const [votingDuration, setVotingDuration] = useState("");
  const [loaded, setLoaded] = useState(false);

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

  const registerToVote = async (idx: number) => {
    const signer = new ethers.providers.Web3Provider(window.ethereum).getSigner();
    const votingContract = new ethers.Contract(VoteContractAddress, VOTE_ABI, signer);
    await votingContract.registerToVote(idx);
  };

  const signVoting = async (idx: number) => {
    const signer = new ethers.providers.Web3Provider(window.ethereum).getSigner();
    const votingContract = new ethers.Contract(VoteContractAddress, VOTE_ABI, signer);
    await votingContract.signVoting(idx);
  };

  const activateVoting = async (idx: number) => {
    const signer = new ethers.providers.Web3Provider(window.ethereum).getSigner();
    const votingContract = new ethers.Contract(VoteContractAddress, VOTE_ABI, signer);
    await votingContract.activateVoting(idx);
  };

  useEffect(() => {
    (async () => {
      const voteContract = new ethers.Contract(VoteContractAddress, VOTE_ABI, provider);
      const votings = await voteContract.getAllVotings();
      console.log(votings);

      setVotings([...votings]);
      setLoaded(true);
    })();
  }, []);

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
      <p className="text-center text-h4 mt-8">Votings</p>
      {votings.map((voting, idx) => {
        return (
          <div key={idx} className="card space-y-4 mt-4">
            <p className="text-h6">Voting name: {voting.name}</p>
            <p className="text-grey text-captionlg">
              Registration duration: {voting.registrationDuration / 60} minutes
            </p>
            <p className="text-grey text-captionlg">
              Voting duration: {voting.votingDuration / 60} minutes
            </p>
            <p className="text-grey text-captionlg">
              Is Activated: {voting.isActivated.toString()}
            </p>
            <p className="text-grey text-captionlg">Registered:</p>
            {voting.registered.map((address, idx) => (
              <p key={idx} className="break-words">
                {address.slice(0, 6) + "..." + address.slice(-4)}
              </p>
            ))}
            <p className="text-grey text-captionlg">Signers:</p>
            {voting.signers.map((address, idx) => (
              <p key={idx} className="break-words">
                {address.slice(0, 6) + "..." + address.slice(-4)}
              </p>
            ))}
            <div className="grid grid-cols-2 gap-4">
              {Date.now() / 1000 - +voting.timestamp < +voting.registrationDuration &&
              !voting.isActivated ? (
                <button
                  className="btn bg-green"
                  onClick={() => {
                    registerToVote(idx);
                  }}>
                  Register
                </button>
              ) : null}
              {Date.now() / 1000 - +voting.timestamp < +voting.votingDuration &&
              !voting.isActivated ? (
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    signVoting(idx);
                  }}>
                  Sign
                </button>
              ) : null}
            </div>
            {voting.registered.length === voting.signers.length ? (
              <button className="btn bg-green" onClick={activateVoting.bind(null, idx)}>
                Activate
              </button>
            ) : null}
          </div>
        );
      })}
    </>
  );
}
