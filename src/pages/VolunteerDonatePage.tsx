import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Gift, DollarSign, Clock, MapPin, CheckCircle, IndianRupee } from "lucide-react";

const VolunteerDonatePage = () => {
  const [activeTab, setActiveTab] = useState<"volunteer" | "donate">("volunteer");
  const [donationAmount, setDonationAmount] = useState("");

  const volunteerSkills = [
    "Dog Walking",
    "Cat Care",
    "Administrative Work",
    "Photography",
    "Transportation",
    "Event Planning",
    "Fundraising",
    "Social Media",
    "Veterinary Care",
    "Training & Behavior"
  ];

  const impactStats = [
    { number: "2,847", label: "Animals Fed This Month", icon: Heart },
    { number: "156", label: "Volunteers Active", icon: Users },
    { number: "₹28,450", label: "Raised This Quarter", icon: IndianRupee },
    { number: "89", label: "Animals Adopted", icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Make a Difference Today
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Whether through volunteering your time or making a donation, every contribution helps us save more lives.
          </p>
          
          {/* Tab Selector */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-1">
              <button
                onClick={() => setActiveTab("volunteer")}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "volunteer"
                    ? "bg-white text-primary"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <Users className="inline h-4 w-4 mr-2" />
                Volunteer
              </button>
              <button
                onClick={() => setActiveTab("donate")}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "donate"
                    ? "bg-white text-primary"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <Gift className="inline h-4 w-4 mr-2" />
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="space-y-2">
                  <Icon className="h-8 w-8 text-primary mx-auto" />
                  <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Volunteer Section */}
          {activeTab === "volunteer" && (
            <>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="h-6 w-6 mr-2 text-primary" />
                      Volunteer Registration
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                    </div>
                    
                    <div>
                      <Label htmlFor="availability">Availability</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your availability" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weekdays">Weekdays</SelectItem>
                          <SelectItem value="weekends">Weekends</SelectItem>
                          <SelectItem value="evenings">Evenings</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label>Skills & Interests (select all that apply)</Label>
                      <div className="grid grid-cols-2 gap-3 mt-2">
                        {volunteerSkills.map((skill) => (
                          <div key={skill} className="flex items-center space-x-2">
                            <Checkbox id={skill} />
                            <Label htmlFor={skill} className="text-sm">
                              {skill}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="experience">Previous Experience</Label>
                      <Textarea 
                        id="experience"
                        placeholder="Tell us about any previous experience with animals or volunteering..."
                        rows={4}
                      />
                    </div>
                    
                    <Button className="w-full" size="lg">
                      Submit Volunteer Application
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Why Volunteer?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Heart className="h-5 w-5 text-accent mt-1" />
                      <div>
                        <p className="font-medium">Make a Direct Impact</p>
                        <p className="text-sm text-muted-foreground">
                          Your time directly helps animals in need find loving homes.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-secondary mt-1" />
                      <div>
                        <p className="font-medium">Join a Community</p>
                        <p className="text-sm text-muted-foreground">
                          Meet like-minded people who share your passion for animals.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Flexible Schedule</p>
                        <p className="text-sm text-muted-foreground">
                          Volunteer on your schedule - we appreciate any time you can give.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Volunteer Opportunities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-secondary-soft rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Weekend Dog Walks</p>
                            <p className="text-sm text-muted-foreground">Saturdays & Sundays, 9AM-12PM</p>
                          </div>
                          <Badge>High Need</Badge>
                        </div>
                      </div>
                      <div className="p-3 bg-primary-soft rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Cat Socialization</p>
                            <p className="text-sm text-muted-foreground">Flexible hours, perfect for shy cats</p>
                          </div>
                          <Badge variant="outline">Ongoing</Badge>
                        </div>
                      </div>
                      <div className="p-3 bg-accent-soft rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Transport Volunteers</p>
                            <p className="text-sm text-muted-foreground">Help animals get to vet appointments</p>
                          </div>
                          <Badge variant="secondary">As Needed</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </>
          )}

          {/* Donation Section */}
          {activeTab === "donate" && (
            <>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Gift className="h-6 w-6 mr-2 text-accent" />
                      Make a Donation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label>Donation Amount</Label>
                      <div className="grid grid-cols-3 gap-3 mt-2">
                        {["500", "1000", "2500"].map((amount) => (
                          <Button
                            key={amount}
                            variant={donationAmount === amount ? "default" : "outline"}
                            onClick={() => setDonationAmount(amount)}
                            className="h-12 hover-lift smooth-transition"
                          >
                            ₹{amount}
                          </Button>
                        ))}
                      </div>
                      <div className="flex items-center mt-3">
                        <IndianRupee className="h-4 w-4 text-muted-foreground mr-1" />
                        <Input
                          type="number"
                          placeholder="Custom amount"
                          value={donationAmount}
                          onChange={(e) => setDonationAmount(e.target.value)}
                          className="flex-1"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label>Donation Type</Label>
                      <Select>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select donation type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="one-time">One-Time Donation</SelectItem>
                          <SelectItem value="monthly">Monthly Recurring</SelectItem>
                          <SelectItem value="yearly">Annual Donation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label>Designation (Optional)</Label>
                      <Select>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Where should your donation go?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Fund</SelectItem>
                          <SelectItem value="medical">Medical Care</SelectItem>
                          <SelectItem value="food">Food & Supplies</SelectItem>
                          <SelectItem value="emergency">Emergency Fund</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-4">
                      <Label>Donor Information</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input placeholder="First Name" />
                        <Input placeholder="Last Name" />
                      </div>
                      <Input type="email" placeholder="Email Address" />
                      <div className="flex items-center space-x-2">
                        <Checkbox id="anonymous" />
                        <Label htmlFor="anonymous" className="text-sm">
                          Make this donation anonymous
                        </Label>
                      </div>
                    </div>
                    
                    <Button className="w-full" size="lg">
                      Proceed to Payment
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      Your donation is secure and tax-deductible. You'll receive a receipt via email.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Impact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-primary-soft rounded-lg hover-lift smooth-transition">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">₹500</span>
                        <Heart className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Provides food for 5 cats for one week
                      </p>
                    </div>
                    <div className="p-4 bg-secondary-soft rounded-lg hover-lift smooth-transition">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">₹1000</span>
                        <Heart className="h-5 w-5 text-secondary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Covers basic veterinary check-up for one animal
                      </p>
                    </div>
                    <div className="p-4 bg-accent-soft rounded-lg hover-lift smooth-transition">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">₹2500</span>
                        <Heart className="h-5 w-5 text-accent" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Sponsors spay/neuter surgery for one animal
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Other Ways to Help</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Gift className="h-4 w-4 mr-2" />
                      Donate Items from Wishlist
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="h-4 w-4 mr-2" />
                      Sponsor an Animal
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Heart className="h-4 w-4 mr-2" />
                      Memorial Donations
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Success Stories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Bella's Surgery Fund</p>
                          <p className="text-xs text-muted-foreground">
                            Fully funded! Bella received life-saving surgery thanks to donations.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">New Kennel Construction</p>
                          <p className="text-xs text-muted-foreground">
                            90% funded - helping us house 20 more animals safely.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VolunteerDonatePage;