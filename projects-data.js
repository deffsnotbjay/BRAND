/* projects-data.js
   Single source of truth for all project content.
   Section order per project:
     image (hero) → text:Overview → image → text:Challenges
     → image → image [→ image] → text:Solution
*/

const PROJECTS = [
  {
    id: 'solarc',
    title: 'Solarc',
    subtitle: 'Sports Club Platform',
    year: '2024',
    client: 'Solarc Sports Club',
    industry: 'Sports & Recreation',
    duration: '5 Weeks',
    services: ['Brand Identity', 'UI/UX Design'],
    websiteUrl: '#',
    heroImage: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&q=85',
    description: 'A sports club platform and website built around performance, clarity, and easy updates.',
    sections: [
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&q=85',
        alt: 'Solarc — sports club platform hero'
      },
      {
        type: 'text',
        label: 'Overview',
        body: 'Solarc needed a sharper identity and a website that could keep pace with a growing membership base. The old experience felt static, with no clear hierarchy between programming, memberships, and club news. We rebuilt the system around clarity, energy, and easy updates.'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1200&q=85',
        alt: 'Solarc — training environment'
      },
      {
        type: 'text',
        label: 'Challenge',
        body: 'The team needed a scalable way to publish events and roster changes without relying on developers. The visual language also had to feel premium enough for sponsors while staying approachable for members.'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&q=85',
        alt: 'Solarc — identity system'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=1200&q=85',
        alt: 'Solarc — design system components'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=1200&q=85',
        alt: 'Solarc — multi-device experience'
      },
      {
        type: 'text',
        label: 'Outcome',
        body: 'We built a modular design system anchored by bold typography, a clear CMS structure, and performance-first layouts. The launch made updates simple and gave Solarc a stronger presence across every touchpoint.'
      }
    ],
    related: ['vanta', 'joy']
  },

  {
    id: 'vanta',
    title: 'Vanta',
    subtitle: 'Studio Rebrand',
    year: '2025',
    client: 'Vanta Studio',
    industry: 'Creative & Design',
    duration: '8 Weeks',
    services: ['Brand Strategy', 'Visual Identity', 'Web Design'],
    websiteUrl: '#',
    heroImage: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&q=85',
    description: 'A rebrand and website system for a fast-growing creative studio.',
    sections: [
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&q=85',
        alt: 'Vanta — rebrand hero'
      },
      {
        type: 'text',
        label: 'Overview',
        body: 'Vanta had outgrown its original identity. The studio wanted a sharper positioning system that could speak to enterprise clients without losing the human tone that made the brand resonate in the first place.'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=85',
        alt: 'Vanta — positioning workshop'
      },
      {
        type: 'text',
        label: 'Challenge',
        body: 'Their visual language was fragmented across decks, web, and social, which diluted confidence. We needed to bring structure, consistency, and a premium editorial feel into one system.'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=85',
        alt: 'Vanta — type and color exploration'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1200&q=85',
        alt: 'Vanta — brand guidelines spread'
      },
      {
        type: 'text',
        label: 'Outcome',
        body: 'We defined a tighter voice, a flexible color palette, and a variable type system that held up across web, proposals, and presentations. The new identity gave the team a stronger point of view and a cleaner path to growth.'
      }
    ],
    related: ['solarc', 'forma']
  },

  {
    id: 'joy',
    title: 'JOY',
    subtitle: 'Seasonal Launch',
    year: '2024',
    client: 'JOY Collective',
    industry: 'Fashion & Retail',
    duration: '3 Weeks',
    services: ['Brand Strategy', 'Web Design', 'Motion Design'],
    websiteUrl: '#',
    heroImage: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/07a166f4-f137-4fa1-8728-74fa8582f248-Jorts%20by%20culture__city.jpeg',
    description: 'A launch website and campaign system for a culture-led label entering a new season.',
    sections: [
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/07a166f4-f137-4fa1-8728-74fa8582f248-Jorts%20by%20culture__city.jpeg',
        alt: 'JOY — seasonal launch hero'
      },
      {
        type: 'text',
        label: 'Overview',
        body: 'JOY needed a digital launch that felt immediate, polished, and unmistakably current. The goal was to turn a seasonal drop into a sharper brand moment with enough edge to stand out in a crowded market.'
      },
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/4cd6894c-3b3a-401e-85bb-b13ed6ac03fc-All%20eyes%20on%20you.jpeg',
        alt: 'JOY — campaign frame'
      },
      {
        type: 'text',
        label: 'Challenge',
        body: 'The content had to feel energetic without becoming noisy. We balanced strong visuals, quick paths to product, and a structure that kept the story moving.'
      },
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/d79ac78f-38f6-46fb-bdc7-469483b37dec-Bridal%20Party.jpeg',
        alt: 'JOY — launch production'
      },
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/aeeca3d9-57fa-4160-a9a7-d8675e6cfa62-912401205758008176.jpeg',
        alt: 'JOY — launch detail'
      },
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/353664e8-0b4c-4fd8-9134-c76f6b91dc6a-3377768467996880.jpeg',
        alt: 'JOY — content close-up'
      },
      {
        type: 'text',
        label: 'Outcome',
        body: 'We built a streamlined launch experience with bold type, clear calls to action, and a flexible content rhythm that made the collection feel like a true event.'
      }
    ],
    related: ['jesse-party', 'mother']
  },

  {
    id: 'jesse-party',
    title: 'JESSE',
    subtitle: 'Creator Portfolio',
    year: '2023',
    client: 'Jesse Okafor',
    industry: 'Personal Brand & Music',
    duration: '1 Day',
    services: ['UI/UX Design', 'Mobile App Design'],
    websiteUrl: '#',
    heroImage: 'https://img.sanishtech.com/u/e7dd5da46af7a735f490a0ebdf3bfa0f.webp',
    description: 'A personal portfolio system for a creator with a growing audience.',
    sections: [
      {
        type: 'image',
        src: 'https://img.sanishtech.com/u/e7dd5da46af7a735f490a0ebdf3bfa0f.webp',
        alt: 'Jesse — creator portfolio hero'
      },
      {
        type: 'text',
        label: 'Overview',
        body: 'Jesse wanted a digital presence that felt more intentional than a standard portfolio. The brief was to create something restrained, polished, and confident enough to support future releases.'
      },
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/8a1ec087-8bd3-4360-b031-ceead9afd90f-42221315255378571.jpeg',
        alt: 'Jesse — interface detail'
      },
      {
        type: 'text',
        label: 'Challenge',
        body: 'The project needed to stay light, fast, and easy to update while still feeling bespoke. We focused on hierarchy, pacing, and a stronger content structure.'
      },
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/fd81e0ce-1715-4808-8a6d-5d94efd5775d-10062799164149777.jpeg',
        alt: 'Jesse — interface system'
      },
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/353664e8-0b4c-4fd8-9134-c76f6b91dc6a-3377768467996880.jpeg',
        alt: 'Jesse — mobile experience'
      },
      {
        type: 'text',
        label: 'Outcome',
        body: 'We shaped a clean interface with flexible sections for releases, highlights, and contact points, then refined the motion and spacing so the whole experience felt calm and premium.'
      }
    ],
    related: ['joy', 'jesse-redemption']
  },

  {
    id: 'mother',
    title: 'MOTHER',
    subtitle: 'Editorial Platform',
    year: '2023',
    client: 'MOTHER Magazine',
    industry: 'Editorial & Publishing',
    duration: '2 Weeks',
    services: ['Editorial Design', 'Content Strategy', 'Art Direction'],
    websiteUrl: '#',
    heroImage: 'https://img.sanishtech.com/u/cb323cfff558a8ae86a5b6c0510be6ed.webp',
    description: 'An editorial platform for a culture magazine built to support long-form stories.',
    sections: [
      {
        type: 'image',
        src: 'https://img.sanishtech.com/u/cb323cfff558a8ae86a5b6c0510be6ed.webp',
        alt: 'MOTHER — editorial platform hero'
      },
      {
        type: 'text',
        label: 'Overview',
        body: 'MOTHER needed a way to present long-form stories with more clarity and less visual clutter. The brief called for a premium reading experience that could support special issues, features, and commissioned stories.'
      },
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/353664e8-0b4c-4fd8-9134-c76f6b91dc6a-3377768467996880.jpeg',
        alt: 'MOTHER — editorial workspace'
      },
      {
        type: 'text',
        label: 'Challenge',
        body: 'The magazine needed structure without losing its distinctive voice. We balanced typography, spacing, and imagery so each story could breathe while still feeling part of one system.'
      },
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/aeeca3d9-57fa-4160-a9a7-d8675e6cfa62-912401205758008176.jpeg',
        alt: 'MOTHER — article frame one'
      },
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/8a1ec087-8bd3-4360-b031-ceead9afd90f-42221315255378571.jpeg',
        alt: 'MOTHER — article frame two'
      },
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/4cd6894c-3b3a-401e-85bb-b13ed6ac03fc-All%20eyes%20on%20you.jpeg',
        alt: 'MOTHER — article frame three'
      },
      {
        type: 'text',
        label: 'Outcome',
        body: 'We designed a modular editorial framework that made articles, features, and covers easier to manage. The result felt more considered and gave the publication a stronger digital presence.'
      }
    ],
    related: ['joy', 'angel']
  },

  {
    id: 'angel',
    title: 'ANGEL',
    subtitle: 'Personal Brand System',
    year: '2024',
    client: 'Angel Fernandez',
    industry: 'Personal Brand & Fashion',
    duration: '2 Days',
    services: ['Brand System', 'UI/UX Design'],
    websiteUrl: '#',
    heroImage: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/1fc4f6d5-c5cc-4f99-bf6e-49f08c886deb-1000010292319574207.jpeg',
    description: 'A personal brand system shaped around presence, restraint, and clarity.',
    sections: [
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/1fc4f6d5-c5cc-4f99-bf6e-49f08c886deb-1000010292319574207.jpeg',
        alt: 'Angel — personal brand system hero'
      },
      {
        type: 'text',
        label: 'Overview',
        body: 'Angel came to us with a clear sense of taste but no formal system to support it. The work focused on turning that instinct into a sharper identity that could be used across web, decks, and social.'
      },
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/6f430ae2-7e2d-4a71-8a92-f726ef51c488-738097826468343713.jpeg',
        alt: 'Angel — interior frame'
      },
      {
        type: 'text',
        label: 'Challenge',
        body: 'The brand needed to feel intimate without becoming fragile. We also had to make sure the structure could hold both portfolio content and future campaign work.'
      },
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/d79ac78f-38f6-46fb-bdc7-469483b37dec-Bridal%20Party.jpeg',
        alt: 'Angel — outdoor frame one'
      },
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/8a1ec087-8bd3-4360-b031-ceead9afd90f-42221315255378571.jpeg',
        alt: 'Angel — outdoor frame two'
      },
      {
        type: 'text',
        label: 'Outcome',
        body: 'We created a minimal, confident system with strong type hierarchy, soft contrast, and a layout rhythm that left room for the work to lead.'
      }
    ],
    related: ['mother', 'jesse-redemption']
  },

  {
    id: 'jesse-redemption',
    title: 'JESSE',
    subtitle: 'Motion Identity',
    year: '2023',
    client: 'Jesse Okafor',
    industry: 'Music & Culture',
    duration: '1 Day',
    services: ['Motion Design', 'Art Direction'],
    websiteUrl: '#',
    heroImage: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/7c1fe274-d7f3-4999-8dcd-e54c55cd3dc4-626704104433392107.jpeg',
    description: 'A motion-led identity update that deepened the creator brand with more tension and texture.',
    sections: [
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/7c1fe274-d7f3-4999-8dcd-e54c55cd3dc4-626704104433392107.jpeg',
        alt: 'Jesse — motion identity hero'
      },
      {
        type: 'text',
        label: 'Overview',
        body: 'This follow-up gave Jesse a more cinematic digital presence. The goal was to contrast the earlier work with something darker, slower, and more deliberate.'
      },
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/9997400d-3e1c-49f9-bf5c-6593b4ec4c87-591519732300652360.jpeg',
        alt: 'Jesse — motion frame'
      },
      {
        type: 'text',
        label: 'Challenge',
        body: 'The challenge was avoiding a generic moody look. We needed a system that felt specific, controlled, and memorable.'
      },
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/fd81e0ce-1715-4808-8a6d-5d94efd5775d-10062799164149777.jpeg',
        alt: 'Jesse — motion frame one'
      },
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/1fc4f6d5-c5cc-4f99-bf6e-49f08c886deb-1000010292319574207.jpeg',
        alt: 'Jesse — motion frame two'
      },
      {
        type: 'text',
        label: 'Outcome',
        body: 'We leaned into motion, contrast, and tighter pacing to give the brand a more atmospheric tone without losing clarity.'
      }
    ],
    related: ['jesse-party', 'orbit']
  },

  {
    id: 'forma',
    title: 'FORMA',
    subtitle: 'Commerce Launch',
    year: '2025',
    client: 'Forma Collective',
    industry: 'Fashion & Retail',
    duration: '4 Weeks',
    services: ['E-commerce Design', 'Art Direction', 'Conversion Strategy'],
    websiteUrl: '#',
    heroImage: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/6f430ae2-7e2d-4a71-8a92-f726ef51c488-738097826468343713.jpeg',
    description: 'A commerce launch for a seasonal collection built around precision and restraint.',
    sections: [
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/6f430ae2-7e2d-4a71-8a92-f726ef51c488-738097826468343713.jpeg',
        alt: 'Forma — commerce launch hero'
      },
      {
        type: 'text',
        label: 'Overview',
        body: 'FORMA needed a digital storefront that felt premium from first glance and could support a minimal seasonal range. The challenge was to make less feel more compelling.'
      },
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/30df49d8-8c21-4ca3-b7c4-764592c871d6-Ig_%20r3bellis.jpeg',
        alt: 'Forma — product planning'
      },
      {
        type: 'text',
        label: 'Challenge',
        body: 'Every choice had to pull weight: type scale, spacing, imagery, and navigation all needed to stay elegant while still supporting conversion.'
      },
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/d79ac78f-38f6-46fb-bdc7-469483b37dec-Bridal%20Party.jpeg',
        alt: 'Forma — product detail frame'
      },
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/aeeca3d9-57fa-4160-a9a7-d8675e6cfa62-912401205758008176.jpeg',
        alt: 'Forma — final store select'
      },
      {
        type: 'text',
        label: 'Outcome',
        body: 'We created a stripped-back commerce experience with strong product hierarchy, clear navigation, and a tactile visual system that kept attention on the collection.'
      }
    ],
    related: ['vanta', 'orbit']
  },

  {
    id: 'orbit',
    title: 'ORBIT',
    subtitle: 'Editorial Experience',
    year: '2024',
    client: 'Orbit Magazine',
    industry: 'Editorial & Culture',
    duration: '3 Weeks',
    services: ['Editorial Design', 'Motion Design', 'Art Direction'],
    websiteUrl: '#',
    heroImage: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/9997400d-3e1c-49f9-bf5c-6593b4ec4c87-591519732300652360.jpeg',
    description: 'An editorial experience exploring movement, architecture, and layout rhythm.',
    sections: [
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/9997400d-3e1c-49f9-bf5c-6593b4ec4c87-591519732300652360.jpeg',
        alt: 'Orbit — editorial experience hero'
      },
      {
        type: 'text',
        label: 'Overview',
        body: 'Orbit wanted a site that could support long-form storytelling and visual experimentation. The brief asked for something architectural and fluid at the same time.'
      },
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/fd81e0ce-1715-4808-8a6d-5d94efd5775d-10062799164149777.jpeg',
        alt: 'Orbit — planning frame'
      },
      {
        type: 'text',
        label: 'Challenge',
        body: 'We had to balance editorial freedom with strong usability so the experience remained elegant on both desktop and mobile.'
      },
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/8a1ec087-8bd3-4360-b031-ceead9afd90f-42221315255378571.jpeg',
        alt: 'Orbit — layout study one'
      },
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/4cd6894c-3b3a-401e-85bb-b13ed6ac03fc-All%20eyes%20on%20you.jpeg',
        alt: 'Orbit — layout study two'
      },
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/6f271d64-6c22-44e4-b05f-2574b1ab5ba4-655555289550454385.jpeg',
        alt: 'Orbit — editorial interior'
      },
      {
        type: 'text',
        label: 'Outcome',
        body: 'We designed a grid-led structure with bold transitions and a restrained palette, giving the publication a more distinctive digital presence.'
      }
    ],
    related: ['forma', 'lune']
  },

  {
    id: 'lune',
    title: 'LUNE',
    subtitle: 'Beauty Narrative',
    year: '2025',
    client: 'Lune Creative',
    industry: 'Beauty & Wellness',
    duration: '2 Weeks',
    services: ['Brand Strategy', 'Creative Direction', 'Content Design'],
    websiteUrl: '#',
    heroImage: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/6f271d64-6c22-44e4-b05f-2574b1ab5ba4-655555289550454385.jpeg',
    description: 'A beauty narrative and content system for a label built on softness and ritual.',
    sections: [
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/6f271d64-6c22-44e4-b05f-2574b1ab5ba4-655555289550454385.jpeg',
        alt: 'Lune — beauty narrative hero'
      },
      {
        type: 'text',
        label: 'Overview',
        body: 'Lune wanted digital imagery and structure that felt calm, tactile, and elevated. The work focused on translating a quiet physical experience into a polished online presence.'
      },
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/8a1ec087-8bd3-4360-b031-ceead9afd90f-42221315255378571.jpeg',
        alt: 'Lune — content study'
      },
      {
        type: 'text',
        label: 'Challenge',
        body: 'The category is crowded, so the experience had to avoid the usual beauty clichés while still feeling warm and premium.'
      },
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/aeeca3d9-57fa-4160-a9a7-d8675e6cfa62-912401205758008176.jpeg',
        alt: 'Lune — content frame one'
      },
      {
        type: 'image',
        src: 'https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/1fc4f6d5-c5cc-4f99-bf6e-49f08c886deb-1000010292319574207.jpeg',
        alt: 'Lune — content frame two'
      },
      {
        type: 'text',
        label: 'Outcome',
        body: 'We shaped a softer visual language, refined content hierarchy, and a calmer pacing that made the brand feel more memorable and complete.'
      }
    ],
    related: ['orbit', 'angel']
  }
];

// Helper: get a project by id
function getProject(id) {
  return PROJECTS.find(p => p.id === id) || null;
}

// Helper: get related project summaries
function getRelated(ids) {
  return ids.map(id => PROJECTS.find(p => p.id === id)).filter(Boolean);
}
