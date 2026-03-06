/*
  # Create Articles and Pages Schema

  1. New Tables
    - `articles`
      - `id` (uuid, primary key) - Unique identifier
      - `title` (text) - Article title
      - `slug` (text, unique) - URL-friendly identifier
      - `content` (text) - Full article content
      - `excerpt` (text) - Short description/excerpt
      - `meta_description` (text) - SEO meta description
      - `meta_keywords` (text) - SEO keywords
      - `featured_image` (text) - Image URL
      - `read_time` (integer) - Estimated reading time in minutes
      - `views` (integer) - Number of views
      - `published` (boolean) - Publication status
      - `created_at` (timestamptz) - Creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

    - `pages`
      - `id` (uuid, primary key) - Unique identifier
      - `title` (text) - Page title
      - `slug` (text, unique) - URL-friendly identifier
      - `content` (text) - Page content
      - `meta_description` (text) - SEO meta description
      - `created_at` (timestamptz) - Creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier
      - `name` (text) - Submitter name
      - `email` (text) - Submitter email
      - `subject` (text) - Message subject
      - `message` (text) - Message content
      - `created_at` (timestamptz) - Submission timestamp

  2. Security
    - Enable RLS on all tables
    - Articles and pages are publicly readable
    - Contact submissions can be inserted by anyone
*/

CREATE TABLE IF NOT EXISTS articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text NOT NULL,
  meta_description text NOT NULL,
  meta_keywords text DEFAULT '',
  featured_image text DEFAULT '',
  read_time integer DEFAULT 5,
  views integer DEFAULT 0,
  published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  meta_description text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Articles are publicly readable"
  ON articles FOR SELECT
  TO anon
  USING (published = true);

CREATE POLICY "Pages are publicly readable"
  ON pages FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);
CREATE INDEX IF NOT EXISTS idx_articles_published ON articles(published);
CREATE INDEX IF NOT EXISTS idx_pages_slug ON pages(slug);