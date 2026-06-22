const CDN = ''; // Full Shopify CDN URLs stored in img field
const CART_KEY = 'spindrop-cart';
const SHOP_DOMAIN = 'https://spindrop.shop';

// Prices = AliExpress cost × 2 (shipping charged separately)

const PRODUCTS = [

  // ── SPINNERS ──────────────────────────────────────────────────────────────

  { id:0,  vid:47320853545091, cat:'spinner', name:'Tri-Blade Metal Spinner',       price:6.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S260c31afc65d40668bd3d46090203895f.jpg_480x480q75_42cee9e5-dec1-4ca3-b426-244bd51b10a3.webp?v=1782024125',
    tag:'BESTSELLER', tagType:'hot', sold:'25,000+', rating:4.8, link:'tri+blade+metal+fidget+spinner',
    desc:'The original. Smooth ceramic bearing, precision-balanced tri-blade that spins 3+ minutes on a single flick. Zero wobble, pure satisfaction.',
    features:['R188 ceramic bearing','3-min+ spin time','Precision balanced','Brushed metal finish'] },

  { id:1,  vid:47320854200451, cat:'spinner', name:'Carbon Fiber Pro Spinner',      price:13.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Sb660cef100504912b5869d85d5ebc641M.jpg_480x480q75_8567d09c-2111-497d-b410-944f8ea7a200.webp?v=1782024126',
    tag:'NEW', tagType:'dark', sold:'8,000+', rating:4.9, link:'carbon+fiber+fidget+spinner+professional',
    desc:'Aerospace-grade carbon fiber — 28g featherlight but rock-solid. Flagship-quality feel for under $20.',
    features:['Aerospace carbon fiber','28g ultralight','R188 steel bearing','Matte black finish'] },

  { id:2,  vid:47320866357379, cat:'spinner', name:'LED Rainbow Glow Spinner',      price:7.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S24af9d0e5bab4c7892b746e9ea0a3fd5t.jpg_480x480q75_6a8940e8-b986-4455-b7d6-0a17907f2fa3.webp?v=1782024126',
    tag:'HOT', tagType:'hot', sold:'15,000+', rating:4.7, link:'LED+rainbow+light+fidget+spinner+glow',
    desc:'RGB LEDs light up the blades in a hypnotic rainbow trail when spinning. Day or night, this one turns heads.',
    features:['7-colour RGB LEDs','Rechargeable via USB','Long spin time','Light show mode'] },

  { id:3,  vid:47320866390147, cat:'spinner', name:'Glow-in-the-Dark Phantom',      price:5.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S21eff922c13f4222a75da04f63b96ff88.jpg_480x480q75_f73ba83e-4f90-4c04-9c80-ec80aab6cb21.webp?v=1782024126',
    tag:'POPULAR', tagType:'', sold:'12,000+', rating:4.6, link:'glow+dark+fidget+spinner+phantom',
    desc:'Charge it under any light source, then watch it glow bright green in the dark. Quiet, smooth, eerie.',
    features:['Glow phosphor body','Silent ceramic bearing','Compact tri-blade','No batteries needed'] },

  { id:4,  vid:47320866422915, cat:'spinner', name:'Titanium EDC Precision Spinner', price:31.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S47d27b844d714f77b6397d4a396ad47dg.jpg_480x480q75_ad80f9a4-47ce-42de-97be-f7751c9c70ac.webp?v=1782024127',
    tag:'PREMIUM', tagType:'dark', sold:'3,200+', rating:4.9, link:'titanium+EDC+precision+fidget+spinner',
    desc:'CNC-machined Grade-5 titanium. The kind of spinner that gets passed down. Unmatched spin time and feel.',
    features:['Grade-5 titanium','5-min+ spin time','Concave buttons','Comes in gift box'] },

  { id:5,  vid:47320867307651, cat:'spinner', name:'Copper Galaxy Spinner',         price:21.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S3d5e30610e7b43ffb760e3148743c1e0s.jpg_480x480q75_61a6f96a-fcb4-4ddc-85be-b39323d7b669.webp?v=1782024127',
    tag:'LIMITED', tagType:'dark', sold:'2,100+', rating:4.8, link:'copper+galaxy+fidget+spinner+EDC',
    desc:'Solid copper body that develops a natural patina over time — every spinner becomes uniquely yours.',
    features:['Solid copper build','Develops unique patina','Hybrid bearing','Weighted for long spin'] },

  { id:6,  vid:47320867340419, cat:'spinner', name:'Mini Stealth Pocket Spinner',   price:4.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S0178dd7ac8664ab48f791538faed0d51A.jpg_480x480q75_ba690530-962b-41ce-bd39-2d809e5798cb.webp?v=1782024127',
    tag:'VALUE', tagType:'', sold:'18,000+', rating:4.5, link:'mini+pocket+fidget+spinner+compact',
    desc:'Fits flat in any pocket. Ultra-compact design, quiet bearing — the one you carry every day without thinking about it.',
    features:['Pocket-flat profile','Silent bearing','Lightweight alloy','Single-button click start'] },

  { id:7,  vid:47320867373187, cat:'spinner', name:'Skull Chrome Spinner',          price:6.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Sf005676a6b5e4a5e801587c99ad3c0cal.jpg_480x480q75_684197cd-3a35-4f6b-a3fe-738f1f44bfbb.webp?v=1782024127',
    tag:'TRENDING', tagType:'hot', sold:'9,400+', rating:4.7, link:'skull+chrome+fidget+spinner+metal',
    desc:'Death-metal aesthetics meet butter-smooth spins. Chrome-plated skull design that looks as good as it feels.',
    features:['Chrome plated finish','Skull blade design','Steel bearing','Satisfying weight'] },

  { id:8,  vid:47320867405955, cat:'spinner', name:'Stainless Gyro Ball Spinner',   price:11.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S0ebffacfc237446f83c2e9ab695c8b9bs.jpg_480x480q75_07b65d06-9170-4d10-a8d7-47695d708e52.webp?v=1782024127',
    tag:'', tagType:'', sold:'5,600+', rating:4.7, link:'stainless+steel+gyro+ball+fidget+spinner',
    desc:'Dual-ring gyroscope design — the inner ring spins independently in every direction for a mesmerising 3D effect.',
    features:['3D gyroscope motion','316 stainless steel','Silent dual bearing','Desktop display base'] },

  { id:9,  vid:47320867438723, cat:'spinner', name:'Ceramic Hybrid Precision',      price:10.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S91dd7cf2c2a04bd487a21df3160d7294j.jpg_480x480q75_ecedfaca-02e2-4969-a4bb-76b4c78850f8.webp?v=1782024128',
    tag:'SMOOTH', tagType:'', sold:'7,200+', rating:4.8, link:'ceramic+hybrid+bearing+fidget+spinner',
    desc:'Hybrid ceramic-steel bearing delivers the smoothest, quietest spin you\'ve ever felt. No buzz, no rattle, pure glide.',
    features:['Hybrid ceramic-steel','Near-silent operation','4-min spin time','Finger groove buttons'] },

  { id:10, vid:47320867766403, cat:'spinner', name:'Double-Layer Spin Disc',        price:8.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S9db84612316e40d788280e3ba99bc50fP.jpg_480x480q75_5ebea618-d55b-42b2-b36f-fe557dc0af50.webp?v=1782024128',
    tag:'', tagType:'', sold:'4,800+', rating:4.6, link:'double+layer+spin+disc+fidget+toy',
    desc:'Two spinning plates layered on a single axle — counter-rotate them for an oddly satisfying visual effect.',
    features:['Counter-rotating layers','Textured grip edges','Compact disc form','Desktop spin trick ready'] },

  { id:11, vid:47320867799171, cat:'spinner', name:'Gold Plated Luxury Spinner',    price:23.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S0ada6c21725645ef991e30440db5986dY.jpg_480x480q75_5faeb3ea-a3ee-4f84-810f-d2c1e57bbb8a.webp?v=1782024128',
    tag:'LUXURY', tagType:'dark', sold:'1,800+', rating:4.8, link:'gold+plated+luxury+fidget+spinner+gift',
    desc:'24K gold-plated finish on a precision brass body. Comes in a velvet-lined box — the perfect gift.',
    features:['24K gold plating','Gift-ready velvet box','Brass weighted body','Slow-coast bearing'] },

  { id:12, vid:47320868159619, cat:'spinner', name:'Anti-Stress Wing Spinner',      price:4.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S45cfd2f4ab454136ae7d6accf21e8440L.jpg_480x480q75_75682d59-6e9a-45ed-aa40-86ff81389b74.webp?v=1782024128',
    tag:'VALUE', tagType:'', sold:'21,000+', rating:4.5, link:'anti+stress+wing+fidget+spinner+anxiety',
    desc:'Wide flat wings make it feel satisfying in the palm. Great for anxiety relief, stays stable on two fingers.',
    features:['Wide wing blade design','Palm-stable spin','Stress-relief grip','ABS + steel hybrid'] },

  { id:13, vid:47320868552835, cat:'spinner', name:'Magnetic Orbit Spinner',        price:9.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S260c31afc65d40668bd3d46090203895f.jpg_480x480q75_9d5ae82f-ce3b-4e42-bb38-6ea94985b6c4.webp?v=1782024128',
    tag:'NEW', tagType:'dark', sold:'3,400+', rating:4.7, link:'magnetic+orbit+fidget+spinner+EDC',
    desc:'Embedded N52 magnets in the blade tips create a subtle pull-push resistance — every spin feels alive.',
    features:['N52 embedded magnets','Resistance feedback','Anodised aluminium','Precision-balanced tips'] },

  { id:14, vid:47320869896323, cat:'spinner', name:'Dual-Axis Gyroscope Pro',       price:27.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Sb660cef100504912b5869d85d5ebc641M.jpg_480x480q75_d434b77b-cb74-4b99-8d43-1ee5bf0cfd76.webp?v=1782024128',
    tag:'PRO', tagType:'dark', sold:'1,200+', rating:4.9, link:'dual+axis+gyroscope+fidget+spinner+pro',
    desc:'Professional-grade dual-axis spinner — independent inner and outer rings for serious fidgeters and desk athletes.',
    features:['Dual independent axes','Aerospace aluminium','6-min+ spin time','Tilt-proof base stand'] },

  // ── CUBES ──────────────────────────────────────────────────────────────────

  { id:15, vid:47320873468035, cat:'cube', name:'6-Side Click Fidget Cube',         price:4.49,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Se1923bf32bb34d88a57d2f2da1f8caecl.jpg_480x480q75_669aa687-1c83-4192-a1d3-b73a7b403699.webp?v=1782024129',
    tag:'BESTSELLER', tagType:'hot', sold:'35,000+', rating:4.8, link:'6+side+click+fidget+cube+anxiety',
    desc:'Six different satisfying interactions — click, roll, flip, slide, breathe, spin. The original anxiety cube that started it all.',
    features:['6 unique actions','Silent click mode','Stress-relief designed','Compact pocket size'] },

  { id:16, vid:47320912625795, cat:'cube', name:'Infinity Fold Magic Cube',         price:6.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Sd5ce8cc5d6594f9dbbd895061712b598L.jpg_480x480q75_d1e23b1b-6f0c-48b9-9d38-d2b0f6f66f67.webp?v=1782024129',
    tag:'HOT', tagType:'hot', sold:'14,000+', rating:4.7, link:'infinity+fold+magic+cube+fidget',
    desc:'12-panel hinged cube that folds, flips and transforms endlessly. You can\'t put it down once you start.',
    features:['12-panel hinge design','Infinite fold patterns','Smooth pivot joints','Satisfying clack sound'] },

  { id:17, vid:47320925372547, cat:'cube', name:'Magnetic Puzzle Cube',             price:11.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Sacde0829fbe0484581d04cf0b6e64e8bO.jpg_480x480q75_27e2b284-b986-438f-bac1-c830927f9cc5.webp?v=1782024129',
    tag:'NEW', tagType:'dark', sold:'6,400+', rating:4.8, link:'magnetic+puzzle+cube+fidget+toy',
    desc:'Magnetised panels snap together cleanly and pull apart smoothly. Builds and rebuilds into dozens of shapes.',
    features:['N35 magnetic panels','Dozens of configurations','No loose pieces','STEM-friendly design'] },

  { id:18, vid:47320917999747, cat:'cube', name:'Gear Clicker Cube',                price:7.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Scc75eb6be32242ea966d50a00a3d6ca4p.jpg_480x480q75_2477dc46-1c34-4302-b25c-2cd104f876c0.webp?v=1782024130',
    tag:'SATISFYING', tagType:'', sold:'9,200+', rating:4.7, link:'gear+clicker+fidget+cube+stress',
    desc:'Miniature exposed gears that mesh satisfyingly on every side. Watch them turn while you decompress.',
    features:['Visible gear mechanism','Tactile click feedback','Zinc alloy body','Desktop display worthy'] },

  { id:19, vid:47320918032515, cat:'cube', name:'Mini Metal Anxiety Cube',          price:8.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Sfe89b885efe942dca22503e43e22c913A.jpg_480x480q75_2c5707bd-c779-40d9-8b1a-462bbaf1d4e0.webp?v=1782024130',
    tag:'', tagType:'', sold:'5,800+', rating:4.7, link:'mini+metal+anxiety+fidget+cube+EDC',
    desc:'All-metal construction makes this cube heavier and more satisfying than plastic competitors. Built to last years.',
    features:['Full metal body','Weight: 65g','Dual clicker faces','Pocket-carry friendly'] },

  { id:20, vid:47320925405315, cat:'cube', name:'Smooth Press Anti-Stress Cube',    price:4.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S234ba8154ecc46ed82f9e3ef84419af89.jpg_480x480q75_9b1283af-7251-4d47-ae4c-96e507f600b3.webp?v=1782024130',
    tag:'VALUE', tagType:'', sold:'22,000+', rating:4.6, link:'smooth+press+anti+stress+fidget+cube',
    desc:'Silicone face panels absorb finger pressure and bounce back. Quiet enough for offices, libraries and classrooms.',
    features:['Soft silicone faces','Near-silent use','6 distinct textures','Washable design'] },

  { id:21, vid:47320919670915, cat:'cube', name:'Rainbow Folding Flex Cube',        price:5.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Sfe89b885efe942dca22503e43e22c913A.jpg_480x480q75_07a980e6-9f79-4eff-8bfe-90115ff96fb4.webp?v=1782024133',
    tag:'HOT', tagType:'hot', sold:'11,000+', rating:4.6, link:'rainbow+folding+flex+fidget+cube',
    desc:'Colour-blocked panels fold into a rainbow of shapes. A visual fidget as much as a tactile one.',
    features:['6 vivid colours','200+ fold patterns','Smooth ABS pivots','ADHD / focus aid'] },

  { id:22, vid:47320920457347, cat:'cube', name:'Anti-Anxiety Spinner Cube',        price:6.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Se1923bf32bb34d88a57d2f2da1f8caecl.jpg_480x480q75_84f6d059-cc17-42a5-9356-8546d809d179.webp?v=1782024134',
    tag:'POPULAR', tagType:'', sold:'8,600+', rating:4.7, link:'anti+anxiety+spinner+fidget+cube',
    desc:'Every face has a mini spinner, roller or clicker built in. Six fidgets in one pocket-sized block.',
    features:['6 fidget mechanisms','Spinner on 2 faces','Quiet roller bearings','Therapy-grade design'] },

  { id:23, vid:47320921571459, cat:'cube', name:'Quiet Soft-Touch Cube',            price:3.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S234ba8154ecc46ed82f9e3ef84419af89.jpg_480x480q75_9608216a-45b7-450c-b901-588902b5c49e.webp?v=1782024134',
    tag:'VALUE', tagType:'', sold:'16,000+', rating:4.5, link:'quiet+soft+touch+fidget+cube+silent',
    desc:'Designed specifically for noise-sensitive settings. Matte rubber exterior muffles every click and press.',
    features:['Fully silent operation','Rubberised matte finish','Lightweight 40g','Great for meetings'] },

  { id:24, vid:47320925438083, cat:'cube', name:'Pro XL Desk Fidget Cube',          price:12.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Scc75eb6be32242ea966d50a00a3d6ca4p.jpg_480x480q75_5f18e0d3-762c-4920-ab76-f93144da18d4.webp?v=1782024134',
    tag:'', tagType:'', sold:'4,200+', rating:4.8, link:'pro+XL+desk+fidget+cube+premium',
    desc:'50% larger than standard cubes — built for serious desk users. Premium weighted metal core, satisfying resistance.',
    features:['XL 45mm size','Weighted metal core','6 precision actions','Non-slip base pad'] },

  // ── RINGS ──────────────────────────────────────────────────────────────────

  { id:25, vid:47320925470851, cat:'ring', name:'Magnetic Fidget Rings 5-Pack',     price:4.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S3e0493e500fd48e5bb95ab1c219761e3A.jpg_480x480q75_5cd7fc8d-7289-458c-af64-a4cbcb9e9444.webp?v=1782024135',
    tag:'BESTSELLER', tagType:'hot', sold:'28,000+', rating:4.8, link:'magnetic+fidget+rings+5+pack',
    desc:'Five smooth stainless rings with N52 magnetic tips. Twist, stack, orbit — endlessly satisfying for hands and fingers.',
    features:['5 rings included','N52 magnetic tips','316L stainless steel','Pouch included'] },

  { id:26, vid:47320925503619, cat:'ring', name:'Spinning Gyro Ring',               price:7.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Se3378ea0701e4572b9b89d72a7b78cfam.png_480x480_f5c86ce2-9d78-4278-bba0-290e23e14c94.webp?v=1782024135',
    tag:'', tagType:'', sold:'7,400+', rating:4.7, link:'spinning+gyro+ring+fidget',
    desc:'Outer ring free-spins around an inner band you wear on your finger. Spin it on your hand all day long.',
    features:['Wearable spinner ring','Free-rotating outer band','316L stainless','Smooth ball bearing'] },

  { id:27, vid:47320955158659, cat:'ring', name:'Warrior Knuckle Ring',             price:5.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S3e0493e500fd48e5bb95ab1c219761e3A.jpg_480x480q75_1f1ea359-264e-45c0-95bc-3048815aeee4.webp?v=1782024135',
    tag:'HOT', tagType:'hot', sold:'11,200+', rating:4.7, link:'warrior+knuckle+fidget+ring+metal',
    desc:'Chunky cast-metal ring with textured detailing. Heavy enough to feel premium, smooth enough for all-day wear.',
    features:['Cast metal construction','Wide 12mm band','Matte brushed finish','Sizes 6–12 available'] },

  { id:28, vid:47320955420803, cat:'ring', name:'Infinity Loop Band Ring',          price:3.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S91dd7cf2c2a04bd487a21df3160d7294j.jpg_480x480q75_e23356fe-dfa9-49f5-ae37-974dd6dd6964.webp?v=1782024135',
    tag:'VALUE', tagType:'', sold:'19,000+', rating:4.5, link:'infinity+loop+band+ring+fidget',
    desc:'Minimalist continuous loop design in surgical steel. Spin it, slide it, stack it — subtle fidget for every wrist.',
    features:['Surgical steel','Minimalist design','Stackable','Hypoallergenic'] },

  { id:29, vid:47320956043395, cat:'ring', name:'Tri-Spin Ring Set (3-Pack)',       price:5.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Se3378ea0701e4572b9b89d72a7b78cfam.png_480x480_50cc2b60-2608-4153-86b5-547ceddc50b4.webp?v=1782024136',
    tag:'', tagType:'', sold:'8,800+', rating:4.6, link:'tri+spin+ring+set+3+pack+fidget',
    desc:'Three interlocking rings that orbit each other when spun. Mesmerising in motion, clean at rest.',
    features:['3 interlocking rings','Independent spin axes','Polished silver finish','Gift bag included'] },

  { id:30, vid:47320956960899, cat:'ring', name:'EDC Roller Knuckle Ring',          price:8.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S3e0493e500fd48e5bb95ab1c219761e3A.jpg_480x480q75_1750fe11-6217-4a90-84cf-b85975ef5723.webp?v=1782024136',
    tag:'NEW', tagType:'dark', sold:'3,600+', rating:4.8, link:'EDC+roller+knuckle+ring+fidget',
    desc:'A tiny barrel roller built into the band — roll it with your thumb while it sits on your finger. True EDC.',
    features:['Integrated barrel roller','Titanium-coated steel','EDC carry-ready','Smooth roll action'] },

  { id:31, vid:47320956993667, cat:'ring', name:'Stainless Steel Spin Band',        price:6.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S9db84612316e40d788280e3ba99bc50fP.jpg_480x480q75_22042a8d-f602-4b9e-8508-10b8639b0f9d.webp?v=1782024136',
    tag:'', tagType:'', sold:'6,200+', rating:4.6, link:'stainless+steel+spin+band+ring+fidget',
    desc:'Dual-layer band — the outer sleeve free-spins silently around the inner base. Wearable all day, no one notices.',
    features:['Dual-layer wearable design','Silent spin','High-polish stainless','Unisex sizing'] },

  { id:32, vid:47320957026435, cat:'ring', name:'Magnetic Vortex Ring Set',         price:3.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Se3378ea0701e4572b9b89d72a7b78cfam.png_480x480_d57fda11-3b8c-44bd-a033-c802a2c9b3a7.webp?v=1782024136',
    tag:'VALUE', tagType:'', sold:'24,000+', rating:4.5, link:'magnetic+vortex+ring+set+fidget+cheap',
    desc:'Budget-friendly 3-ring magnetic set — great starter kit or stocking stuffer. Deceptively satisfying for the price.',
    features:['3 rings included','Smooth magnetic slide','Nickel-free plating','Portable carry tube'] },

  // ── SENSORY ────────────────────────────────────────────────────────────────

  { id:33, vid:47320957059203, cat:'sensory', name:'Jumbo Pop Bubble Pad',          price:2.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Se4269614c5bf46b68688eeeca560ae19s.jpg_480x480q75_f5e9f707-e251-4dc7-9c9f-efcc563d0e8f.webp?v=1782024137',
    tag:'VALUE', tagType:'', sold:'45,000+', rating:4.7, link:'jumbo+pop+bubble+pad+fidget+sensory',
    desc:'Large silicone bubble pad — satisfying pop on every press, resets for infinite re-popping. Quiet and addictive.',
    features:['100 bubbles per side','Resets after popping','Food-grade silicone','Wipe-clean surface'] },

  { id:34, vid:47320957091971, cat:'sensory', name:'Squeeze Stress Relief Ball',    price:2.49,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S9b024af7f0ea439d8a38c00ae20d8f82U.jpg_480x480q75_04ab9eaa-7f5c-4a99-9f75-0c055f5e4abc.webp?v=1782024137',
    tag:'BESTSELLER', tagType:'hot', sold:'62,000+', rating:4.8, link:'squeeze+stress+relief+ball+fidget',
    desc:'The OG stress reliever. Slow-rebound foam core inside a stretchy mesh skin — squeeze it, watch it ooze through the gaps.',
    features:['Slow-rebound foam','Stretchy mesh skin','Hand-strengthening','Washable cover'] },

  { id:35, vid:47320957419651, cat:'sensory', name:'Mesh Marble Fidget Ball',       price:1.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S4a9492c88ba44751a8f20262c57736ddg.jpg_480x480q75_4b52954a-4713-4390-a12a-f3bed4c36935.webp?v=1782024137',
    tag:'VALUE', tagType:'', sold:'38,000+', rating:4.6, link:'mesh+marble+fidget+ball+sensory',
    desc:'Push the marble through the stretchy mesh in any direction. One of the most satisfying textures in the lineup.',
    features:['Stretch mesh exterior','Marble core','Tactile + visual','Pocket size'] },

  { id:36, vid:47320957452419, cat:'sensory', name:'Stretchy Squishy Worm',         price:3.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S145f29aacc0f4970b7084e25d7b2d41dk.jpg_480x480q75_aeacf810-bfba-49ad-8b03-c7245f1b1e59.webp?v=1782024138',
    tag:'', tagType:'', sold:'14,000+', rating:4.5, link:'stretchy+squishy+worm+fidget+sensory+toy',
    desc:'Ultra-stretchy silicone worm — pull it, twist it, knot it. Great sensory input for ADHD and anxiety.',
    features:['300% stretch silicone','Twist-proof cord','Tactile ridged texture','Soft safe material'] },

  { id:37, vid:47320957649027, cat:'sensory', name:'Silicone Sensory Fidget Pad',   price:3.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Sa696b0686ff3461d933238f738eb6aa1U.jpg_480x480q75_753d52e0-d24c-432b-99eb-2b885b631764.webp?v=1782024138',
    tag:'HOT', tagType:'hot', sold:'9,200+', rating:4.7, link:'silicone+sensory+fidget+pad+ADHD',
    desc:'12 different sensory zones in one pad — bumps, ridges, switches and spinners. A fidget board in your palm.',
    features:['12 sensory zones','Compact palm size','BPA-free silicone','Designed for ADHD'] },

  { id:38, vid:47320959713411, cat:'sensory', name:'Pinch-Pop Sensory Strip',       price:2.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Sfe0b23ccf98f4f9fad9f896aa56cbb02w.jpg_480x480q75_32a09be8-617e-45db-a1b4-ca215d74de42.webp?v=1782024138',
    tag:'', tagType:'', sold:'11,600+', rating:4.6, link:'pinch+pop+sensory+strip+fidget',
    desc:'A strip of bubble chambers you pinch one at a time. Quieter than standard pop-its, more deliberate, deeply satisfying.',
    features:['Sequential pop design','Near-silent use','Flexible silicone','Clips to bag or belt'] },

  { id:39, vid:47320962039939, cat:'sensory', name:'Thumb Smooth Worry Stone',      price:2.49,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S145f29aacc0f4970b7084e25d7b2d41dk.jpg_480x480q75_6b758d2f-3488-49a3-b977-54fb6ec72a6c.webp?v=1782024138',
    tag:'VALUE', tagType:'', sold:'29,000+', rating:4.6, link:'thumb+smooth+worry+stone+anxiety+relief',
    desc:'Polished natural gemstone with a thumb-shaped groove. Ancient anxiety relief — rub it and breathe. Works every time.',
    features:['Natural gemstone','Thumb-contoured groove','Grounding practice aid','Carry pouch included'] },

  { id:40, vid:47320962990211, cat:'sensory', name:'Kinetic Sand Zen Desk Set',     price:7.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Sc058c1fd576e4338928478c21bb01183b.jpg_480x480q75_4d8bdb59-7955-40bb-b1e6-e09825f838f3.webp?v=1782024139',
    tag:'HOT', tagType:'hot', sold:'7,800+', rating:4.8, link:'kinetic+sand+zen+desk+set+fidget',
    desc:'500g of kinetic sand in a lidded tray with a mini rake and roller. Build, flatten, zen out. Zero mess.',
    features:['500g kinetic sand','Mini zen tools included','Sealed tray no mess','Blue or beige options'] },

  { id:41, vid:47320963317891, cat:'sensory', name:'Liquid Motion Bubbler Timer',   price:8.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Sa696b0686ff3461d933238f738eb6aa1U.jpg_480x480q75_24e84aaa-36e8-4333-8c98-f4dfff48e62e.webp?v=1782024138',
    tag:'CALMING', tagType:'', sold:'5,400+', rating:4.7, link:'liquid+motion+bubbler+timer+sensory',
    desc:'Coloured oil and water cascade through chambers in a hypnotic waterfall loop. Watch the stress dissolve with it.',
    features:['Dual-layer cascade','Mesmerising slow-flow','Desk or handheld use','Replaceable liquid'] },

  { id:42, vid:47320963350659, cat:'sensory', name:'Pop-It Keychain Clip',          price:1.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Se4269614c5bf46b68688eeeca560ae19s.jpg_480x480q75_44d8f4a8-a636-4923-852e-972750937d12.webp?v=1782024149',
    tag:'VALUE', tagType:'', sold:'55,000+', rating:4.6, link:'pop+it+keychain+clip+fidget+mini',
    desc:'Miniature pop-it on a carabiner clip — attach it to your bag, keys or belt loop and pop it anywhere.',
    features:['Carabiner clip','15 bubbles per side','Reusable silicone','20+ colour options'] },

  { id:43, vid:47320963383427, cat:'sensory', name:'Stretchy Rainbow Noodle Pack',  price:2.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S4a9492c88ba44751a8f20262c57736ddg.jpg_480x480q75_1b4a15dc-cf1a-40d5-941a-0e2498049cab.webp?v=1782024149',
    tag:'', tagType:'', sold:'18,000+', rating:4.5, link:'stretchy+rainbow+noodle+fidget+sensory',
    desc:'Pack of 5 stretchy silicone noodles in vivid colours. Pull, twist, weave — great for fine-motor fidgeting.',
    features:['5 noodles per pack','Ultra-stretch silicone','Safe non-toxic','Ages 4 and up'] },

  { id:44, vid:47320963416195, cat:'sensory', name:'Giant Pop-It Rainbow Board',    price:4.49,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Sfe0b23ccf98f4f9fad9f896aa56cbb02w.jpg_480x480q75_00b67368-b149-44e3-97ed-eb7cd1b5b5f5.webp?v=1782024149',
    tag:'HOT', tagType:'hot', sold:'21,000+', rating:4.7, link:'giant+pop+it+rainbow+board+fidget',
    desc:'A3-size rainbow pop-it board — 200+ bubbles of pure satisfaction. Great shared fidget for desks and classrooms.',
    features:['200+ bubbles','A3 board size','Rainbow colour layout','Thick food-grade silicone'] },

  // ── EDC ────────────────────────────────────────────────────────────────────

  { id:45, vid:47320963448963, cat:'edc', name:'Click Pen Satisfying Fidget',       price:6.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Se3378ea0701e4572b9b89d72a7b78cfam.png_480x480_00326956-195a-4c1f-9e2a-a7e1a3f9a263.webp?v=1782024150',
    tag:'HOT', tagType:'hot', sold:'13,200+', rating:4.7, link:'click+pen+satisfying+fidget+EDC',
    desc:'A ballpoint pen with an ultra-satisfying tri-click mechanism. Actually writes — and clicking it might be better.',
    features:['Tri-stage click action','Working ballpoint pen','Brushed aluminium body','Click force adjustable'] },

  { id:46, vid:47320963481731, cat:'edc', name:'Slider Fidget Bar Pro',             price:10.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S3245a0597c3942a892c05e7996a9123fW.jpg_480x480q75_c4dad7a9-6d51-4917-b7fa-2e2a9e144748.webp?v=1782024150',
    tag:'NEW', tagType:'dark', sold:'4,600+', rating:4.8, link:'slider+fidget+bar+pro+EDC+metal',
    desc:'A satisfying linear slider on a stainless bar. Single thumb operation — slide it, magnetic end-stop snaps it back.',
    features:['Linear slider mechanism','Magnetic end-stop snap','316L stainless steel','EDC pocket clip'] },

  { id:47, vid:47320963514499, cat:'edc', name:'Dual-Button EDC Clicker',           price:13.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Sd5ce8cc5d6594f9dbbd895061712b598L.jpg_480x480q75_a51f7c3c-1037-4540-891a-d209a7abfa93.webp?v=1782024150',
    tag:'PREMIUM', tagType:'dark', sold:'2,800+', rating:4.8, link:'dual+button+EDC+clicker+fidget+metal',
    desc:'Two independent click buttons on a machined aluminium body. Left thumb, right thumb — find your rhythm.',
    features:['Dual independent buttons','CNC aluminium body','Adjustable click tension','Titanium finish option'] },

  { id:48, vid:47320963547267, cat:'edc', name:'Spinning Flip Coin',                price:4.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S3e0493e500fd48e5bb95ab1c219761e3A.jpg_480x480q75_9621e6eb-4a38-4068-942b-f08a4c1f08c1.webp?v=1782024150',
    tag:'', tagType:'', sold:'16,400+', rating:4.6, link:'spinning+flip+coin+fidget+EDC+trick',
    desc:'Weighted coin designed for rolling across knuckles, spinning on a finger, and flipping tricks. Master it fast.',
    features:['28mm weighted coin','Knuckle-roll ready','Polished steel edge','Trick guide included'] },

  { id:49, vid:47320963580035, cat:'edc', name:'Worry Stone Thumb Press',           price:3.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S145f29aacc0f4970b7084e25d7b2d41dk.jpg_480x480q75_2a63830b-2efa-4a2e-9fc3-1af9a5d2aa71.webp?v=1782024150',
    tag:'VALUE', tagType:'', sold:'22,000+', rating:4.6, link:'worry+stone+thumb+press+anxiety+EDC',
    desc:'Smooth agate worry stone, sized for your thumb. Grounding, calming, always in your pocket.',
    features:['Natural agate stone','Thumb-contoured hollow','Polished smooth surface','Pouch included'] },

  { id:50, vid:47320963612803, cat:'edc', name:"Desktop Newton's Cradle",           price:9.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Sacde0829fbe0484581d04cf0b6e64e8bO.jpg_480x480q75_46a73298-5525-4526-8c62-3bf8eb7b3d78.webp?v=1782024151',
    tag:'CLASSIC', tagType:'', sold:'8,200+', rating:4.7, link:'desktop+newtons+cradle+fidget+desk+toy',
    desc:'Five steel ball bearings on a chrome frame. Click-clack your way through meetings, calls and creative blocks.',
    features:['5 polished steel balls','Chrome frame stand','Adjustable string tension','Compact 14cm size'] },

  { id:51, vid:47320963645571, cat:'edc', name:'Magnetic Orbit Desktop Toy',        price:15.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Se3378ea0701e4572b9b89d72a7b78cfam.png_480x480_f0f9f653-fc72-4c92-b3bf-e0599fb56048.webp?v=1782024151',
    tag:'NEW', tagType:'dark', sold:'2,400+', rating:4.8, link:'magnetic+orbit+desktop+fidget+toy',
    desc:'A chrome orb that levitates and orbits a central magnet ring. Meditative to watch, impossible to ignore.',
    features:['Magnetic levitation orbit','Chrome steel orb','Adjustable field ring','Silent operation'] },

  { id:52, vid:47320963678339, cat:'edc', name:'Gyroscope Hand Toy Pro',            price:11.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S3245a0597c3942a892c05e7996a9123fW.jpg_480x480q75_d34fa605-4915-497a-8177-bc70988ce355.webp?v=1782024151',
    tag:'', tagType:'', sold:'5,200+', rating:4.7, link:'gyroscope+hand+toy+pro+fidget',
    desc:'A gyroscope that powers up with a pull cord and resists every tilt. Wrist-strengthening, mind-bending.',
    features:['Self-powered gyroscope','Wrist + grip training','Transparent case','LED model available'] },

  { id:53, vid:47320963711107, cat:'edc', name:'Flip Gear Anti-Stress Toy',         price:7.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Sd5ce8cc5d6594f9dbbd895061712b598L.jpg_480x480q75_0f419293-990c-40b3-beb8-5a9f292d7646.webp?v=1782024151',
    tag:'', tagType:'', sold:'6,800+', rating:4.6, link:'flip+gear+anti+stress+fidget+toy+EDC',
    desc:'Two toothed gears that mesh and flip around a central axis. Fidget with both hands simultaneously for max focus.',
    features:['Meshing dual gears','Two-hand engagement','Compact folded size','Durable ABS + steel'] },

  { id:54, vid:47320964038787, cat:'edc', name:'Titanium Bead Chain Fidget',        price:21.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S3e0493e500fd48e5bb95ab1c219761e3A.jpg_480x480q75_82f47583-3435-4dc0-95eb-1c808667735e.webp?v=1782024152',
    tag:'PREMIUM', tagType:'dark', sold:'1,600+', rating:4.9, link:'titanium+bead+chain+fidget+EDC+premium',
    desc:'Grade-5 titanium beads on a ball chain — flick, roll, rattle. Compact EDC that never leaves your pocket.',
    features:['Grade-5 titanium beads','Ball chain design','100g satisfying weight','Lifetime durability'] },

  // ── BUNDLES ────────────────────────────────────────────────────────────────

  { id:55, vid:47320964694147, cat:'bundle', name:'Spinner Starter Kit (3-Pack)',   price:15.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Sf005676a6b5e4a5e801587c99ad3c0cal.jpg_480x480q75_44572573-2073-4ccd-97f5-95a921b8fd6c.webp?v=1782024152',
    tag:'DEAL', tagType:'', sold:'6,200+', rating:4.8, link:'fidget+spinner+starter+kit+3+pack',
    desc:'Three of our most popular spinners — metal tri-blade, carbon fiber, and mini pocket — in one discounted kit.',
    features:['3 spinners included','Metal + carbon + mini','Save vs buying separate','Gift-ready packaging'] },

  { id:56, vid:47320964726915, cat:'bundle', name:'Sensory Relief Bundle (8-Piece)', price:19.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Se4269614c5bf46b68688eeeca560ae19s.jpg_480x480q75_219c7ee9-da06-4bc3-8c8d-dcb292a960f0.webp?v=1782024152',
    tag:'HOT', tagType:'hot', sold:'4,800+', rating:4.8, link:'sensory+relief+bundle+8+piece+fidget',
    desc:'8 different sensory toys — stress ball, pop-it, mesh marble, worry stone and more. Great for ADHD/anxiety toolkits.',
    features:['8 unique fidgets','Covers tactile, visual, audio','Reusable carry bag','Therapist recommended'] },

  { id:57, vid:47320965054595, cat:'bundle', name:'Cube & Ring Combo Pack',         price:13.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S5609d9dffe7843b4a366c7261c3efe26s.jpg_480x480q75_b3b90c3e-1dca-4f11-ae3a-7e280c74b8b0.webp?v=1782024153',
    tag:'', tagType:'', sold:'5,400+', rating:4.7, link:'cube+ring+combo+pack+fidget',
    desc:'Best-selling 6-side fidget cube + magnetic rings 5-pack. Two completely different fidget experiences in one bundle.',
    features:['Fidget cube + 5 rings','Two distinct sensations','Reusable zip bag','Great starter combo'] },

  { id:58, vid:47320965120131, cat:'bundle', name:'EDC Pocket Fidget Kit',          price:23.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Se3378ea0701e4572b9b89d72a7b78cfam.png_480x480_8bd5a3d2-3cd6-4cc1-9963-901e8056d839.webp?v=1782024153',
    tag:'PREMIUM', tagType:'dark', sold:'2,200+', rating:4.8, link:'EDC+pocket+fidget+kit+premium',
    desc:'Four premium EDC fidgets — click pen, slider bar, flip coin and worry stone — all in a compact leather roll.',
    features:['4 EDC fidgets','Leather carry roll','Ready to gift','Compact daily rotation'] },

  { id:59, vid:47320965513347, cat:'bundle', name:'Ultimate Stress Kit (12-Piece)', price:35.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S5609d9dffe7843b4a366c7261c3efe26s.jpg_480x480q75_380e1df5-7f02-4b37-833a-41a6fcca53a0.webp?v=1782024153',
    tag:'MEGA DEAL', tagType:'', sold:'3,600+', rating:4.9, link:'ultimate+stress+relief+kit+12+piece',
    desc:'12 of our best sellers across every category. Spinners, cubes, rings, sensory and EDC — the complete collection.',
    features:['12 premium fidgets','All 5 categories','Full-size carry case','Best value in the store'] },

  { id:60, vid:47320965677187, cat:'bundle', name:'Kids Sensory Pack (6-Piece)',    price:11.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Se4269614c5bf46b68688eeeca560ae19s.jpg_480x480q75_ef3ca353-5258-4df7-8e35-c914fe324e93.webp?v=1782024153',
    tag:'KIDS', tagType:'', sold:'7,400+', rating:4.7, link:'kids+sensory+fidget+pack+6+piece',
    desc:'6 child-safe, BPA-free sensory toys designed for classroom, therapy and home. Supports focus and self-regulation.',
    features:['BPA-free certified','Ages 4+','6 sensory types','Mesh storage bag'] },

  { id:61, vid:47320965709955, cat:'bundle', name:'Anti-Anxiety Mega Bundle (15-Piece)', price:43.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Sf005676a6b5e4a5e801587c99ad3c0cal.jpg_480x480q75_0624b930-e718-4e6f-9d3b-ccd72030e730.webp?v=1782024154',
    tag:'BESTSELLER', tagType:'hot', sold:'2,800+', rating:4.9, link:'anti+anxiety+mega+bundle+15+piece+fidget',
    desc:'The ultimate stress-relief toolkit. 15 fidgets spanning every modality — tactile, visual, motion and grounding.',
    features:['15 fidgets included','Therapist-curated','All categories covered','Premium hard-shell case'] },

  // ── TRENDING NEW DROPS ─────────────────────────────────────────────────────

  { id:62, vid:47321913819267, cat:'sensory', name:'Articulated Fidget Dragon',     price:9.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S4a9492c88ba44751a8f20262c57736ddg.jpg_480x480q75.webp?v=1782000276',
    tag:'VIRAL', tagType:'hot', sold:'New', rating:4.9, link:'articulated+fidget+dragon+3D+printed',
    desc:'3D-printed articulated dragon with individually moving scales and joints — bend it, pose it, fidget with every segment.',
    features:['Fully articulated joints','24 individual segments','Satisfying clicking motion','10+ colour options'] },

  { id:63, vid:47321913852035, cat:'sensory', name:'Magnetic Thinking Putty',       price:7.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S5d37dda50ff349ea8bcf8909acd15dc2m.jpg_480x480q75.webp?v=1782000356',
    tag:'TRENDING', tagType:'hot', sold:'New', rating:4.8, link:'magnetic+thinking+putty+stress+fidget',
    desc:'Magnetic putty that stretches, tears, moulds and dramatically swallows metal objects when you place a magnet nearby.',
    features:['Reacts to magnets','Stretch, snap, mould','Includes neodymium magnet','Non-toxic reusable tin'] },

  { id:64, vid:47321914048643, cat:'sensory', name:'Pop Tube Fidget Toy',           price:3.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Se4269614c5bf46b68688eeeca560ae19s.jpg_480x480q75.webp?v=1782000408',
    tag:'VALUE', tagType:'', sold:'New', rating:4.7, link:'pop+tube+fidget+toy+sensory+kids',
    desc:'Flexible plastic tubes that pop and click as you push, pull and bend them. Connect multiple for new shapes.',
    features:['Satisfying pop-click sound','Connect multiple tubes','Flexible durable plastic','Pocket size, 8 colours'] },

  { id:65, vid:47321914802307, cat:'sensory', name:'Spiky Sensory Puffer Ball',     price:2.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S9b024af7f0ea439d8a38c00ae20d8f82U.jpg_480x480q75.webp?v=1782000265',
    tag:'VALUE', tagType:'', sold:'New', rating:4.7, link:'spiky+sensory+puffer+stress+ball+therapy',
    desc:'Spiked rubber ball that provides deep tactile pressure input — squeeze, roll on your palms, use for grounding.',
    features:['Deep pressure tactile input','Soft flexible spikes','Stress + anxiety relief','OT and therapy approved'] },

  { id:66, vid:47321914835075, cat:'edc', name:'Haptic Brass Click Coin',           price:11.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S3e0493e500fd48e5bb95ab1c219761e3A.jpg_480x480q75.webp?v=1782000316',
    tag:'TRENDING', tagType:'hot', sold:'New', rating:4.9, link:'haptic+brass+click+coin+EDC+fidget',
    desc:'Machined brass coin with a precision haptic click mechanism — spin it, click it, flip it. Most satisfying EDC object.',
    features:['Brass machined body','Crisp haptic click','Knuckle-roll ready','38mm diameter'] },

  { id:67, vid:47321914867843, cat:'sensory', name:'Electronic Speed Pop-It Game',  price:9.49,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Sa45cceb6a8c04613aeaf821e80c921521.jpg_480x480q75.webp?v=1782000412',
    tag:'HOT', tagType:'hot', sold:'New', rating:4.8, link:'electronic+speed+pop+it+game+LED+fidget',
    desc:'LED-lit electronic pop-it with 999 speed levels — the game lights up bubbles you must pop before the timer runs out.',
    features:['999 difficulty levels','LED light indicators','Speed training gameplay','2-player battle mode'] },

  { id:68, vid:47321914933379, cat:'sensory', name:'Mochi Animal Squishies (5-Pack)', price:5.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Se0a355ca172f4696be78a9a0474eb1e3d.jpg_480x480q75.webp?v=1782000269',
    tag:'TRENDING', tagType:'hot', sold:'New', rating:4.7, link:'mochi+animal+squishies+5+pack+stress',
    desc:'5 adorable slow-rising mochi animal squishies — cats, pandas, ducks, bears and more.',
    features:['5 random animal designs','Slow-rise PU foam','Stress + sensory relief','30+ collectible animals'] },

  { id:69, vid:47321914966147, cat:'edc', name:'Hourglass Sand Timer Desk Toy',    price:6.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Sacde0829fbe0484581d04cf0b6e64e8bO.jpg_480x480q75.webp?v=1782000328',
    tag:'CALMING', tagType:'', sold:'New', rating:4.7, link:'hourglass+sand+timer+desk+toy+fidget',
    desc:'Premium liquid sand hourglass with slow-flowing coloured sand — flip it, watch it, reset your mind.',
    features:['3-min flow time','Coloured liquid sand','Acrylic + metal frame','Focus and calm tool'] },


  // ── BUDGET SPINNERS ────────────────────────────────────────────────────────

  { id:70, vid:47327106760835, cat:'spinner', name:'Classic Tri-Blade Starter Spinner', price:1.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S21eff922c13f4222a75da04f63b96ff88.jpg_480x480q75_f73ba83e-4f90-4c04-9c80-ec80aab6cb21.webp?v=1782024126',
    tag:'$1.99', tagType:'hot', sold:'New', rating:4.5, link:'basic+plastic+tri+blade+fidget+spinner+cheap',
    desc:'The no-frills spinner that started it all. Basic plastic tri-blade with a smooth bearing — ideal first fidget or bulk gift.',
    features:['Classic tri-blade design','Smooth steel bearing','Lightweight plastic body','Perfect starter spinner'] },

  { id:71, vid:47327107645571, cat:'spinner', name:'Mini Rainbow Budget Spinner',     price:2.49,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S24af9d0e5bab4c7892b746e9ea0a3fd5t.jpg_480x480q75_6a8940e8-b986-4455-b7d6-0a17907f2fa3.webp?v=1782024126',
    tag:'$2.49', tagType:'hot', sold:'New', rating:4.5, link:'mini+rainbow+budget+fidget+spinner',
    desc:'Tiny rainbow-coated spinner with a satisfying flip. A fun impulse buy that actually spins well for the price.',
    features:['Rainbow chrome finish','Compact pocket size','Smooth bearing','Great party favour or gift'] },

  { id:72, vid:47327107711107, cat:'spinner', name:'Glow Starter Spinner',            price:2.49,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S9db84612316e40d788280e3ba99bc50fP.jpg_480x480q75_5ebea618-d55b-42b2-b36f-fe557dc0af50.webp?v=1782024128',
    tag:'$2.49', tagType:'hot', sold:'New', rating:4.5, link:'glow+dark+budget+fidget+spinner+cheap',
    desc:'Budget glow-in-the-dark spinner — charge it up under any light and it glows. Wildly satisfying for the price.',
    features:['Glow-in-dark phosphor body','Basic ceramic bearing','Great for kids','No batteries needed'] },

  { id:73, vid:47327107743875, cat:'spinner', name:'Value Metal Spinner',             price:2.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S260c31afc65d40668bd3d46090203895f.jpg_480x480q75_42cee9e5-dec1-4ca3-b426-244bd51b10a3.webp?v=1782024125',
    tag:'VALUE', tagType:'', sold:'New', rating:4.6, link:'cheap+metal+fidget+spinner+value',
    desc:'Solid metal body, proper bearing, unbeatable price. The best value metal spinner in the catalog.',
    features:['Metal alloy body','R188 steel bearing','Better than plastic','Great daily carry'] },

  { id:74, vid:47327108169859, cat:'bundle', name:'Budget Spinner 5-Pack',            price:4.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/Sf005676a6b5e4a5e801587c99ad3c0cal.jpg_480x480q75_44572573-2073-4ccd-97f5-95a921b8fd6c.webp?v=1782024152',
    tag:'DEAL', tagType:'', sold:'New', rating:4.6, link:'budget+spinner+5+pack+bulk+cheap',
    desc:'Five basic spinners in mixed colours for the price of one mid-range. Perfect for classrooms, party bags, or stocking up.',
    features:['5 spinners included','Mixed colours','Smooth steel bearings','Bulk value pricing'] },

  { id:75, vid:47327108432003, cat:'spinner', name:'Custom Logo Fidget Spinner',      price:24.99,
    img:'https://cdn.shopify.com/s/files/1/0728/2684/7363/files/S47d27b844d714f77b6397d4a396ad47dg.jpg_480x480q75_ad80f9a4-47ce-42de-97be-f7751c9c70ac.webp?v=1782024127',
    tag:'CUSTOM', tagType:'dark', sold:'New', rating:4.9, link:'custom+logo+fidget+spinner+engraved+branded',
    desc:'Your brand laser-engraved or full-colour printed on a premium metal spinner. Perfect for corporate gifts, events and merch.',
    features:['Upload PDF, SVG, PNG, AI, EPS','Laser engraved or colour print','Min. 10 units','Ships in 15–20 days'] },

];
