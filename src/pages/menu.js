const menus = [
    {
        id: 1,
        name: 'Home',
        links: '/',
    },
    {
        id: 2,
        name: 'Tree Structure',
        links: '/tree-structure',
    },
    {
        id: 3,
        name: 'Road Map',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'Uplines',
                links: '/uplines'
            },
            {
                id: 2,
                sub: 'Direct Referral',
                links: '/direct-referral'
            },
        ]
    },    
]

export default menus;