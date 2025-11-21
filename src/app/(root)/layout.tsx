import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex h-screen flex-col relative items-center">
        <Header />
        <main className="flex-1 wrapper pt-[3.5rem] lg:pt-[5.35rem]">
            { children }
        </main>
        <Footer />
      </div>
    );
}
