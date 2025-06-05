export interface Feature {
  readonly title: string;
  readonly description: string;
  readonly icon: 'scale' | 'shield-check' | 'clock' | 'users';
  readonly gradient: {
    readonly from: string;
    readonly to: string;
  };
}

export const featuresContent = {
  heading: "Your Complete Education Platform",
  subheading: "We help you make informed decisions about your education by connecting you with the right schools and scholarship opportunities.",
  features: [
    {
      title: "School Matching",
      description: "Find schools that match your academic goals, location preferences, and budget requirements",
      icon: "scale",
      gradient: {
        from: "blue-500",
        to: "indigo-500"
      }
    },
    {
      title: "Verified Institutions",
      description: "Access trusted schools and scholarship providers including DOST, CHED, and top universities",
      icon: "shield-check",
      gradient: {
        from: "green-500",
        to: "emerald-500"
      }
    },
    {
      title: "Application Tracking",
      description: "Track your school applications and scholarship deadlines in one convenient dashboard",
      icon: "clock",
      gradient: {
        from: "purple-500",
        to: "pink-500"
      }
    },
    {
      title: "Success Stories",
      description: "Learn from students who found their perfect school and secured scholarships through our platform",
      icon: "users",
      gradient: {
        from: "amber-500",
        to: "orange-500"
      }
    }
  ] as const
} as const; 