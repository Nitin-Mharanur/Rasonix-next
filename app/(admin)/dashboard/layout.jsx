export const metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};
import ToastProvider from "@/components/ToastProvider";
import BarChart from "@/components/admin/BarChart";
import Header from "@/components/admin/Header";
import RecentUpdate from "@/components/admin/RecentUpdate";
import Sidebar from "@/components/admin/Sidebar";
import TopCards from "@/components/admin/TopCards";
export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="bg-gray-200 min-h-screen">
          <Sidebar>
            <Header />
            <ToastProvider />
            {children}
          </Sidebar>
        </main>
      </body>
    </html>
  );
}
