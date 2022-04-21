"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainnetReserveAddress = exports.MainnetOracle = exports.MainnetTokenPairs = exports.MainnetPools = void 0;
const MainnetPools = {
    ALGO: {
        appId: 686498781,
        assetId: 0,
        fAssetId: 686505742,
        frAssetId: 686505743,
        assetDecimals: 6,
    },
    USDC: {
        appId: 686500029,
        assetId: 31566704,
        fAssetId: 686508050,
        frAssetId: 686508051,
        assetDecimals: 6,
    },
    USDt: {
        appId: 686500844,
        assetId: 312769,
        fAssetId: 686509463,
        frAssetId: 686509464,
        assetDecimals: 6,
    },
    goBTC: {
        appId: 686501760,
        assetId: 386192725,
        fAssetId: 686510134,
        frAssetId: 686510135,
        assetDecimals: 8,
    },
    goETH: {
        appId: 694405065,
        assetId: 386195940,
        fAssetId: 694408528,
        frAssetId: 694408529,
        assetDecimals: 8,
    },
    gALGO3: {
        appId: 694464549,
        assetId: 694432641,
        fAssetId: 694474015,
        frAssetId: 694474016,
        assetDecimals: 6,
    },
};
exports.MainnetPools = MainnetPools;
const MainnetTokenPairs = {
    "ALGO-USDC": {
        appId: 686541542,
        collateralPool: MainnetPools.ALGO,
        borrowPool: MainnetPools.USDC,
        linkAddr: "XMW3WFSMMHV54FAP5ROYPB6LUDBUAKSQBZVI2PIX6OR3NWQWBXKUW7KBGY",
    },
    "ALGO-USDt": {
        appId: 686556017,
        collateralPool: MainnetPools.ALGO,
        borrowPool: MainnetPools.USDt,
        linkAddr: "F273Q7I2CY76UH6A5PKFSCDM7DMYPY3SZ3DMAWVGOWAQKZQZOZFCSNVUU4",
    },
    "ALGO-goBTC": {
        appId: 686565241,
        collateralPool: MainnetPools.ALGO,
        borrowPool: MainnetPools.goBTC,
        linkAddr: "JFITNNIUGBIIXHDDHV63CRNA5XGJICY6ILKL3RUYIBSLBTCY6B3MNC3ASE",
    },
    "ALGO-goETH": {
        appId: 695914630,
        collateralPool: MainnetPools.ALGO,
        borrowPool: MainnetPools.goETH,
        linkAddr: "QMY5HJGXE6SGBHBNTPCPMZORI2VBPA43GYEIQARH52X4QJYWUWE4GTTFKQ",
    },
    "USDC-ALGO": {
        appId: 686544126,
        collateralPool: MainnetPools.USDC,
        borrowPool: MainnetPools.ALGO,
        linkAddr: "XJWPG5IIJB6ZFYUJHHJO2C4RGJNWVK6N2MND5A2R7HBMK2BMOAVMT5FM74",
    },
    "USDC-USDt": {
        appId: 686571823,
        collateralPool: MainnetPools.USDC,
        borrowPool: MainnetPools.USDt,
        linkAddr: "6TFJXHX6YZ3WI2ODB7GB6W6763VBZW65EQ6XAC7DMFUFIBKBXYNXHSJUTA",
    },
    "USDC-goBTC": {
        appId: 686577278,
        collateralPool: MainnetPools.USDC,
        borrowPool: MainnetPools.goBTC,
        linkAddr: "XR3Z56543O2XQE7FLFKTOJ52XNFXBSUPQZ6TFCZGNWIWCB54VKLKDATUTI",
    },
    "USDC-goETH": {
        appId: 695921655,
        collateralPool: MainnetPools.USDC,
        borrowPool: MainnetPools.goETH,
        linkAddr: "FDVL4R3MFMX27UPPJYATPZVJUGSI6BXAIXWMWQPNYDMUJSZTLJB4EG73ZY",
    },
    "USDt-ALGO": {
        appId: 686556570,
        collateralPool: MainnetPools.USDt,
        borrowPool: MainnetPools.ALGO,
        linkAddr: "JOAQ6M3COSVOYXGQ7YDTIRNI6YIOLIXOC72XCWA7MISVAYH4KRCCEGWT2E",
    },
    "USDt-USDC": {
        appId: 686572578,
        collateralPool: MainnetPools.USDt,
        borrowPool: MainnetPools.USDC,
        linkAddr: "RFMBPBC4PUVYK26QWWYKS6DPQQLFVAKBZZYU6QYJXBRQS2PT2LFZSP36RU",
    },
    "USDt-goBTC": {
        appId: 686616139,
        collateralPool: MainnetPools.USDt,
        borrowPool: MainnetPools.goBTC,
        linkAddr: "KFYW365ROG2MWWH3OHKCNOTAEXND4P5DXBIMTDQUUG5IHRVXB3AB6SEOWY",
    },
    "USDt-goETH": {
        appId: 695926008,
        collateralPool: MainnetPools.USDt,
        borrowPool: MainnetPools.goETH,
        linkAddr: "ZUWFYK4OT2NRJC4KRPXPY65XIK2KUE4F5WYL3FORXOE3YTJKN6IV6VW5CM",
    },
    "goBTC-ALGO": {
        appId: 686565943,
        collateralPool: MainnetPools.goBTC,
        borrowPool: MainnetPools.ALGO,
        linkAddr: "HSLL3IO44B276TZQGVA6ZGTWT7YSADN7IZF5VYRN6KNJSU6CLU67BRJIXY",
    },
    "goBTC-USDC": {
        appId: 686578002,
        collateralPool: MainnetPools.goBTC,
        borrowPool: MainnetPools.USDC,
        linkAddr: "6JE72NWDM3IZGDLJOBSMAHY6EGYAQR2SWRRYORGUQQGSX4SOOLB37QX634",
    },
    "goBTC-USDt": {
        appId: 686616739,
        collateralPool: MainnetPools.goBTC,
        borrowPool: MainnetPools.USDt,
        linkAddr: "EFD5ENIIDLOMXKG4HMNPMODORVZ625NCO5U6B66LHH26FI3HSNCWZ6NFYA",
    },
    "goBTC-goETH": {
        appId: 695954993,
        collateralPool: MainnetPools.goBTC,
        borrowPool: MainnetPools.goETH,
        linkAddr: "SI4H6QZ66XGVHYNDWTES264N4ABCKPEPVFPMQ4OSIBQ33QDIXI5ZNWZIKQ",
    },
    "goETH-ALGO": {
        appId: 695912626,
        collateralPool: MainnetPools.goETH,
        borrowPool: MainnetPools.ALGO,
        linkAddr: "GTZOCCCQ2QLR72GNLDJ2EPVI54QGOQ2LIQFYQ7THMJT7BL3NOXX5QNZ364",
    },
    "goETH-USDC": {
        appId: 695919152,
        collateralPool: MainnetPools.goETH,
        borrowPool: MainnetPools.USDC,
        linkAddr: "E3AO4MSTLD47USAMF7Z22ZHCL33HDNJ7URBYQEAPYJSLKOE2EYS6ZEA7UI",
    },
    "goETH-USDt": {
        appId: 695924150,
        collateralPool: MainnetPools.goETH,
        borrowPool: MainnetPools.USDt,
        linkAddr: "OBXUXUQOA46SDGHYRYOREPRYMGZ4FLHBWHUMRKU5MY7LJ4VUS6X4TLO6PI",
    },
    "goETH-goBTC": {
        appId: 695953758,
        collateralPool: MainnetPools.goETH,
        borrowPool: MainnetPools.goBTC,
        linkAddr: "7MON4QTA2MZZFTRNE2CSNZAPF4NEGACR73T3DNAYW42OQIKNZSOUZL4WFI",
    },
    "gALGO3-ALGO": {
        appId: 694502241,
        collateralPool: MainnetPools.gALGO3,
        borrowPool: MainnetPools.ALGO,
        linkAddr: "DXQV2ITJ72XJBQYDWW7BE7P32TDDT4I4SVMPO5VKCPPBIB55AG5LF2WZRA",
    },
    "gALGO3-USDC": {
        appId: 694505855,
        collateralPool: MainnetPools.gALGO3,
        borrowPool: MainnetPools.USDC,
        linkAddr: "CX6DDNB3KP2QN5SCJRAMRMTSIEIFLYSZ3AP4DQCQDODHKVECE6JXRGKXPY",
    },
    "gALGO3-USDt": {
        appId: 694509879,
        collateralPool: MainnetPools.gALGO3,
        borrowPool: MainnetPools.USDt,
        linkAddr: "HLNGVZRKGWQOAWVUZESZQ7ELRMDHDY4IAP76KSLBNWVMPZXFVCLBMISMW4",
    },
    "gALGO3-goBTC": {
        appId: 694511513,
        collateralPool: MainnetPools.gALGO3,
        borrowPool: MainnetPools.goBTC,
        linkAddr: "5A7S6HPCSRQXFFV4QXP2MX4E4FMLWU2SAQ6BFS4SCAASZEO24J7HIH4VJI",
    },
    "gALGO3-goETH": {
        appId: 695956892,
        collateralPool: MainnetPools.gALGO3,
        borrowPool: MainnetPools.goETH,
        linkAddr: "2BHUQR72HSDUSUHHNZ4HSW52XG6TFI6GTOOMLCJIYRWG4DCD45OMMDK454",
    },
};
exports.MainnetTokenPairs = MainnetTokenPairs;
const MainnetOracle = {
    oracle1AppId: 687039379,
    oracle2AppId: 689183513,
    oracleAdapterAppId: 689185988,
    decimals: 14,
};
exports.MainnetOracle = MainnetOracle;
const MainnetReserveAddress = "XQEOICBG6FMMBBWTBOWCMVJX5IQEDUSBF6L4MTSIALWRWODSOV2THX6GTU";
exports.MainnetReserveAddress = MainnetReserveAddress;
//# sourceMappingURL=mainnetConstants.js.map