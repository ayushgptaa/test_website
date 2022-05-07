const roadmapData = [
  {
    heading: 'Pre-Mainnet 1.0 - Zus Optimization',
    text: ' Load testing scenarios to mitigate potential stress points caused by excessive network traffic beyond our capacity projections. Code refactoring Smart Contracts to optimize for all storage transactions and token rewards. This assures core stability and performance under load. The Data Base structure is being refactored and optimized, moving away from storing all data on a single list to storing each Blobber’s list on a separate partitioned list. This will ensure the network remains lightning fast and scalable while supporting a limitless amount of Blobbers storing data.',
    color: 'blue',
  },
  {
    heading: 'Pre-Mainnet 1.0 - Zus Simulation',
    text: 'A phase that expands load testing to our Active Set - a group, which is comprised of over 100 Miners and Sharders, responsible for maintaining the integrity of the Züs blockchain. Concurrently, Blobbers will plug-in to the Züs Cloud Network to rigorously test the storage protocol. An Ethereum/Züs token bridge will be deployed, effectively bridging ERC-20 ZCN and Züs native ZCN. ZCN token pledge submissions from the Active Set, which secured their slot in the Active Set, will be bridged and locked. Final audits will be completed across our entire network and the Züs Cloud Network will officially launch its mainnet, publishing the Fuji Genesis Block to the Züs Blockchain. ',
    color: 'grey',
  },
  {
    heading: 'Fuji - Zus Inception',
    text: ' Fuji will give birth to the Züs public mainnet, introducing a new era for cloud storage. The focus of this phase will be application roll-out and core protocol optimization. As we continuously monitor Node and Service Provider performance, underperforming nodes will be analyzed and addressed. The roll-out of Atlus, a Züs block explorer tool, will help to search and query network performance. Additional roll-outs of Bolt (Wallet/Staking app), Vult (Storage app), and many other apps will become live and useable following the launch of Fuji 1.0. External network audits will be conducted on overall network capacity and utilization, followed by database optimizations. Hardware specs for Miners and Sharders will be analyzed and potentially upgraded based on utilization thresholds, load balancing and processing speeds. Additional bug fixes may be released, depending on severity. ',
    color: 'grey',
  },
  {
    heading: 'Kilimanjaro - Zus Expansion',
    text: 'The Kilimanjaro phase will focus on added decentralization. This process will be an important balancing act of adding new ‘decentralizing’ features while ensuring the network remains secure, fully optimized, and highly scalable. View Change, the primary new feature in this phase, is a built-in protocol where the Active Set (Züs Miners and Sharders) is shuffled every Epoch (a fixed number of blocks). An Epoch is expected to occur every few weeks on Züs, pending test results. The View Change event utilizes a randomized squared-staking selection process to protect against Sybil Miners when selecting the new Active Set. Kilimanjaro will introduce the first View Change round on Züs. Kilimanjaro will also give birth to the ZüsDAO, by way of activating the Self-Governance Protocol. This protocol leverages a ping-pong governance model, which enables the community to vote on issues, veto issues and overrule a veto until one side is unable to exceed the needed threshold. Voting rights are achieved through ZCN token locking, as their token rewards are treated as votes. ',
    color: 'grey',
  },
]

export default roadmapData
