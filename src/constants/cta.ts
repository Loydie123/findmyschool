export interface CTAContent {
  heading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  gradient: {
    from: string;
    to: string;
  };
}

export const scholarshipCTA: CTAContent = {
  heading: "Take the First Step Towards Your Future",
  description: "Join thousands of students who found their dream schools and secured life-changing scholarships. Your success story starts here.",
  buttonText: "Explore Opportunities",
  buttonLink: "/explore",
  gradient: {
    from: "blue-600",
    to: "indigo-600"
  }
} as const; 