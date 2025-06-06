export type UserRole = 'student' | 'admin' | 'provider';
export type SubmissionStatus = 'pending' | 'approved' | 'rejected';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  created_at: string;
  updated_at: string;
}

export interface Scholarship {
  id: string;
  name: string;
  type: string;
  provider: string;
  location: string;
  course_eligibility: string[];
  income_requirement: number | null;
  deadline: string;
  link: string | null;
  verified: boolean;
  created_at: string;
  updated_at: string;
  created_by: string | null;
}

export interface Submission {
  id: string;
  user_id: string;
  scholarship_id: string;
  status: SubmissionStatus;
  date_submitted: string;
  created_at: string;
  updated_at: string;
}

export interface Testimonial {
  id: string;
  user_id: string;
  quote: string;
  school: string;
  year: number;
  created_at: string;
  updated_at: string;
}

export interface Database {
  public: {
    Tables: {
      users: {
        Row: User;
        Insert: Omit<User, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<User, 'id'>>;
      };
      scholarships: {
        Row: Scholarship;
        Insert: Omit<Scholarship, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Scholarship, 'id'>>;
      };
      submissions: {
        Row: Submission;
        Insert: Omit<Submission, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Submission, 'id'>>;
      };
      testimonials: {
        Row: Testimonial;
        Insert: Omit<Testimonial, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Testimonial, 'id'>>;
      };
    };
  };
} 