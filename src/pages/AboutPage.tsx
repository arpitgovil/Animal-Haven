import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Users, Home, Award, MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroAnimals from "@/assets/hero-animals.jpg";

const AboutPage = () => {
  const stats = [
    { number: "15,000+", label: "Animals Rescued", icon: Heart },
    { number: "12,500+", label: "Successful Adoptions", icon: Home },
    { number: "500+", label: "Active Volunteers", icon: Users },
    { number: "25", label: "Partner Shelters", icon: Award }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & Director",
      bio: "Animal welfare advocate with 15+ years of experience in rescue operations.",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Dr. Michael Chen",
      role: "Chief Veterinarian",
      bio: "Licensed veterinarian specializing in shelter medicine and animal rehabilitation.",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Emily Rodriguez",
      role: "Adoption Coordinator",
      bio: "Passionate about matching pets with perfect families. Former dog trainer.",
      image: "/api/placeholder/200/200"
    },
    {
      name: "James Wilson",
      role: "Volunteer Coordinator",
      bio: "Organizes our amazing volunteer program and community outreach initiatives.",
      image: "/api/placeholder/200/200"
    }
  ];

  const milestones = [
    { year: "2018", event: "Animal Haven Founded", description: "Started with a mission to connect pets with loving families" },
    { year: "2019", event: "First 1,000 Adoptions", description: "Celebrated our first major milestone" },
    { year: "2020", event: "Virtual Adoption Program", description: "Adapted to help animals during the pandemic" },
    { year: "2021", event: "Partner Network Expansion", description: "Grew to include 25+ shelter partners" },
    { year: "2022", event: "10,000 Animals Rescued", description: "Reached a major rescue milestone" },
    { year: "2023", event: "Mobile Adoption Events", description: "Launched mobile adoption program" },
    { year: "2024", event: "15,000 Rescues & Counting", description: "Continuing to grow our impact" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={heroAnimals}
          alt="Rescued animals at Animal Haven"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl leading-relaxed">
              Every animal deserves love, care, and a forever home. Since 2018, we've been making that dream a reality.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-16 bg-primary-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Animal Haven exists to bridge the gap between homeless animals and loving families. We work tirelessly to rescue, rehabilitate, and rehome animals while supporting local shelters and building a compassionate community dedicated to animal welfare.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Our Impact by the Numbers
            </h2>
            <p className="text-lg text-muted-foreground">
              Every number represents a life saved and a family made whole.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-soft rounded-full mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-secondary-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                How We Started
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Animal Haven began in 2018 when our founder, Sarah Johnson, noticed the gap between the number of animals needing homes and the people wanting to adopt. Too many families didn't know where to start, and too many shelters struggled with visibility.
                </p>
                <p>
                  What started as a simple website to connect local shelters with potential adopters has grown into a comprehensive platform serving thousands of animals across multiple states. We've built partnerships with rescue organizations, developed innovative adoption programs, and created a community of animal lovers committed to making a difference.
                </p>
                <p>
                  Today, Animal Haven is more than just an adoption platform—we're a movement. We provide resources, support, and hope to animals in need while empowering people to become part of the solution.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Card className="bg-card border-0 shadow-card">
                  <CardContent className="p-6 text-center">
                    <Heart className="h-8 w-8 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Compassion First</h3>
                    <p className="text-sm text-muted-foreground">Every decision we make is guided by what's best for the animals.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-0 shadow-card">
                  <CardContent className="p-6 text-center">
                    <Users className="h-8 w-8 text-secondary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Community Driven</h3>
                    <p className="text-sm text-muted-foreground">We believe in the power of people coming together for animals.</p>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4 pt-8">
                <Card className="bg-card border-0 shadow-card">
                  <CardContent className="p-6 text-center">
                    <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Excellence</h3>
                    <p className="text-sm text-muted-foreground">We strive for the highest standards in animal care and service.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-0 shadow-card">
                  <CardContent className="p-6 text-center">
                    <Home className="h-8 w-8 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Forever Homes</h3>
                    <p className="text-sm text-muted-foreground">Our goal is lasting, loving matches that enrich both pets and families.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Key milestones in our mission to help animals find homes.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full"></div>
                  
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className="ml-12 md:ml-0">
                      <Badge variant="outline" className="mb-2">
                        {milestone.year}
                      </Badge>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground">
              The passionate people behind Animal Haven's mission.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-soft transition-shadow">
                <div className="aspect-square bg-muted"></div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Have questions about adoption, volunteering, or our mission? We'd love to hear from you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
              <p className="text-muted-foreground text-center">
                123 Hope Street<br />
                Animal City, AC 12345
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground">
                (555) ANIMALS<br />
                (555) 264-6257
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
              <p className="text-muted-foreground">
                hello@animalhaven.org<br />
                adopt@animalhaven.org
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/adopt">Start Adopting</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/volunteer-donate">Get Involved</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;