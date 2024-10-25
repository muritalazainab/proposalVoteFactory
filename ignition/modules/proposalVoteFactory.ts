import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const proposalVoteFactoryModule = buildModule("proposalVoteFactoryModule", (p) => {
  const proposalVoteFactory = p.contract("ProposalVoteFactory");

  return { proposalVoteFactory };
});

export default proposalVoteFactoryModule;