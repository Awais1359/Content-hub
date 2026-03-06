import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SEO from './components/SEO';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import DisclaimerPage from './pages/DisclaimerPage';

type Page = 'home' | 'article' | 'about' | 'contact' | 'privacy' | 'terms' | 'disclaimer';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [articleSlug, setArticleSlug] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, articleSlug]);

  const handleNavigate = (page: string, slug?: string) => {
    setCurrentPage(page as Page);
    if (slug) {
      setArticleSlug(slug);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <SEO
              title="Home"
              description="Welcome to ContentHub - Your trusted source for quality content and valuable insights. Discover original articles and well-researched information."
              keywords="content, articles, blog, information, insights"
            />
            <HomePage onNavigate={handleNavigate} />
          </>
        );
      case 'article':
        return (
          <>
            <SEO
              title="Article"
              description="Read our detailed article with in-depth analysis and valuable information."
            />
            <ArticlePage slug={articleSlug} onNavigate={handleNavigate} />
          </>
        );
      case 'about':
        return (
          <>
            <SEO
              title="About Us"
              description="Learn more about ContentHub - our mission, values, and commitment to providing quality content."
            />
            <AboutPage />
          </>
        );
      case 'contact':
        return (
          <>
            <SEO
              title="Contact Us"
              description="Get in touch with ContentHub. We'd love to hear from you."
            />
            <ContactPage />
          </>
        );
      case 'privacy':
        return (
          <>
            <SEO
              title="Privacy Policy"
              description="Read our privacy policy to understand how we collect, use, and protect your personal information."
            />
            <PrivacyPage />
          </>
        );
      case 'terms':
        return (
          <>
            <SEO
              title="Terms & Conditions"
              description="Review our terms and conditions for using ContentHub."
            />
            <TermsPage />
          </>
        );
      case 'disclaimer':
        return (
          <>
            <SEO
              title="Disclaimer"
              description="Important information about the content and services provided on ContentHub."
            />
            <DisclaimerPage />
          </>
        );
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
