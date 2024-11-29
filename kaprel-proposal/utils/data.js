export const wordpressData = {
  type: "Update Current WordPress Website",
  deliverables: [
    "UX/UI design improvements",
    "Copywriting updates for consistency",
    "Website development for navigation and routing fixes",
    "Image and content updates",
    "Accessibility enhancements",
  ],
  timeline: [
    "Rough audit on the current website (2 weeks)",
    "Review back end: plugins, hosting, CMS (2 weeks)",
    "Amend website with copy + images, fix routing/navigation (3 weeks)",
  ],
  message:
    "Due to the fact that a different developer built this, we do not know what to expect on the back end until we can access your WordPress account.",
  pricing: {
    base: 7000,
    addons: [
      { name: "Customer support (chatbot)", price: 2000 },
      { name: "Automatic quote generator", price: 2000 },
      { name: "3D Rendered Experience", price: 3500 },
      { name: "Analytics and reporting", price: 800 },
      { name: "Keyword research & blogging", price: 500, per: "article" },
      { name: "Enhance Google listing", price: 1000 },
    ],
  },
};

export const newWebsiteData = {
  type: "New Website Build",
  deliverables: [
    "Complete UX/UI design",
    "Comprehensive copywriting",
    "Full website development",
    "Responsive design",
    "Technical and on-page SEO",
    "Progressive Web App functionality",
  ],
  timeline: [
    "Mock-up design, layout, copy, imagery (1 week)",
    "First draft of fully functional website (2 weeks)",
    "3 months support after handover",
  ],
  message:
    "We can give you a better website if we build from scratch, tailored precisely to your business needs.",
  pricing: {
    base: 13000,
    paymentTerms: "50% upfront, then monthly service",
    addons: [
      { name: "Off-page SEO & Backlink building", price: 2500 },
      { name: "Analytics and reporting", price: 800 },
      { name: "Keyword research & blogging", price: 500, per: "article" },
      { name: "3D Rendered Experience", price: 3500 },
      { name: "Enhance Google listing", price: 1000 },
      { name: "Customer support (chatbot)", price: 2000 },
      { name: "Automatic quote generator", price: 2000 },
    ],
  },
};
