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
  resumeLink: "https://drive.google.com/file/d/1dgn70ciGsKTJAyJyKGr5G_X3fGwDg_wh/view?usp=sharing",
  navLinks: [
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/about" },
    { label: "Blogs", href: "/blog" },
  ],
};

