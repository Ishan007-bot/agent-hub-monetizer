
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, Code, Play, Settings, BarChart, Eye } from 'lucide-react';
import CodeEditor from '@/components/producer/CodeEditor';
import AgentPreview from '@/components/producer/AgentPreview';
import Navigation from '@/components/layout/Navigation';

const ProducerDashboard = () => {
  const [activeTab, setActiveTab] = useState('upload');
  const [code, setCode] = useState('');
  const [agentName, setAgentName] = useState('');
  const [agentDescription, setAgentDescription] = useState('');
  const [tokenPrice, setTokenPrice] = useState('5');

  const myAgents = [
    {
      id: 1,
      name: 'Text Classifier Pro',
      description: 'Advanced text classification with 98% accuracy',
      status: 'Published',
      earnings: 145.50,
      users: 1250,
      rating: 4.9
    },
    {
      id: 2,
      name: 'Image Style Transfer',
      description: 'Transform images with artistic styles',
      status: 'Draft',
      earnings: 0,
      users: 0,
      rating: 0
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Producer Dashboard</h1>
          <p className="text-gray-600">Create, manage, and monetize your AI agents</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="upload">Upload Agent</TabsTrigger>
            <TabsTrigger value="agents">My Agents</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Upload className="w-6 h-6 mr-2" />
                    Upload Your Code
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Agent Name</label>
                    <Input
                      value={agentName}
                      onChange={(e) => setAgentName(e.target.value)}
                      placeholder="Enter agent name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <Textarea
                      value={agentDescription}
                      onChange={(e) => setAgentDescription(e.target.value)}
                      placeholder="Describe what your agent does"
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Token Price per Request</label>
                    <Input
                      type="number"
                      value={tokenPrice}
                      onChange={(e) => setTokenPrice(e.target.value)}
                      placeholder="5"
                    />
                  </div>

                  <CodeEditor value={code} onChange={setCode} />

                  <div className="flex space-x-4">
                    <Button className="flex-1">
                      <Play className="w-4 h-4 mr-2" />
                      Test Agent
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <AgentPreview 
                name={agentName}
                description={agentDescription}
                tokenPrice={tokenPrice}
                code={code}
              />
            </div>
          </TabsContent>

          <TabsContent value="agents" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myAgents.map((agent) => (
                <motion.div
                  key={agent.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{agent.name}</CardTitle>
                        <Badge variant={agent.status === 'Published' ? 'default' : 'secondary'}>
                          {agent.status}
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-sm">{agent.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Earnings:</span>
                          <span className="font-semibold">${agent.earnings}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Users:</span>
                          <span className="font-semibold">{agent.users}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Rating:</span>
                          <span className="font-semibold">{agent.rating || 'N/A'}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2 mt-4">
                        <Button size="sm" variant="outline" className="flex-1">
                          Edit
                        </Button>
                        <Button size="sm" className="flex-1">
                          View
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="text-center p-6">
                <BarChart className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-green-600 mb-2">$1,245</div>
                <div className="text-gray-600">Total Earnings</div>
              </Card>
              
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">2,547</div>
                <div className="text-gray-600">Total Users</div>
              </Card>
              
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">12,340</div>
                <div className="text-gray-600">API Calls</div>
              </Card>
              
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">4.8</div>
                <div className="text-gray-600">Avg Rating</div>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Analytics Chart Placeholder</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="w-6 h-6 mr-2" />
                  Account Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Display Name</label>
                    <Input placeholder="Your display name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Bio</label>
                  <Textarea placeholder="Tell us about yourself" rows={3} />
                </div>

                <Button>Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProducerDashboard;
