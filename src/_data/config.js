// Config for the entire site.
module.exports = {
  // Site title.
  title: "Saurabh Abbi",

  // Default description for pages. Provide "description" in the front matter of
  // a page to override this.
  description: "Contact information for Saurabh Abbi.",

  // Site URLs.
  baseUrl: "https://www.tmtalentmanagement.com", // No slash at the end.
  shortBaseUrl: "www.tmtalentmanagement.com", // Same as baseUrl but without http or https.

  // Your name.
  name: "Saurabh Abbi",

  // Profile picture on home page. Set to null to leave out.
  profilePic: {
    best: "https://d35hr0os3yc7ki.cloudfront.net/Abbi/Saurabh_photo.jpeg",
    small: "https://d35hr0os3yc7ki.cloudfront.net/Abbi/Saurabh_photo.jpeg",
  },

  // Name pronunciation. Set to null to leave out.
  pronunciation: "https://d35hr0os3yc7ki.cloudfront.net/Abbi/Saurabh_audio.mp3",

  // Tagline that shows up below the profile picture on the home page and below
  // the name on the business card. Set to null to leave out.
  tagline: "CEO and Partner at TM Ventures Pvt. Ltd.",

  // Path to Open Graph image. Change this URL whenever the image changes so
  // that sites like FB change their preview. Set to null to leave out.
  openGraph: {
    absolute: true,
    url: "https://d35hr0os3yc7ki.cloudfront.net/Abbi/Saurabh_photo.jpeg",
  },

  // Path to Twitter preview image. Set to null to leave out.
  twitterPreview: {
    absolute: true,
    url: "https://d35hr0os3yc7ki.cloudfront.net/Abbi/Saurabh_photo.jpeg",
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
      desc: "tmtalentmanagement.com",
      url: "https://www.tmtalentmanagement.com",
      fa: "fas fa-globe-americas",
      textColor: "text-website",
    },
    {
      name: "Work",
      desc: "abbi@tmventures.in",
      url: "mailto:abbi@tmventures.in",
      fa: "fas fa-envelope",
      textColor: "text-gray-600",
    },
     {
      name: "Personal",
      desc: "saurabh.abbi@gmail.com",
      url: "mailto:saurabh.abbi@gmail.com",
      fa: "fas fa-envelope",
      textColor: "text-gray-600",
    },
    {
      name: "Twitter",
      desc: "@Saurabh_abbi",
      url: "https://twitter.com/Saurabh_abbi",
      fa: "fab fa-twitter",
      textColor: "text-twitter",
    },
    {
      name: "LinkedIn",
      desc: "@Saurabh Abbi",
      url: "https://www.linkedin.com/in/saurabh-abbi-15170519/",
      fa: "fab fa-linkedin",
      textColor: "text-linkedin",
    },
       {
      name: "Instagram",
      desc: "@saurabhabbi",
      url: "https://www.instagram.com/saurabhabbi/",
      fa: "fab fa-instagram",
      textColor: "text-instagram",
    },
    {
      name: "Save Contact",
      url: "https://d35hr0os3yc7ki.cloudfront.net/Abbi/Saurabh_contact.vcf",
      fa: "fas fa-file-alt",
      textColor: "text-yellow-500",
    },
  ],
};
