import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Tag, User, Search } from 'lucide-react';

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Engineering', 'Competition', 'Team', 'Community', 'Partnerships'];

  const blogPosts = [
    {
      id: 1,
      title: 'Breaking Ground: Our First Solar Panel Installation',
      excerpt: 'The team successfully installed our first high-efficiency solar array on the demo vehicle, marking a major milestone in our journey toward the Solar Car Challenge 2026.',
      content: 'After months of planning and preparation, we\'ve successfully completed the installation of our first solar array on Genesis, our demo vehicle. This milestone represents countless hours of research, design, and careful implementation by our electrical systems team.',
      image: 'https://images.pexels.com/photos/9875408/pexels-photo-9875408.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      date: '2024-03-15',
      readTime: '5 min read',
      category: 'Engineering',
      author: 'Marcus Rodriguez',
      tags: ['Solar Technology', 'Engineering', 'Milestone']
    },
    {
      id: 2,
      title: 'Aerodynamics Testing: Wind Tunnel Results Exceed Expectations',
      excerpt: 'Our latest wind tunnel tests show significant improvements in drag coefficient, bringing us closer to our performance goals for the competition vehicle.',
      content: 'The results from our recent wind tunnel testing session at UBC Vancouver have exceeded our expectations. Our aerodynamics team, led by Emma Thompson, achieved a drag coefficient of 0.18 for our demo vehicle - a remarkable achievement that validates our design approach.',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      date: '2024-03-08',
      readTime: '8 min read',
      category: 'Engineering',
      author: 'Emma Thompson',
      tags: ['Aerodynamics', 'Testing', 'Performance']
    },
    {
      id: 3,
      title: 'Community Outreach: Inspiring Young Engineers',
      excerpt: 'We visited local high schools to share our passion for sustainable engineering and renewable energy with the next generation of innovators.',
      content: 'Our community outreach program reached over 200 high school students this month. Team members presented at three local schools, demonstrating solar technology and sharing their experiences in engineering and sustainable transportation.',
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      date: '2024-02-28',
      readTime: '4 min read',
      category: 'Community',
      author: 'Alex Morrison',
      tags: ['Outreach', 'Education', 'Community']
    },
    {
      id: 4,
      title: 'New Partnership: Tesla Energy Solutions Joins Our Mission',
      excerpt: 'We\'re excited to announce our partnership with Tesla Energy Solutions, who will provide battery technology and charging infrastructure support.',
      content: 'Tesla Energy Solutions has joined Ogopogo Solar as our newest Platinum Partner. This partnership will provide us with cutting-edge battery technology and access to their charging infrastructure expertise, significantly advancing our competition vehicle development.',
      image: 'https://images.pexels.com/photos/8849322/pexels-photo-8849322.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      date: '2024-02-20',
      readTime: '3 min read',
      category: 'Partnerships',
      author: 'Alex Morrison',
      tags: ['Partnership', 'Tesla', 'Battery Technology']
    },
    {
      id: 5,
      title: 'Team Spotlight: Meet Our New Software Engineer',
      excerpt: 'Priya Patel joins our team as Software & Controls Engineer, bringing expertise in embedded systems and data analysis.',
      content: 'We\'re thrilled to welcome Priya Patel to the Ogopogo Solar team. As our new Software & Controls Engineer, Priya brings extensive experience in embedded systems, having previously developed mobile applications with over 100,000 downloads.',
      image: 'https://images.pexels.com/photos/3767411/pexels-photo-3767411.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      date: '2024-02-15',
      readTime: '6 min read',
      category: 'Team',
      author: 'Sarah Chen',
      tags: ['Team', 'Software', 'New Member']
    },
    {
      id: 6,
      title: 'Solar Car Challenge 2026: Registration Complete',
      excerpt: 'We\'ve officially registered for the Solar Car Challenge 2026, marking the beginning of our intensive preparation phase.',
      content: 'After months of preparation and planning, we\'ve successfully completed our registration for the Solar Car Challenge 2026. This prestigious competition will test every aspect of our vehicle design and team preparation over a multi-day endurance race.',
      image: 'https://images.pexels.com/photos/9875445/pexels-photo-9875445.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      date: '2024-02-10',
      readTime: '7 min read',
      category: 'Competition',
      author: 'Sarah Chen',
      tags: ['Competition', 'Solar Car Challenge', 'Registration']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Engineering': 'bg-primary-100 text-primary-800',
      'Competition': 'bg-gold-100 text-gold-800',
      'Team': 'bg-blue-100 text-blue-800',
      'Community': 'bg-green-100 text-green-800',
      'Partnerships': 'bg-purple-100 text-purple-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-900 via-dark-900 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/9875408/pexels-photo-9875408.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="News and updates"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
            News & <span className="text-gold-400">Blog</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Stay up to date with our progress, achievements, and insights from the world of solar racing. 
            Follow our journey from prototype to competition.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-primary-600 to-gold-500 text-white shadow-lg'
                      : 'bg-gray-100 text-dark-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {filteredPosts.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover min-h-[400px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(filteredPosts[0].category)}`}>
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(filteredPosts[0].category)}`}>
                      {filteredPosts[0].category}
                    </span>
                    <div className="flex items-center text-sm text-dark-500 space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(filteredPosts[0].date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{filteredPosts[0].readTime}</span>
                      </div>
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-dark-900 mb-4">{filteredPosts[0].title}</h2>
                  <p className="text-dark-600 mb-6 leading-relaxed">{filteredPosts[0].content}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-dark-400" />
                      <span className="text-sm text-dark-600">By {filteredPosts[0].author}</span>
                    </div>
                    <button className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group">
                      <span>Read Full Article</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 1 && (
            <>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-dark-900 mb-6">
                  Latest <span className="text-primary-600">Articles</span>
                </h2>
                <p className="text-xl text-dark-600">
                  {filteredPosts.length - 1} more article{filteredPosts.length - 1 !== 1 ? 's' : ''} 
                  {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.slice(1).map((post, index) => (
                  <article
                    key={post.id}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center text-sm text-dark-500 mb-3 space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-dark-600 mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-dark-400" />
                          <span className="text-sm text-dark-600">{post.author}</span>
                        </div>
                        <button className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group">
                          <span>Read More</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center space-x-1 px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                          >
                            <Tag className="h-3 w-3" />
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📰</div>
              <h3 className="text-2xl font-bold text-dark-900 mb-4">No articles found</h3>
              <p className="text-dark-600 mb-6">
                Try adjusting your search terms or category filter.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-dark-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay <span className="text-gold-400">Updated</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Subscribe to our newsletter to get the latest updates on our solar racing journey, 
              technical insights, and team achievements delivered to your inbox.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition-colors text-white placeholder-gray-300"
                />
                <button className="bg-gradient-to-r from-gold-500 to-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;