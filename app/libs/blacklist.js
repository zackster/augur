var markets = [
"2bbf41923335c6a53cb70de7ab8558bee7e78565d2a275f7125187a75c646075",
"-16f0430e449a2d42c6d64c7a7633a7ca09c73b5f2633607b83c702f61943a37a",
"-287f8a46d56b7a73fb8e86e0931cb800bf12cbd6cf11ee8e84d7e838f88d8b8e",
"-73feefdc5c74d6f8063c6f28b31c81b8e3d10de8e4bb1137ecfe4e39040755a9",
"1c036f7908f1b91e56a9bd6d20cdd441e6e32dd8ba73aeaa42457e83eb60a8af",
"-7170a10d12a58cc1e51d78b3d951fc40e081c29aafed7b3128cd2899125514e3",
"992a852ca3850696a0cac5815cb4ed9d8548ad4b15e2260e3bc8d2172c57d33",
"14e9e0efc4d4e9b60d37753a49c7d87185ebb1613619e7a42f0ebbda3ff7fed6",
"71d3625ac40de83c1e7eae9aa9aabb7ac793465eae19f4043481528392dfdccf",
"19b00155108f5781043e262b64a5ad6ca440bf6e55e91e9980357bb0b04115b5",
"-f7c2f49fafe00eba7151b140dd0455ac896857810fbfba237e2def0b12ae231",
"6096c39a17ae8180784b572e5c50b1c3534d000c99e45ff49466747e1f224a04",
"-3222193b153fd362d02695ab66525fef2c64e84f79bb2331803e6389cafbed00",
"-5dfcf646719b465a4a5cbdffcd99fe247e31f3a52546d59e653a70be4c73b64a",
"3f22f343b9465fb2a0c0998267809ea9195c2acf40a52adac783a462b435bca8",
"-6dcf9f666812c7d65049574a558dd695a7e4a690d79413694ec76d969f74a09",
"30e3d7f72bb9fd1c600429d922811cd54fc1a4436fcec3216b3ef3013c680edf",
"10325ef3c93551ada2bef8b97dc03145ca4c942a5ab3f220911dea486eb944db",
"18299d538003e642998d2545019cf8e5bc196a2d1439a16d903d792d9db0ff69",
"51d06d5261e50ee4674f0e4b447783e78583aacaacaa6bd5b44edb23a9d8a8bb",
"17a87890c0e3995344024c8b3560f87e298bd3b4bb6c98f41b8797d0d859de6c",
"230bc125592dd248cef0a73578ef3fc3b5116857c47aa694d51e3d969dd985f8",
"66f956506ff3fdc037775242867aef6a1bb03c4f558e1239bb6268400b4da5a5",
"29290e6dd2ba4fec6a72db2df3f13db16a73b016cafefc26e47cef015f9ec8c7",
"-4a30adb677822451956b37e5114c64aaf5c60567e5f4c6fa39a7691186e787e0",
"27c30fbc840fdd9ad8d0305a63af1dd2f6bec0f8cd4f9867bcde4b221e4c5935",
"6507a813d9ae80e64baf26d48c404a6a17f56a78e6a03d41b94924862348b7ed",
"-529c76b33f0172e1a6726a24b323a4f5d21ae8a063dc7eabd9e7facb6c1877d9",
"e76fa4602f60d16715c355f5f87334b39685d47967777f6d15b50f887873f56",
"246d0221ab9625595dfd8dc026968e65d58209537945baa3f0ef4df7b714afdb",
"-13acae307f53117fb99a68338cd66132369bcf3d9865240968a17801cdd07869",
"-332e15c0d761d8624114f76109f81b09a99616986ea211d799f49b0d3c4e1bb3",
"-5bd43f15ea677926569bc7417be3a2ff00a258f01b7de412463e57454e6170e2",
"48dedef26664a779b09608c19d059c5f78cae2b60a35ae4b96fab411b82f61b5",
"-66166683ba165a39149adaa6570758795faa5eb66c8eadbc26ffbf1eae93cdac",
"6ecee7a5e895954580543fa60511ee09d22452e329decd10917fe7889288fd53",
"-4d0d640df6470ae41b838c3e28187e068af6e4065b6129f593333eac652ce31b",
"-502aaff98bb97399af5cb6e44c67231aa2b7b437168a358232abb690771491c4",
"-3c5900619d1e45c774ad006dcf5f61fef76599a1f41face2e5e59da83b59929c",
"-23230091fa61374b0f00779f933c2c570badf77923926eb70aaf045f40c8cd7e",
"23897495f6f467b6256499dd7e6cff1e655fd6b17edbc3f0cd2c43fa0e759f1e",
"72cad1ee2cdfc1f9183405078da64ff98f0844c61b06ca8208b56556d6f71d45",
"63f68d86ee4f8e327012a7e888baa3cfe13a890abc8b8dbeed5150688c5e96bb",
"-41b1da0f9f73ac3ba97ae4f3d8e407c1cb4adf48e04f37553cfce8ac7a2b647a",
"2c3ce4ca575a818caf6787fa1f1760eccca0c606f8f39effd7f60565f22a8f11",
"140b1fdd3f74ff32a72f5fc4b9a5465e82aaf6a8096d913e1fed118c885c018d",
"-467d97ebf396f31174bfc1839f57eea60bbf1e2be50fe099161ac39173ab1ab7",
"7197af54757774c56d9f196387f981c263a2468b637c75b583e73c94e3e8cccd",
"1c20ba77e1335e83237812b3119e19e081846381c7b7a2220ce6f4c3624dcbaa",
"-52c93da752e69e6963195d6b59f16babe8e575d44e296ea8063ef25dd7cc0c5c",
"61334ed57487f58335c1c31b558fecdbfa97fdf790d8c86edd6781b66034d564",
"24afac8b871ba30fc20240f1340b42ba7c2b5e908c7d0030c66b225c0c376276",
"2427f17d2c86a7cb2b9fe1679fc670aaf96a3fa20edf0d10147a36015366bd0d",
"-6dc35cfe3bd488e246afab7623a13fbf2aa41f83ab1d81e605943908f681152f",
"4919d3382929ca71d3a9c8673a8e8acb9dc309aaf61ff3b7eaefd4b47bdf18d2",
"-45a74cbca54ea352b595e3b2ec680325075098a464a22b27b37b9c410976b7bd",
"116a8b2a31a9adefe3b7ec915b19ea47723c4800d7bfa85d37d3181fbf5bfe",
"-2bbab209e592b408c542d5d8322900ce42622ee4dff2c6e1c1c4b048d0b7f6f",
"20d31ff2bc8429a3d8e44eac7b27a93733a2162084f74923d655e2d0d1e0174f",
"-6f8ddf9cde98c196c351cdb9f7372891960baadd546732049b123c1aeb02140b",
"-6a602f899093cdf5f7fe60cb8861793d92008bd3075edec91e91fd6d595ca73c",
"-13cc282d5fc87eae9d8bcd6951a9989cdca125a05f54de049753da37aacbe2b1",
"-5af0243d4a9f57c9fd96814ddcd277acf39449cc07267c41c72d5862612beedf",
"2d6ec7f84ef195fb4a774bc9aed1f56eb3117aacd75e8308c538c3cdd5c6a73a",
"-42d378124b0755ed50a8e83f105fe0790890f784859b95cbd0a5c1259f6106ac",
"1eef549ecd2fa7a1d773362e6f2fdc865c24ebed27cfe9f3c18183e37160f138",
"-193033f8377cd44a6b1e26c9cb702dfd59f2062329ab7b1696121e85de85dbd0",
"-158e214d9c9b33cc41d24e776825fb9ccd756dc33e9fd1a74966837c3c43f5c6",
"125699bffa35ac695f076e6f261af3949062bccdd01c934a724d20ba2f8d8121",
"-6495800aa1d3689b6ce1e6a3cfa480ae22db0d1e0d516ff4f282bfba80119ffc",
"1265756f062f4e2d16e2d356e8c66f55ed5b9a354c7627cdf69dee96a000c79b",
"288d4f35e76dd3ad4020e527c2a95e7e942d35614e8018d28e09fd6f9be4752a",
"5707eb41761607f12bf00899a1a8fcbeefedc0039006d5c23af2ce913d4063a0",
"-13fe801aef3a670ad9fa7054ffaccae5099cea780e093fb4284c516477f36961",
"-18d4c36750762dedb20d2865cb1c2c5372e38a600488ea01d16340f01c88ee6",
"64d013c5bcb1dc42f94dfcfeafd60451df41625f93dc4cca3151dcde5cef99c6",
"-145819b9bf3a08388dccaa74e6e49b75ecc759f504b9e0e45787f625a0aebcb5",
"27f0086d94c77658eea3b954809c35c95bd8b8ff1a1cdb0df7a055c2a2ea823",
"-743b134a7d5f2849b798526a30ce74f0cac9e525575ed82b65b2d3323d6bdced",
"-1859fc749204c802ad8ce94e7139aba49358fa419fe9f5b828047494e60f82e0",
"-69267e2429fb1a7b4798788fe218835f5f477ac2313622cb80189424bf8c30c1",
"7b6f5f390cad3f96e9a9b9662ff8aa75f61b2261c2f84dce962bdd350099cd0",
"2d90cbc8448222618d6b45d2bd3121b22c1a578471860dc3de6c4c96867a710a",
"-2827011f4c476a8901ec7eeda08ef55081343bca60aea73ed7b1ce8e634b062c",
"2f04aa9df218ba5481dce22746ce54375c9616153e6fd0799f48da1ef115ec2a",
"70dba569c84b35ce995b5b127d02acf992408d1aa2c1052c082f3ec76f0332e3",
"-47417541a76a0c68a8eee559c51e9f51b56422229e804c14c820a3176470e568",
"53a638c057d4d9dfc9385a3ebcf5d79091ffcb31a6fbd1030a3ef60f799d2412",
"7f34d835bfeb92ab602e366e0a1d824542083c8858c1b12192f99ce6c4e5be54",
"-354138b9bf03fb35d048afff621a141412a50166a622c383ff5e6e6709ee51e0",
"-35560ecdb3569a75ce413debc2ad2669b89ebf2273a69b0bc905d1ff5649a145",
"-6e23d0d0fc33fa73e0419c9d756e76d83d7a5d788ddfd5eb83e4c93d7f8e244d",
"70f56a29596a7455b35a4666ddd572c564a4cbad14af32cd68b8774cecc0083a",
"-3f7f78f0eb9eaa72589ee0b1d0b5b73cd43b27b37114f52afea1e99949353941",
"1a9c931be07623ff7fcc4e2750efacca54820d1bf8190cca8e8a2a53b8bc5b51",
"5c627d1b6618b1825d29c5844a91c3a1327afd25eee33dcb1d5d71b8a25a0441",
"1e6d7ba1a670cdcbf2e89635df518a5a96e18e5507921a175a4fb18f778387b1",
"-5e34497a2c390d76f7751c5d8feefbb0cbc46f5c3a78389dfb8f45035e5e2b58",
"7f0d500d6f2b565a53e378c220f21046eae7a051d9aeaa7f7456884b0d8e1a51",
"-1c9875598e064f64951c073d7c31bbfa35e998befcb8e276261815bc06385e65",
"589cfbd30b0ae4ec790a2a2f3b1b9f92e7c2603c33c4fa67c638e0f33bfb86c1",
"11ff6650fa00170da76b370882626b9ce2e8478b416218ffdf27fdc3a1cca046",
"71155b7402d42751a19423034acf7809ccb5147d023743b6aa0020d7e729b83e",
"57a3f97b73869d7f010ad9fae3bb188944fb010f577e2919d72309c7b6502696",
"76a90b394c6cfc042fba067c4ee8a59cb80a77a68de006831bbd9b356012dfcf",
"-5562fdf5b3d46ccdbfe455c44585fba898f1342eeef5acd36681ffbdba69cd5e",
"-2c218dd4a8c04cf6441e720e2a3439d4c3e015bc9f82f49ba78c745d745f83bd",
"-a9527f346fa5943af06f160ee47489ba74b29ce1ae5d1ad6f19c08ec50b296a",
<<<<<<< HEAD
"651be9d3e4b1eacbb499a2dd2faffb4e2cf14b7cf34e9dcfabce89f17308823c",
"-d7d44d5e1c0f25f494f91295074c86dc8be47fc2e142ce064f82680fca53a3b",
"-a9527f346fa5943af06f160ee47489ba74b29ce1ae5d1ad6f19c08ec50b296a",
=======
>>>>>>> develop
"338ecfe6c523ed1184918b19584d97dd1095ecaadc49c7ba9da62b8b513026e0",
"-49fdb670ed574b50c5e035ca831594e6432e9c2013e27bac9b31ec6a083de059",
"5179f98f555f1e9f1d4a335d16f41154579a53e361e9859269b6fa74ea9c7d21",
"4c428400ea8a7bd7c46ba9895b508770efa4551f0d793e1beb1207da01d9962f",
"-3335f187cd45165018665929e8823c7960593a4aefa072090c9a21a8dc7df14",
"-7cfd8d1c44cadd94fb8dbb3423b90e49479b5d7fb9e185a6d08f1f79c0b0e2cd",
"-5a653db1c1f99cbec2f078ae945704bb393c1eb25715544217f0711d7a09a6cc",
"-2d1b40b9a19e66c2ecf7646bf583aafe85aee8271bc1beeaaaf5ec61e2b4c1c6",
"-62495b0d8994aefec472d06fc7ece2e44b508da2fe62eee281d900693fdc4dc1",
"1603da41d610854d85536b37d000e5eb7ca09786c43f50e7441c0afbff1de0a9",
"128c4fdf4801a30eae99dd58f0f3ff5ca65f71b66a9ac0f38dd450fb24b4aaaa",
"7088a36f67276d475aa62127cfde9790cc802fdf3a54df49461a25eb8bf15707",
"-f2db0c2f125a8c03a2bc1c2f97f66c3aed6c8ad32921dfafbf2ce680bed0b8b",
"-63506b47d8ea79618e2c311679f6b159ed0fda7a8f481a10b84a2f616aeacdd5",
"47ce2b6fdb72c3fabb9c74f82c1e3e522bcd42e614fd85c208ac3c4c840cea72",
"6b2e6d2d5deb27dffec973f23af4caf111e66d1397f467dbbedf5ab2192fb6b6",
"-46bf5a919b4a499e2786e64710fc9bf13f885928d22f4adb52125582236e0086",
"a103c04e7ecb9b3395f77c7b0cad28e62c85f042de4767ccc6c005e6f47f8d4",
"-16416aa3a040327b928bda1515fa31768879510526699acbd340cf89e4cadada",
"-5503e0d9fe8ad4eeb28ddf8f08aac640138050b60f2b75b72d879d0f3c4f66fd",
"50fb9f913ca102534bb0a8eb8ebf19c68dfd16ffe5e207bcc580084cd4ecd8b4",
"-58376c6064fcce9d30728a159698e4475d8fbe42b32389a6b19e166ccc34fbf",
"-38dc2f55b59fad601bdd8837f6b55e6d9c500c99afec9103a1202f87a2ba89cc",
"-426b88c3f27a397dbf517202ac262cc32ec8af6403a2cbccc7ed662089737c89",
"4202995350abae303b43e564aa79121a30b5f1aea31f69cd25e07dd3fa64dce7",
"7289738fef00f1770eeb098db9bd486c01ac12398d79cdf935514a128c585c51",
"-43670bfe851a3dfba62552559411ae6492178e2c2455654c0cbcbf010b349bd",
"-4b789eb7dd63dd42dd6e0e5b0ab973738764dc9c6c8f3b2bb80d8f45cbe24414",
<<<<<<< HEAD
"3c09182b66a21d81cddd6a919ce43730dba424e581a31c45edf78d14d7fd51a0"
=======
"3c09182b66a21d81cddd6a919ce43730dba424e581a31c45edf78d14d7fd51a0",
"651be9d3e4b1eacbb499a2dd2faffb4e2cf14b7cf34e9dcfabce89f17308823c",
"-d7d44d5e1c0f25f494f91295074c86dc8be47fc2e142ce064f82680fca53a3b"
>>>>>>> develop
];
var events = [];

module.exports = {
	markets: markets,
	events: events
};
