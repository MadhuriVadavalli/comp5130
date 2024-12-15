import { Sidebar as FlowbiteSidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards, HiSupport, HiOutlineCloudUpload } from "react-icons/hi";
import userImg from "../assets/userImg.jpg";

// Rename your component if necessary
const Sidebar = () => {
  return (
    <FlowbiteSidebar aria-label="Sidebar with content separator example" style={{ backgroundColor: '#f0f0f0' }}>
        <FlowbiteSidebar.Logo href="#" img={userImg} imgAlt="Flowbite logo">
        Flowbite
      </FlowbiteSidebar.Logo>
      <FlowbiteSidebar.Items>
        <FlowbiteSidebar.ItemGroup>
          <FlowbiteSidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload Books
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="/admin/dashboard/users" icon={HiUser}>
  Users
</FlowbiteSidebar.Item>

         
          <FlowbiteSidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="/logout" icon={HiTable}>
            Log Out
          </FlowbiteSidebar.Item>
        </FlowbiteSidebar.ItemGroup>
        <FlowbiteSidebar.ItemGroup>
          
          <FlowbiteSidebar.Item href="/help" icon={HiSupport}>
            Help
          </FlowbiteSidebar.Item>
        </FlowbiteSidebar.ItemGroup>
      </FlowbiteSidebar.Items>
    </FlowbiteSidebar>
  );
};

export default Sidebar;
