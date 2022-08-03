

module.exports = {
  learn: [
    {
      'Spacemesh 101': [
        'learn/crypto',
        'learn/spacemesh',
        'learn/coin',
        'learn/economics'],
      'Protocol 101': [
        'learn/post',
        'learn/nipost',
        'learn/transactions',
        'learn/hare',
        'learn/tortoise',
        'learn/accounts',
        'learn/rewards',
        'learn/epochs'
      ]
    }
],
  specs: [
    {
      'Consensus Protocol': [
        'specs/consensus/overview',
        'specs/consensus/post-deep',
        'specs/consensus/poet',
        'specs/consensus/activations',
        'specs/consensus/proposals',
        'specs/consensus/hare-abstract',
        'specs/consensus/tortoise-abstract',
        'specs/consensus/weak-coin',
        'specs/consensus/random-beacon',
        'specs/consensus/rewards-algorithm',
        'specs/consensus/block-assembly'],
      }
 ],
    start: [
      'start/install',
      {
        'Smapp': [
          'start/smapp/requirements',
          'start/smapp/setup',
          'start/smapp/smeshing',
          'start/smapp/wallet',
          'start/smapp/advanced-wallet',
          'start/smapp/status',
          'start/smapp/net-dash'],
        'SMRepl': [
          'start/smrepl/setup',
          'start/smrepl/commands'
          ]
        }
      ],
  ecosystem: [
    'ecosystem/smapp',
    'ecosystem/node',
    'ecosystem/poet',
    'ecosystem/dash'
  ],
  api: [
    'api/services',
    'api/endpoints'
  ],
  node: [
    'node_operation/serialization',
    'node_operation/startup',
    'node_operation/sync',
    'node_operation/time',
    'node_operation/local-data-model',
    'node_operation/blacklisting'],
};
