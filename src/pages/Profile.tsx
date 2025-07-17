import { User, Settings, Crown, Download, Heart, History, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const Profile = () => {
  const user = {
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
    plan: "Premium",
    joinDate: "January 2023",
    credits: 2,
    totalCredits: 2,
    streak: 47,
    hoursListened: 184
  };

  const recentActivity = [
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      progress: 75,
      lastListened: "2 hours ago"
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      progress: 100,
      lastListened: "Yesterday"
    },
    {
      title: "Project Hail Mary",
      author: "Andy Weir",
      progress: 30,
      lastListened: "3 days ago"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <User className="h-8 w-8 text-primary mr-3" />
          <h1 className="text-3xl font-bold">Profile</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <Card className="audio-card">
              <CardContent className="p-6 text-center">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h2 className="text-xl font-bold mb-1">{user.name}</h2>
                <p className="text-muted-foreground text-sm mb-4">{user.email}</p>
                
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Crown className="h-4 w-4 text-accent-gold" />
                  <Badge variant="premium" className="accent-gradient text-white">
                    {user.plan} Member
                  </Badge>
                </div>
                
                <p className="text-xs text-muted-foreground">
                  Member since {user.joinDate}
                </p>
                
                <Button variant="outline" className="w-full mt-4">
                  <Settings className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Credits */}
            <Card className="audio-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <CreditCard className="h-5 w-5 mr-2 text-accent-gold" />
                  Credits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-accent-gold">
                    {user.credits}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    of {user.totalCredits} available
                  </div>
                </div>
                
                <Progress value={(user.credits / user.totalCredits) * 100} className="mb-4" />
                
                <div className="text-xs text-muted-foreground text-center">
                  Credits reset on the 15th of each month
                </div>
                
                <Button variant="premium" className="w-full mt-4">
                  Buy More Credits
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Activity & Stats */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Card className="audio-card text-center p-4">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-primary">{user.hoursListened}</div>
                  <div className="text-sm text-muted-foreground">Hours Listened</div>
                </CardContent>
              </Card>
              
              <Card className="audio-card text-center p-4">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-accent-gold">{user.streak}</div>
                  <div className="text-sm text-muted-foreground">Day Streak</div>
                </CardContent>
              </Card>
              
              <Card className="audio-card text-center p-4">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-primary">23</div>
                  <div className="text-sm text-muted-foreground">Books Completed</div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="audio-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <History className="h-5 w-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-muted/30">
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{activity.title}</h4>
                      <p className="text-xs text-muted-foreground">By {activity.author}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Progress value={activity.progress} className="flex-1 h-2" />
                        <span className="text-xs text-muted-foreground">
                          {activity.progress}%
                        </span>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {activity.lastListened}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="audio-card cursor-pointer hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <Download className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Downloads</h3>
                  <p className="text-xs text-muted-foreground">Manage offline books</p>
                </CardContent>
              </Card>
              
              <Card className="audio-card cursor-pointer hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Favorites</h3>
                  <p className="text-xs text-muted-foreground">Your liked books</p>
                </CardContent>
              </Card>
              
              <Card className="audio-card cursor-pointer hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <Settings className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Settings</h3>
                  <p className="text-xs text-muted-foreground">Preferences & privacy</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};