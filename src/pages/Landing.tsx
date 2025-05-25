
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Sparkles, Code, Users } from 'lucide-react';
import { Navbar } from "@/components/Navbar";
import { useTheme } from "@/components/theme-provider";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="container px-4 py-24 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                The AI Agent
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                  Marketplace
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Build, share, and monetize AI agents. Connect creators with users in a
                revolutionary token-based economy powered by cutting-edge AI technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Button
                  size="lg"
                  onClick={() => navigate('/producer')}
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Start Building
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate('/consumer')}
                >
                  Explore Agents
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative h-[500px] rounded-2xl overflow-hidden"
            >
              <div className="w-full h-full rounded-2xl relative">
                <AIAgentAnimation />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container px-4 py-24 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose SmartMinions?</h2>
            <p className="text-xl text-muted-foreground">
              The most advanced platform for AI agent development and deployment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-10 h-10" />,
                title: "Easy Integration",
                description:
                  "Upload your code and we'll automatically convert it into a deployable AI agent.",
              },
              {
                icon: <Sparkles className="w-10 h-10" />,
                title: "Token Economy",
                description:
                  "Fair, transparent pricing based on actual usage. Earn tokens by creating valuable AI agents.",
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Global Community",
                description:
                  "Join thousands of AI developers and users. Share knowledge and collaborate.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full flex flex-col items-center">
                  <div className="mb-6 p-3 rounded-lg bg-primary/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

const AIAgentAnimation = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Dynamic colors based on theme - updated for purple-pink dark theme
  const colors = {
    background: isDark 
      ? 'linear-gradient(135deg, #220C26 0%, #561B60 50%, #DC8BE0 100%)'
      : 'linear-gradient(135deg, #ff7e5f 0%, #feb47b 50%, #ffb88c 100%)',
    primary: isDark ? '#DC8BE0' : '#F97316',
    secondary: isDark ? '#B45BC7' : '#3B82F6',
    accent: isDark ? '#E6A3E8' : '#EF4444',
    node: isDark ? '#DC8BE0' : '#F59E0B',
    connection: isDark ? 'rgba(220, 139, 224, 0.3)' : 'rgba(249, 115, 22, 0.3)',
    text: isDark ? '#DC8BE0' : '#374151',
    glow: isDark ? '#DC8BE0' : '#F97316'
  };

  return (
    <div 
      className="absolute inset-0 w-full h-full rounded-2xl"
      style={{ background: colors.background }}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke={colors.connection} strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Central Neural Hub */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Main Core */}
          <motion.div
            className="w-24 h-24 rounded-full relative"
            style={{
              background: `linear-gradient(45deg, ${colors.primary}, ${colors.secondary})`,
              boxShadow: `0 0 60px ${colors.glow}40`
            }}
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* Inner Rings */}
            <div 
              className="absolute inset-2 rounded-full animate-pulse"
              style={{ 
                background: `linear-gradient(45deg, ${colors.secondary}80, ${colors.accent}80)`,
                boxShadow: `inset 0 0 20px ${colors.glow}60`
              }}
            />
            <div 
              className="absolute inset-4 rounded-full"
              style={{ 
                background: `radial-gradient(circle, ${colors.primary}60, transparent)`,
              }}
            />
          </motion.div>

          {/* Orbiting Intelligence Nodes */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => {
            const radius = 120 + (index % 2) * 40;
            const angle = (index * 45) * Math.PI / 180;
            return (
              <motion.div
                key={index}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  background: `linear-gradient(45deg, ${colors.node}, ${colors.accent})`,
                  boxShadow: `0 0 15px ${colors.node}80`,
                  top: '50%',
                  left: '50%',
                  transformOrigin: '0 0',
                }}
                animate={{
                  rotate: [0, 360],
                  x: [0, Math.cos(angle) * radius],
                  y: [0, Math.sin(angle) * radius],
                }}
                transition={{
                  duration: 10 + index,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.3,
                }}
              />
            );
          })}

          {/* Data Flow Lines */}
          <div className="absolute inset-0 w-96 h-96 -translate-x-48 -translate-y-48">
            <svg className="w-full h-full" viewBox="0 0 400 400">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => {
                const radius = 120 + (index % 2) * 40;
                const angle = (index * 45) * Math.PI / 180;
                return (
                  <motion.line
                    key={index}
                    x1="200"
                    y1="200"
                    x2={200 + Math.cos(angle) * radius}
                    y2={200 + Math.sin(angle) * radius}
                    stroke={colors.connection}
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: [0, 1, 0], 
                      opacity: [0, 0.8, 0] 
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.4,
                      ease: "easeInOut"
                    }}
                  />
                );
              })}
            </svg>
          </div>

          {/* Floating Data Particles */}
          {Array.from({ length: 12 }).map((_, index) => (
            <motion.div
              key={`particle-${index}`}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: colors.accent,
                boxShadow: `0 0 8px ${colors.accent}`,
                top: '50%',
                left: '50%',
              }}
              animate={{
                x: [0, Math.random() * 300 - 150],
                y: [0, Math.random() * 300 - 150],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: index * 0.5,
                ease: "easeOut"
              }}
            />
          ))}

          {/* Neural Network Mesh */}
          <div className="absolute inset-0 w-80 h-80 -translate-x-40 -translate-y-40">
            <svg className="w-full h-full opacity-30" viewBox="0 0 320 320">
              {/* Hexagonal network pattern */}
              {Array.from({ length: 6 }).map((_, ring) => {
                const radius = 40 + ring * 25;
                return Array.from({ length: 6 }).map((_, point) => {
                  const angle = (point * 60) * Math.PI / 180;
                  const x = 160 + Math.cos(angle) * radius;
                  const y = 160 + Math.sin(angle) * radius;
                  
                  return (
                    <motion.circle
                      key={`${ring}-${point}`}
                      cx={x}
                      cy={y}
                      r="2"
                      fill={colors.secondary}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.3, 0.8, 0.3] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: (ring + point) * 0.1
                      }}
                    />
                  );
                });
              })}
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Status Text */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <p className="text-lg font-semibold" style={{ color: colors.text }}>
          Neural Network Active
        </p>
        <p className="text-sm opacity-75" style={{ color: colors.text }}>
          Processing Intelligence
        </p>
      </motion.div>
    </div>
  );
};

export default Landing;
