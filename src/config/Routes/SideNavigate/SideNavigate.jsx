import * as AiIcons from "react-icons/ai";
import * as RxIcons from "react-icons/rx";
import * as ImIcons from "react-icons/im";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as TbIcons from "react-icons/tb";

import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";

export const SideNavigate = [
  {
    label: "Home",
    icon: <AiIcons.AiOutlineHome />,
    path: "/",
  },
  // {
  //   label: "Full Dashboard",
  //   icon: <RxIcons.RxDashboard />,
  //   path: "/full-dashboard",
  // },
  {
    label: "Status Machine",
    icon: <ImIcons.ImStatsDots />,
    children: [
      {
        label: "Status Machine H+0",
        path: "/StatMach0",
      },
      {
        label: "Status Machine H+1",
        path: "/StatMach1",
      },
      {
        label: "Calculate Cassete",
        path: "/calculate-cassete",
      },
      {
        label: "ReportReplenishment",
        path: "/report-replenishment",
      },
    ],
  },
  {
    label: "Status Transaksi",
    icon: <MdIcons.MdQueryStats />,
    path: "/status-transaksi",
  },
  {
    label: "Kartu Tertelan",
    icon: <MdIcons.MdOutlineCreditCardOff />,
    path: "/kartu-tertelan",
  },
  {
    label: "Ej Browser",
    icon: <BsIcons.BsSearch />,
    path: "/ej-browser",
  },
  {
    label: "Detail Search",
    icon: <TbIcons.TbListSearch />,
    path: "/detail-search",
  },
  {
    label: "Menu Admin",
    icon: <FaIcons.FaUserCog />,
    children: [
      {
        label: "Mapping Code",
        icon: "",
        path: "/Admin/Mappingcode",
      },
      {
        label: "Mapping Key",
        icon: "",
        path: "/Admin/MappingKey",
      },
      {
        label: "User Management",
        icon: "",
        path: "/Admin/UserManagement",
      },
      {
        label: "Role & Access",
        icon: "",
        path: "/Admin/Role",
      },
      {
        label: "Batch Time Update",
        icon: "",
        path: "/Admin/BatchTimeUpdate",
      },
      {
        label: "Mapping Bin Kartu",
        icon: "",
        path: "/Admin/Mappingcard",
      },
      {
        label: "List OP Code",
        icon: "",
        path: "/Admin/ListOPCode",
      },
      {
        label: "Mapping Jenis Transaksi",
        icon: "",
        path: "/Admin/Transaction",
      },
      {
        label: "Audit Trail",
        icon: "",
        path: "/Admin/Audittrail",
      },
    ],
  },
  {
    label: "Change Password",
    icon: <FiIcons.FiSettings />,
    path: "/change-password",
  },
  {
    label: "Logout",
    icon: <MdIcons.MdLogout />,
    

  },
];
