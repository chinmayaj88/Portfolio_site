export interface HeaderData {
  name: string;
  email: string;
  resumeLink: string;
  navLinks: {
    label: string;
    href: string;
  }[];
}

export const headerData: HeaderData = {
  name: "Chinmaya Jena",
  email: "jenachinmaya51@gmail.com",
  resumeLink: "https://drive.google.com/file/d/1F4tzs6yOor2Qk8aaX_jG4rPMvNh6XJCJ/view?usp=sharing",
  navLinks: [
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    // { label: "Blogs", href: "/blog" },
  ],
};

