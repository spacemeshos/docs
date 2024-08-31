

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
     // Smeshing Guide > Smeshing Guide Basic, Smeshing Guides Adv
     {
      type: 'category',
      label: 'Smeshing Guide',
      items: [
        'start/smeshing/start',
        'start/smeshing/requirements',
        'start/considerations',
        'start/smeshing/netconfig',
        {
          'Basic Smeshing Guide': [
            'start/smeshing/smeshing_basic/install',
            'start/smeshing/smeshing_basic/additional',
            'start/smeshing/smeshing_basic/advanced_config',
            'start/smeshing/smeshing_basic/advanced-wallet',
            'start/smeshing/smeshing_basic/setup',
            'start/smeshing/smeshing_basic/smeshing',
            'start/smeshing/smeshing_basic/status',
            'start/smeshing/smeshing_basic/wallet',
          ],
          'Advanced Smeshing Guide': [
          'start/smeshing/smeshing_adv/setup',
          'start/smeshing/smeshing_adv/post_init',
          'start/smeshing/smeshing_adv/api',
          'start/smeshing/smeshing_adv/poet',
          'start/smeshing/smeshing_adv/networking',
          'start/smeshing/smeshing_adv/performance',
          'start/smeshing/smeshing_adv/equivocation',
          'start/smeshing/smeshing_adv/verification',
          'start/smeshing/smeshing_adv/quicksync',
          'start/smeshing/smeshing_adv/advanced',
          'start/smeshing/smeshing_adv/post_1n',
          'start/smeshing/smeshing_adv/multigpu',
          'start/smeshing/smeshing_adv/troubleshooting'
        ],
        }
      ],
     },
      'start/rewards',
      'start/integration',
      'start/ledger'
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
