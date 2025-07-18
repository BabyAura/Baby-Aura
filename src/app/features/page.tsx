
"use client";

import { Footer } from '@/components/layout/Footer';
import { MarketingHeader } from '@/components/layout/MarketingHeader';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  Baby,
  Stethoscope,
  Building,
  Heart,
  BookImage,
  BarChart2,
  Users,
  Video,
  FileText,
  DollarSign,
  LayoutDashboard,
  LucideIcon,
  Info,
  Syringe,
  FileHeart,
  Bot,
  Box,
} from 'lucide-react';
import React from 'react';
import { ScrollAnimationWrapper } from '@/components/layout/ScrollAnimationWrapper';
import { AnimatedContent } from '@/components/layout/AnimatedContent';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string;
  badge?: string;
}

const featuresData: { [key: string]: Feature[] } = {
  parent: [
    {
      icon: Video,
      title: "Tele-Consultations",
      description: "Connect with trusted doctors via secure video call from the comfort of your home.",
      details: "No more stressful clinic visits. Our seamless tele-consultation feature ensures you get expert medical advice when you need it, saving you time and providing peace of mind."
    },
    {
      icon: FileHeart,
      title: "Health Records",
      description: "All your child's health reports, prescriptions, and medical history in one secure place.",
      details: "Easily access and share crucial health information with any caregiver or specialist. Cautious prescription logs ensure you have a clear, safe medication history."
    },
    {
      icon: Syringe,
      title: "Vaccination Schedule",
      description: "Never miss an important shot with our automated vaccination tracker and scheduler.",
      details: "Get timely reminders for upcoming immunizations and maintain a complete digital record, ensuring your baby is always protected and up-to-date."
    },
     {
      icon: BookImage,
      title: "AI Scrapbook",
      description: "Capture and cherish every milestone with AI-generated heartfelt captions.",
      details: "Simply upload a photo, and our unique AI assistant helps you write the perfect, loving caption, creating a beautiful digital story of your baby's journey that's easy to share."
    },
     {
      icon: Bot,
      title: "AI-Powered Nutritionist",
      description: "Receive personalized nutrition plans and advice from our advanced AI.",
      details: "Get customized meal plans and feeding schedules based on your baby's age, weight, and dietary needs. Our AI helps you create a healthy nutrition chart for optimal growth."
    },
    {
      icon: Box,
      title: "Automated Essentials Delivery",
      description: "Get baby essentials delivered to your doorstep automatically each month.",
      details: "Our upcoming subscription service ensures you never run out of diapers, wipes, and other essentials. Automated billing makes it effortless. (Coming Soon!)",
      badge: "Coming Soon"
    },
  ],
  doctor: [
    {
      icon: LayoutDashboard,
      title: "Doctor Dashboard",
      description: "Manage your schedule, appointments, and patient overview all in one place.",
      details: "Our intuitive dashboard streamlines your workflow, giving you a clear view of your day at a glance, reducing administrative overhead and letting you focus on patient care."
    },
    {
      icon: Users,
      title: "Patient Management",
      description: "Access comprehensive patient profiles, health records, and growth charts instantly.",
      details: "Get a holistic view of your patient's health journey. This single source of truth enables more informed decision-making and personalized, continuous care."
    },
    {
      icon: FileText,
      title: "Digital Prescriptions",
      description: "Issue, renew, and manage e-prescriptions securely and efficiently.",
      details: "Reduce paperwork and eliminate errors with our streamlined digital prescription system. It's faster for you and more convenient for the parents you support."
    },
    {
      icon: DollarSign,
      title: "Earnings & Payouts",
      description: "Track your consultation revenue with detailed reports and manage payouts.",
      details: "Get transparent, real-time insights into your earnings. Our platform makes financial tracking simple, so you can monitor your practice's growth effortlessly."
    },
  ],
  hospital: [
    {
      icon: Building,
      title: "Hospital Onboarding",
      description: "Quickly set up your hospital's profile and list available specialties.",
      details: "Our plug-and-play model ensures a smooth and rapid onboarding process. You can configure your hospital's digital presence in minutes, not months."
    },
    {
      icon: Stethoscope,
      title: "Doctor Management",
      description: "A centralized system to onboard, manage, and monitor your medical staff.",
      details: "Effortlessly add doctors, manage their profiles and schedules, and monitor patient loads to optimize resource allocation and ensure high-quality care."
    },
    {
      icon: LayoutDashboard,
      title: "Admin Dashboard",
      description: "Oversee hospital-wide operations with a powerful, data-rich dashboard.",
      details: "Gain a 360-degree view of your hospital's performance. Track key metrics on doctor activity, patient engagement, and subscription revenue to drive strategic decisions."
    },
    {
      icon: DollarSign,
      title: "Flexible Business Models",
      description: "Choose a revenue model that aligns with your hospital's financial strategy.",
      details: "We offer both a fixed licensing fee for predictable budgeting and a collaborative revenue-sharing model, providing the flexibility to choose a true partnership for growth."
    },
  ]
};

const tabIcons: { [key: string]: LucideIcon } = {
  parent: Baby,
  doctor: Stethoscope,
  hospital: Building,
};


export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MarketingHeader />
      <main className="flex-1 py-12 md:py-24 bg-muted/40">
        <AnimatedContent>
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <ScrollAnimationWrapper animationClasses="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                Features Tailored For You
              </h1>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper animationClasses="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out delay-200">
              <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                BabyAura is a comprehensive ecosystem designed to support everyone involved in a child's early-stage healthcare journey.
              </p>
            </ScrollAnimationWrapper>
          </div>

          <Tabs defaultValue="parent" className="w-full max-w-5xl mx-auto">
            <ScrollAnimationWrapper animationClasses="animate-in fade-in zoom-in-95 duration-1000 ease-out delay-300">
              <TabsList className="grid w-full grid-cols-3 h-auto">
                <TabsTrigger value="parent" className="py-3 text-base gap-2">
                  <Baby className="h-5 w-5" /> For Parents
                </TabsTrigger>
                <TabsTrigger value="doctor" className="py-3 text-base gap-2">
                  <Stethoscope className="h-5 w-5" /> For Doctors
                </TabsTrigger>
                <TabsTrigger value="hospital" className="py-3 text-base gap-2">
                  <Building className="h-5 w-5" /> For Hospitals
                </TabsTrigger>
              </TabsList>
            </ScrollAnimationWrapper>
            
              <TabsContent value="parent">
                <FeatureGrid features={featuresData.parent} />
              </TabsContent>
              <TabsContent value="doctor">
                <FeatureGrid features={featuresData.doctor} />
              </TabsContent>
              <TabsContent value="hospital">
                <FeatureGrid features={featuresData.hospital} />
              </TabsContent>

          </Tabs>
        </div>
        </AnimatedContent>
      </main>
      <Footer />
    </div>
  );
}

const FeatureGrid = ({ features }: { features: Feature[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
    {features.map((feature, index) => (
      <ScrollAnimationWrapper 
        key={feature.title} 
        animationClasses={`animate-in fade-in zoom-in-95 duration-700 ease-out delay-${100 + (index * 100)}`}
      >
        <Card className="h-full flex flex-col p-6">
          <CardHeader className="p-0 flex flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </div>
            {feature.badge && (
                <Badge variant="secondary">{feature.badge}</Badge>
            )}
          </CardHeader>
          <CardContent className="p-0 pt-4">
            <p className="text-muted-foreground">{feature.description}</p>
          </CardContent>
          <CardContent className="p-0 pt-4 mt-auto border-t border-dashed">
            <p className="text-sm pt-4 text-foreground/80">{feature.details}</p>
          </CardContent>
        </Card>
      </ScrollAnimationWrapper>
    ))}
  </div>
);
