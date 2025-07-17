import { Headphones, Star, TrendingUp, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AudiobookCard } from "@/components/AudiobookCard";
import { sampleAudiobooks, subscriptionPlans } from "@/data/audiobooks";

export const Home = () => {
  const featuredBooks = sampleAudiobooks.filter(book => book.isBestseller).slice(0, 6);
  const newReleases = sampleAudiobooks.filter(book => book.isNew).slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="hero-gradient rounded-3xl p-8 md:p-12 mb-12 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
            Immerse Yourself in
            <br />
            <span className="accent-gradient bg-clip-text text-transparent">
              Amazing Stories
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Discover thousands of audiobooks narrated by award-winning performers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90">
              <Headphones className="mr-2 h-5 w-5" />
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Browse Library
            </Button>
          </div>
        </div>

        {/* Floating waveform animation */}
        <div className="flex justify-center space-x-1 mt-8">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="waveform-bar w-1 bg-white/30 rounded-full"></div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="audio-card text-center p-6">
          <CardContent className="p-0">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mx-auto mb-4">
              <Headphones className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">50,000+</h3>
            <p className="text-muted-foreground">Audiobooks Available</p>
          </CardContent>
        </Card>
        
        <Card className="audio-card text-center p-6">
          <CardContent className="p-0">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent-gold/10 mx-auto mb-4">
              <Star className="h-6 w-6 text-accent-gold" />
            </div>
            <h3 className="text-2xl font-bold mb-2">4.8/5</h3>
            <p className="text-muted-foreground">Average Rating</p>
          </CardContent>
        </Card>
        
        <Card className="audio-card text-center p-6">
          <CardContent className="p-0">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mx-auto mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">24/7</h3>
            <p className="text-muted-foreground">Unlimited Listening</p>
          </CardContent>
        </Card>
      </section>

      {/* Featured Audiobooks */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center">
            <TrendingUp className="mr-2 h-6 w-6 text-primary" />
            Bestsellers
          </h2>
          <Button variant="ghost">View All</Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredBooks.map((book) => (
            <AudiobookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* New Releases */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center">
            <Zap className="mr-2 h-6 w-6 text-accent-gold" />
            New Releases
          </h2>
          <Button variant="ghost">View All</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {newReleases.map((book) => (
            <AudiobookCard key={book.id} book={book} variant="list" />
          ))}
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">Choose Your Plan</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {subscriptionPlans.map((plan) => (
            <Card key={plan.name} className={`audio-card relative ${plan.popular ? "ring-2 ring-primary" : ""}`}>
              {plan.popular && (
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-4">
                  ${plan.price}
                  <span className="text-sm font-normal text-muted-foreground">/month</span>
                </div>
                <div className="text-sm text-muted-foreground mb-6">
                  {plan.credits} credit{plan.credits > 1 ? 's' : ''} per month
                </div>
                <ul className="space-y-2 mb-6 text-sm">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Star className="h-4 w-4 text-accent-gold mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "premium" : "outline"}
                >
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};