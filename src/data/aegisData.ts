export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  startingPrice: number;
  turnaround: string;
  warranty: string;
  badge: string;
  thickness?: string;
  specs: string[];
  imageUrl: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  location: string;
  vehicle: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  category: string;
  author: string;
  authorRole: string;
  imageUrl: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      technicalTip?: string;
    }[];
    takeaways: string[];
  };
}

export interface BuildTrackStatus {
  ticketId: string;
  vehicle: string;
  service: string;
  clientName: string;
  currentStep: number; // 1 to 4
  completionDate: string;
  leadTechnician: string;
  cleanroomBay: string;
  notes: string;
  steps: {
    number: number;
    title: string;
    description: string;
    time: string;
    completed: boolean;
  }[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ppf-full",
    title: "Self-Healing Paint Protection Film (PPF)",
    subtitle: "Ultimate Optical Urethane Armor",
    description:
      "Precision computer-cut 8–10 mil elastomeric polyurethane film with instantaneous self-healing topcoat. Shields against track rock chips, road grit, micro-abrasions, acid rain, and UV degradation.",
    startingPrice: 1899,
    turnaround: "2–3 Days",
    warranty: "10-Year Anti-Yellowing Warranty",
    badge: "Most Requested",
    thickness: "8.5–10.0 Mil",
    specs: [
      "Instantaneous thermal self-healing micro-scratches",
      "XPEL DAP software pre-cut patterns — zero blades on paint",
      "Wrapped edge alignment inside panel crevices",
      "Ultra-high gloss or stealth satin matte finish",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "color-wrap",
    title: "Bespoke Color Change Vinyl Wrap",
    subtitle: "300+ Premium Cast Textures & Finishes",
    description:
      "Reinvent your supercar aesthetic while protecting OEM paint underneath. Dual-cast 3M 2080 and Inozetek films engineered with bubble-free air release channels and seamless panel tucking.",
    startingPrice: 2499,
    turnaround: "3–4 Days",
    warranty: "5-Year Craftsmanship Guarantee",
    badge: "Bespoke Styling",
    thickness: "3.5–4.2 Mil",
    specs: [
      "300+ options: Satin, Ultra-Gloss, Matte, Liquid Metallic",
      "Zero disassembly risk: Non-invasive panel wrapping",
      "Full door jambs & sills seamless wrap available",
      "100% reversible with zero residual adhesive damage",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "paint-correction",
    title: "Multi-Stage Machine Paint Correction",
    subtitle: "Defect Elimination & Concours Mirror Gloss",
    description:
      "Microscopic dual-action paint leveling guided by digital ultrasonic depth gauges. Eliminates up to 98% of swirl marks, buffer trails, light scratches, oxidation, and factory orange peel.",
    startingPrice: 599,
    turnaround: "1–2 Days",
    warranty: "Concours Grade Certificate",
    badge: "Restoration",
    thickness: "Micron-Precision Leveling",
    specs: [
      "Pre-correction digital paint gauge reading on every panel",
      "Multi-stage diminishing abrasive rotary & DA polishers",
      "Jeweling step to achieve deep mirror optical clarity",
      "Essential foundation prior to PPF or ceramic bonding",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "ceramic-graphene",
    title: "9H Ceramic & Graphene Coating",
    subtitle: "Permanent Hydrophobic Molecular Shield",
    description:
      "Reduced graphene-oxide matrix bonding covalently with clearcoat and PPF films. Creates superhydrophobic 115° water contact angles, chemical resistance (pH 2–12), and extreme gloss reflectivity.",
    startingPrice: 799,
    turnaround: "1 Day",
    warranty: "5-Year Carfax Registered Warranty",
    badge: "Molecular Armor",
    thickness: "2.0–3.0 Microns",
    specs: [
      "9H pencil hardness certified barrier against micro-marring",
      "Self-cleaning lotus leaf effect repels water, road salts & bug acids",
      "Wheel face, brake caliper & exhaust tip thermal protection",
      "Infrared baked curing in cleanroom temperature chamber",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "ceramic-tint",
    title: "Nano-Ceramic Heat Rejecting Window Tint",
    subtitle: "99% UV & 95% Infrared Radiation Shield",
    description:
      "Non-metallic, nano-ceramic particle architectural automotive film providing extreme solar heat rejection without signal interference for radar detectors, GPS, or cellular antennas.",
    startingPrice: 349,
    turnaround: "3–4 Hours",
    warranty: "Lifetime No-Bubble Warranty",
    badge: "Thermal Rejection",
    thickness: "2.0 Mil Dual Ply",
    specs: [
      "Blocks 99% harmful ultraviolet rays to protect leather & carbon",
      "Up to 95% infrared heat rejection for cabin comfort",
      "Computer-plotted micro-beveled glass edge alignment",
      "Available shades: 70% Clear, 35% Executive, 20% Stealth, 5% Limo",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "track-package",
    title: "Track Package & High-Impact Defense",
    subtitle: "Strategic Defense for High-Speed Aero Supercars",
    description:
      "Heavy-duty targeted defense engineered specifically for track day weapons and spirited mountain driving. Focuses on maximum velocity projectile impact zones without excess weight.",
    startingPrice: 1299,
    turnaround: "2 Days",
    warranty: "10-Year Track Shield Guarantee",
    badge: "Track Ready",
    thickness: "10.0 Mil Reinforced Urethane",
    specs: [
      "Coverage: Full front bumper, full hood, front fenders, mirrors",
      "Extended rocker panels & rear wheel quarter splash zones",
      "Reinforced 10 mil thickness on low-hanging carbon front splitters",
      "Wrapped around fender liners for edge impact defense",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200&auto=format&fit=crop",
  },
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Julian Vance",
    role: "Collector & Track Driver",
    location: "Manhattan, NY",
    vehicle: "Porsche 911 GT3 RS (992)",
    service: "Full Body Stealth Satin Matte PPF + Ceramic Infusion",
    rating: 5,
    comment:
      "Aegis wrapped my Weissach GT3 RS in custom satin matte film. Not a single razor touched the Shark Blue paint — every seam is tucked completely behind the carbon aero fenders. After two track weekends at Watkins Glen, the front end is 100% spotless. World-class cleanroom facility.",
    date: "October 2026",
    verified: true,
  },
  {
    id: "rev-2",
    author: "Elena Rostova",
    role: "Private Equity Executive",
    location: "Greenwich, CT",
    vehicle: "Ferrari SF90 Stradale",
    service: "Ultra-Gloss Self-Healing PPF & 9H Graphene Coating",
    rating: 5,
    comment:
      "Finding an installer you can trust with an eight-hundred-thousand-dollar hybrid Ferrari clearcoat is nerve-wracking. The Aegis team treated the vehicle like fine art. The optical clarity of the film is invisible; you genuinely cannot tell it's wrapped. Unmatched professionalism.",
    date: "September 2026",
    verified: true,
  },
  {
    id: "rev-3",
    author: "Marcus Sterling",
    role: "Architectural Studio Director",
    location: "Brooklyn, NY",
    vehicle: "Lamborghini Huracán Tecnica",
    service: "Bespoke Satin Nardo Grey Cast Wrap & Ceramic Wheels",
    rating: 5,
    comment:
      "I wanted an understated industrial aesthetic without repainting the factory Giallo Auge. Aegis executed a seamless color change wrap in Satin Nardo Grey with blacked-out badges. Even inside the door sills, you see zero yellow. Flawless craftsmanship.",
    date: "November 2026",
    verified: true,
  },
  {
    id: "rev-4",
    author: "Harrison Blake",
    role: "Venture Partner",
    location: "SoHo, NY",
    vehicle: "BMW M4 CSL",
    service: "Track Impact Package PPF & 70% Infrared Ceramic Tint",
    rating: 5,
    comment:
      "Their computer plotter CAD database is incredible. Every millimeter around the aggressive CSL kidney grilles and carbon splitters lined up perfectly. Plus, the ceramic heat rejecting tint keeps the bucket seats cool in summer. Best investment for daily driving.",
    date: "August 2026",
    verified: true,
  },
  {
    id: "rev-5",
    author: "Daria Chen",
    role: "Design Principal",
    location: "Tribeca, NY",
    vehicle: "McLaren 720S Spider",
    service: "Stage 2 Paint Correction & 5-Year Graphene Matrix",
    rating: 5,
    comment:
      "My McLaren had dealer swirl marks that looked atrocious under direct sunlight. Aegis measured the clearcoat depth, performed a meticulous 2-stage correction, and sealed it with graphene. The paint looks deeper than the day it left Woking.",
    date: "July 2026",
    verified: true,
  },
  {
    id: "rev-6",
    author: "David K. Meyer",
    role: "Motorsport Enthusiast",
    location: "Alpine, NJ",
    vehicle: "Mercedes-AMG GT Black Series",
    service: "Full Body PPF with Carbon Fiber Specific High-Tack Film",
    rating: 5,
    comment:
      "The massive carbon fiber hood and multi-tier rear wing on the Black Series are notorious for film lifting. Aegis used their proprietary cleanroom infrared heat-curing to seal every single edge. 4,000 miles later, no lifting, no peeling. Highly recommended.",
    date: "June 2026",
    verified: true,
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "gloss-vs-stealth-matte-ppf",
    slug: "gloss-vs-stealth-matte-ppf",
    title: "Gloss vs Stealth Matte PPF: Which Is Right for Your Supercar?",
    excerpt:
      "An in-depth technical analysis comparing high-clarity optical gloss films against satin matte conversion wraps, light transmission, and clearcoat protection.",
    readTime: "6 Min Read",
    date: "November 08, 2026",
    category: "Technical Guide",
    author: "Christian Thorne",
    authorRole: "Master Film Architect & Lead Installer",
    imageUrl:
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1200&auto=format&fit=crop",
    content: {
      intro:
        "When investing in high-tier Paint Protection Film (PPF) for exotic and high-performance machinery, owners face a critical stylistic and functional decision: preserve the glass-like factory clearcoat with optical Ultra-Gloss PPF, or transform the car’s contours into an aggressive, light-diffusing sculpture using Stealth Satin Matte PPF.",
      sections: [
        {
          heading: "1. Optical Clarity & Light Reflection Dynamics",
          body: "High-Gloss PPF utilizes an optically pure polyurethane core designed to match or exceed the refractive index of automotive clearcoat (typically ~1.50). This results in zero orange peel amplification and enhances depth on metallic and pearlescent paint flakes. In contrast, Stealth Matte PPF integrates microscopic light-scattering silica particles into the elastomeric topcoat. This diffuses direct sunlight, eliminating harsh glare and accentuating body lines, wheel arches, and aero ducting.",
          technicalTip:
            "If your vehicle features carbon fiber weave beneath factory gloss clearcoat, applying Stealth Matte PPF over exposed carbon creates an ultra-rare OEM-style dry carbon satin aesthetic.",
        },
        {
          heading: "2. Scratch Concealment & Self-Healing Capabilities",
          body: "Both variants utilize 8.5 to 10 mil thermoplastic polyurethane (TPU) with elastomeric memory. When heated by engine bay radiance or direct sunlight (at 120°F / 49°C), the molecular polymers rearrange into their original flat orientation, healing micro-swirls. However, Stealth Satin Matte film offers an inherent advantage: its textured light diffusion naturally obscures dust, water spotting, and minor abrasions far longer between detailing sessions.",
          technicalTip:
            "Stealth Matte PPF never requires traditional wax or polishing compounds, which would clog the micro-matte texture and create uneven glossy patches.",
        },
        {
          heading: "3. Factory Paint Preservation & Reversibility",
          body: "One of the greatest benefits of Stealth Matte PPF is that it converts any gloss supercar into a factory matte finish (similar to Porsche Frozen Cashmere or Mercedes Magno) without paying the costly $12,000+ OEM matte option or suffering the irreversible nightmare of repairing chipped factory matte paint. When you decide to sell the vehicle, simply peel the film off to reveal flawless, brand-new OEM gloss paint beneath.",
        },
      ],
      takeaways: [
        "Choose Ultra-Gloss PPF if you desire maximum depth, metallic flake pop, and imperceptible invisible armor.",
        "Choose Stealth Satin Matte PPF if you want a striking bespoke hypercar appearance with superior dust and swirl concealment.",
        "Both films provide identical 8–10 mil rock chip protection and self-healing thermal urethane performance.",
        "Aegis Auto applies full wrapped edges on both finishes to eliminate visible transition lines.",
      ],
    },
  },
  {
    id: "why-computer-cut-templates-prevent-paint-slice-disaster",
    slug: "why-computer-cut-templates-prevent-paint-slice-disaster",
    title: "Why Computer-Cut Templates Prevent Paint Slice Disasters",
    excerpt:
      "Discover the engineering precision behind CAD software plotting vs traditional bulk hand-trimming with razor blades on exotic clearcoats.",
    readTime: "5 Min Read",
    date: "October 24, 2026",
    category: "Cleanroom Standards",
    author: "Marcus H. Cole",
    authorRole: "Technical Quality Director",
    imageUrl:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1200&auto=format&fit=crop",
    content: {
      intro:
        "In the automotive protection industry, the phrase 'custom hand-cut' is often romanticized as artisan craftsmanship. In reality, hand-trimming urethane film directly on a six-figure supercar with a surgical Olfa blade carries immense catastrophic risk: micro-scoring clearcoat layers that lead to rust, clearcoat peeling, and tens of thousands in diminished resale value.",
      sections: [
        {
          heading: "1. The Physics of Clearcoat Scoring",
          body: "Modern automotive clearcoat measures between 35 and 50 microns in thickness — roughly half the thickness of a human hair. Polyurethane PPF measures between 200 and 250 microns (8–10 mil). To cut through 80% of the film thickness by hand without piercing the underlying 40-micron clearcoat requires superhuman blade control that cannot be guaranteed across 100+ lineal feet of vehicle trim.",
          technicalTip:
            "Blade scores do not always show immediately. Moisture trapped beneath the edge over months oxidizes the micro-gap, causing clearcoat delamination during vehicle washes.",
        },
        {
          heading: "2. CAD Digitized Software Pre-Cut Precision",
          body: "At Aegis Auto, every panel is plotted on high-speed Roland & Graphtec precision cutters using millimetric 3D laser-scanned templates from XPEL DAP and 3M repositories. The blade cuts the film on an inert silicone release liner 10 minutes before the film ever touches your vehicle. Clearcoat contact with a razor is 100% physically impossible in our cleanroom.",
        },
        {
          heading: "3. Custom Extended Edge Manipulation",
          body: "A common myth is that pre-cut templates leave exposed edges. Aegis master software calibrates each digital CAD file with 0.35-inch to 0.5-inch custom edge extensions. This allows our technicians to wrap the film cleanly around fender seams, hood lips, and door recesses while maintaining zero-blade cleanroom protocol.",
        },
      ],
      takeaways: [
        "Hand-cutting on vehicle paint poses high risk of irreversible clearcoat scoring and corrosion.",
        "Computer-cut CAD plotting guarantees exact millimeter edge radius without razor contact.",
        "Custom wrapped edge manipulation provides full perimeter defense with seamless invisibility.",
      ],
    },
  },
  {
    id: "ceramic-coating-over-ppf-worth-it",
    slug: "ceramic-coating-over-ppf-worth-it",
    title: "Ceramic Coating Over PPF: Is It Worth The Investment?",
    excerpt:
      "Understanding the chemical synergy between elastomeric thermoplastic film and covalently bonded graphene ceramic coatings.",
    readTime: "7 Min Read",
    date: "October 11, 2026",
    category: "Chemical Science",
    author: "Dr. Aris Thorne",
    authorRole: "Materials Science Consultant",
    imageUrl:
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1200&auto=format&fit=crop",
    content: {
      intro:
        "Vehicle enthusiasts frequently ask: 'If Paint Protection Film already self-heals and protects against rock chips, why spend extra on ceramic or graphene coating over top of the film?' The answer lies in the distinct difference between kinetic impact defense and surface chemical defense.",
      sections: [
        {
          heading: "1. Kinetic Defense vs Chemical Barrier",
          body: "PPF is a pliable urethane sponge designed to absorb kinetic energy from road debris traveling at 90+ mph. Ceramic coating, by contrast, is a microscopic silica/graphene quartz crystal matrix. It cannot stop high-speed gravel, but it creates superhydrophobic tension (110°–118° contact angle) that repels brake dust, acid rain, bird droppings, road tar, and track rubber marbles.",
          technicalTip:
            "Applying ceramic coating on bare PPF fills the porous urethane topcoat, preventing organic contaminants from staining the film and accelerating yellowing.",
        },
        {
          heading: "2. Ease of Maintenance & Self-Cleaning Action",
          body: "Uncoated PPF can grip track rubber and grime over time. Once coated with a flexible 9H ceramic matrix formulated specifically for PPF elastomers, the surface becomes slicker than Teflon. Water sheets off effortlessly in a touchless blower wash, eliminating 90% of towel contact and preserving the pristine film surface.",
        },
        {
          heading: "3. UV Stability & Anti-Yellowing Synergy",
          body: "Ultraviolet radiation is the primary catalyst for film degradation. High-grade nano-ceramic coatings act as sacrificial optical UV filters, shielding the TPU urethane from oxidative yellowing and extending film lifespan from 5–7 years up to 10+ years.",
        },
      ],
      takeaways: [
        "PPF provides the kinetic armor against rock chips; Ceramic provides the slick chemical shield.",
        "Ceramic coating seals the porous urethane topcoat, resisting track rubber and hard water stains.",
        "Washing a ceramic-coated PPF vehicle takes a fraction of the time with minimal swirl risk.",
      ],
    },
  },
  {
    id: "maintaining-your-vinyl-wrap-aftercare-guide",
    slug: "maintaining-your-vinyl-wrap-aftercare-guide",
    title: "Maintaining Your Vinyl Wrap: Professional Wash & Aftercare",
    excerpt:
      "The definitive atelier protocol for washing, protecting, and prolonging the life of matte, satin, and gloss vehicle color wraps.",
    readTime: "4 Min Read",
    date: "September 29, 2026",
    category: "Atelier Care",
    author: "Christian Thorne",
    authorRole: "Master Film Architect & Lead Installer",
    imageUrl:
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1200&auto=format&fit=crop",
    content: {
      intro:
        "A premium cast color change wrap is a remarkable transformation of your vehicle’s persona. To ensure your wrap looks showroom-fresh for 5 to 7 years, following proper cleaning protocols and avoiding destructive automated brush washes is imperative.",
      sections: [
        {
          heading: "1. The Two-Bucket Hand Wash Technique",
          body: "Never run a vinyl-wrapped or PPF vehicle through a mechanical car wash. Rotating plastic nylon brushes act like micro-sandpaper, scratching gloss wraps and polishing matte wraps into uneven gloss splotches. Always employ the 2-bucket hand wash method with grit guards and ultra-plush 1200 GSM microfiber wash mitts.",
          technicalTip:
            "Always use pH-neutral shampoos without gloss-enhancers or carnauba waxes if your wrap has a matte or satin finish.",
        },
        {
          heading: "2. Pressure Washer Distance & Angle Rules",
          body: "When utilizing a pressure washer, keep the nozzle tip at least 18 inches away from the surface and strictly avoid spraying at 90-degree perpendicular angles near panel edges or wrap seams. Use a 40-degree wide fan tip and limit operating pressure to 1,800 PSI maximum.",
        },
        {
          heading: "3. Immediate Spot Cleaning for Biological Contaminants",
          body: "Bird droppings, bug splatters, and tree sap contain acidic compounds that can bake into cast vinyl under direct summer sun within 48 hours. Keep a dedicated quick detailer spray and fresh microfiber in your trunk for immediate gentle spot removal.",
        },
      ],
      takeaways: [
        "Mechanical automated washes will immediately void your vinyl wrap warranty.",
        "Wash weekly with pH-neutral shampoo and micro-fiber drying towels.",
        "Maintain 18+ inches distance with pressure washer nozzles near wrapped edges.",
      ],
    },
  },
];

export const INITIAL_TRACK_BUILDS: Record<string, BuildTrackStatus> = {
  "AEG-7842": {
    ticketId: "AEG-7842",
    vehicle: "Porsche 911 GT3 RS (992)",
    service: "Full Body Stealth Satin Matte PPF + 9H Ceramic",
    clientName: "Julian V.",
    currentStep: 3,
    completionDate: "Tomorrow at 4:30 PM",
    leadTechnician: "Christian Thorne (Master Certified)",
    cleanroomBay: "Cleanroom Bay 02 (Class-100 Laminar)",
    notes:
      "All aerodynamic front carbon splitters, rear wing stays, and roof contours fully wrapped. Currently undergoing infrared heat-cure cycle on edge recesses.",
    steps: [
      {
        number: 1,
        title: "24-Stage Decontamination & Clay Cleansing",
        description: "Iron fallout dissolved, clay bar treatment, alcohol panel wipe down.",
        time: "Completed Yesterday, 11:30 AM",
        completed: true,
      },
      {
        number: 2,
        title: "Computer-Plotted Pre-Cut Template Cutting",
        description: "XPEL DAP CAD plotting with 0.4-inch extended edge wraps for all panels.",
        time: "Completed Yesterday, 4:00 PM",
        completed: true,
      },
      {
        number: 3,
        title: "Climate-Controlled Cleanroom Application",
        description: "Dust-free slip solution application and microscopic edge alignment.",
        time: "In Progress (92% Complete)",
        completed: true,
      },
      {
        number: 4,
        title: "Infrared Heat-Cure & 40-Point QC Inspection",
        description: "Edge post-heating at 195°F and paint gauge verification before handover.",
        time: "Scheduled Tomorrow, 2:00 PM",
        completed: false,
      },
    ],
  },
  "AEG-9104": {
    ticketId: "AEG-9104",
    vehicle: "Ferrari SF90 Stradale",
    service: "Full High-Gloss Clear Bra & Graphene Coating",
    clientName: "Elena R.",
    currentStep: 4,
    completionDate: "Ready for Handover Today",
    leadTechnician: "Marcus H. Cole (Technical QC Lead)",
    cleanroomBay: "Cleanroom Bay 01 (Executive Studio)",
    notes:
      "40-point quality control passed with zero imperfections. Paint depth reading verified. Curing cycle complete. Ready for concierge handover.",
    steps: [
      {
        number: 1,
        title: "24-Stage Decontamination & Clay Cleansing",
        description: "Iron fallout dissolved, clay bar treatment, alcohol panel wipe down.",
        time: "Completed 2 Days Ago",
        completed: true,
      },
      {
        number: 2,
        title: "Computer-Plotted Pre-Cut Template Cutting",
        description: "XPEL DAP CAD plotting with extended wrapped edges.",
        time: "Completed Yesterday Morning",
        completed: true,
      },
      {
        number: 3,
        title: "Climate-Controlled Cleanroom Application",
        description: "High-gloss optical urethane film installed in dust-free bay.",
        time: "Completed Yesterday Evening",
        completed: true,
      },
      {
        number: 4,
        title: "Infrared Heat-Cure & 40-Point QC Inspection",
        description: "Passed final multi-spectrum LED inspection. Vehicle detailed.",
        time: "Signed Off & Completed",
        completed: true,
      },
    ],
  },
  "AEG-6238": {
    ticketId: "AEG-6238",
    vehicle: "Lamborghini Revuelto",
    service: "Bespoke Satin Nardo Grey Cast Wrap",
    clientName: "Anthony G.",
    currentStep: 2,
    completionDate: "In 2 Days at 5:00 PM",
    leadTechnician: "Derek Sterling",
    cleanroomBay: "Cleanroom Bay 03 (Color Studio)",
    notes:
      "Body panels deep-cleaned and stripped of all road wax. CAD plotted 3M 2080 cast vinyl staged on cleanroom alignment tables.",
    steps: [
      {
        number: 1,
        title: "24-Stage Decontamination & Clay Cleansing",
        description: "Iron fallout dissolved, clay bar treatment, alcohol panel wipe down.",
        time: "Completed Today, 10:00 AM",
        completed: true,
      },
      {
        number: 2,
        title: "Computer-Plotted Pre-Cut Template Cutting",
        description: "Pattern plotting & edge allowance preparation underway.",
        time: "In Progress (60% Complete)",
        completed: true,
      },
      {
        number: 3,
        title: "Climate-Controlled Cleanroom Application",
        description: "Scheduled to commence tomorrow morning at 8:00 AM.",
        time: "Scheduled Tomorrow",
        completed: false,
      },
      {
        number: 4,
        title: "Infrared Heat-Cure & 40-Point QC Inspection",
        description: "Scheduled for day after tomorrow.",
        time: "Upcoming",
        completed: false,
      },
    ],
  },
};
