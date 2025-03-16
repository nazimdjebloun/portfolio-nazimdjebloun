// src/components/Layout.tsx
import Header from "@/components/header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-foreground">
      <Header />
      <main className="">{children}</main>
    </div>
  );
};

export default Layout;
