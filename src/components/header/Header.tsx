import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const menuItems = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "Applied Jobs", path: "/applied-jobs" },
  { id: 3, label: "Blog", path: "/blog" },
];

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-50 bg-white w-full">
      <div className="flex justify-between items-center container mx-auto px-6 py-4">
        {/* Logo Section */}
        <span className="font-bold text-xl">CareerHub</span>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.id}>
                <NavLink
                  to={item.path}
                  style={({ isActive }) => ({
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "#7E90FE" : "black",
                  })}
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.label}</NavigationMenuLink>
                </NavLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Call-to-Action Button */}
        <Button onClick={() => navigate("/application")} variant="careerhub" className="font-semibold">
          Start Applying
        </Button>
      </div>
    </div>
  );
};

export default Header;
