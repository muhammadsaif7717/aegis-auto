"use client";

import React, { useState } from "react";
import { AegisNavbar } from "@/components/AegisNavbar";
import { AegisHeroSlider } from "@/components/AegisHeroSlider";
import { AegisStudioIdentity } from "@/components/AegisStudioIdentity";
import { AegisServicesGrid } from "@/components/AegisServicesGrid";
import { AegisComparisonSection } from "@/components/AegisComparisonSection";
import { AegisBeforeAfter } from "@/components/AegisBeforeAfter";
import { AegisConfigurator } from "@/components/AegisConfigurator";
import { AegisWorkflow } from "@/components/AegisWorkflow";
import { AegisMilestones } from "@/components/AegisMilestones";
import { AegisReviews } from "@/components/AegisReviews";
import { AegisLocation } from "@/components/AegisLocation";
import { AegisJournal } from "@/components/AegisJournal";
import { AegisFooter } from "@/components/AegisFooter";
import { AegisQuoteModal, PreloadBookingData } from "@/components/AegisQuoteModal";
import { AegisTrackerModal } from "@/components/AegisTrackerModal";
import { AegisMobileDock } from "@/components/AegisMobileDock";

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);
  const [preloadData, setPreloadData] = useState<PreloadBookingData | null>(null);

  const handleOpenBooking = (customData?: PreloadBookingData) => {
    if (customData) {
      setPreloadData(customData);
    } else {
      setPreloadData(null);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleOpenTracker = () => {
    setIsTrackerOpen(true);
  };

  const handleCloseTracker = () => {
    setIsTrackerOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col overflow-x-hidden w-full selection:bg-amber-500/20 selection:text-slate-900">
      {/* 1. Header & Navigation */}
      <AegisNavbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenTracker={handleOpenTracker}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full overflow-x-hidden">
        {/* 2. Cinematic Hero Slider */}
        <AegisHeroSlider onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Studio Identity & Cleanroom Craftsmanship */}
        <AegisStudioIdentity />

        {/* 4. Core Studio Services Grid */}
        <AegisServicesGrid onSelectService={handleOpenBooking} />

        {/* 5. PPF vs Vinyl Engineering Comparison */}
        <AegisComparisonSection onOpenBooking={() => handleOpenBooking()} />

        {/* 6. Interactive Before & After Optical Comparison */}
        <AegisBeforeAfter />

        {/* 7. Full-Width Instant Vehicle Cost Configurator */}
        <AegisConfigurator onReserveSlot={handleOpenBooking} />

        {/* 8. Cleanroom 4-Step Installation Workflow */}
        <AegisWorkflow />

        {/* 9. Studio Milestones & Accreditations */}
        <AegisMilestones />

        {/* 10. Verified Supercar Owner Reviews */}
        <AegisReviews />

        {/* 11. Flagship Studio Location & Service Hours */}
        <AegisLocation onOpenBooking={() => handleOpenBooking()} />

        {/* 12. Technical Automotive Journal */}
        <AegisJournal />
      </main>

      {/* 13. Comprehensive Studio Footer */}
      <AegisFooter />

      {/* 14. Booking & Intake Modal */}
      <AegisQuoteModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preloadedData={preloadData}
      />

      {/* 15. Vehicle Build Tracking Modal */}
      <AegisTrackerModal
        isOpen={isTrackerOpen}
        onClose={handleCloseTracker}
      />

      {/* 16. Mobile Sticky Bottom Action Dock */}
      <AegisMobileDock onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}
