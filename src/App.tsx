import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./hooks/use-theme";
import Index from "./pages/Index";
import AdoptPage from "./pages/AdoptPage";
import SheltersPage from "./pages/SheltersPage";
import ShelterProfilePage from "./pages/ShelterProfilePage";
import VolunteerDonatePage from "./pages/VolunteerDonatePage";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="animal-haven-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background font-sans theme-transition">
            <Navigation />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/adopt" element={<AdoptPage />} />
              <Route path="/shelters" element={<SheltersPage />} />
              <Route path="/shelter/:id" element={<ShelterProfilePage />} />
            <Route path="/volunteer-donate" element={<VolunteerDonatePage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
