
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutUs";
import Courses from "./pages/Courses";
import NewCom from './pages/NewCom'
import ManagePermits from './pages/Manage'
import DotTesting from "./pages/DotTesting";
import DotAuditSupport from "./pages/DotAuditSupport ";
import DotClearinghouse from "./pages/DotClearinghouse";
import IftaFuelTax from "./pages/IftaFuelTax";
import OregonTruckPermits from "./pages/OregonTruckPermits";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/aboutus" element={<AboutPage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/open-new-trucking-company" element={<NewCom />} />
          <Route path="/manage-trucking-permits" element={<ManagePermits />} />
          <Route path="/dot-drug-and-alcohol-testing" element={<DotTesting />} />
          <Route path="/dot-audit-support" element={<DotAuditSupport />} />
          <Route path="/dot-clearinghouse" element={<DotClearinghouse />} />
          <Route path="/ifta-fuel-tax-return" element={<IftaFuelTax />} />
          <Route path="/oregon-truck-permits" element={<OregonTruckPermits />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
