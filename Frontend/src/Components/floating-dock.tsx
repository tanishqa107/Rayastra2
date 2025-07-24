
import { FloatingDock } from "../ui/floating-dock";
import {
 
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/company/107086508/admin/dashboard/",
    },

    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.facebook.com/profile.php?id=61577280764827",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/rayastra.online/",
    },
    {
      title: "Whatsapp",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://wa.link/oa5tj4",
    },
    
  ];
  return (
    <div className="flex items-center justify-center h-[5rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" 
        items={links}
      />
    </div>
  );
}
