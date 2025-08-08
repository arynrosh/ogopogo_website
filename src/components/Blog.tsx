import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Breaking Ground: Our First Solar Panel Installation',
      excerpt: 'The team successfully installed our first high-efficiency solar array on the demo vehicle, marking a major milestone in our journey.',
      image: 'https://images.pexels.com/photos/9875408/pexels-photo-9875408.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      date: '2024-03-15',
      readTime: '5 min read',
      category: 'Engineering'
    },
    {
      id: 2,
      title: 'Aerodynamics Testing: Wind Tunnel Results',
      excerpt: 'Our latest wind tunnel tests show significant improvements in drag coefficient, bringing us closer to our performance goals.',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      date: '2024-03-08',
      readTime: '8 min read',
      category: 'Research'
    },
    {
      id: 3,
      title: 'Community Outreach: Inspiring Young Engineers',
      excerpt: 'We visited local high schools to share our passion for sustainable engineering and renewable energy with the next generation.',
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      date: '2024-02-28',
      readTime: '4 min read',
      category: 'Community'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest <span className="bg-gradient-to-r from-primary-600 to-gold-600 bg-clip-text text-transparent">News & Updates</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay up to date with our progress, achievements, and insights from the world of solar racing
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <a
                  href={`#blog-${post.id}`}
                  className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                >
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#all-posts"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-gold-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <span>View All Posts</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;