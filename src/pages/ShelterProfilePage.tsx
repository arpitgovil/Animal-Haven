import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Mail, Globe, Heart, Users, Gift, CheckCircle } from "lucide-react";
import dogGolden from "@/assets/dog-golden.jpg";
import catOrange from "@/assets/cat-orange.jpg";

const ShelterProfilePage = () => {
  const { id } = useParams();

  // Sample shelter data (in real app, this would be fetched based on ID)
  const shelter = {
    id: parseInt(id || "1"),
    name: "Downtown Animal Shelter",
    description: "A full-service animal shelter providing comprehensive care for abandoned and surrendered pets. We've been serving the community for over 20 years with a mission to find loving homes for every animal in our care.",
    address: "123 Main St, Downtown, NY 10001",
    phone: "(555) 123-4567",
    email: "info@downtownshelter.org",
    website: "www.downtownshelter.org",
    hours: "Mon-Fri 9AM-6PM, Sat-Sun 10AM-4PM",
    image: "/api/placeholder/800/400",
    stats: {
      animalsRescued: 2847,
      adoptions: 2156,
      volunteers: 89
    },
    animals: [
      {
        id: 1,
        name: "Buddy",
        type: "Dog",
        breed: "Golden Retriever",
        age: "2 years",
        image: dogGolden
      },
      {
        id: 2,
        name: "Whiskers",
        type: "Cat",
        breed: "Orange Tabby",
        age: "3 years",
        image: catOrange
      }
    ],
    wishlist: [
      { item: "Premium Dog Food", urgent: true },
      { item: "Cat Litter", urgent: false },
      { item: "Medical Supplies", urgent: true },
      { item: "Blankets & Towels", urgent: false },
      { item: "Cleaning Supplies", urgent: false },
      { item: "Dog Toys", urgent: false }
    ],
    volunteerOpportunities: [
      "Dog Walking & Exercise",
      "Cat Socialization",
      "Administrative Support",
      "Event Planning",
      "Transportation",
      "Photography"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-hero">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-12">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              {shelter.name}
            </h1>
            <div className="flex items-center text-lg mb-2">
              <MapPin className="h-5 w-5 mr-2" />
              {shelter.address}
            </div>
            <div className="flex items-center text-lg">
              <Clock className="h-5 w-5 mr-2" />
              {shelter.hours}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Bar */}
      <div className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                {shelter.phone}
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                {shelter.email}
              </div>
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-2" />
                {shelter.website}
              </div>
            </div>
            <div className="flex gap-3">
              <Button>
                <Heart className="h-4 w-4 mr-2" />
                Adopt
              </Button>
              <Button variant="outline">
                <Users className="h-4 w-4 mr-2" />
                Volunteer
              </Button>
              <Button variant="outline">
                <Gift className="h-4 w-4 mr-2" />
                Donate
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-primary-soft py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {shelter.stats.animalsRescued.toLocaleString()}
              </div>
              <div className="text-muted-foreground">Animals Rescued</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {shelter.stats.adoptions.toLocaleString()}
              </div>
              <div className="text-muted-foreground">Successful Adoptions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {shelter.stats.volunteers}
              </div>
              <div className="text-muted-foreground">Active Volunteers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                About Our Shelter
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {shelter.description}
              </p>
            </div>

            <Tabs defaultValue="animals" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="animals">Available Animals</TabsTrigger>
                <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
                <TabsTrigger value="donate">Donate</TabsTrigger>
              </TabsList>
              
              <TabsContent value="animals" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {shelter.animals.map((animal) => (
                    <Card key={animal.id} className="overflow-hidden">
                      <div className="relative">
                        <img
                          src={animal.image}
                          alt={animal.name}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {animal.name}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {animal.breed} • {animal.age}
                        </p>
                        <Button className="w-full">
                          Meet {animal.name}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="volunteer" className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Volunteer Opportunities
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {shelter.volunteerOpportunities.map((opportunity, index) => (
                      <div key={index} className="flex items-center p-4 bg-card rounded-lg border">
                        <Users className="h-5 w-5 text-primary mr-3" />
                        <span className="text-foreground">{opportunity}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button size="lg">
                      Apply to Volunteer
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="donate" className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    How You Can Help
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button size="lg" className="h-auto p-6 flex-col">
                      <Gift className="h-8 w-8 mb-2" />
                      <span className="text-lg font-semibold">One-Time Donation</span>
                      <span className="text-sm opacity-90">Help us care for animals in need</span>
                    </Button>
                    <Button variant="outline" size="lg" className="h-auto p-6 flex-col">
                      <Heart className="h-8 w-8 mb-2" />
                      <span className="text-lg font-semibold">Monthly Sponsor</span>
                      <span className="text-sm opacity-90">Provide ongoing support</span>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gift className="h-5 w-5 mr-2 text-accent" />
                  Current Wishlist
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {shelter.wishlist.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-foreground">{item.item}</span>
                    {item.urgent && (
                      <Badge variant="destructive" className="text-xs">
                        Urgent
                      </Badge>
                    )}
                  </div>
                ))}
                <Button className="w-full mt-4">
                  Donate Items
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Shelter
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Clock className="h-4 w-4 mr-2" />
                  Schedule Visit
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShelterProfilePage;