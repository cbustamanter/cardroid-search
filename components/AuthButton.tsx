import { createSupabaseServerClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

export default async function AuthButton() {
  const cookieStore = cookies();
  const supabase = createSupabaseServerClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";
    const cookieStore = cookies();
    const supabase = createSupabaseServerClient(cookieStore);
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return (
    user && (
      <div className="flex items-center gap-4 text-sm mr-4">
        Hey, {user.email}!
        <form action={signOut}>
          <Button size="sm">Logout</Button>
        </form>
      </div>
    )
  );
}
