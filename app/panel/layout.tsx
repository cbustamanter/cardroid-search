import { getLoggedInUser } from "@/utils/actions";
import { UserContextProvider } from "@/utils/contexts/UserContext";
import { redirect } from "next/navigation";
import { Sidebar } from "@/components/sidebar/sidebar";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    data: { user },
  } = await getLoggedInUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <UserContextProvider context={user}>
      <div className="grid lg:grid-cols-5">
        <Sidebar className="hidden lg:block" />
        <div className="col-span-3 lg:col-span-4 lg:border-l">
          <div className="h-full px-4 py-6 lg:px-8">{children}</div>
        </div>
      </div>
    </UserContextProvider>
  );
}
