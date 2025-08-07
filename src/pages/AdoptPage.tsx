import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Filter, Heart } from "lucide-react";
import dogGolden from "@/assets/dog-golden.jpg";
import catOrange from "@/assets/cat-orange.jpg";
import dogBorderCollie from "@/assets/dog-border-collie.jpg";
import dogHusky from "@/assets/dog-husky.jpg";
import catBlack from "@/assets/cat-black.jpg";
import rabbitBrown from "@/assets/rabbit-brown.jpg";
import dogBeagle from "@/assets/dog-beagle.jpg";
import catPersian from "@/assets/cat-persian.jpg";
import dogLabrador from "@/assets/dog-labrador.jpg";

const AdoptPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedAge, setSelectedAge] = useState("all");

  // Sample animal data
  const animals = [
    {
      id: 1,
      name: "Buddy",
      type: "Dog",
      breed: "Golden Retriever",
      age: "2 years",
      gender: "Male",
      location: "Downtown Animal Shelter",
      distance: "2.1 miles",
      image: dogGolden,
      vaccinated: true,
      spayedNeutered: true,
      description: "Friendly and energetic golden retriever looking for an active family."
    },
    {
      id: 2,
      name: "Whiskers",
      type: "Cat",
      breed: "Orange Tabby",
      age: "3 years",
      gender: "Female",
      location: "City Cat Rescue",
      distance: "1.5 miles",
      image: catOrange,
      vaccinated: true,
      spayedNeutered: true,
      description: "Sweet and calm cat who loves sunny windows and gentle pets."
    },
    {
      id: 3,
      name: "Luna",
      type: "Dog",
      breed: "Border Collie Mix",
      age: "4 years",
      gender: "Female",
      location: "Happy Tails Shelter",
      distance: "3.2 miles",
      image: dogBorderCollie,
      vaccinated: true,
      spayedNeutered: true,
      description: "Intelligent and loyal companion perfect for an active lifestyle."
    },
    {
      id: 4,
      name: "Max",
      type: "Dog",
      breed: "Siberian Husky",
      age: "3 years",
      gender: "Male",
      location: "Mountain View Shelter",
      distance: "4.1 miles",
      image: dogHusky,
      vaccinated: true,
      spayedNeutered: true,
      description: "Beautiful husky with striking blue eyes, loves outdoor adventures."
    },
    {
      id: 5,
      name: "Shadow",
      type: "Cat",
      breed: "Black Domestic Shorthair",
      age: "1 year",
      gender: "Male",
      location: "Rescue Haven",
      distance: "2.8 miles",
      image: catBlack,
      vaccinated: true,
      spayedNeutered: true,
      description: "Playful young cat with a glossy black coat, loves interactive toys."
    },
    {
      id: 6,
      name: "Coco",
      type: "Rabbit",
      breed: "Holland Lop",
      age: "2 years",
      gender: "Female",
      location: "Small Animal Sanctuary",
      distance: "3.5 miles",
      image: rabbitBrown,
      vaccinated: true,
      spayedNeutered: true,
      description: "Gentle rabbit with soft brown fur, perfect for quiet homes."
    },
    {
      id: 7,
      name: "Charlie",
      type: "Dog",
      breed: "Beagle",
      age: "5 years",
      gender: "Male",
      location: "Countryside Rescue",
      distance: "5.2 miles",
      image: dogBeagle,
      vaccinated: true,
      spayedNeutered: true,
      description: "Friendly beagle with a great nose, loves walks and sniffing around."
    },
    {
      id: 8,
      name: "Princess",
      type: "Cat",
      breed: "Persian",
      age: "4 years",
      gender: "Female",
      location: "Elite Pet Rescue",
      distance: "6.1 miles",
      image: catPersian,
      vaccinated: true,
      spayedNeutered: true,
      description: "Elegant Persian cat with long fluffy coat, loves gentle brushing."
    },
    {
      id: 9,
      name: "Rocky",
      type: "Dog",
      breed: "Labrador Retriever",
      age: "6 years",
      gender: "Male",
      location: "Second Chance Shelter",
      distance: "4.8 miles",
      image: dogLabrador,
      vaccinated: true,
      spayedNeutered: true,
      description: "Calm and loving lab, great with kids and other pets."
    }
  ];

  const filteredAnimals = animals.filter(animal => {
    const matchesSearch = animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         animal.breed.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || animal.type.toLowerCase() === selectedType.toLowerCase();
    const matchesAge = selectedAge === "all" || animal.age.includes(selectedAge);
    
    return matchesSearch && matchesType && matchesAge;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-primary-soft py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Find Your Perfect Companion
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Every pet deserves a loving home. Browse our available animals and find your new best friend today.
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
                placeholder="Search by name or breed..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Animal Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Animals</SelectItem>
                  <SelectItem value="dog">Dogs</SelectItem>
                  <SelectItem value="cat">Cats</SelectItem>
                  <SelectItem value="rabbit">Rabbits</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedAge} onValueChange={setSelectedAge}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Age" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ages</SelectItem>
                  <SelectItem value="1">Puppy/Kitten</SelectItem>
                  <SelectItem value="2">Young</SelectItem>
                  <SelectItem value="3">Adult</SelectItem>
                  <SelectItem value="4">Senior</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredAnimals.length} of {animals.length} available pets
          </p>
        </div>

        {/* Animal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAnimals.map((animal) => (
            <Card key={animal.id} className="overflow-hidden hover:shadow-soft hover-lift smooth-transition theme-transition">
              <div className="relative">
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-64 object-cover hover-scale smooth-transition"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-black/80 rounded-full hover:bg-white dark:hover:bg-black hover-glow smooth-transition">
                  <Heart className="h-4 w-4 text-accent" />
                </button>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{animal.name}</h3>
                  <Badge variant="secondary">{animal.gender}</Badge>
                </div>
                
                <p className="text-muted-foreground mb-2">
                  {animal.breed} • {animal.age}
                </p>
                
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  {animal.location} • {animal.distance}
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {animal.description}
                </p>
                
                <div className="flex gap-2 mb-4">
                  {animal.vaccinated && (
                    <Badge variant="outline" className="text-xs">Vaccinated</Badge>
                  )}
                  {animal.spayedNeutered && (
                    <Badge variant="outline" className="text-xs">Spayed/Neutered</Badge>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <Button className="w-full hover-lift smooth-transition">
                  Meet {animal.name}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredAnimals.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No pets match your search criteria. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdoptPage;