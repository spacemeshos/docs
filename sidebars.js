

module.exports = {
  learn: [
    {
      'Spacemesh 101': [
        'learn/spacemesh',
        'learn/coin',
        'learn/smeshing',
        'learn/economics'],
      'Protocol 101': [
        'learn/post',
        'learn/poet',
        'learn/atx',
        'learn/hare',
        'learn/tortoise',
        'learn/rewards',
        'learn/blocks',
        'learn/accounts'
      ]
    }
],
  // specs: [
  //       'specs/consensus/construction-cons',
  //       'specs/consensus/overview',
  //       'specs/consensus/post-deep',
  //       'specs/consensus/poet',
  //       'specs/consensus/activations',
  //       'specs/consensus/proposals',
  //       'specs/consensus/hare-abstract',
  //       'specs/consensus/tortoise-abstract',
  //       'specs/consensus/weak-coin',
  //       'specs/consensus/random-beacon',
  //       'specs/consensus/rewards-algorithm',
  //       'specs/consensus/block-assembly'],
  // vm:[
  //     'specs/smart_contracts/construction-vm',
  //   'specs/smart_contracts/state',
  //   'specs/smart_contracts/txs',
  //   'specs/smart_contracts/creation',
  //   'specs/smart_contracts/built-in',
  //   'specs/smart_contracts/model',
  //   'specs/smart_contracts/opcodes',
  // ],
  start: [
     'start/start',
     'start/requirements',
     'start/netconfig',
      'start/rewards',
      {
        'Smapp Guide': [
          'start/smapp/install',
          'start/smapp/setup',
          'start/smapp/wallet',
          'start/smapp/advanced-wallet',
        'start/smapp/advanced_config'],
        'Advanced Smeshing Guide': [
          'start/smeshing_adv/setup',
          'start/smeshing_adv/post_init',
          'start/smeshing_adv/api',
          'start/smeshing_adv/poet',
          'start/smeshing_adv/networking',
          'start/smeshing_adv/performance',
          'start/smeshing_adv/equivocation',
          'start/smeshing_adv/verification',
          'start/smeshing_adv/advanced',
          'start/smeshing_adv/post_1n',
            'start/smeshing_adv/multigpu',
          'start/smeshing_adv/troubleshooting'
        ],
      },
      'start/integration'
      ],
  ecosystem: [  'ecosystem/construction-eco',
    'ecosystem/smapp',
    'ecosystem/node',
    'ecosystem/poet',
    'ecosystem/dash'
  ],
  api: [
      'api/construction-api',
    'api/services',
    'api/endpoints'
  ],
  node: [
      'node_operation/construction-node',
    'node_operation/serialization',
    'node_operation/startup',
    'node_operation/sync',
    'node_operation/time',
    'node_operation/local-data-model',
    'node_operation/blacklisting'],
};
