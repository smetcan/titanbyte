import Providers from "@/components/admin/Providers";
import AdminLayout from "@/components/admin/AdminLayout";

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <AdminLayout>{children}</AdminLayout>
    </Providers>
  );
}
