if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return a[s]||(e=new Promise((async e=>{if("document"in self){const a=document.createElement("script");a.src=s,document.head.appendChild(a),a.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!a[s])throw new Error(`Module ${s} didn’t register its module`);return a[s]}))},e=(e,a)=>{Promise.all(e.map(s)).then((s=>a(1===s.length?s[0]:s)))},a={require:Promise.resolve(e)};self.define=(e,c,i)=>{a[e]||(a[e]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+e.slice(1)};return Promise.all(c.map((e=>{switch(e){case"exports":return a;case"module":return d;default:return s(e)}}))).then((s=>{const e=i(...s);return a.default||(a.default=e),a}))})))}}define("./sw.js",["./workbox-681e12ef"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/1.8bafad2a.css",revision:"3bba1f8d3cfff43f451e8e86f03f15c2"},{url:"assets/1.b13697f3.js",revision:"f3cc316f1a63a83eaede3ac260f596a8"},{url:"assets/2.3f2a8309.js",revision:"ec3e3cff6d90e04701b3f11a29be2dcc"},{url:"assets/2.9d365b65.css",revision:"705fa285c298b8448e705ecaaffe0fb0"},{url:"assets/3.0faa60ea.js",revision:"1cee149f91cc1b7b8a34c94a25cad289"},{url:"assets/3.bc80e82f.css",revision:"4076797276156ae07dd67ba0a4aca6d8"},{url:"assets/4.0abbfa0f.css",revision:"35e80d186a88194741133f51beb4880f"},{url:"assets/4.8c62e5b8.js",revision:"3206abd17d555bd5b528512ae52fac4b"},{url:"assets/404.3e561557.css",revision:"f4629dd1545cbd3466b9db35074ffbaa"},{url:"assets/404.7f490c97.js",revision:"f58cd19b70648f18cc2717d2cc0bc37a"},{url:"assets/5.7cc16490.css",revision:"aeba1e1e03f6b5d699e104374bc75edb"},{url:"assets/5.a22803ef.js",revision:"d654953792627a31b9daf5eee2147a4b"},{url:"assets/6.16da96a7.js",revision:"31d7bccc39c0a4a18e700d2bf302b75a"},{url:"assets/6.8d440201.css",revision:"96bfac29ef2cd102fd8314f18020d890"},{url:"assets/7.3e42db3a.css",revision:"3969cec9ca7a4115fbfdbb81997c59b9"},{url:"assets/7.e926d82a.js",revision:"76d979dcdf0730a31af1ba57cb69604a"},{url:"assets/actionbar.demo.cbf13b67.js",revision:"3146c94e4452ca702ed350075d87e00a"},{url:"assets/advanced.23ead0f4.css",revision:"9a8aa413059123a796f70264ec1f752d"},{url:"assets/advanced.4edc2d85.js",revision:"ef6485c3a0b900047997e6ae5acd918b"},{url:"assets/alert.405a385b.css",revision:"537007298efa5a9782167642f89fbff2"},{url:"assets/alert.ccf4f325.js",revision:"670d75883eff6820a82cfaaa2679ad2e"},{url:"assets/amap.demo.1ffb6f84.js",revision:"e70f9bc5a9e8afd370b54923eba171a3"},{url:"assets/amap.demo.83189165.css",revision:"9f6b22901403de5f5bba7742e199b324"},{url:"assets/area.demo.0f6778ae.js",revision:"b9b5cd9d9c5af2756354a1d81e6a7268"},{url:"assets/basic.629d70ad.js",revision:"e3224dd33d0a6a2be9362f37c57332d5"},{url:"assets/basic.7c96df98.js",revision:"f3495f72701ecd82614fc50cad0edb48"},{url:"assets/basic.8e3b9b70.css",revision:"06686be936b3bf8fa440ac14e633489e"},{url:"assets/batchactionbar.demo.5e66ea17.js",revision:"21f49c23129ff54b02fac6ea241bcb6a"},{url:"assets/bug.df550a73.js",revision:"8db5860ef1b46ced0e91a620ae344e6c"},{url:"assets/button.7f9a474b.css",revision:"0b1704913a3da364b5558e12ea65e024"},{url:"assets/button.813d3955.js",revision:"ef1f90e53bc28b75122b2f2cf56ec20d"},{url:"assets/card.041b77dc.js",revision:"b526f94301f3211ddbdad70a38f70d3c"},{url:"assets/card.94ae2def.css",revision:"66228a10a5bda8500001a27e59290b63"},{url:"assets/checkbox.49fa0e76.js",revision:"7bf519e23d431f81ebf376abd6359884"},{url:"assets/child.0f01d6ad.js",revision:"42ed59f138ca96ebb0ee1f3aa875e7fe"},{url:"assets/chip.demo.3e151d19.js",revision:"355d8b0e09836f24a45e779d4deeb531"},{url:"assets/chip.demo.c505faa8.css",revision:"05d17e2bce4baa9abd638413f7837693"},{url:"assets/clipboard.a18427cb.js",revision:"c23f3f0a4df52ade1ab6d6e5b8650779"},{url:"assets/colorful.card.demo.c33e4f30.js",revision:"3c252bcb1c5bc5e31d1c742514eb97b9"},{url:"assets/count.to.demo.7899a2e2.css",revision:"cd4a6df04f402662a82e08d9f748c54c"},{url:"assets/count.to.demo.afdc4df7.js",revision:"fcf61bbfb98796a59b146321368ad664"},{url:"assets/datepicker.dd6dc0dd.js",revision:"518fa11841509b79371977fc30d6b71b"},{url:"assets/datetimepicker.14f8b1f3.js",revision:"04d089a7cd73f658962d0f4f6ec9f194"},{url:"assets/debounce.1e952ac4.js",revision:"28418ee082b6260e35cac1bd9f7978ce"},{url:"assets/detail.03ca2635.js",revision:"179e66d9e4386c2056ce10eaa7a5fdb5"},{url:"assets/detail.15ce3289.js",revision:"14282f3549473b24f79f9b2bd889e15c"},{url:"assets/detail.44436b7f.js",revision:"02538b67fc5a87ec193350c253d98066"},{url:"assets/detail.93c75114.js",revision:"fa8313c66bd47347f14b5cee65841ed5"},{url:"assets/detail.9d29e929.js",revision:"982368949682aa0dd1410b0198eb749a"},{url:"assets/detail.b58731fc.js",revision:"92a342486fa998347c217388e7a7bd3e"},{url:"assets/detail1.e351d122.js",revision:"01ed0c49869bd9401a122cf616a35acb"},{url:"assets/detail2.94904b53.js",revision:"01ed0c49869bd9401a122cf616a35acb"},{url:"assets/dot.8b95769a.js",revision:"9937bc7ef41e73be60ce17689fe6b11c"},{url:"assets/drag.dialog.ee03fec7.js",revision:"ef321ddcc93beb676598a51749afd43b"},{url:"assets/echarts.b4251b77.js",revision:"e2a52fff753d97c6829491028ee3b34d"},{url:"assets/edit.password.c92dcd5e.js",revision:"a11f21fb0cf5a427284487c219dc9cd0"},{url:"assets/editor.demo.3c2eaff0.js",revision:"9d16cd62d149fdcd888609c2f4312ff4"},{url:"assets/editor.demo.5bf5b0e5.css",revision:"779735e879e00d25ea528592311a2452"},{url:"assets/font.2b29665b.js",revision:"5ffc6f9d97e3da21855f8f78929e0a1e"},{url:"assets/font.a6a72068.css",revision:"c6e5b7687ddc13b3bd245bb01a2ed410"},{url:"assets/g2plot.795ce4e4.js",revision:"1bd4ba9aa9eb449be714aa29a28bd667"},{url:"assets/goods.484a5837.css",revision:"09f91acb6b28ab44f0c6bd1eef5e51f9"},{url:"assets/goods.7ccedf23.js",revision:"d2f171fab78a44346c89d0c3d2f4772a"},{url:"assets/i18n.a1e8cd5a.js",revision:"d463c3dd19262d636d43c529a599a34f"},{url:"assets/icon.131c983d.js",revision:"799e12be6992bc7dd830be08a8b73a16"},{url:"assets/icon.a162c412.css",revision:"5e9beca40fd83a25727d0e6323f23d75"},{url:"assets/iconpicker.demo.40caabdd.js",revision:"8d8cf0d95dc0c1352aa4172b4c7a8e90"},{url:"assets/iconpicker.demo.a00f5958.css",revision:"489447701dfcc2fe81c3be6af30e2ca9"},{url:"assets/iframe.299bcada.css",revision:"3d40da4fa986c306b202c454b11568a1"},{url:"assets/iframe.d72a17df.js",revision:"5636860180dd6b9429a3b12c4880fcf9"},{url:"assets/image.preview.demo.033153c3.js",revision:"d0e7a290a168f47776cc41d539eaedd7"},{url:"assets/image.preview.demo.a6a286c3.css",revision:"774a63303888ac50e116d7b5bd08bd38"},{url:"assets/index.00dbfdde.js",revision:"bb0f490eea1eb4acce35ba0e75905884"},{url:"assets/index.048e3344.css",revision:"344b893ace05f61d579d8e203dab70a1"},{url:"assets/index.089395e0.css",revision:"eb39fb0d2f0ad7132420a55eea0301a2"},{url:"assets/index.0c9dc32b.css",revision:"1b3fa1df4967fb9864092b3908f2e1cc"},{url:"assets/index.0d9442c9.js",revision:"883746704240ec344ac5da0ab7981ef8"},{url:"assets/index.0f17f15a.css",revision:"2b3f865f12448e580cda817af1c69806"},{url:"assets/index.1064d7ba.js",revision:"d2e421bacf76c400b3722771077ce67a"},{url:"assets/index.1491598a.js",revision:"14a10492583b1acbc7ad317dd0223747"},{url:"assets/index.173e2cfe.js",revision:"a61862fb3469a61a26a3f2c23d1d69f3"},{url:"assets/index.1bab8435.css",revision:"bfa4952fa19da6c58725e9140583c5b6"},{url:"assets/index.365da6e2.js",revision:"2887c3428c7b6afad9d30d673bcb1e7b"},{url:"assets/index.3e0ea203.js",revision:"3a9f6da3f9a8abc561521add8435a219"},{url:"assets/index.409df4fa.css",revision:"69740ea9c3ba208a14534c2daa1ee535"},{url:"assets/index.4c860cfa.css",revision:"64b76cdceadc6d97c51a8d63bbe28442"},{url:"assets/index.539c2f24.js",revision:"6ffee64b77f49bdb8f7979a7fed51e59"},{url:"assets/index.5573320a.css",revision:"13557ab507e3f961be2dff77144e92aa"},{url:"assets/index.5d844020.css",revision:"81ffc35b0819ba49d679c2288f445ec1"},{url:"assets/index.6d4294b0.js",revision:"28cff0139bb1111cf534ef59246ffc39"},{url:"assets/index.72672077.js",revision:"1ed095ce809e27a4f05b0da32ab49a1b"},{url:"assets/index.7825a7dc.js",revision:"8412560d0d2a39153f4a6d1c734f30fd"},{url:"assets/index.792c6ef7.js",revision:"cad5d817c954ba2c54265867808746df"},{url:"assets/index.81fe7a0e.js",revision:"b99fca29880f8979c671f76df5a93372"},{url:"assets/index.86d9d3c3.js",revision:"f54a336b7daaae781d47547239cf7f9f"},{url:"assets/index.8c414ce2.css",revision:"99fbd8f85ddebdbe7c3936713c25ac13"},{url:"assets/index.8cdfc760.css",revision:"9b7095eb14de9ef6dcf9591cbe66b611"},{url:"assets/index.8dd25992.css",revision:"1623ddfd49802fd6a12ae1e138e8e8c0"},{url:"assets/index.8dd5e426.js",revision:"c2298d357373258cac7fff3bb1aa4321"},{url:"assets/index.9030c777.js",revision:"fddf12d2a706b05e91d6e33d667ab319"},{url:"assets/index.9065914f.js",revision:"d932c26d59d78e94f64ffa244c144d54"},{url:"assets/index.97dac063.css",revision:"8b4be1b521209c22b0620b73324853d9"},{url:"assets/index.99bec19d.css",revision:"5cbda1d8012dd07ea18c00b7ab17d724"},{url:"assets/index.9a192bbb.js",revision:"475dcfb5a25bf903fa4a67a6b56fc171"},{url:"assets/index.9c2de28b.js",revision:"868c501428885a236217bd7ba4e8a1b6"},{url:"assets/index.9cccf275.css",revision:"7bc9ec8742e949f15cf6bab056c3cda1"},{url:"assets/index.a385f0bc.js",revision:"3a727902181d3f48a97b34a3a85947ca"},{url:"assets/index.a3c54816.js",revision:"6238deac70a5691b8bfa149754781821"},{url:"assets/index.a92ce515.css",revision:"3c7bd2aac05fdcba20a74b93bfe13d5c"},{url:"assets/index.ae222503.js",revision:"87d953574b6b1c98333add457bd9c1d6"},{url:"assets/index.b3adad2d.js",revision:"1bbf9029136aafeb5641dcbab65b07ff"},{url:"assets/index.bf8809cc.css",revision:"aec002dc9d387ac1311950b1679a851d"},{url:"assets/index.d451c4ae.js",revision:"33f825025eab3b152874810aa8b04b60"},{url:"assets/index.d5ca33ab.js",revision:"19bc48460d8458e4e4844f386eed0860"},{url:"assets/index.d7d790c6.css",revision:"0cf4f0d7e2df136686c694261beee81f"},{url:"assets/index.d9873d66.js",revision:"0112204d840691a4b187591a3c2da48b"},{url:"assets/index.e03de492.js",revision:"008d2cd535469bfab1d9d62467f027dd"},{url:"assets/index.e7a3147d.css",revision:"fef437e76c24070bc410a1dd743922de"},{url:"assets/index.eab2ccc7.css",revision:"e1465cece0d330c28af7347ae3911ac8"},{url:"assets/index.ec4838c9.js",revision:"9bf6090a421bb5efaec095105ec4ca8e"},{url:"assets/index.ed5e0ab2.js",revision:"996ae418972e19946d828641c37683ac"},{url:"assets/index.efa55777.css",revision:"52fb768a4b1a539db43f46d1a8131f19"},{url:"assets/index.f03e52fd.js",revision:"0f710a74994c7cf9f7918c9c5c8391ed"},{url:"assets/index.fc4f5d03.js",revision:"f2db90cd629ee8560fae76256aa037f2"},{url:"assets/index.fddb36dc.css",revision:"912bf93b2d426106a9d09787ff455346"},{url:"assets/index.ffbd20e5.js",revision:"e2b52a3acd9117aac165fa6597ca6838"},{url:"assets/index2.8cea2186.js",revision:"83081e6d7d6718bc42423033f7f35b65"},{url:"assets/input.c36cb616.js",revision:"e4458c63ad60051b551891fc2969db67"},{url:"assets/inputnumber.86666668.js",revision:"a3fff319cb0c26ea538c0626ca5eef1e"},{url:"assets/link.9ec0f279.js",revision:"852dbcaafae67c8bb7e9c4a7a2608263"},{url:"assets/link.e4f03efe.css",revision:"ec472f028872eb137cd4e0413eb138db"},{url:"assets/list.0a288271.js",revision:"74981847ea49b6831d144d313a3d9ce5"},{url:"assets/list.12c34913.js",revision:"a5581a08a869ebb352d918172bb93b91"},{url:"assets/list.2f847c24.css",revision:"bc9ae060a0b829e9260ddb06e40251d1"},{url:"assets/list.51793e5a.js",revision:"a444901fcb5d2cd4728891fe3a6dc95c"},{url:"assets/list.6508a98c.css",revision:"28130772277d042ba62c30cdd8225ab5"},{url:"assets/list.94c66861.js",revision:"edfd22deb49c92b719c74df32040bbc5"},{url:"assets/list.a417b567.css",revision:"660265d367b12adad1a8fae1caf74fe3"},{url:"assets/list.b88b9a90.js",revision:"78a822e35df180027a0dc4fbe7cf6b93"},{url:"assets/list.f8620865.css",revision:"27b37692f1bb981432af3d5207bf1c1a"},{url:"assets/list.fcfba952.css",revision:"152c93504bcbfad06599de05c4a0199e"},{url:"assets/list1.e58e27ea.js",revision:"fb71bfb496d39dc37a429d3024e364f7"},{url:"assets/list2.245ad9d4.js",revision:"50307404baf2d855074929cb3570711e"},{url:"assets/login.75cf98ee.js",revision:"05aea730901c3b0ab2dcb1e3003349ff"},{url:"assets/login.79cf9366.css",revision:"5127817f1b38cb8628f1ff3fb45ef5e2"},{url:"assets/logo.3c3b2e9b.js",revision:"ef4fe3f302b65c7a84685bc2db4bde11"},{url:"assets/nested.0f392717.js",revision:"1275d93c5116a36de0bbfe9496019a2a"},{url:"assets/nested.ba553fa6.js",revision:"d79d0426ee250c725c760b273d37f43d"},{url:"assets/number.ed58e4fe.js",revision:"079d37d8103249a4832c6815d1f04bcf"},{url:"assets/page.9b1ba4f8.js",revision:"2e3a0f072c39a988b2321562bce5c6e8"},{url:"assets/page.c9442828.js",revision:"a0750735af8dd1a7458c0808b05c7b8a"},{url:"assets/page.e90f2e54.js",revision:"c040866d385b72ab470b869c6621f0f6"},{url:"assets/page.f9738d47.css",revision:"c84b5c0e02d6a158afe7f8633feb0413"},{url:"assets/page1.58ba90a8.js",revision:"1e7767defa652f397f3fa0924d657614"},{url:"assets/page2.ce9faf07.js",revision:"6a7763d422254c53e1c89e2cbe5bc0bb"},{url:"assets/pageheader.demo.aca12ef7.js",revision:"6c113259e7cfc2853ae6f3f24c154888"},{url:"assets/pagemain.demo.fcd9eb1c.js",revision:"f9f2643c0b13ba5dc5bb2367bdd61600"},{url:"assets/pagination.d272f1b1.js",revision:"39065dbc6ce077d9ba60f439b03764c6"},{url:"assets/parent.a6d1c74c.js",revision:"7f22e0e393bc2d2e8e7b9c29c9de9b9d"},{url:"assets/print.2c020640.js",revision:"4b002c94292825b3ae9def2104da0e01"},{url:"assets/print.ddb4abf2.css",revision:"b4301c01f7eba971daf5cf0d146861de"},{url:"assets/qrcode.66b21b7b.js",revision:"121833b8540fabdbdfae3e23bb686149"},{url:"assets/qrcode.841d4c9e.css",revision:"aead96d24feb5d1b19e54e7f85924bf9"},{url:"assets/radio.b7585149.js",revision:"28be111f78695c9391383d213306f8ea"},{url:"assets/rate.ca0b7d85.js",revision:"7874c9a38a9ce3d6a299851e89f1e132"},{url:"assets/reload.4a8dde30.js",revision:"e6001cea9a9c677eef1182d6b734f66a"},{url:"assets/remix.7631eaf2.css",revision:"30392677fd61f6d258a6b70508465f01"},{url:"assets/remix.9de021b7.js",revision:"0d8be5cce7e76dbea2c801a67d54dc2e"},{url:"assets/result.demo.1a4168e7.js",revision:"bdb28c217a83f1941679aa8864520912"},{url:"assets/rules.91942ef9.js",revision:"03a6454370a32caccc5f73c43351b8f0"},{url:"assets/rules.a8e5030d.css",revision:"8230471bdbd73ab7de46b4f930a27eb8"},{url:"assets/searchbar.demo.352dd225.js",revision:"ed30a64cc8663024e833fd138f383ce3"},{url:"assets/select.5e38eecd.js",revision:"d86c4f8562f385efb978eae8331af197"},{url:"assets/setting.4c4345a7.css",revision:"8aa2406c6d3802fd1111b39a91380a20"},{url:"assets/setting.84a9cbf1.js",revision:"f52b4ce35b69cc9dd9a5a0719e7ccd3e"},{url:"assets/sign.canvas.demo.ccfa807a.js",revision:"8c4995e35f6cf07eaa331775b4c718d9"},{url:"assets/slider.4e5e0074.js",revision:"26eaf20e4baee6c340ecc6ea84104996"},{url:"assets/sparkline.demo.4d47e420.css",revision:"a8c6a4c419c64d9ee1c291cbd2826d96"},{url:"assets/sparkline.demo.527e4014.js",revision:"ad9a44ce4a2db8cc5c7ecc000fb51579"},{url:"assets/step.65c91b38.js",revision:"acbe905e5587d78fb6bb421d6e915093"},{url:"assets/step.7e299502.css",revision:"70de6540bff5f4e6f7a80e12a7ba29ba"},{url:"assets/svg.201762de.js",revision:"77a181cd091eea779ba4084c39955140"},{url:"assets/svg.6c81fa5d.js",revision:"0bc338cd42d520ce388cc437b7e0b3d9"},{url:"assets/svg.bf2f5a84.css",revision:"37b5c6dc12948f8930a8500ff3df99d1"},{url:"assets/svg.d74dcfa5.css",revision:"9486851cf6c74cf7d402b60b2c48c81b"},{url:"assets/swiper.1dc8b345.css",revision:"6eafb23f002b88f26a93785e971fcc73"},{url:"assets/swiper.5e79e17a.js",revision:"1e9bb9c6d110799b732a02b78c34f83a"},{url:"assets/switch.d48fcf7e.js",revision:"dadada701a06317974ecb71fa76e4229"},{url:"assets/table.autoheight.demo.2550df83.css",revision:"59729e116452be3361b217e51cd25634"},{url:"assets/table.autoheight.demo.e06a9e0a.js",revision:"f727cb8016c3fe25db37284a5666591e"},{url:"assets/text.de93d08d.js",revision:"ac418082780f3bd5d3defc292ad72051"},{url:"assets/timepicker.123076da.js",revision:"57d660b4a5f1d25b7619c9e8bc15a51b"},{url:"assets/trend.demo.462cbb9c.js",revision:"e4f4b2eabea97a869895f3fa264ded39"},{url:"assets/trend.demo.baf63e02.css",revision:"2db84f126851903a7d9c05b1f92817f6"},{url:"assets/upload.demo.62dd2583.js",revision:"ce9550a6f68b4fca8915e3588f57ce9c"},{url:"assets/upload.demo.d5d7f76f.css",revision:"8bc73baa135af823ab69c7eb373b3876"},{url:"assets/vendor.7707186e.js",revision:"e2c50df7cdcee4de3dc006f317280b3c"},{url:"assets/watermark.5bdfc630.js",revision:"7cdde5ba277972fd199194c28ac173e0"},{url:"assets/waves.55ab8f32.css",revision:"c560801a2697069b912c63ab1e48020c"},{url:"assets/waves.8d1e4c6f.js",revision:"d0891c69b3cffc7dd3e95accc9f83fb2"},{url:"index.html",revision:"37c50aaa14d8db157b92046710973fe6"},{url:"registerSW.js",revision:"26cea094eed9d5b738c4c8b0d4b7e98c"},{url:"tinymce/langs/zh_CN.js",revision:"a561a4484a28c2267c30a4455d3da68e"},{url:"tinymce/skins/content/dark/content.css",revision:"abdd83f838fac3428c028294f27efc4e"},{url:"tinymce/skins/content/dark/content.min.css",revision:"4c0b8cf274d116c2ff8b3f1c7cfaf9d3"},{url:"tinymce/skins/content/default/content.css",revision:"db31e42bcf1c9c26eb3c9281816a3b33"},{url:"tinymce/skins/content/default/content.min.css",revision:"5022f9908e1f0680cdc3ad293816bd13"},{url:"tinymce/skins/content/document/content.css",revision:"24d66dddf2faa9f48de40df30ae8f1fc"},{url:"tinymce/skins/content/document/content.min.css",revision:"0ccaf40378ed037f42d01279f625793d"},{url:"tinymce/skins/content/writer/content.css",revision:"3cd6fb97c8178ed816ce946d8b601ffa"},{url:"tinymce/skins/content/writer/content.min.css",revision:"856c1120d71e64f227e546a9406587f6"},{url:"tinymce/skins/ui/oxide-dark/content.css",revision:"7cea98c6239b0fe44a0aef3ffdea1484"},{url:"tinymce/skins/ui/oxide-dark/content.inline.css",revision:"15171e5e559506d7766a07696c7e8228"},{url:"tinymce/skins/ui/oxide-dark/content.inline.min.css",revision:"fa6ba7fd4905539e5b2aa845d383278b"},{url:"tinymce/skins/ui/oxide-dark/content.min.css",revision:"90a3444b682d1c9955e6c24178e0812a"},{url:"tinymce/skins/ui/oxide-dark/content.mobile.css",revision:"e84062c0d71bace6637586be7c2590d3"},{url:"tinymce/skins/ui/oxide-dark/content.mobile.min.css",revision:"411c2608b6be78849a76c0ed14200234"},{url:"tinymce/skins/ui/oxide-dark/skin.css",revision:"6a1bc2cd4bd91d9596eec7b5a83ab476"},{url:"tinymce/skins/ui/oxide-dark/skin.min.css",revision:"9c7bed817d7c45a03153e041ed71f449"},{url:"tinymce/skins/ui/oxide-dark/skin.mobile.css",revision:"338b06826c0e8a681688fc195dbb72b1"},{url:"tinymce/skins/ui/oxide-dark/skin.mobile.min.css",revision:"4fdf33191102d7a24a5bf0639040d128"},{url:"tinymce/skins/ui/oxide-dark/skin.shadowdom.css",revision:"b52060a439386b84175c9a3e34d5d1f4"},{url:"tinymce/skins/ui/oxide-dark/skin.shadowdom.min.css",revision:"b3b3ae6828c8a28eed8b0b4cceea8f00"},{url:"tinymce/skins/ui/oxide/content.css",revision:"1a2516cf9a8aedd9a4b277136b3f1948"},{url:"tinymce/skins/ui/oxide/content.inline.css",revision:"15171e5e559506d7766a07696c7e8228"},{url:"tinymce/skins/ui/oxide/content.inline.min.css",revision:"fa6ba7fd4905539e5b2aa845d383278b"},{url:"tinymce/skins/ui/oxide/content.min.css",revision:"33ccf85167a5181c2dead9c10ccfbc4b"},{url:"tinymce/skins/ui/oxide/content.mobile.css",revision:"e84062c0d71bace6637586be7c2590d3"},{url:"tinymce/skins/ui/oxide/content.mobile.min.css",revision:"411c2608b6be78849a76c0ed14200234"},{url:"tinymce/skins/ui/oxide/skin.css",revision:"1b93539bf96d7afa5ab2fe4fd33421a3"},{url:"tinymce/skins/ui/oxide/skin.min.css",revision:"0ce84e101318a3d474ce73b3f8a7fc86"},{url:"tinymce/skins/ui/oxide/skin.mobile.css",revision:"338b06826c0e8a681688fc195dbb72b1"},{url:"tinymce/skins/ui/oxide/skin.mobile.min.css",revision:"4fdf33191102d7a24a5bf0639040d128"},{url:"tinymce/skins/ui/oxide/skin.shadowdom.css",revision:"b52060a439386b84175c9a3e34d5d1f4"},{url:"tinymce/skins/ui/oxide/skin.shadowdom.min.css",revision:"b3b3ae6828c8a28eed8b0b4cceea8f00"},{url:"./pwa_icons/192x192.png",revision:"b712d71f2d23a1f5db15dc66c3a63532"},{url:"./pwa_icons/384x384.png",revision:"0140b041670316f0e13be2c0996db734"},{url:"manifest.webmanifest",revision:"255a539f9615038660203faccf190a9f"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));