
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import KeyboardHelp from "./components/KeyboardHelp";

// Import slide pages
import TitleSlide from "./pages/TitleSlide";
import DeltaCardsSlide from "./pages/DeltaCardsSlide";
import AmexMrCardsSlide from "./pages/AmexMrCardsSlide";
import PointTransfersSlide from "./pages/PointTransfersSlide";
import StrategiesSlide from "./pages/StrategiesSlide";
import ConclusionSlide from "./pages/ConclusionSlide";

const queryClient = new QueryClient();

// Navigation items with paths
const navItems = [
  { id: "title", label: "Introduction", path: "/" },
  { id: "amex-delta-cards", label: "Delta Cards", path: "/delta-cards" },
  { id: "amex-mr-cards", label: "MR Cards", path: "/mr-cards" },
  { id: "point-transfers", label: "Point Transfers", path: "/point-transfers" },
  { id: "strategies", label: "Strategies", path: "/strategies" },
  { id: "conclusion", label: "Conclusion", path: "/conclusion" }
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation items={navItems} />
        <KeyboardHelp />
        <Routes>
          <Route path="/" element={<TitleSlide />} />
          <Route path="/delta-cards" element={<DeltaCardsSlide />} />
          <Route path="/mr-cards" element={<AmexMrCardsSlide />} />
          <Route path="/point-transfers" element={<PointTransfersSlide />} />
          <Route path="/strategies" element={<StrategiesSlide />} />
          <Route path="/conclusion" element={<ConclusionSlide />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
