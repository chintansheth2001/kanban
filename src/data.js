import {
  Category,
  Message,
  TaskSquare,
  Profile2User,
  Setting2,
  AddSquare,
  LampOn,
} from "iconsax-react";

export const ProjectM = {
  menu: [
    { id: 1, icon: Category, title: "Home" },
    { id: 2, icon: Message, title: "Messages" },
    { id: 3, icon: TaskSquare, title: "Tasks" },
    { id: 4, icon: Profile2User, title: "Members" },
    { id: 5, icon: Setting2, title: "Settings" },
  ],
  projects: [
    { id: 1, title: "Mobile App", color: "", active: true },
    { id: 2, title: "Website Redesign", color: "orange", active: false },
    { id: 3, title: "Design System", color: "purple", active: false },
    { id: 4, title: "Wireframes", color: "blue", active: false },
  ],
};
