type SideBarItem = { label: string; icon: string; anchor?: string };
type Experience = { jobTitle: string; location: string; technologies: Array<string>; company: string; startDate: string; endDate: string };
type Skill = { name: string; field: string; use: Array<string>; framework: boolean; skill: number };
type ContactWay = { calltoaction: string; image: string; link: string };

export { SideBarItem, Skill, Experience, ContactWay };
