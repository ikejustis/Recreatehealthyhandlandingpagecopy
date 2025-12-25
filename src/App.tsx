import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Rewards } from "./components/Rewards";
import { ForBusinesses } from "./components/ForBusinesses";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { HowItWorksPage } from "./components/HowItWorksPage";
import { RewardsPage } from "./components/RewardsPage";
import { ForBusinessesPage } from "./components/ForBusinessesPage";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />

      <div className="app">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <HowItWorks />
                <Rewards />
                <ForBusinesses />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/how-it-works"
            element={
              <>
                <HowItWorksPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/rewards"
            element={
              <>
                <RewardsPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/for-businesses"
            element={
              <>
                <ForBusinessesPage />
                <Footer />
              </>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}