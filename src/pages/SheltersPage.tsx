import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Phone, Clock, Heart, Users, Gift } from "lucide-react";
import { Link } from "react-router-dom";

const SheltersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("all");

  // Sample shelter data
  const shelters = [
    {
      id: 1,
      name: "Downtown Animal Shelter",
      address: "123 Main St, Downtown",
      city: "New York",
      phone: "(555) 123-4567",
      hours: "Mon-Fri 9AM-6PM, Sat-Sun 10AM-4PM",
      image: "/api/placeholder/400/200",
      availableAnimals: 45,
      volunteersNeeded: true,
      currentNeeds: ["Blankets", "Dog Food", "Cat Toys"],
      description: "A full-service animal shelter providing care for abandoned and surrendered pets.",
      distance: "2.1 miles"
    },
    {
      id: 2,
      name: "City Cat Rescue",
      address: "456 Oak Ave, Midtown",
      city: "New York",
      phone: "(555) 234-5678",
      hours: "Daily 10AM-5PM",
      image: "/api/placeholder/400/200",
      availableAnimals: 32,
      volunteersNeeded: false,
      currentNeeds: ["Cat Litter", "Medical Supplies"],
      description: "Specialized rescue focusing on cat welfare and adoption services.",
      distance: "1.5 miles"
    },
    {
      id: 3,
      name: "Happy Tails Shelter",
      address: "789 Pine Rd, Uptown",
      city: "Brooklyn",
      phone: "(555) 345-6789",
      hours: "Tue-Sun 11AM-7PM",
      image: "/api/placeholder/400/200",
      availableAnimals: 38,
      volunteersNeeded: true,
      currentNeeds: ["Puppy Formula", "Cleaning Supplies", "Volunteers"],
      description: "Community-focused shelter with a strong volunteer program and rehabilitation services.",
      distance: "3.2 miles"
    }
  ];

  const filteredShelters = shelters.filter(shelter => {
    const matchesSearch = shelter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         shelter.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = selectedCity === "all" || shelter.city.toLowerCase() === selectedCity.toLowerCase();
    
    return matchesSearch && matchesCity;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-secondary-soft py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Find Local Animal Shelters
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Connect with verified shelters in your area. Each one is making a difference in animals' lives.
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-card rounded-lg shadow-card p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search shelters by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-4">
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cities</SelectItem>
                  <SelectItem value="new york">New York</SelectItem>
                  <SelectItem value="brooklyn">Brooklyn</SelectItem>
                </SelectContent>
              </Select>

              <Button 
                variant="outline" 
                onClick={() => {
                  if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                      (position) => {
                        const { latitude, longitude } = position.coords;
                        console.log('User location:', latitude, longitude);
                        // Here you would filter shelters by distance from user location
                        alert(`Found your location: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
                      },
                      (error) => {
                        console.error('Error getting location:', error);
                        alert('Could not get your location. Please enable location services.');
                      }
                    );
                  } else {
                    alert('Geolocation is not supported by this browser.');
                  }
                }}
                className="hover-lift"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Near Me
              </Button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Found {filteredShelters.length} shelters in your area
          </p>
        </div>

        {/* Shelter Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredShelters.map((shelter) => (
            <Card key={shelter.id} className="overflow-hidden hover:shadow-soft hover-lift smooth-transition theme-transition">
              <div className="relative h-48 bg-muted">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge variant="secondary" className="mb-2">
                    {shelter.distance}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl font-semibold text-foreground mb-2">
                      {shelter.name}
                    </CardTitle>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{shelter.address}</span>
                    </div>
                  </div>
                  {shelter.volunteersNeeded && (
                    <Badge variant="outline" className="text-accent border-accent">
                      Volunteers Needed
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {shelter.description}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 mr-1 text-primary" />
                    <span>{shelter.availableAnimals} animals available</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span className="text-muted-foreground">{shelter.hours}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 mr-1" />
                  <span>{shelter.phone}</span>
                </div>
                
                {shelter.currentNeeds.length > 0 && (
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2 flex items-center">
                      <Gift className="h-4 w-4 mr-1" />
                      Current Needs:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {shelter.currentNeeds.map((need, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {need}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex gap-3 pt-4">
                  <Button asChild className="flex-1">
                    <Link to={`/shelter/${shelter.id}`}>
                      View Shelter
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Users className="h-4 w-4 mr-1" />
                    Volunteer
                  </Button>
                  <Button variant="outline" size="sm">
                    <Gift className="h-4 w-4 mr-1" />
                    Donate
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredShelters.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No shelters match your search criteria. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SheltersPage;