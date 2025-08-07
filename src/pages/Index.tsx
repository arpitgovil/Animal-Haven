import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Users, 
  Gift, 
  Search, 
  MapPin, 
  CheckCircle,
  Star,
  ArrowRight,
  Home,
  Shield,
  Calendar,
  Phone
} from "lucide-react";
import { Link } from "react-router-dom";
import heroAnimals from "@/assets/hero-animals.jpg";
import dogGolden from "@/assets/dog-golden.jpg";
import catOrange from "@/assets/cat-orange.jpg";
import dogBorderCollie from "@/assets/dog-border-collie.jpg";
import GoogleMap from "@/components/GoogleMap";

const Index = () => {
  const [searchLocation, setSearchLocation] = useState("");

  const steps = [
    {
      icon: Search,
      title: "Search & Discover",
      description: "Browse available pets from verified shelters in your area or search by specific criteria."
    },
    {
      icon: Heart,
      title: "Meet Your Match",
      description: "Schedule a meet-and-greet with potential companions to find your perfect pet."
    },
    {
      icon: Home,
      title: "Welcome Home",
      description: "Complete the adoption process and welcome your new family member home."
    }
  ];

  const featuredPets = [
    {
      name: "Buddy",
      type: "Golden Retriever",
      age: "2 years",
      location: "Downtown Shelter",
      image: dogGolden,
      urgent: false
    },
    {
      name: "Whiskers",
      type: "Orange Tabby",
      age: "3 years", 
      location: "City Cat Rescue",
      image: catOrange,
      urgent: true
    },
    {
      name: "Luna",
      type: "Border Collie Mix",
      age: "4 years",
      location: "Happy Tails Shelter",
      image: dogBorderCollie,
      urgent: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroAnimals}
            alt="Happy rescued animals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 animate-fade-in">
            Find Your Perfect
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
              Companion
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Every pet deserves a loving home. Connect with local shelters and find your new best friend today.
          </p>
          
          {/* Main CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="text-lg px-8 py-4 h-auto hover-lift smooth-transition" asChild>
              <Link to="/adopt">
                <Heart className="mr-2 h-5 w-5" />
                Adopt a Pet
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover-lift smooth-transition" asChild>
              <Link to="/volunteer-donate">
                <Gift className="mr-2 h-5 w-5" />
                Donate to Shelters
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover-lift smooth-transition" asChild>
              <Link to="/volunteer-donate">
                <Users className="mr-2 h-5 w-5" />
                Volunteer Today
              </Link>
            </Button>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search shelters near you..."
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg bg-white/95 backdrop-blur-sm border-0 rounded-full smooth-transition focus:shadow-glow"
              />
              <Button 
                size="sm" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full hover-lift"
                asChild
              >
                <Link to="/shelters">
                  <Search className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Find Shelters Near You */}
      <div className="py-20 bg-secondary-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Find Shelters Near You
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Use our interactive map to discover verified animal shelters in your area.
            </p>
          </div>
          
          <div className="animate-slide-up">
            <GoogleMap />
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              How Animal Haven Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've made finding your perfect companion simple, safe, and rewarding.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center group animate-scale-in hover-lift" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-soft rounded-full mb-4 group-hover:bg-primary group-hover:text-primary-foreground smooth-transition">
                    <Icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Featured Pets */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">
              Pets Looking for Homes
            </h2>
            <p className="text-xl text-muted-foreground">
              Meet some of the amazing animals waiting for their forever families.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {featuredPets.map((pet, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-soft hover-lift smooth-transition animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative">
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-64 object-cover smooth-transition hover:scale-105"
                  />
                  {pet.urgent && (
                    <Badge className="absolute top-4 left-4 bg-accent animate-pulse">
                      Urgent
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {pet.name}
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    {pet.type} • {pet.age}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    {pet.location}
                  </div>
                  <Button className="w-full hover-lift smooth-transition">
                    Meet {pet.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button size="lg" variant="outline" className="hover-lift smooth-transition" asChild>
              <Link to="/adopt">
                View All Available Pets
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-20 bg-secondary-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Read about the amazing journeys of pets who found their forever homes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-soft hover-lift smooth-transition theme-transition animate-scale-in">
              <div className="relative">
                <img
                  src={dogGolden}
                  alt="Happy dog story"
                  className="w-full h-48 object-cover hover-scale smooth-transition"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  "From Shelter to Family"
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  "Max found his forever home with the Johnson family. He now enjoys daily walks and playing with their kids."
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="h-4 w-4 mr-1 text-accent" />
                  <span>The Johnson Family</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-soft hover-lift smooth-transition theme-transition animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <img
                  src={catOrange}
                  alt="Happy cat story"
                  className="w-full h-48 object-cover hover-scale smooth-transition"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  "A Second Chance"
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  "Bella was shy and scared, but with patience and love, she became the perfect companion for Sarah."
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="h-4 w-4 mr-1 text-accent" />
                  <span>Sarah Mitchell</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-soft hover-lift smooth-transition theme-transition animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="relative">
                <img
                  src={dogBorderCollie}
                  alt="Happy dog story"
                  className="w-full h-48 object-cover hover-scale smooth-transition"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  "Perfect Match"
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  "Luna's intelligence and energy made her the ideal companion for active couple Mark and Lisa."
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="h-4 w-4 mr-1 text-accent" />
                  <span>Mark & Lisa Chen</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-muted-foreground">
              Together, we're making a difference in the lives of countless animals.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group hover-lift smooth-transition animate-scale-in">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">2,847</div>
              <div className="text-muted-foreground">Animals Rescued</div>
            </div>
            <div className="text-center group hover-lift smooth-transition animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">1,456</div>
              <div className="text-muted-foreground">Successful Adoptions</div>
            </div>
            <div className="text-center group hover-lift smooth-transition animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">98</div>
              <div className="text-muted-foreground">Partner Shelters</div>
            </div>
            <div className="text-center group hover-lift smooth-transition animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">512</div>
              <div className="text-muted-foreground">Active Volunteers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-primary-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of others who have already found their perfect companions or helped animals in need.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 h-auto hover-lift smooth-transition" asChild>
                <Link to="/adopt">
                  <Heart className="mr-2 h-5 w-5" />
                  Start Your Journey
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto hover-lift smooth-transition" asChild>
                <Link to="/volunteer-donate">
                  <Gift className="mr-2 h-5 w-5" />
                  Help Today
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
