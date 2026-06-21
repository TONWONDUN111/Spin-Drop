const CDN = 'https://ae-pic-a1.aliexpress-media.com/kf/';
const CART_KEY = 'spindrop-cart';
const SHOP_DOMAIN = 'https://spindrop.shop';

// Prices = AliExpress supplier cost × 2.75, rounded to .99 / .49

const PRODUCTS = [

  // ── SPINNERS ──────────────────────────────────────────────────────────────

  { id:0,  vid:47320853545091, cat:'spinner', name:'Tri-Blade Metal Spinner',       price:9.99,  img:'', tag:'BESTSELLER', tagType:'hot',  sold:'25,000+', rating:4.8, link:'tri+blade+metal+fidget+spinner',
    desc:'The original. Smooth ceramic bearing, precision-balanced tri-blade that spins 3+ minutes on a single flick. Zero wobble, pure satisfaction.',
    features:['R188 ceramic bearing','3-min+ spin time','Precision balanced','Brushed metal finish'] },

  { id:1,  vid:47320854200451, cat:'spinner', name:'Carbon Fiber Pro Spinner',      price:19.99, img:'', tag:'NEW', tagType:'dark', sold:'8,000+', rating:4.9, link:'carbon+fiber+fidget+spinner+professional',
    desc:'Aerospace-grade carbon fiber — 28g featherlight but rock-solid. Flagship-quality feel for under $20.',
    features:['Aerospace carbon fiber','28g ultralight','R188 steel bearing','Matte black finish'] },

  { id:2,  vid:47320866357379, cat:'spinner', name:'LED Rainbow Glow Spinner',      price:10.99, img:'', tag:'HOT', tagType:'hot', sold:'15,000+', rating:4.7, link:'LED+rainbow+light+fidget+spinner+glow',
    desc:'RGB LEDs light up the blades in a hypnotic rainbow trail when spinning. Day or night, this one turns heads.',
    features:['7-colour RGB LEDs','Rechargeable via USB','Long spin time','Light show mode'] },

  { id:3,  vid:47320866390147, cat:'spinner', name:'Glow-in-the-Dark Phantom',      price:8.99,  img:'', tag:'POPULAR', tagType:'', sold:'12,000+', rating:4.6, link:'glow+dark+fidget+spinner+phantom',
    desc:'Charge it under any light source, then watch it glow bright green in the dark. Quiet, smooth, eerie.',
    features:['Glow phosphor body','Silent ceramic bearing','Compact tri-blade','No batteries needed'] },

  { id:4,  vid:47320866422915, cat:'spinner', name:'Titanium EDC Precision Spinner', price:44.99, img:'', tag:'PREMIUM', tagType:'dark', sold:'3,200+', rating:4.9, link:'titanium+EDC+precision+fidget+spinner',
    desc:'CNC-machined Grade-5 titanium. The kind of spinner that gets passed down. Unmatched spin time and feel.',
    features:['Grade-5 titanium','5-min+ spin time','Concave buttons','Comes in gift box'] },

  { id:5,  vid:47320867307651, cat:'spinner', name:'Copper Galaxy Spinner',         price:29.99, img:'', tag:'LIMITED', tagType:'dark', sold:'2,100+', rating:4.8, link:'copper+galaxy+fidget+spinner+EDC',
    desc:'Solid copper body that develops a natural patina over time — every spinner becomes uniquely yours.',
    features:['Solid copper build','Develops unique patina','Hybrid bearing','Weighted for long spin'] },

  { id:6,  vid:47320867340419, cat:'spinner', name:'Mini Stealth Pocket Spinner',   price:6.99,  img:'', tag:'VALUE', tagType:'',   sold:'18,000+', rating:4.5, link:'mini+pocket+fidget+spinner+compact',
    desc:'Fits flat in any pocket. Ultra-compact design, quiet bearing — the one you carry every day without thinking about it.',
    features:['Pocket-flat profile','Silent bearing','Lightweight alloy','Single-button click start'] },

  { id:7,  vid:47320867373187, cat:'spinner', name:'Skull Chrome Spinner',          price:9.99,  img:'', tag:'TRENDING', tagType:'hot', sold:'9,400+', rating:4.7, link:'skull+chrome+fidget+spinner+metal',
    desc:'Death-metal aesthetics meet butter-smooth spins. Chrome-plated skull design that looks as good as it feels.',
    features:['Chrome plated finish','Skull blade design','Steel bearing','Satisfying weight'] },

  { id:8,  vid:47320867405955, cat:'spinner', name:'Stainless Gyro Ball Spinner',   price:16.99, img:'', tag:'', tagType:'', sold:'5,600+', rating:4.7, link:'stainless+steel+gyro+ball+fidget+spinner',
    desc:'Dual-ring gyroscope design — the inner ring spins independently in every direction for a mesmerising 3D effect.',
    features:['3D gyroscope motion','316 stainless steel','Silent dual bearing','Desktop display base'] },

  { id:9,  vid:47320867438723, cat:'spinner', name:'Ceramic Hybrid Precision',      price:14.99, img:'', tag:'SMOOTH', tagType:'', sold:'7,200+', rating:4.8, link:'ceramic+hybrid+bearing+fidget+spinner',
    desc:'Hybrid ceramic-steel bearing delivers the smoothest, quietest spin you\'ve ever felt. No buzz, no rattle, pure glide.',
    features:['Hybrid ceramic-steel','Near-silent operation','4-min spin time','Finger groove buttons'] },

  { id:10, vid:47320867766403, cat:'spinner', name:'Double-Layer Spin Disc',        price:12.99, img:'', tag:'', tagType:'', sold:'4,800+', rating:4.6, link:'double+layer+spin+disc+fidget+toy',
    desc:'Two spinning plates layered on a single axle — counter-rotate them for an oddly satisfying visual effect.',
    features:['Counter-rotating layers','Textured grip edges','Compact disc form','Desktop spin trick ready'] },

  { id:11, vid:47320867799171, cat:'spinner', name:'Gold Plated Luxury Spinner',    price:32.99, img:'', tag:'LUXURY', tagType:'dark', sold:'1,800+', rating:4.8, link:'gold+plated+luxury+fidget+spinner+gift',
    desc:'24K gold-plated finish on a precision brass body. Comes in a velvet-lined box — the perfect gift.',
    features:['24K gold plating','Gift-ready velvet box','Brass weighted body','Slow-coast bearing'] },

  { id:12, vid:47320868159619, cat:'spinner', name:'Anti-Stress Wing Spinner',      price:6.99,  img:'', tag:'VALUE', tagType:'', sold:'21,000+', rating:4.5, link:'anti+stress+wing+fidget+spinner+anxiety',
    desc:'Wide flat wings make it feel satisfying in the palm. Great for anxiety relief, stays stable on two fingers.',
    features:['Wide wing blade design','Palm-stable spin','Stress-relief grip','ABS + steel hybrid'] },

  { id:13, vid:47320868552835, cat:'spinner', name:'Magnetic Orbit Spinner',        price:13.99, img:'', tag:'NEW', tagType:'dark', sold:'3,400+', rating:4.7, link:'magnetic+orbit+fidget+spinner+EDC',
    desc:'Embedded N52 magnets in the blade tips create a subtle pull-push resistance — every spin feels alive.',
    features:['N52 embedded magnets','Resistance feedback','Anodised aluminium','Precision-balanced tips'] },

  { id:14, vid:47320869896323, cat:'spinner', name:'Dual-Axis Gyroscope Pro',       price:38.99, img:'', tag:'PRO', tagType:'dark', sold:'1,200+', rating:4.9, link:'dual+axis+gyroscope+fidget+spinner+pro',
    desc:'Professional-grade dual-axis spinner — independent inner and outer rings for serious fidgeters and desk athletes.',
    features:['Dual independent axes','Aerospace aluminium','6-min+ spin time','Tilt-proof base stand'] },

  // ── CUBES ──────────────────────────────────────────────────────────────────

  { id:15, vid:47320873468035, cat:'cube', name:'6-Side Click Fidget Cube',         price:5.99,  img:'', tag:'BESTSELLER', tagType:'hot', sold:'35,000+', rating:4.8, link:'6+side+click+fidget+cube+anxiety',
    desc:'Six different satisfying interactions — click, roll, flip, slide, breathe, spin. The original anxiety cube that started it all.',
    features:['6 unique actions','Silent click mode','Stress-relief designed','Compact pocket size'] },

  { id:16, vid:47320912625795, cat:'cube', name:'Infinity Fold Magic Cube',         price:9.99,  img:'', tag:'HOT', tagType:'hot', sold:'14,000+', rating:4.7, link:'infinity+fold+magic+cube+fidget',
    desc:'12-panel hinged cube that folds, flips and transforms endlessly. You can\'t put it down once you start.',
    features:['12-panel hinge design','Infinite fold patterns','Smooth pivot joints','Satisfying clack sound'] },

  { id:17, vid:47320925372547, cat:'cube', name:'Magnetic Puzzle Cube',             price:16.99, img:'', tag:'NEW', tagType:'dark', sold:'6,400+', rating:4.8, link:'magnetic+puzzle+cube+fidget+toy',
    desc:'Magnetised panels snap together cleanly and pull apart smoothly. Builds and rebuilds into dozens of shapes.',
    features:['N35 magnetic panels','Dozens of configurations','No loose pieces','STEM-friendly design'] },

  { id:18, vid:47320917999747, cat:'cube', name:'Gear Clicker Cube',                price:10.99, img:'', tag:'SATISFYING', tagType:'', sold:'9,200+', rating:4.7, link:'gear+clicker+fidget+cube+stress',
    desc:'Miniature exposed gears that mesh satisfyingly on every side. Watch them turn while you decompress.',
    features:['Visible gear mechanism','Tactile click feedback','Zinc alloy body','Desktop display worthy'] },

  { id:19, vid:47320918032515, cat:'cube', name:'Mini Metal Anxiety Cube',          price:12.99, img:'', tag:'', tagType:'', sold:'5,800+', rating:4.7, link:'mini+metal+anxiety+fidget+cube+EDC',
    desc:'All-metal construction makes this cube heavier and more satisfying than plastic competitors. Built to last years.',
    features:['Full metal body','Weight: 65g','Dual clicker faces','Pocket-carry friendly'] },

  { id:20, vid:47320925405315, cat:'cube', name:'Smooth Press Anti-Stress Cube',    price:6.99,  img:'', tag:'VALUE', tagType:'', sold:'22,000+', rating:4.6, link:'smooth+press+anti+stress+fidget+cube',
    desc:'Silicone face panels absorb finger pressure and bounce back. Quiet enough for offices, libraries and classrooms.',
    features:['Soft silicone faces','Near-silent use','6 distinct textures','Washable design'] },

  { id:21, vid:47320919670915, cat:'cube', name:'Rainbow Folding Flex Cube',        price:7.99,  img:'', tag:'HOT', tagType:'hot', sold:'11,000+', rating:4.6, link:'rainbow+folding+flex+fidget+cube',
    desc:'Colour-blocked panels fold into a rainbow of shapes. A visual fidget as much as a tactile one.',
    features:['6 vivid colours','200+ fold patterns','Smooth ABS pivots','ADHD / focus aid'] },

  { id:22, vid:47320920457347, cat:'cube', name:'Anti-Anxiety Spinner Cube',        price:9.99,  img:'', tag:'POPULAR', tagType:'', sold:'8,600+', rating:4.7, link:'anti+anxiety+spinner+fidget+cube',
    desc:'Every face has a mini spinner, roller or clicker built in. Six fidgets in one pocket-sized block.',
    features:['6 fidget mechanisms','Spinner on 2 faces','Quiet roller bearings','Therapy-grade design'] },

  { id:23, vid:47320921571459, cat:'cube', name:'Quiet Soft-Touch Cube',            price:5.49,  img:'', tag:'VALUE', tagType:'', sold:'16,000+', rating:4.5, link:'quiet+soft+touch+fidget+cube+silent',
    desc:'Designed specifically for noise-sensitive settings. Matte rubber exterior muffles every click and press.',
    features:['Fully silent operation','Rubberised matte finish','Lightweight 40g','Great for meetings'] },

  { id:24, vid:47320925438083, cat:'cube', name:'Pro XL Desk Fidget Cube',          price:17.99, img:'', tag:'', tagType:'', sold:'4,200+', rating:4.8, link:'pro+XL+desk+fidget+cube+premium',
    desc:'50% larger than standard cubes — built for serious desk users. Premium weighted metal core, satisfying resistance.',
    features:['XL 45mm size','Weighted metal core','6 precision actions','Non-slip base pad'] },

  // ── RINGS ──────────────────────────────────────────────────────────────────

  { id:25, vid:47320925470851, cat:'ring', name:'Magnetic Fidget Rings 5-Pack',     price:6.99,  img:'', tag:'BESTSELLER', tagType:'hot', sold:'28,000+', rating:4.8, link:'magnetic+fidget+rings+5+pack',
    desc:'Five smooth stainless rings with N52 magnetic tips. Twist, stack, orbit — endlessly satisfying for hands and fingers.',
    features:['5 rings included','N52 magnetic tips','316L stainless steel','Pouch included'] },

  { id:26, vid:47320925503619, cat:'ring', name:'Spinning Gyro Ring',               price:10.99, img:'', tag:'', tagType:'', sold:'7,400+', rating:4.7, link:'spinning+gyro+ring+fidget',
    desc:'Outer ring free-spins around an inner band you wear on your finger. Spin it on your hand all day long.',
    features:['Wearable spinner ring','Free-rotating outer band','316L stainless','Smooth ball bearing'] },

  { id:27, vid:47320955158659, cat:'ring', name:'Warrior Knuckle Ring',             price:7.99,  img:'', tag:'HOT', tagType:'hot', sold:'11,200+', rating:4.7, link:'warrior+knuckle+fidget+ring+metal',
    desc:'Chunky cast-metal ring with textured detailing. Heavy enough to feel premium, smooth enough for all-day wear.',
    features:['Cast metal construction','Wide 12mm band','Matte brushed finish','Sizes 6–12 available'] },

  { id:28, vid:47320955420803, cat:'ring', name:'Infinity Loop Band Ring',          price:5.49,  img:'', tag:'VALUE', tagType:'', sold:'19,000+', rating:4.5, link:'infinity+loop+band+ring+fidget',
    desc:'Minimalist continuous loop design in surgical steel. Spin it, slide it, stack it — subtle fidget for every wrist.',
    features:['Surgical steel','Minimalist design','Stackable','Hypoallergenic'] },

  { id:29, vid:47320956043395, cat:'ring', name:'Tri-Spin Ring Set (3-Pack)',       price:7.99,  img:'', tag:'', tagType:'', sold:'8,800+', rating:4.6, link:'tri+spin+ring+set+3+pack+fidget',
    desc:'Three interlocking rings that orbit each other when spun. Mesmerising in motion, clean at rest.',
    features:['3 interlocking rings','Independent spin axes','Polished silver finish','Gift bag included'] },

  { id:30, vid:47320956960899, cat:'ring', name:'EDC Roller Knuckle Ring',          price:12.99, img:'', tag:'NEW', tagType:'dark', sold:'3,600+', rating:4.8, link:'EDC+roller+knuckle+ring+fidget',
    desc:'A tiny barrel roller built into the band — you can roll it with your thumb while it sits on your finger. True EDC.',
    features:['Integrated barrel roller','Titanium-coated steel','EDC carry-ready','Smooth roll action'] },

  { id:31, vid:47320956993667, cat:'ring', name:'Stainless Steel Spin Band',        price:9.99,  img:'', tag:'', tagType:'', sold:'6,200+', rating:4.6, link:'stainless+steel+spin+band+ring+fidget',
    desc:'Dual-layer band — the outer sleeve free-spins silently around the inner base. Wearable all day, no one notices.',
    features:['Dual-layer wearable design','Silent spin','High-polish stainless','Unisex sizing'] },

  { id:32, vid:47320957026435, cat:'ring', name:'Magnetic Vortex Ring Set',         price:4.99,  img:'', tag:'VALUE', tagType:'', sold:'24,000+', rating:4.5, link:'magnetic+vortex+ring+set+fidget+cheap',
    desc:'Budget-friendly 3-ring magnetic set — great starter kit or stocking stuffer. Deceptively satisfying for the price.',
    features:['3 rings included','Smooth magnetic slide','Nickel-free plating','Portable carry tube'] },

  // ── SENSORY ────────────────────────────────────────────────────────────────

  { id:33, vid:47320957059203, cat:'sensory', name:'Jumbo Pop Bubble Pad',          price:3.99,  img:'', tag:'VALUE', tagType:'', sold:'45,000+', rating:4.7, link:'jumbo+pop+bubble+pad+fidget+sensory',
    desc:'Large silicone bubble pad — satisfying pop on every press, resets for infinite re-popping. Quiet and addictive.',
    features:['100 bubbles per side','Resets after popping','Food-grade silicone','Wipe-clean surface'] },

  { id:34, vid:47320957091971, cat:'sensory', name:'Squeeze Stress Relief Ball',    price:2.99,  img:'', tag:'BESTSELLER', tagType:'hot', sold:'62,000+', rating:4.8, link:'squeeze+stress+relief+ball+fidget',
    desc:'The OG stress reliever. Slow-rebound foam core inside a stretchy mesh skin — squeeze it, watch it ooze through the gaps.',
    features:['Slow-rebound foam','Stretchy mesh skin','Hand-strengthening','Washable cover'] },

  { id:35, vid:47320957419651, cat:'sensory', name:'Mesh Marble Fidget Ball',       price:2.49,  img:'', tag:'VALUE', tagType:'', sold:'38,000+', rating:4.6, link:'mesh+marble+fidget+ball+sensory',
    desc:'Push the marble through the stretchy mesh in any direction. One of the most satisfying textures in the lineup.',
    features:['Stretch mesh exterior','Marble core','Tactile + visual','Pocket size'] },

  { id:36, vid:47320957452419, cat:'sensory', name:'Stretchy Squishy Worm',         price:4.99,  img:'', tag:'', tagType:'', sold:'14,000+', rating:4.5, link:'stretchy+squishy+worm+fidget+sensory+toy',
    desc:'Ultra-stretchy silicone worm — pull it, twist it, knot it. Great sensory input for ADHD and anxiety.',
    features:['300% stretch silicone','Twist-proof cord','Tactile ridged texture','Soft safe material'] },

  { id:37, vid:47320957649027, cat:'sensory', name:'Silicone Sensory Fidget Pad',   price:5.49,  img:'', tag:'HOT', tagType:'hot', sold:'9,200+', rating:4.7, link:'silicone+sensory+fidget+pad+ADHD',
    desc:'12 different sensory zones in one pad — bumps, ridges, switches and spinners. A fidget board in your palm.',
    features:['12 sensory zones','Compact palm size','BPA-free silicone','Designed for ADHD'] },

  { id:38, vid:47320959713411, cat:'sensory', name:'Pinch-Pop Sensory Strip',       price:3.99,  img:'', tag:'', tagType:'', sold:'11,600+', rating:4.6, link:'pinch+pop+sensory+strip+fidget',
    desc:'A strip of bubble chambers you pinch one at a time. Quieter than standard pop-its, more deliberate, deeply satisfying.',
    features:['Sequential pop design','Near-silent use','Flexible silicone','Clips to bag or belt'] },

  { id:39, vid:47320962039939, cat:'sensory', name:'Thumb Smooth Worry Stone',      price:2.99,  img:'', tag:'VALUE', tagType:'', sold:'29,000+', rating:4.6, link:'thumb+smooth+worry+stone+anxiety+relief',
    desc:'Polished natural gemstone with a thumb-shaped groove. Ancient anxiety relief — rub it and breathe. Works every time.',
    features:['Natural gemstone','Thumb-contoured groove','Grounding practice aid','Carry pouch included'] },

  { id:40, vid:47320962990211, cat:'sensory', name:'Kinetic Sand Zen Desk Set',     price:10.99, img:'', tag:'HOT', tagType:'hot', sold:'7,800+', rating:4.8, link:'kinetic+sand+zen+desk+set+fidget',
    desc:'500g of kinetic sand in a lidded tray with a mini rake and roller. Build, flatten, zen out. Zero mess.',
    features:['500g kinetic sand','Mini zen tools included','Sealed tray no mess','Blue or beige options'] },

  { id:41, vid:47320963317891, cat:'sensory', name:'Liquid Motion Bubbler Timer',   price:12.99, img:'', tag:'CALMING', tagType:'', sold:'5,400+', rating:4.7, link:'liquid+motion+bubbler+timer+sensory',
    desc:'Coloured oil and water cascade through chambers in a hypnotic waterfall loop. Watch the stress dissolve with it.',
    features:['Dual-layer cascade','Mesmerising slow-flow','Desk or handheld use','Replaceable liquid'] },

  { id:42, vid:47320963350659, cat:'sensory', name:'Pop-It Keychain Clip',          price:2.49,  img:'', tag:'VALUE', tagType:'', sold:'55,000+', rating:4.6, link:'pop+it+keychain+clip+fidget+mini',
    desc:'Miniature pop-it on a carabiner clip — attach it to your bag, keys or belt loop and pop it anywhere.',
    features:['Carabiner clip','15 bubbles per side','Reusable silicone','20+ colour options'] },

  { id:43, vid:47320963383427, cat:'sensory', name:'Stretchy Rainbow Noodle Pack',  price:3.99,  img:'', tag:'', tagType:'', sold:'18,000+', rating:4.5, link:'stretchy+rainbow+noodle+fidget+sensory',
    desc:'Pack of 5 stretchy silicone noodles in vivid colours. Pull, twist, weave — great for fine-motor fidgeting.',
    features:['5 noodles per pack','Ultra-stretch silicone','Safe non-toxic','Ages 4 and up'] },

  { id:44, vid:47320963416195, cat:'sensory', name:'Giant Pop-It Rainbow Board',    price:5.99,  img:'', tag:'HOT', tagType:'hot', sold:'21,000+', rating:4.7, link:'giant+pop+it+rainbow+board+fidget',
    desc:'A3-size rainbow pop-it board — 200+ bubbles of pure satisfaction. Great shared fidget for desks and classrooms.',
    features:['200+ bubbles','A3 board size','Rainbow colour layout','Thick food-grade silicone'] },

  // ── EDC ────────────────────────────────────────────────────────────────────

  { id:45, vid:47320963448963, cat:'edc', name:'Click Pen Satisfying Fidget',       price:9.99,  img:'', tag:'HOT', tagType:'hot', sold:'13,200+', rating:4.7, link:'click+pen+satisfying+fidget+EDC',
    desc:'A ballpoint pen with an ultra-satisfying tri-click mechanism. Actually writes — and clicking it might be better.',
    features:['Tri-stage click action','Working ballpoint pen','Brushed aluminium body','Click force adjustable'] },

  { id:46, vid:47320963481731, cat:'edc', name:'Slider Fidget Bar Pro',             price:14.99, img:'', tag:'NEW', tagType:'dark', sold:'4,600+', rating:4.8, link:'slider+fidget+bar+pro+EDC+metal',
    desc:'A satisfying linear slider on a stainless bar. Single thumb operation — slide it, magnetic end-stop snaps it back.',
    features:['Linear slider mechanism','Magnetic end-stop snap','316L stainless steel','EDC pocket clip'] },

  { id:47, vid:47320963514499, cat:'edc', name:'Dual-Button EDC Clicker',           price:19.99, img:'', tag:'PREMIUM', tagType:'dark', sold:'2,800+', rating:4.8, link:'dual+button+EDC+clicker+fidget+metal',
    desc:'Two independent click buttons on a machined aluminium body. Left thumb, right thumb — find your rhythm.',
    features:['Dual independent buttons','CNC aluminium body','Adjustable click tension','Titanium finish option'] },

  { id:48, vid:47320963547267, cat:'edc', name:'Spinning Flip Coin',                price:6.99,  img:'', tag:'', tagType:'', sold:'16,400+', rating:4.6, link:'spinning+flip+coin+fidget+EDC+trick',
    desc:'Weighted coin designed for rolling across knuckles, spinning on a finger, and flipping tricks. Master it fast.',
    features:['28mm weighted coin','Knuckle-roll ready','Polished steel edge','Trick guide included'] },

  { id:49, vid:47320963580035, cat:'edc', name:'Worry Stone Thumb Press',           price:5.49,  img:'', tag:'VALUE', tagType:'', sold:'22,000+', rating:4.6, link:'worry+stone+thumb+press+anxiety+EDC',
    desc:'Smooth agate worry stone, sized for your thumb. Grounding, calming, always in your pocket.',
    features:['Natural agate stone','Thumb-contoured hollow','Polished smooth surface','Pouch included'] },

  { id:50, vid:47320963612803, cat:'edc', name:"Desktop Newton's Cradle",           price:13.99, img:'', tag:'CLASSIC', tagType:'', sold:'8,200+', rating:4.7, link:'desktop+newtons+cradle+fidget+desk+toy',
    desc:'Five steel ball bearings on a chrome frame. Click-clack your way through meetings, calls and creative blocks.',
    features:['5 polished steel balls','Chrome frame stand','Adjustable string tension','Compact 14cm size'] },

  { id:51, vid:47320963645571, cat:'edc', name:'Magnetic Orbit Desktop Toy',        price:21.99, img:'', tag:'NEW', tagType:'dark', sold:'2,400+', rating:4.8, link:'magnetic+orbit+desktop+fidget+toy',
    desc:'A chrome orb that levitates and orbits a central magnet ring. Meditative to watch, impossible to ignore.',
    features:['Magnetic levitation orbit','Chrome steel orb','Adjustable field ring','Silent operation'] },

  { id:52, vid:47320963678339, cat:'edc', name:'Gyroscope Hand Toy Pro',            price:16.99, img:'', tag:'', tagType:'', sold:'5,200+', rating:4.7, link:'gyroscope+hand+toy+pro+fidget',
    desc:'A gyroscope that powers up with a pull cord and resists every tilt. Wrist-strengthening, mind-bending.',
    features:['Self-powered gyroscope','Wrist + grip training','Transparent case','LED model available'] },

  { id:53, vid:47320963711107, cat:'edc', name:'Flip Gear Anti-Stress Toy',         price:10.99, img:'', tag:'', tagType:'', sold:'6,800+', rating:4.6, link:'flip+gear+anti+stress+fidget+toy+EDC',
    desc:'Two toothed gears that mesh and flip around a central axis. Fidget with both hands simultaneously for max focus.',
    features:['Meshing dual gears','Two-hand engagement','Compact folded size','Durable ABS + steel'] },

  { id:54, vid:47320964038787, cat:'edc', name:'Titanium Bead Chain Fidget',        price:29.99, img:'', tag:'PREMIUM', tagType:'dark', sold:'1,600+', rating:4.9, link:'titanium+bead+chain+fidget+EDC+premium',
    desc:'Grade-5 titanium beads on a ball chain — flick, roll, rattle. Compact EDC that never leaves your pocket.',
    features:['Grade-5 titanium beads','Ball chain design','100g satisfying weight','Lifetime durability'] },

  // ── BUNDLES ────────────────────────────────────────────────────────────────

  { id:55, vid:47320964694147, cat:'bundle', name:'Spinner Starter Kit (3-Pack)',   price:21.99, img:'', tag:'DEAL', tagType:'', sold:'6,200+', rating:4.8, link:'fidget+spinner+starter+kit+3+pack',
    desc:'Three of our most popular spinners — metal tri-blade, carbon fiber, and mini pocket — in one discounted kit.',
    features:['3 spinners included','Metal + carbon + mini','Save vs buying separate','Gift-ready packaging'] },

  { id:56, vid:47320964726915, cat:'bundle', name:'Sensory Relief Bundle (8-Piece)', price:27.99, img:'', tag:'HOT', tagType:'hot', sold:'4,800+', rating:4.8, link:'sensory+relief+bundle+8+piece+fidget',
    desc:'8 different sensory toys — stress ball, pop-it, mesh marble, worry stone and more. Great for ADHD/anxiety toolkits.',
    features:['8 unique fidgets','Covers tactile, visual, audio','Reusable carry bag','Therapist recommended'] },

  { id:57, vid:47320965054595, cat:'bundle', name:'Cube & Ring Combo Pack',         price:19.99, img:'', tag:'', tagType:'', sold:'5,400+', rating:4.7, link:'cube+ring+combo+pack+fidget',
    desc:'Best-selling 6-side fidget cube + magnetic rings 5-pack. Two completely different fidget experiences in one bundle.',
    features:['Fidget cube + 5 rings','Two distinct sensations','Reusable zip bag','Great starter combo'] },

  { id:58, vid:47320965120131, cat:'bundle', name:'EDC Pocket Fidget Kit',          price:32.99, img:'', tag:'PREMIUM', tagType:'dark', sold:'2,200+', rating:4.8, link:'EDC+pocket+fidget+kit+premium',
    desc:'Four premium EDC fidgets — click pen, slider bar, flip coin and worry stone — all in a compact leather roll.',
    features:['4 EDC fidgets','Leather carry roll','Ready to gift','Compact daily rotation'] },

  { id:59, vid:47320965513347, cat:'bundle', name:'Ultimate Stress Kit (12-Piece)', price:49.99, img:'', tag:'MEGA DEAL', tagType:'', sold:'3,600+', rating:4.9, link:'ultimate+stress+relief+kit+12+piece',
    desc:'12 of our best sellers across every category. Spinners, cubes, rings, sensory and EDC — the complete collection.',
    features:['12 premium fidgets','All 5 categories','Full-size carry case','Best value in the store'] },

  { id:60, vid:47320965677187, cat:'bundle', name:'Kids Sensory Pack (6-Piece)',    price:16.99, img:'', tag:'KIDS', tagType:'', sold:'7,400+', rating:4.7, link:'kids+sensory+fidget+pack+6+piece',
    desc:'6 child-safe, BPA-free sensory toys designed for classroom, therapy and home. Supports focus and self-regulation.',
    features:['BPA-free certified','Ages 4+','6 sensory types','Mesh storage bag'] },

  { id:61, vid:47320965709955, cat:'bundle', name:'Anti-Anxiety Mega Bundle (15-Piece)', price:59.99, img:'', tag:'BESTSELLER', tagType:'hot', sold:'2,800+', rating:4.9, link:'anti+anxiety+mega+bundle+15+piece+fidget',
    desc:'The ultimate stress-relief toolkit. 15 fidgets spanning every modality — tactile, visual, motion and grounding.',
    features:['15 fidgets included','Therapist-curated','All categories covered','Premium hard-shell case'] },

];
