// layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function MainLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
