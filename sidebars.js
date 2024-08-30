

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
        'guides/smeshing/start',
        'guides/smeshing/requirements',
        'guides/considerations',
        'guides/smeshing/netconfig',
        {
          'Basic Smeshing Guide': [
            'guides/smeshing/smeshing_basic/install',
            'guides/smeshing/smeshing_basic/additional',
            'guides/smeshing/smeshing_basic/advanced_config',
            'guides/smeshing/smeshing_basic/advanced-wallet',
            'guides/smeshing/smeshing_basic/setup',
            'guides/smeshing/smeshing_basic/smeshing',
            'guides/smeshing/smeshing_basic/status',
            'guides/smeshing/smeshing_basic/wallet',
          ],
          'Advanced Smeshing Guide': [
          'guides/smeshing/smeshing_adv/setup',
          'guides/smeshing/smeshing_adv/post_init',
          'guides/smeshing/smeshing_adv/api',
          'guides/smeshing/smeshing_adv/poet',
          'guides/smeshing/smeshing_adv/networking',
          'guides/smeshing/smeshing_adv/performance',
          'guides/smeshing/smeshing_adv/equivocation',
          'guides/smeshing/smeshing_adv/verification',
          'guides/smeshing/smeshing_adv/quicksync',
          'guides/smeshing/smeshing_adv/advanced',
          'guides/smeshing/smeshing_adv/post_1n',
          'guides/smeshing/smeshing_adv/multigpu',
          'guides/smeshing/smeshing_adv/troubleshooting'
        ],
        }
      ],
     },
      'guides/rewards',
      'guides/integration',
      'guides/ledger'
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
