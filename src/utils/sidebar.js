// icons
import Analitika from "../assets/icons/analytics.svg?react";
import Lid from "../assets/icons/lid.svg?react";
import Finance from "../assets/icons/finance.svg?react";
import Students from "../assets/icons/student.svg?react";
import Groups from "../assets/icons/group.svg?react";
import Course from "../assets/icons/course.svg?react";
import HR from "../assets/icons/hr.svg?react";
import Settings from "../assets/icons/setting.svg?react";
// Components
import { Generics } from "../view/Generics";
import AnalyticsView from "../view/AnalitikaView";
import LidsAllView from "../view/Lids/All";
import FirstClassView from "../view/Lids/FirstClass";
import NewStudentView from "../view/Lids/New";
import AllStudentsView from "../view/Students/All";
import ActiveStudentsView from "../view/Students/Active";
import ArchiveStudentsView from "../view/Students/Archive";
import GuruhlarView from "../view/Guruhlar/Guruhlar";
import RoomsView from "../view/Guruhlar/Rooms";
import HodimlarView from "../view/HR/Hodimlar";
import RolesView from "../view/HR/Roles";
import ListView from "../view/Kurslar/List.jsx";
import FieldView from "../view/Kurslar/Field.jsx";
import UmumiyView from "../view/Sozlamalar/Umumiy.jsx";

const sidebar = [
  {
    id: 1,
    title: "Analitika",
    path: "/analitika",
    icon: Analitika,
    isPrivate: true,
    element: AnalyticsView,
    role: ["admin", "manager"],
  },
  {
    id: 2,
    title: "Lidlar", // buyurtma
    path: "/lidlar",
    isPrivate: true,
    icon: Lid,
    element: Generics,
    role: ["admin"],
    children: [
      {
        id: `2-1`,
        title: "Barcha lidlar",
        path: "/lidlar/all-lids",
        isPrivate: true,
        element: LidsAllView,
        role: ["admin", "manager"],
      },
      {
        id: `2-2`,
        title: "Birinchi dars",
        path: "/lidlar/first-class",
        isPrivate: true,
        element: FirstClassView,
        role: ["admin", "manager"],
      },
      {
        id: `2-3`,
        title: "Yangi talabalar",
        path: "/lidlar/new-students",
        isPrivate: true,
        element: NewStudentView,
        role: ["admin", "manager"],
      },
    ],
  },
  // {
  //   id: 3,
  //   title: "Moliya",
  //   path: "/moliya",
  //   isPrivate: true,
  //   icon: Finance,
  //   element: Generics,
  //   role: ["admin"],
  // },
  {
    id: 4,
    title: "Talabalar",
    path: "/talabalar",
    isPrivate: true,
    element: Generics,
    icon: Students,
    role: ["admin", "mentor", "manager"],
    children: [
      {
        id: `4-1`,
        title: "Barcha talabalar",
        path: "/talabalar/all-talabalar",
        isPrivate: true,
        element: AllStudentsView,
        role: ["admin", "manager"],
      },
      // {
      //   id: `4-2`,
      //   title: "Davomat",
      //   path: "/talabalar/davomat",
      //   isPrivate: true,
      //   element: Generics,
      //   role: ["admin", "manager"],
      // },
      {
        id: `4-3`,
        title: "Aktive",
        path: "/talabalar/active",
        isPrivate: true,
        element: ActiveStudentsView,
        role: ["admin", "manager"],
      },
      {
        id: `4-4`,
        title: "Arxiv",
        path: "/talabalar/archive",
        isPrivate: true,
        element: ArchiveStudentsView,
        role: ["admin", "manager"],
      },
      // {
      //   id: `4-5`,
      //   title: "Ota-onalar",
      //   path: "/talabalar/parents",
      //   isPrivate: true,
      //   element: Generics,
      //   role: ["admin", "manager"],
      // },
    ],
  },
  {
    id: 5,
    title: "Guruhlar",
    path: "/guruhlar",
    isPrivate: true,
    icon: Groups,
    element: Generics,
    role: ["admin", "mentor", "manager"],
    children: [
      {
        id: `5-1`,
        title: "Guruhlar",
        path: "/guruhlar/guruhlar",
        isPrivate: true,
        element: GuruhlarView,
        role: ["admin", "manager"],
      },
      // {
      //   id: `5-2`,
      //   title: "Dars Jadvali",
      //   path: "/guruhlar/jadval",
      //   isPrivate: true,
      //   element: Generics,
      //   role: ["admin", "manager"],
      // },
      {
        id: `5-3`,
        title: "Xonalar",
        path: "/guruhlar/xonalar",
        isPrivate: true,
        element: RoomsView,
        role: ["admin", "manager"],
      },
    ],
  },
  {
    id: 6,
    title: "Kurslar",
    path: "/kurslar",
    isPrivate: true,
    icon: Course,
    element: Generics,
    role: ["admin", "mentor", "manager"],
    children: [
      {
        id: `6-1`,
        title: "Barcha Kurslar",
        path: "/kurslar/all-kurslar",
        isPrivate: true,
        element: ListView,
        role: ["admin", "manager"],
      },
      {
        id: `6-2`,
        title: "Yo'nalishlar",
        path: "/kurslar/yonalish",
        isPrivate: true,
        element: FieldView,
        role: ["admin", "manager"],
      },
    ],
  },
  {
    id: 7,
    title: "HR",
    path: "/hr",
    isPrivate: true,
    icon: HR,
    element: Generics,
    role: ["admin", "manager"],
    children: [
      {
        id: `7-1`,
        title: "Rollar",
        path: "/hr/role",
        isPrivate: true,
        element: HodimlarView,
        role: ["admin", "manager"],
      },
      {
        id: `7-2`,
        title: "Hodimlar",
        path: "/hr/hodimlar",
        isPrivate: true,
        element: RolesView,
        role: ["admin", "manager"],
      },
    ],
  },
  {
    id: 8,
    title: "Sozlamalar",
    path: "/sozlamalar",
    isPrivate: true,
    icon: Settings,
    element: Generics,
    role: ["admin", "manager"],
    children: [
      {
        id: `8 - 1`,
        title: "Umumiy Sozlamalar",
        parentID: 8,
        path: "/sozlamalar/umumiy/check",
        isPrivate: true,
        element: UmumiyView,
        role: ["admin", "manager"],
      },
      {
        id: `8 - 2`,
        title: "Manager",
        path: "/sozlamalar/manager/tolovlar",
        parentID: 8,
        isPrivate: true,
        element: Generics,
        role: ["admin", "manager"],
      },
      {
        id: `8 - 3`,
        title: "Mentor",
        path: "/sozlamalar/mentor",
        isPrivate: true,
        element: Generics,
        role: ["admin", "manager"],
      },
      {
        id: `8 - 4`,
        title: "Talaba",
        path: "/sozlamalar/talaba",
        isPrivate: true,
        element: Generics,
        role: ["admin", "manager"],
      },
    ],
  },
  {
  id: 9,
  title: "Log In",
  path: "/login",
  isPrivate: true,
  element: Generics,
  hidden: true,
},
{
  id: 10,
  title: "Reset",
  path: "/reset",
  isPrivate: true,
  element: Generics,
  hidden: true,
},
];

export default sidebar;