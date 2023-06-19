import Sidebar from "../components/sidebar/Sidebar";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // * maybe use "@ts-expected-error Server Component" if there a typescript error
    <Sidebar>
      <div className="h-full">{children}</div>
    </Sidebar>
  );
}
