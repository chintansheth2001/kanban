import {
  Category,
  Message,
  TaskSquare,
  Profile2User,
  Setting2,
} from "iconsax-react";
import av1 from "../assets/av1.jpg";
import av2 from "../assets/av2.jpg";
import av3 from "../assets/av3.jpg";
import av4 from "../assets/av4.jpg";
import av5 from "../assets/av5.jpg";
import av6 from "../assets/av6.jpg";
import cardi1 from "../assets/cardi1.png";
import cardi2 from "../assets/cardi2.png";
import cardi3 from "../assets/cardi3.png";

const task1 = {
  id: "draggable1",
  title: "Brainstorming",
  text: "Brainstorming brings team members diverse experience into play. ",
  users: [av2, av5, av4],
  comments: 12,
  files: 0,
  priority: "Low",
  image: "",
};
const task2 = {
  id: "draggable2",
  title: "Research",
  text: "User research helps you to create an optimal product for users. ",
  users: [av3, av6],
  comments: 10,
  files: 3,
  priority: "High",
  image: "",
};
const task3 = {
  id: "draggable3",
  title: "Wireframes",
  text: "Low fidelity wireframes include the most basic content and visuals.",
  users: [av2, av6, av5],
  comments: 2,
  files: 0,
  priority: "High",
  image: "",
};

const task4 = {
  id: "draggable4",
  title: "Mockup",
  text: "Low fidelity mockup include the most basic content and visuals.",
  users: [av1, av2],
  comments: 4,
  files: 1,
  priority: "High",
  image: "",
};

const task5 = {
  id: "draggable5",
  title: "Onboarding Illustrations ",
  text: "",
  users: [av4, av5, av2],
  comments: 14,
  files: 15,
  priority: "Low",
  image: cardi1,
};

const task6 = {
  id: "draggable6",
  title: "Moodboard ",
  text: "",
  users: [av4],
  comments: 9,
  files: 10,
  priority: "Low",
  image: cardi2,
};

const task7 = {
  id: "draggable7",
  title: "User Journeys ",
  text: "User journeys are the step-by-step journey that a user takes to reach their goal.",
  users: [av6, av5],
  comments: 8,
  files: 20,
  priority: "Completed",
  image: "",
};

const task8 = {
  id: "draggable8",
  title: "Mobile App Design",
  text: "",
  users: [av6, av5],
  comments: 12,
  files: 15,
  priority: "Completed",
  image: cardi3,
};

const task9 = {
  id: "draggable9",
  title: "Design System",
  text: "It just needs to adapt the UI from what you did before ",
  users: [av2, av4, av5],
  comments: 12,
  files: 15,
  priority: "Completed",
  image: "",
};

const sidebarClose = false;
const MobileAppData = [
  {
    id: "droppable1",
    title: "To Do",
    color: "purple",
    tasks: [task1, task2, task3, task4],
  },
  {
    id: "droppable2",
    title: "On Progress",
    color: "orange",
    tasks: [task5, task6, task7],
  },
  { id: "droppable3", title: "Done", color: "green", tasks: [task8, task9] },
];

const WebsiteRedesign = [
  {
    id: "droppable1",
    title: "WR To Do",
    color: "purple",
    tasks: [task1, task2, task3, task4],
  },
  {
    id: "droppable2",
    title: "WR On Progress",
    color: "orange",
    tasks: [task5, task6, task7],
  },
  { id: "droppable3", title: "WR Done", color: "green", tasks: [task8, task9] },
];

const DesignSystem = [
  {
    id: "droppable1",
    title: "DS To Do",
    color: "purple",
    tasks: [task1, task2, task3, task4],
  },
  {
    id: "droppable2",
    title: "DS On Progress",
    color: "orange",
    tasks: [task5, task6, task7],
  },
  { id: "droppable3", title: "DS Done", color: "green", tasks: [task8, task9] },
];

const Wireframes = [
  {
    id: "droppable1",
    title: "W To Do",
    color: "purple",
    tasks: [task1, task2, task3, task4],
  },
  {
    id: "droppable2",
    title: "W On Progress",
    color: "orange",
    tasks: [task5, task6, task7],
  },
  { id: "droppable3", title: "W Done", color: "green", tasks: [task8, task9] },
];

export const appData = {
  menu: [
    { id: 1, icon: Category, title: "Home" },
    { id: 2, icon: Message, title: "Messages" },
    { id: 3, icon: TaskSquare, title: "Tasks" },
    { id: 4, icon: Profile2User, title: "Members" },
    { id: 5, icon: Setting2, title: "Settings" },
  ],
  projects: [
    {
      id: 1,
      title: "Mobile App",
      color: "",
      active: true,
      tasksCol: MobileAppData,
    },
    {
      id: 2,
      title: "Website Redesign",
      color: "orange",
      active: false,
      tasksCol: WebsiteRedesign,
    },
    {
      id: 3,
      title: "Design System",
      color: "purple",
      active: false,
      tasksCol: DesignSystem,
    },
    {
      id: 4,
      title: "Wireframes",
      color: "blue",
      active: false,
      tasksCol: Wireframes,
    },
  ],
  sidebarClose,
};
