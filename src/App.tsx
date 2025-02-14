import React, { useState } from 'react';
import { Download, Youtube, AlertCircle, Menu, X, ExternalLink, Mail, Phone, FileText, Shield, CheckCircle2, HelpCircle } from 'lucide-react';

function App() {
  const [url, setUrl] = useState('');
  const [videoId, setVideoId] = useState('');
  const [error, setError] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  const extractVideoId = (url: string) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = extractVideoId(url);
    if (id) {
      setVideoId(id);
      setError('');
    } else {
      setError('Please enter a valid YouTube URL');
      setVideoId('');
    }
  };

  const ThumbnailCard = ({ quality, size, url }: { quality: string; size: string; url: string }) => (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <img src={url} alt={`${quality} thumbnail`} className="w-full h-auto mb-4 rounded" />
      <div className="text-center">
        <p className="font-semibold text-gray-800 mb-1">{quality}</p>
        <p className="text-sm text-gray-500 mb-3">{size}</p>
        <a
          href={url}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <Download className="w-4 h-4 mr-2" />
          Download
        </a>
      </div>
    </div>
  );

  const AdSpace = ({ className = "" }: { className?: string }) => (
    <div className={`bg-gray-100 rounded-lg p-4 text-center ${className}`}>
      <div className="min-h-[250px] flex items-center justify-center border-2 border-dashed border-gray-300">
        <p className="text-gray-500">Advertisement Space</p>
      </div>
    </div>
  );

  const MenuBar = () => (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => setCurrentSection('home')}>
            <Youtube className="h-8 w-8 text-red-600" />
            <span className="ml-2 font-bold text-xl">YT Thumbnail DL</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => setCurrentSection('features')} className="text-gray-700 hover:text-red-600 transition-colors">Features</button>
            <button onClick={() => setCurrentSection('how-to-use')} className="text-gray-700 hover:text-red-600 transition-colors">How to Use</button>
            <button onClick={() => setCurrentSection('faq')} className="text-gray-700 hover:text-red-600 transition-colors">FAQ</button>
            <button onClick={() => setCurrentSection('contact')} className="text-gray-700 hover:text-red-600 transition-colors">Contact</button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <button onClick={() => { setCurrentSection('features'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 transition-colors">Features</button>
            <button onClick={() => { setCurrentSection('how-to-use'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 transition-colors">How to Use</button>
            <button onClick={() => { setCurrentSection('faq'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 transition-colors">FAQ</button>
            <button onClick={() => { setCurrentSection('contact'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 transition-colors">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );

  const Footer = () => (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We provide a free, fast, and reliable service to download YouTube thumbnails in various qualities.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => setCurrentSection('features')} className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentSection('how-to-use')} className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  How to Use
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentSection('faq')} className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  FAQ
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => setCurrentSection('privacy')} className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentSection('terms')} className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentSection('disclaimer')} className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Disclaimer
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@example.com" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  contact@example.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} YT Thumbnail Downloader. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );

  const MainContent = () => {
    switch (currentSection) {
      case 'features':
        return (
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Features</h2>
            <div className="grid gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Multiple Quality Options</h3>
                    <p className="text-gray-600">Download thumbnails in maximum (1280x720), high (480x360), and standard (320x180) quality.</p>
                  </div>
                </div>
              </div>
              
              {/* Horizontal Ad Space */}
              <AdSpace className="my-6" />

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Fast and Free</h3>
                    <p className="text-gray-600">No registration required. Download thumbnails instantly without any cost.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Support All YouTube URLs</h3>
                    <p className="text-gray-600">Works with any valid YouTube video URL format, including shortened URLs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'how-to-use':
        return (
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Use</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">1. Copy YouTube URL</h3>
                    <p className="text-gray-600">Go to YouTube and copy the URL of the video whose thumbnail you want to download.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">2. Paste URL</h3>
                    <p className="text-gray-600">Paste the copied URL into the input field on our website.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">3. Choose Quality</h3>
                    <p className="text-gray-600">Select your preferred thumbnail quality from the available options.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">4. Download</h3>
                    <p className="text-gray-600">Click the download button to save the thumbnail to your device.</p>
                  </div>
                </div>
              </div>
              {/* Vertical Ad Space */}
              <div className="lg:col-span-1">
                <AdSpace className="sticky top-4" />
              </div>
            </div>
          </div>
        );
      
      case 'faq':
        return (
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start">
                      <HelpCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Is this service free?</h3>
                        <p className="text-gray-600">Yes, our service is completely free to use with no hidden charges.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start">
                      <HelpCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">What thumbnail qualities are available?</h3>
                        <p className="text-gray-600">We offer maximum (1280x720), high (480x360), and standard (320x180) quality options.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start">
                      <HelpCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Do I need to create an account?</h3>
                        <p className="text-gray-600">No, you can use our service without registration or creating an account.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start">
                      <HelpCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Which YouTube URL formats are supported?</h3>
                        <p className="text-gray-600">We support all YouTube URL formats, including standard watch URLs, shortened URLs (youtu.be), and embed URLs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Vertical Ad Space */}
              <div className="lg:col-span-1">
                <AdSpace className="sticky top-4" />
              </div>
            </div>
          </div>
        );

      case 'privacy':
      case 'terms':
      case 'disclaimer':
      case 'contact':
        const content = {
          privacy: {
            title: "Privacy Policy",
            sections: [
              {
                title: "1. Information We Collect",
                content: "We only collect the YouTube video URLs that you input into our service. We do not store this information after processing your request."
              },
              {
                title: "2. How We Use Your Information",
                content: "The YouTube URLs you provide are only used to fetch the corresponding video thumbnails. We do not use this information for any other purpose."
              },
              {
                title: "3. Cookies and Tracking",
                content: "We use essential cookies to ensure the proper functioning of our service. We do not use tracking cookies or any other tracking technologies."
              },
              {
                title: "4. Third-Party Services",
                content: "Our service interacts with YouTube's public API to fetch thumbnail images. Please refer to YouTube's privacy policy for information about how they handle this data."
              },
              {
                title: "5. Data Security",
                content: "We implement appropriate security measures to protect your information. However, no internet transmission is completely secure, and we cannot guarantee absolute security."
              }
            ]
          },
          terms: {
            title: "Terms of Service",
            sections: [
              {
                title: "1. Acceptance of Terms",
                content: "By using our service, you agree to these terms of service and our privacy policy."
              },
              {
                title: "2. Service Description",
                content: "We provide a free service for downloading YouTube video thumbnails. The service is provided \"as is\" without any warranties."
              },
              {
                title: "3. User Responsibilities",
                content: "Users are responsible for ensuring they have the right to download and use the thumbnails they obtain through our service."
              },
              {
                title: "4. Limitations of Use",
                content: "You agree not to misuse our service or attempt to access it using unauthorized means."
              },
              {
                title: "5. Changes to Service",
                content: "We reserve the right to modify or discontinue our service at any time without notice."
              }
            ]
          },
          disclaimer: {
            title: "Disclaimer",
            sections: [
              {
                title: "1. Copyright Notice",
                content: "The thumbnails available through our service are the property of their respective owners. We do not claim ownership of any thumbnails downloaded through our service."
              },
              {
                title: "2. Fair Use",
                content: "Users are responsible for ensuring their use of downloaded thumbnails complies with applicable copyright laws and fair use principles."
              },
              {
                title: "3. No Warranty",
                content: "Our service is provided \"as is\" without any warranties, express or implied. We do not guarantee the availability or quality of thumbnails."
              },
              {
                title: "4. Limitation of Liability",
                content: "We shall not be liable for any damages arising from the use or inability to use our service."
              },
              {
                title: "5. Third-Party Content",
                content: "We are not responsible for any third-party content accessed through our service, including the content of downloaded thumbnails."
              }
            ]
          },
          contact: {
            title: "Contact Us",
            content: (
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-gray-600 mb-6">Have questions or concerns? We're here to help! You can reach us through any of the following methods:</p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-blue-500 mr-3" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a href="mailto:contact@example.com" className="text-blue-600 hover:text-blue-800">contact@example.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-blue-500 mr-3" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-800">(123) 456-7890</a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-4">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                  <p className="text-gray-600">Saturday - Sunday: Closed</p>
                </div>
              </div>
            )
          }
        };

        const pageContent = content[currentSection as keyof typeof content];

        return (
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{pageContent.title}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3">
                {currentSection === 'contact' ? (
                  pageContent.content
                ) : (
                  <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
                    {pageContent.sections.map((section, index) => (
                      <section key={index}>
                        <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                        <p className="text-gray-600 mb-4">{section.content}</p>
                      </section>
                    ))}
                  </div>
                )}
              </div>
              {/* Vertical Ad Space */}
              <div className="lg:col-span-1">
                <AdSpace className="sticky top-4" />
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <Youtube className="w-16 h-16 text-red-600" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                YouTube Thumbnail Downloader
              </h1>
              <p className="text-lg text-gray-600">
                Download YouTube video thumbnails in different qualities
              </p>
            </div>

            {/* Top Ad Space */}
            <AdSpace className="max-w-2xl mx-auto mb-12" />

            <div className="max-w-2xl mx-auto mb-12">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-4">
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter YouTube video URL"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Get Thumbnails
                  </button>
                </div>
                {error && (
                  <div className="flex items-center text-red-600 gap-2">
                    <AlertCircle className="w-5 h-5" />
                    <span>{error}</span>
                  </div>
                )}
              </form>
            </div>

            {videoId && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ThumbnailCard
                    quality="Maximum Resolution"
                    size="1280 x 720"
                    url={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  />
                  <ThumbnailCard
                    quality="High Quality"
                    size="480 x 360"
                    url={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                  />
                  <ThumbnailCard
                    quality="Standard Quality"
                    size="320 x 180"
                    url={`https://img.youtube.com/vi/${videoId}/sddefault.jpg`}
                  />
                </div>
                
                {/* Bottom Ad Space */}
                <AdSpace className="mt-12" />
              </>
            )}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <MenuBar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;