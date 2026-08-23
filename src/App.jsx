import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import FeatureCards from './components/FeatureCards.jsx';
import AIIAMIntersection from './components/AIIAMIntersection.jsx';
import FindTalents from './components/FindTalents.jsx';
import Industries from './components/Industries.jsx';
import TechPartners from './components/TechPartners.jsx';
import IAMMaturityModel from './components/IAMMaturityModel.jsx';
import ComplianceBadges from './components/ComplianceBadges.jsx';
import TalentSpecialties from './components/TalentSpecialties.jsx';
import SuccessStories from './components/SuccessStories.jsx';
import Insights from './components/Insights.jsx';
import AIReadinessCTA from './components/AIReadinessCTA.jsx';
import AssessmentPromoSection from './components/AssessmentPromoSection.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';
import LogoIntro from './components/LogoIntro.jsx';

import TalentSolutionsPage from './pages/TalentSolutionsPage.jsx';
import TechnologyServicesPage from './pages/TechnologyServicesPage.jsx';
import PricingRevenuePage from './pages/PricingRevenuePage.jsx';
import EngineeringTechnologyPage from './pages/EngineeringTechnologyPage.jsx';
import InterviewProcessPage from './pages/InterviewProcessPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import CaseInterviewPrepPage from './pages/CaseInterviewPrepPage.jsx';
import UsingAIApplicationPage from './pages/UsingAIApplicationPage.jsx';
import ResponsibleAIHiringPage from './pages/ResponsibleAIHiringPage.jsx';
import EmployeeBenefitsPage from './pages/EmployeeBenefitsPage.jsx';
import ArtificialIntelligencePage from './pages/ArtificialIntelligencePage.jsx';
import ValuesCulturePage from './pages/ValuesCulturePage.jsx';
import CapabilitiesPage from './pages/CapabilitiesPage.jsx';

// New Pages
import AIReadinessPage from './pages/AIReadinessPage.jsx';
import IAMMaturityCheckPage from './pages/IAMMaturityCheckPage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import AgenticAIPage from './pages/AgenticAIPage.jsx';
import DevOpsAgilePage from './pages/DevOpsAgilePage.jsx';
import RiskAndSecurityPage from './pages/RiskAndSecurityPage.jsx';
import WorkforceDevelopmentPage from './pages/WorkforceDevelopmentPage.jsx';
import GridModernizationPage from './pages/GridModernizationPage.jsx';
import JBHuntPage from './pages/JBHuntPage.jsx';
import DatabricksGoogleCloudPage from './pages/DatabricksGoogleCloudPage.jsx';
import PartnershipsPage from './pages/PartnershipsPage.jsx';
import LaborConditionApplicationsPage from './pages/LaborConditionApplicationsPage.jsx';
import CompanyLeadershipPage from './pages/CompanyLeadershipPage.jsx';
import HostingPage from './pages/HostingPage.jsx';
import DataEngineeringPage from './pages/DataEngineeringPage.jsx';
import QaAsAServicePage from './pages/QaAsAServicePage.jsx';
import AppDevelopmentPage from './pages/AppDevelopmentPage.jsx';
import StaffingPage from './pages/StaffingPage.jsx';
import OurProcessPage from './pages/OurProcessPage.jsx';

function HomePage() {
  const location = useLocation();

  // When navigating from another page with a scrollTo state, scroll to the section
  useEffect(() => {
    if (location.state?.scrollTo) {
      // Small delay to let the page render fully
      const timer = setTimeout(() => {
        const el = document.querySelector(location.state.scrollTo);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 350);
      return () => clearTimeout(timer);
    }
    // If there's a hash in the URL, also scroll to it
    if (location.hash) {
      const timer = setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="relative min-h-screen bg-white overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <FeatureCards />
        <AIIAMIntersection />
        <FindTalents />
        <Industries />
        <TechPartners />
        <IAMMaturityModel />
        <ComplianceBadges />
        <TalentSpecialties />
        <SuccessStories />
        <Insights />
        <AssessmentPromoSection />
        <AIReadinessCTA />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      <LogoIntro onComplete={() => setIntroComplete(true)} />
      <div
        style={{
          opacity: introComplete ? 1 : 0,
          transition: 'opacity 0.8s ease',
          pointerEvents: introComplete ? 'auto' : 'none',
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/talent-solutions" element={<TalentSolutionsPage />} />
          <Route path="/technology-services" element={<TechnologyServicesPage />} />
          <Route path="/pricing-revenue-management" element={<PricingRevenuePage />} />
          <Route path="/engineering-technology" element={<EngineeringTechnologyPage />} />
          <Route path="/interview-process" element={<InterviewProcessPage />} />
          <Route path="/case-interview-prep" element={<CaseInterviewPrepPage />} />
          <Route path="/using-ai-application-process" element={<UsingAIApplicationPage />} />
          <Route path="/responsible-ai-in-hiring" element={<ResponsibleAIHiringPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/employee-benefits" element={<EmployeeBenefitsPage />} />
          <Route path="/artificial-intelligence" element={<ArtificialIntelligencePage />} />
          <Route path="/values-and-culture" element={<ValuesCulturePage />} />

          {/* New routes */}
          <Route path="/ai-readiness-assessment" element={<AIReadinessPage />} />
          <Route path="/iam-maturity-check" element={<IAMMaturityCheckPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/agentic-ai" element={<AgenticAIPage />} />
          <Route path="/devops-agile" element={<DevOpsAgilePage />} />
          <Route path="/risk-and-security" element={<RiskAndSecurityPage />} />
          <Route path="/workforce-development" element={<WorkforceDevelopmentPage />} />
          <Route path="/grid-modernization-integrated-ecosystems" element={<GridModernizationPage />} />
          <Route path="/jb-hunt-the-road-to-better-data-gcp-bigquery" element={<JBHuntPage />} />
          <Route path="/databricks-google-cloud" element={<DatabricksGoogleCloudPage />} />
          <Route path="/partnerships" element={<PartnershipsPage />} />
          <Route path="/labor-condition-applications" element={<LaborConditionApplicationsPage />} />
          <Route path="/company-leadership" element={<CompanyLeadershipPage />} />
          <Route path="/capabilities" element={<CapabilitiesPage />} />
          <Route path="/hosting" element={<HostingPage />} />
          <Route path="/data-engineering" element={<DataEngineeringPage />} />
          <Route path="/qa-as-a-service" element={<QaAsAServicePage />} />
          <Route path="/app-development" element={<AppDevelopmentPage />} />
          <Route path="/staffing" element={<StaffingPage />} />
          <Route path="/our-process" element={<OurProcessPage />} />
        </Routes>
      </div>
    </>
  );
}
