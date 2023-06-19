// Config for the entire site.
module.exports = {
  // Site title.
  title: "Jigar Sheth",

  // Default description for pages. Provide "description" in the front matter of
  // a page to override this.
  description: "Contact information for Jigar Sheth.",

  // Site URLs.
  baseUrl: "https://nodwingaming.com/", // No slash at the end.
  shortBaseUrl: "https://nodwingaming.com/", // Same as baseUrl but without http or https.

  // Your name.
  name: "Jigar Sheth",

  // Profile picture on home page. Set to null to leave out.
  profilePic: {
    best: "https://d35hr0os3yc7ki.cloudfront.net/Jigar/Jigar.jpeg",
    small: "https://d35hr0os3yc7ki.cloudfront.net/Jigar/Jigar.jpeg",
  },

  // Name pronunciation. Set to null to leave out.
  pronunciation: "https://d35hr0os3yc7ki.cloudfront.net/Jigar/Jigar.mp3",

  // Tagline that shows up below the profile picture on the home page and below
  // the name on the business card. Set to null to leave out.
  tagline: "Chief Revenue Officer at Nodwin Gaming",

  // Path to Open Graph image. Change this URL whenever the image changes so
  // that sites like FB change their preview. Set to null to leave out.
  openGraph: {
    absolute: true,
    url: "https://d35hr0os3yc7ki.cloudfront.net/Jigar/Jigar.jpeg",
  },

  // Path to Twitter preview image. Set to null to leave out.
  twitterPreview: {
    absolute: true,
    url: "https://d35hr0os3yc7ki.cloudfront.net/Jigar/Jigar.jpeg",
  },

  // Links to your other websites.
  // - "fa" is the FontAwesome code for the icon; for example, see here:
  //   https://fontawesome.com/v5.15/icons/globe-americas
  // - textColor is configured strangely because tailwind needs to pick up on it
  //   and avoid purging the class name -- see here:
  //   https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html
  //   - See tailwind.config.js (in the root of this repo) for how to add custom
  //     colors.
  links: [
    {
      name: "Website",
      desc: "nodwingaming.com",
      url: "https://nodwingaming.com/",
      fa: "fas fa-globe-americas",
      textColor: "text-website",
    },
    {
      name: "Work",
      desc: "jigar.sheth@nodwin.com",
      url: "mailto:jigar.sheth@nodwin.com",
      fa: "fas fa-envelope",
      textColor: "text-gray-600",
    },
     {
      name: "Personal",
      desc: "jigar.sheth1@gmail.com",
      url: "mailto:jigar.sheth1@gmail.com",
      fa: "fas fa-envelope",
      textColor: "text-gray-600",
    },
    {
      name: "LinkedIn",
      desc: "@Jigar Sheth",
      url: "https://www.linkedin.com/in/jigarsheth1/",
      fa: "fab fa-linkedin",
      textColor: "text-linkedin",
    },
    {
      name: "Save Contact",
      url: "https://d35hr0os3yc7ki.cloudfront.net/Jigar/Jigarcontact.vcf",
      fa: "fas fa-file-alt",
      textColor: "text-yellow-500",
    },
  ],
};
