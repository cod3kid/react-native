export const languages = [
  {
    id: "en",
    language: "English",
    native: "English",
  },
  {
    id: "sp",
    language: "Spanish",
    native: "Español",
  },
];

export const bottomNavIcons = {
  homeLightActive: require("../assets/icons/home-light-active.png"),
  homeLightInactive: require("../assets/icons/home-light-inactive.png"),

  homeDarkActive: require("../assets/icons/home-dark-active.png"),
  homeDarkInactive: require("../assets/icons/home-dark-inactive.png"),

  searchLightActive: require("../assets/icons/search-light-active.png"),
  searchLightInactive: require("../assets/icons/search-light-inactive.png"),

  searchDarkActive: require("../assets/icons/search-dark-active.png"),
  searchDarkInactive: require("../assets/icons/search-dark-inactive.png"),

  reelsLightActive: require("../assets/icons/reels-light-active.png"),
  reelsLightInactive: require("../assets/icons/reels-light-inactive.png"),

  reelsDarkActive: require("../assets/icons/reels-dark-active.png"),
  reelsDarkInactive: require("../assets/icons/reels-dark-inactive.png"),

  heartLightActive: require("../assets/icons/heart-light-active.png"),
  heartLightInactive: require("../assets/icons/heart-light-inactive.png"),

  heartDarkActive: require("../assets/icons/heart-dark-active.png"),
  heartDarkInactive: require("../assets/icons/heart-dark-inactive.png"),
};

export const otherIcons = {
  addPostLight: require("../assets/icons/add-post-light.png"),
  addPostDark: require("../assets/icons/add-post-dark.png"),

  messengerLight: require("../assets/icons/messenger-light.png"),
  messengerDark: require("../assets/icons/messenger-dark.png"),

  likeLightActive: require("../assets/icons/like-light-active.png"),
  likeDarkActive: require("../assets/icons/like-dark-active.png"),

  likeLightInactive: require("../assets/icons/like-light-inactive.png"),
  likeDarkInactive: require("../assets/icons/like-dark-inactive.png"),

  commentLight: require("../assets/icons/comment-light.png"),
  commentDark: require("../assets/icons/comment-dark.png"),

  shareLight: require("../assets/icons/share-light.png"),
  shareDark: require("../assets/icons/share-dark.png"),

  bookmarkLight: require("../assets/icons/bookmark-light.png"),
  bookmarkDark: require("../assets/icons/bookmark-dark.png"),
};

export const settingsList = [
  {
    name: "Dark Mode",
    icon: "theme-light-dark",
    isDark: true,
  },
  {
    name: "Follow and Invite Friends",
    icon: "account-plus",
  },
  {
    name: "Notifications",
    icon: "bell-outline",
  },
  {
    name: "Privacy",
    icon: "lock-outline",
  },
  {
    name: "Security",
    icon: "shield-check-outline",
  },
  {
    name: "Ads",
    icon: "google-ads",
  },
  {
    name: "Account",
    icon: "account-circle-outline",
  },
  {
    name: "Help",
    icon: "lifebuoy",
  },
  {
    name: "About",
    icon: "information-outline",
  },

  {
    name: "Log Out",
    icon: "logout-variant",
  },
];
export const stories = [
  {
    user: "BelugaMeluga",
    image:
      "https://pbs.twimg.com/profile_images/1422644317676507136/EszIU9uI_400x400.jpg",
    border: "#27ae60",
  },
  {
    user: "Beluga Jr.",
    image:
      "https://static.wikia.nocookie.net/youtube/images/7/73/BelugaJrPFP_400x400.jpg/revision/latest/scale-to-width-down/350?cb=20210829100256",
    border: "#2980b9",
  },
  {
    user: "Hecker",
    image:
      "https://images.idgesg.net/images/article/2018/02/security_safety_vulnerability_vulnerabilities_risks_danger_threats_hacking_stealing_phishing_ddos_virus_spyware_malware_crime_thinkstock_485001496-100750012-large.jpg?auto=webp",
    border: "#2c3e50",
  },
  {
    user: "Vim",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vimlogo.svg/64px-Vimlogo.svg.png",
    border: "#8e44ad",
  },
  {
    user: "React Lover",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--50wZvNu6--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png",
    border: "#c0392b",
  },
];

export const posts = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1633655331363-c34828bcfa76?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHFQWXNEenZKT1ljfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    user: stories[0].user,
    likes: 34685,
    caption:
      "Que lindo poder disfrutar de estos momentos que estamos viviendo! Gran triunfo!!! Gracias nuevamente por lo que me hacen sentir. Feliz es poco! Que no se corte :flag_ar::flag_ar: Nos vemos el jueves :muscle::muscle:",
    profile_picture: stories[0].image,
    comments: [
      { user: "rinzhin_net", comment: "WOW" },
      { user: "murad_abdul_rahoof", comment: "meow" },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1633655331294-687588ddc8d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    user: stories[2].user,
    likes: 34685,
    caption:
      "Photo by @gabrielegalimbertiphoto / A fishing boat sails among icebergs in Ilulissat Icefjord, on the west coast of Greenland.",
    profile_picture: stories[2].image,
    comments: [
      { user: "rinzhin_net", comment: "WOW , This is an amazing picture man" },
      {
        user: "murad_abdul_rahoof",
        comment: "Great, I like to visit there.where is this place .",
      },
    ],
  },
];
