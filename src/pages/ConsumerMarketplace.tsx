
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Star, Users, Zap, Filter, Grid, List } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import AgentCard from '@/components/consumer/AgentCard';

const ConsumerMarketplace = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const featuredAgents = [
    {
      id: 1,
      name: 'GPT-4 Text Classifier',
      author: 'AI_Dev_Pro',
      description: 'Advanced text classification with 98% accuracy. Perfect for sentiment analysis, spam detection, and content categorization.',
      rating: 4.9,
      users: 1250,
      price: 5,
      category: 'NLP',
      tags: ['Text Processing', 'Classification', 'Machine Learning'],
      image: '/placeholder.svg',
      featured: true
    },
    {
      id: 2,
      name: 'Image Style Transfer',
      author: 'VisionCraft',
      description: 'Transform images with artistic style transfer using neural networks. Create stunning artistic variations of your photos.',
      rating: 4.8,
      users: 890,
      price: 8,
      category: 'Computer Vision',
      tags: ['Image Processing', 'Style Transfer', 'Art'],
      image: '/placeholder.svg',
      featured: true
    },
    {
      id: 3,
      name: 'Sentiment Analyzer Pro',
      author: 'DataSciLab',
      description: 'Real-time sentiment analysis for social media, reviews, and customer feedback with multi-language support.',
      rating: 4.7,
      users: 2100,
      price: 3,
      category: 'Analytics',
      tags: ['Sentiment', 'Analytics', 'Social Media'],
      image: '/placeholder.svg',
      featured: false
    },
    {
      id: 4,
      name: 'Code Generator AI',
      author: 'CodeMaster',
      description: 'Generate high-quality code in multiple programming languages from natural language descriptions.',
      rating: 4.6,
      users: 756,
      price: 10,
      category: 'Development',
      tags: ['Code Generation', 'Programming', 'AI Assistant'],
      image: '/placeholder.svg',
      featured: false
    },
    {
      id: 5,
      name: 'Voice Cloning Studio',
      author: 'AudioTech',
      description: 'Create realistic voice clones for content creation, dubbing, and personalized audio experiences.',
      rating: 4.5,
      users: 445,
      price: 15,
      category: 'Audio',
      tags: ['Voice Synthesis', 'Audio', 'TTS'],
      image: '/placeholder.svg',
      featured: false
    },
    {
      id: 6,
      name: 'Document Summarizer',
      author: 'TextAI',
      description: 'Automatically summarize long documents, research papers, and articles while preserving key insights.',
      rating: 4.4,
      users: 1890,
      price: 4,
      category: 'NLP',
      tags: ['Summarization', 'Documents', 'Text Analysis'],
      image: '/placeholder.svg',
      featured: false
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'nlp', label: 'Natural Language Processing' },
    { value: 'computer-vision', label: 'Computer Vision' },
    { value: 'analytics', label: 'Analytics' },
    { value: 'development', label: 'Development' },
    { value: 'audio', label: 'Audio' }
  ];

  const filteredAgents = featuredAgents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         agent.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         agent.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           agent.category.toLowerCase().replace(' ', '-') === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const sortedAgents = [...filteredAgents].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return b.id - a.id;
      default:
        return b.users - a.users;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">AI Agent Marketplace</h1>
          <p className="text-gray-600">Discover and use cutting-edge AI agents from the community</p>
        </div>

        {/* Featured Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Agents</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredAgents.filter(agent => agent.featured).map((agent) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-2 border-orange-200"
                      onClick={() => navigate(`/agent/${agent.id}`)}>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                        Featured
                      </Badge>
                      <Badge variant="secondary">{agent.category}</Badge>
                    </div>
                    <CardTitle className="text-xl">{agent.name}</CardTitle>
                    <p className="text-sm text-gray-600">by {agent.author}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4 line-clamp-2">{agent.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {agent.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{agent.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{agent.users}</span>
                        </div>
                      </div>
                      <div className="text-orange-600 font-bold">
                        {agent.price} tokens
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search agents, categories, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex border rounded-md">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-r-none"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-l-none"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-600">
            Showing {sortedAgents.length} of {featuredAgents.length} agents
          </p>
        </div>

        {/* Agent Grid */}
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {sortedAgents.map((agent) => (
            <AgentCard 
              key={agent.id} 
              agent={agent} 
              viewMode={viewMode}
              onClick={() => navigate(`/agent/${agent.id}`)}
            />
          ))}
        </div>

        {sortedAgents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No agents found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or browse all categories</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsumerMarketplace;
