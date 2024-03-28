import { Children } from "react";
import '@/styles/reset.styles.css'
import { TopMenu } from "@/components/ui/top-menu/TopMenu";
import { Sidebar } from "@/components/ui/sidebar/Sidebar";

export default function ShopLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main >
      <TopMenu />
      <Sidebar />
      <div style={{padding: 0, margin: '10px'}}>
        {children}
      </div>
    </main>
  );
}