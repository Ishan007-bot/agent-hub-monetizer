
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BarChart3, TrendingUp, Users, Zap, DollarSign, Activity } from 'lucide-react';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('7d');

  const agentStats = [
    {
      name: "GPT-4 Classifier",
      requests: 1250,
      revenue: 125.50,
      rating: 4.9,
      users: 89,
      status: "active"
    },
    {
      name: "Image Analyzer",
      requests: 890,
      revenue: 178.90,
      rating: 4.8,
      users: 67,
      status: "active"
    },
    {
      name: "Code Helper",
      requests: 450,
      revenue: 67.80,
      rating: 4.7,
      users: 34,
      status: "paused"
    }
  ];

  const recentTransactions = [
    { id: "TXN-001", agent: "GPT-4 Classifier", tokens: 25, amount: 0.05, time: "2 min ago" },
    { id: "TXN-002", agent: "Image Analyzer", tokens: 80, amount: 0.16, time: "5 min ago" },
    { id: "TXN-003", agent: "Code Helper", tokens: 15, amount: 0.03, time: "8 min ago" },
    { id: "TXN-004", agent: "GPT-4 Classifier", tokens: 45, amount: 0.09, time: "12 min ago" }
  ];

  return (
    <section id="dashboard" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Developer Dashboard</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Track your AI agent performance, monitor revenue streams, and optimize your marketplace presence 
            with real-time analytics and insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Revenue</p>
                  <p className="text-2xl font-bold text-white">$1,247.80</p>
                  <p className="text-green-400 text-sm">+12.5% this week</p>
                </div>
                <DollarSign className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">API Requests</p>
                  <p className="text-2xl font-bold text-white">34,521</p>
                  <p className="text-blue-400 text-sm">+8.3% this week</p>
                </div>
                <Activity className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Active Users</p>
                  <p className="text-2xl font-bold text-white">892</p>
                  <p className="text-purple-400 text-sm">+15.7% this week</p>
                </div>
                <Users className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Avg Rating</p>
                  <p className="text-2xl font-bold text-white">4.8</p>
                  <p className="text-yellow-400 text-sm">+0.2 this week</p>
                </div>
                <TrendingUp className="w-8 h-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-white flex items-center">
                    <BarChart3 className="w-6 h-6 mr-2 text-purple-400" />
                    Agent Performance
                  </CardTitle>
                  <div className="flex space-x-2">
                    {['24h', '7d', '30d'].map((range) => (
                      <Button
                        key={range}
                        size="sm"
                        variant={timeRange === range ? "default" : "outline"}
                        onClick={() => setTimeRange(range)}
                        className={timeRange === range ? "bg-purple-600" : "border-purple-500/50"}
                      >
                        {range}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-slate-700">
                      <TableHead className="text-gray-300">Agent Name</TableHead>
                      <TableHead className="text-gray-300">Requests</TableHead>
                      <TableHead className="text-gray-300">Revenue</TableHead>
                      <TableHead className="text-gray-300">Rating</TableHead>
                      <TableHead className="text-gray-300">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {agentStats.map((agent, index) => (
                      <TableRow key={index} className="border-slate-700">
                        <TableCell className="text-white font-medium">{agent.name}</TableCell>
                        <TableCell className="text-gray-300">{agent.requests.toLocaleString()}</TableCell>
                        <TableCell className="text-green-400">${agent.revenue}</TableCell>
                        <TableCell className="text-yellow-400">{agent.rating}</TableCell>
                        <TableCell>
                          <Badge 
                            className={agent.status === 'active' 
                              ? "bg-green-600/20 text-green-300 border-green-500/30" 
                              : "bg-yellow-600/20 text-yellow-300 border-yellow-500/30"
                            }
                          >
                            {agent.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-slate-800/50 border-purple-500/20 mb-6">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Zap className="w-6 h-6 mr-2 text-yellow-400" />
                  Live Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentTransactions.map((txn) => (
                    <div key={txn.id} className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                      <div>
                        <p className="text-white text-sm font-medium">{txn.agent}</p>
                        <p className="text-gray-400 text-xs">{txn.tokens} tokens • {txn.time}</p>
                      </div>
                      <div className="text-green-400 font-medium">
                        +${txn.amount.toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600">
                  Upload New Agent
                </Button>
                <Button variant="outline" className="w-full border-purple-500/50 text-purple-300">
                  View Analytics
                </Button>
                <Button variant="outline" className="w-full border-purple-500/50 text-purple-300">
                  Manage Pricing
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
