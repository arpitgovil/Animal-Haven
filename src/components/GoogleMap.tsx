import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Search } from 'lucide-react';

/// <reference types="google.maps" />

interface Shelter {
  name: string;
  address: string;
  distance: string;
  rating: number;
  phone: string;
  position: { lat: number; lng: number };
}

const GoogleMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [nearbyShelters, setNearbyShelters] = useState<Shelter[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [loading, setLoading] = useState(true);
  const [apiKey, setApiKey] = useState('');

  // Mock shelter data for demonstration
  const mockShelters: Shelter[] = [
    {
      name: "Happy Paws Animal Shelter",
      address: "123 Main St, Downtown",
      distance: "2.1 km",
      rating: 4.8,
      phone: "(555) 123-4567",
      position: { lat: 40.7128, lng: -74.0060 }
    },
    {
      name: "City Animal Rescue",
      address: "456 Oak Ave, Midtown",
      distance: "3.5 km",
      rating: 4.6,
      phone: "(555) 987-6543",
      position: { lat: 40.7589, lng: -73.9851 }
    },
    {
      name: "Loving Hearts Pet Sanctuary",
      address: "789 Pine Rd, Uptown",
      distance: "4.2 km",
      rating: 4.9,
      phone: "(555) 456-7890",
      position: { lat: 40.7282, lng: -73.9942 }
    }
  ];

  useEffect(() => {
    if (!apiKey) return;

    const initMap = async () => {
      const loader = new Loader({
        apiKey: apiKey,
        version: 'weekly',
        libraries: ['places']
      });

      try {
        await loader.load();
        
        // Get user location
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userPos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            setUserLocation(userPos);
            
            if (mapRef.current) {
              const mapInstance = new google.maps.Map(mapRef.current, {
                center: userPos,
                zoom: 13,
                styles: [
                  {
                    featureType: "all",
                    elementType: "geometry.fill",
                    stylers: [{ color: "#f5f5f5" }]
                  },
                  {
                    featureType: "water",
                    elementType: "geometry.fill",
                    stylers: [{ color: "#d9d9d9" }]
                  }
                ]
              });

              setMap(mapInstance);
              
              // Add markers for shelters
              mockShelters.forEach(shelter => {
                new google.maps.Marker({
                  position: shelter.position,
                  map: mapInstance,
                  title: shelter.name,
                  icon: {
                    url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
                      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="32" height="32"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>'
                    ),
                    scaledSize: new google.maps.Size(32, 32)
                  }
                });
              });
              
              setNearbyShelters(mockShelters);
            }
          },
          () => {
            // Default to NYC if geolocation fails
            const defaultPos = { lat: 40.7128, lng: -74.0060 };
            setUserLocation(defaultPos);
            
            if (mapRef.current) {
              const mapInstance = new google.maps.Map(mapRef.current, {
                center: defaultPos,
                zoom: 13
              });
              setMap(mapInstance);
              setNearbyShelters(mockShelters);
            }
          }
        );
        
        setLoading(false);
      } catch (error) {
        console.error('Error loading Google Maps:', error);
        setLoading(false);
      }
    };

    initMap();
  }, [apiKey]);

  const handleSearch = () => {
    if (!map || !searchQuery) return;
    
    const service = new google.maps.places.PlacesService(map);
    const request = {
      query: `${searchQuery} animal shelter`,
      fields: ['name', 'geometry', 'formatted_address', 'rating']
    };

    service.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        // Process results and update markers
        console.log('Search results:', results);
      }
    });
  };

  if (!apiKey) {
    return (
      <div className="p-6 bg-background rounded-lg border animate-fade-in">
        <h3 className="text-xl font-semibold mb-4">Find Shelters Near You</h3>
        <p className="text-muted-foreground mb-4">
          Enter your Google Maps API key to enable location services and find nearby animal shelters.
        </p>
        <div className="flex gap-2">
          <Input
            type="password"
            placeholder="Enter Google Maps API Key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="flex-1"
          />
          <Button onClick={() => setApiKey(apiKey)} disabled={!apiKey}>
            Enable Maps
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Get your API key from the{' '}
          <a href="https://console.cloud.google.com/google/maps-apis" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            Google Cloud Console
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Search Bar */}
      <Card>
        <CardContent className="p-6">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search for shelters in your area..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <Button onClick={handleSearch} className="hover-lift">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map */}
        <Card className="lg:col-span-2 hover-lift">
          <CardContent className="p-0">
            <div 
              ref={mapRef}
              className="w-full h-96 rounded-lg"
              style={{ minHeight: '400px' }}
            />
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded-lg">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
                  <p className="text-muted-foreground">Loading map...</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Nearby Shelters */}
        <Card className="hover-lift">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">Nearby Shelters</h3>
            <div className="space-y-4">
              {nearbyShelters.map((shelter, index) => (
                <div key={index} className="border-b pb-3 last:border-b-0 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-sm">{shelter.name}</h4>
                    <span className="text-xs text-muted-foreground">{shelter.distance}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{shelter.address}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <span className="text-xs">★</span>
                      <span className="text-xs">{shelter.rating}</span>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs px-2 py-1 h-6">
                      Visit
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GoogleMap;