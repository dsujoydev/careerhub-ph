import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 z-50 bg-white w-full">
      <div className="flex justify-between align-middle container mx-auto px-6 py-4">
        <span className="font-bold text-xl">CareerHub</span>
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            <NavigationMenuItem>
              <NavLink
                to="/"
                style={({ isActive, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "#7E90FE" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink
                to="/applied-jobs"
                style={({ isActive, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "#7E90FE" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Applied Jobs</NavigationMenuLink>
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink to="/blog">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Blog</NavigationMenuLink>
              </NavLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button onClick={() => navigate("/application")} variant="careerhub">
          Start Applying
        </Button>
      </div>
    </div>
  );
};

export default Header;
