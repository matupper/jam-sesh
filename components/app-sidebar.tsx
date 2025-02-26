"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Settings2,
  Signpost,
  SquareTerminal,
} from "lucide-react"
import { IconWrapper } from "@/components/icon-wrapper"
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import MyLogo from "@/components/my-logo"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const data = {
    user: {
      name: "Guest",
      email: "",
      avatar: "/avatars/user-avatar.png",
    },
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: <IconWrapper icon={SquareTerminal} />,
        isActive: true,
        items: [
          {
            title: "Financial KPIs",
            url: "#",
          },
          {
            title: "Inventory Views",
            url: "#",
          },
          {
            title: "Forecasting",
            url: "#",
          },
        ],
      },
      {
        title: "Pieces",
        url: "/pieces",
        icon: <IconWrapper icon={Bot} />,
        items: [
          {
            title: "Basic",
            url: "#",
          },
          {
            title: "Wall",
            url: "#",
          },
          {
            title: "SNOT",
            url: "#",
          },
          {
            title: "Angle",
            url: "#",
          },
          {
            title: "Curve",
            url: "#",
          },
          {
            title: "Articulation",
            url: "#",
          },
          {
            title: "Clip",
            url: "#",
          },
          {
            title: "Minifigure",
            url: "#",
          },
          {
            title: "Nature",
            url: "#",
          },
          {
            title: "Vehicle",
            url: "#",
          },
          {
            title: "Technic",
            url: "#",
          },
          {
            title: "Electronics",
            url: "#",
          },
          {
            title: "Other",
            url: "#",
          },
          {
            title: "Duplo",
            url: "#",
          },
        ],
      },
      {
        title: "Lots",
        url: "/lots",
        icon: <IconWrapper icon={BookOpen} />,
        items: [
          {
            title: "By Color",
            url: "#",
          },
          {
            title: "By Theme",
            url: "#",
          },
          {
            title: "By Category",
            url: "#",
          },
          {
            title: "Minifigures",
            url: "#",
          },
        ],
      },
      {
        title: "Sets",
        url: "/sets",
        icon: <IconWrapper icon={Settings2} />,
        items: [
          {
            title: "Architecture",
            url: "#",
          },
          {
            title: "Architecture",
            url: "#",
          },
          {
            title: "LEGO® Art",
            url: "#",
          },
          {
            title: "LEGO® Avatar",
            url: "#",
          },
          {
            title: "Batman™",
            url: "#",
          },
          {
            title: "Botanical Collection",
            url: "#",
          },
          {
            title: "LEGO® Braille Bricks",
            url: "#",
          },
          {
            title: "BrickHeadz",
            url: "#",
          },
          {
            title: "City",
            url: "#",
          },
          {
            title: "Classic",
            url: "#",
          },
          {
            title: "Creator 3in1",
            url: "#",
          },
          {
            title: "Creator Expert",
            url: "#",
          },
          {
            title: "DC",
            url: "#",
          },
          {
            title: "Dispicable Me 4",
            url: "#",
          },
          {
            title: "Star Wars™",
            url: "#",
          },
          {
            title: "LEGO® Indiana Jones™",
            url: "#",
          },
          {
            title: "LEGO® Creator",
            url: "#",
          },
          {
            title: "LEGO® Friends",
            url: "#",
          },
          {
            title: "LEGO® Ninjago™",
            url: "#",
          },
        ],
      },
      {
        title: "Orders",
        url: "/orders",
        icon: <IconWrapper icon={BookOpen} />,
        items: [
          {
            title: "New Orders",
            url: "#",
          },
          {
            title: "Fulfillment",
            url: "#",
          },
          {
            title: "Shipped",
            url: "#",
          },
          {
            title: "Cancelled",
            url: "#",
          },
          {
            title: "Completed",
            url: "#",
          },
        ],
      },
    ],
    navSecondary: [
      {
        title: "Docs",
        url: "/support",
        icon: <IconWrapper icon={BookOpen} />,
      },
      {
        title: "Support",
        url: "/support",
        icon: <IconWrapper icon={LifeBuoy} />,
      },
      {
        title: "Roadmap & Feedback",
        url: "/roadmap",
        icon: <IconWrapper icon={Signpost} />,
      },
    ],
    projects: [
      {
        name: "Design Engineering",
        url: "#",
        icon: <IconWrapper icon={Frame} />,
      },
      {
        name: "Sales & Marketing",
        url: "#",
        icon: <IconWrapper icon={PieChart} />,
      },
      {
        name: "Travel",
        url: "#",
        icon: <IconWrapper icon={Map} />,
      },
    ],
  }

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <MyLogo />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain.map(item => ({
          ...item,
          icon: item.icon.props.icon
        }))} />
        <NavProjects projects={data.projects.map(project => ({
          ...project, 
          icon: project.icon.props.icon
        }))} />
        <NavSecondary items={data.navSecondary.map(item => ({
          ...item,
          icon: item.icon.props.icon
        }))} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
