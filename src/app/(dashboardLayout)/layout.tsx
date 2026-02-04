import { AppSidebar } from "@/components/layout/app-sidebar";
import { ModeToggle } from "@/components/layout/modeToggle";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Roles } from "@/constans/roles";
import { userService } from "@/service/user.service";

export default async function DashBoardLayout({
  admin,
  user,
}: {
  admin: React.ReactNode;
  user: React.ReactNode;
}) {
  const { data } = await userService.getSession();
  const userInfo = data?.user;

  return (
    <SidebarProvider>
      <AppSidebar user={userInfo} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />

          <BreadcrumbList>
            <ModeToggle></ModeToggle>
          </BreadcrumbList>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {userInfo.role === Roles.ADMIN ? (
            admin
          ) : userInfo.role === Roles.CUSTOMER ? (
            user
          ) : userInfo.role === Roles.PROVIDER ? (
            user
          ) : (
            <div>Unauthorized</div>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
