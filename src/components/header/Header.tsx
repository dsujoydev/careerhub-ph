import {
  NavigationMenu,
  //   NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  //   NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="flex justify-between align-middle">
      <span className="font-bold">CareerHub</span>
      <NavigationMenu>
        <NavigationMenuList>
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
              to="/appliedJobs"
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
      <Button variant="careerhub">Start Applying</Button>
    </div>
  );
};

export default Header;
