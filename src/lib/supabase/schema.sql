
CREATE TYPE user_role AS ENUM ('student', 'admin', 'provider');
CREATE TYPE submission_status AS ENUM ('pending', 'approved', 'rejected');


CREATE TABLE users (
  id UUID REFERENCES auth.users PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  role user_role NOT NULL DEFAULT 'student',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);


CREATE TABLE scholarships (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  provider TEXT NOT NULL,
  location TEXT NOT NULL,
  course_eligibility TEXT[] NOT NULL DEFAULT '{}',
  income_requirement NUMERIC,
  deadline TIMESTAMP WITH TIME ZONE NOT NULL,
  link TEXT,
  verified BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  created_by UUID REFERENCES users(id) ON DELETE SET NULL
);


CREATE TABLE submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  scholarship_id UUID REFERENCES scholarships(id) ON DELETE CASCADE NOT NULL,
  status submission_status DEFAULT 'pending' NOT NULL,
  date_submitted TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);


CREATE TABLE testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  quote TEXT NOT NULL,
  school TEXT NOT NULL,
  year INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);


CREATE INDEX idx_scholarships_deadline ON scholarships(deadline);
CREATE INDEX idx_submissions_status ON submissions(status);
CREATE INDEX idx_submissions_date ON submissions(date_submitted);


ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE scholarships ENABLE ROW LEVEL SECURITY;
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;


CREATE POLICY "Users can view their own profile"
  ON users FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles"
  ON users FOR SELECT
  USING (auth.jwt() ->> 'role' = 'admin');


CREATE POLICY "Anyone can view verified scholarships"
  ON scholarships FOR SELECT
  USING (verified = true);

CREATE POLICY "Admins can manage all scholarships"
  ON scholarships FOR ALL
  USING (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Providers can create and manage their own scholarships"
  ON scholarships FOR ALL
  USING (auth.jwt() ->> 'role' = 'provider' AND created_by = auth.uid());


CREATE POLICY "Users can view their own submissions"
  ON submissions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own submissions"
  ON submissions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can manage all submissions"
  ON submissions FOR ALL
  USING (auth.jwt() ->> 'role' = 'admin');


CREATE POLICY "Anyone can view testimonials"
  ON testimonials FOR SELECT
  USING (true);

CREATE POLICY "Users can manage their own testimonials"
  ON testimonials FOR ALL
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all testimonials"
  ON testimonials FOR ALL
  USING (auth.jwt() ->> 'role' = 'admin'); 