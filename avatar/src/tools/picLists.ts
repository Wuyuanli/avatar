export const styleEnums  = {
    'moon': '中秋节',
    'chris': '圣诞节',
    'spring': '春节'
}

interface StyleInfoType {
    id: string,
    name: string,
    frameList: string[],
    markList: string[]
}
export const styleList: StyleInfoType[]  = [
    {
        id: 'moon',
        name: '中秋节',
        frameList: [
            'https://s1.aigei.com/src/img/png/37/3736401458ed4d30a4e16aa89ebc11c9.png?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/%7CimageView2/2/w/282&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:40oXZm4ZiZXp9PHGXBtj-tPOtDo=',
            'https://s1.aigei.com/src/img/png/54/54fa7bc3fec74170ac7ca694d1b7eed8.png?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/%7CimageView2/2/w/282&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:R-Saf0FTv0676PBezBkuEoloZf0=',
            'https://s1.aigei.com/src/img/png/2f/2f95a5926ce44e5a87a4341d69806144.png?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/%7CimageView2/2/w/282&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:mP2EfyC3PYOlJgbJe6Wlx8ao3Mg=',
            'https://s1.aigei.com/src/img/png/21/2168b63f363e456e9e982006b4a98c6f.png?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/%7CimageView2/2/w/282&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:4z4bWlfpUCULqg3sBrAdWbIeBmE='
        ],
        markList: [
            'https://s1.aigei.com/src/img/png/0c/0c753a65620e401db8e2ab1408394c52.png?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/%7CimageView2/2/w/282&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:XPiVxZMHEke9rmdrOUShbJqy3PQ=',
            'https://s1.aigei.com/src/img/png/c5/c50b2dade5c642fc9f02a2d4675ca35c.png?imageMogr2/auto-orient/thumbnail/!282x213r/gravity/Center/crop/282x213/quality/85/%7CimageView2/2/w/282&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:c8uSO5RpaOtQdbeS7uPp96qUP5o=',
            'https://s1.aigei.com/src/img/png/74/74b3895a60104dd8a38aedd0850ad397.png?imageMogr2/auto-orient/thumbnail/!282x320r/gravity/Center/crop/282x320/quality/85/%7CimageView2/2/w/282&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:Y_8KrjxzNONDcqsxWiijod2Xy3c=',
            'https://s1.aigei.com/src/img/png/4b/4be3d378057b4bbca33e3e3fef6bc406.png?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/%7CimageView2/2/w/282&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:0VNnx5YN8UD0ETOZXr5T8RmjQq0='
        ]
    },
    {
        id: 'chris',
        name: '圣诞节',
        frameList: [
            'https://s1.aigei.com/src/img/png/21/210dff0ae1b944d8bc4562510f537909.png?imageMogr2/auto-orient/thumbnail/!282x171r/gravity/Center/crop/282x171/quality/85/%7CimageView2/2/w/282&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:_jLn6cYNb6Xagz7JkJfaOSggBng=',
            'https://s1.aigei.com/src/img/png/10/10158d940a4647969dc0745333b0d396.png?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/%7CimageView2/2/w/282&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:1Qpe16PHCK-0yL2YShlBS53Eln8=',
            'https://s1.aigei.com/src/img/png/f3/f3c9b6cc7b0e48d8915fdef6f2bcf24c.png?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/%7CimageView2/2/w/282&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:yU13su22Lmoc6UaRta7Y6JFo474=',
            'https://s1.aigei.com/src/img/png/3d/3dc14a07784347ad8c999438f998c97c.png?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/%7CimageView2/2/w/282&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:QrWL4wuYKFSQo_iBjZUJnnyuGNA='
        ],
        markList: [
            'https://s1.aigei.com/src/img/png/ba/bada44d4a5a44c758aed1a81497adb3d.png?imageMogr2/auto-orient/thumbnail/!282x228r/gravity/Center/crop/282x228/quality/85/%7CimageView2/2/w/282&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:xsJrIPpb6LsOuo2i9u-X2x6m594=',
            'https://s1.aigei.com/src/img/png/a6/a6fe7dad375b4642ab6e7a1934077719.png?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/%7CimageView2/2/w/282&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:hUYpX8_MyqdpdHjK54YSIpEgmig=',
            'https://s1.aigei.com/src/img/png/39/39617b58c44c4bfdb2c0646c035df87a.png?imageMogr2/auto-orient/thumbnail/!235x320r/gravity/Center/crop/235x320/quality/85/%7CimageView2/2/w/235&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:c5Rp7vACpZPqqW2nzafpM-3SuhQ=',
            'https://s1.aigei.com/src/img/png/76/76ca1681b9d14bc2b95cfb4fbea45b48.png?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/%7CimageView2/2/w/282&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:PmEUPAGZMaquJbi58zxMsC9QMfE='
        ]
    },
    {
        id: 'spring',
        name: '春节',
        frameList: [
            'https://s1.aigei.com/src/img/png/a4/a4d44cabcba840a88e027a37061877e6.png?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/%7CimageView2/2/w/282&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:KJnonZNTnD4JPhYvvmdhtDglXd4=',
            'https://s1.aigei.com/src/img/png/2d/2d6b1976b74347d7bf0216d14305f605.png?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/%7CimageView2/2/w/282&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:qsFaYmH4H3Zq5U9mq1KnG4AhgTs=',
            'https://s1.aigei.com/src/img/png/26/26abb9b8e82e4b6688957bce8fa7bb0c.png?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/%7CimageView2/2/w/282&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:Xydv5exXHjo7FCKeh7jl1Vwt3Zw=',
            'https://s1.aigei.com/src/img/png/1d/1dfb68150e2f41a48e6c4b899e60c2c2.png?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/%7CimageView2/2/w/282&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:YKPteF8w21YP6AU8_COA6tb4hlk='
        ],
        markList: [
            'https://s1.aigei.com/src/img/png/b6/b6981671d3524cd4a8432937f4f50b88.png?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/%7CimageView2/2/w/282&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:Ad4PsYlYYbeKRNV91fZilCUla-4=',
            'https://s1.aigei.com/pvimg/img/png/e9/e9ceee2abd0e4147aab08db79d1a5086.png?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/%7CimageView2/2/w/282&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:fUJN7ZB0r4bBQzd122DziESkpGA=',
            'https://s1.aigei.com/src/img/png/99/99841923718e423295fbe2b47b7b0108.png?imageMogr2/auto-orient/thumbnail/!282x214r/gravity/Center/crop/282x214/quality/85/%7CimageView2/2/w/282&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:J9jZ2JcO4xik9KEkg_omVzZDDB8=',
            'https://s1.aigei.com/src/img/png/49/490e24705e2b4613bda8bcd14f2540be.png?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/%7CimageView2/2/w/282&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:El9a4CYMTqmPVN580f_5ubJbJG0='
        ]
    }
]