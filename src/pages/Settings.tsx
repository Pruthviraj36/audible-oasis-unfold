import { useState } from "react";
import { 
  User, 
  Bell, 
  Download, 
  CreditCard, 
  Shield, 
  HelpCircle,
  Trash2,
  LogOut,
  Switch,
  Moon,
  Sun
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch as SwitchComponent } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [settings, setSettings] = useState({
    notifications: {
      newReleases: true,
      recommendations: true,
      subscriptionUpdates: true,
      socialActivity: false
    },
    playback: {
      autoPlay: true,
      skipSilence: false,
      sleepTimer: "off",
      playbackSpeed: "1x",
      audioQuality: "high"
    },
    downloads: {
      wifiOnly: true,
      autoDownload: false,
      maxDownloads: "unlimited"
    },
    privacy: {
      showActivity: true,
      allowRecommendations: true,
      shareListeningData: false
    }
  });

  const updateSetting = (section: string, key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [key]: value
      }
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Manage your account and app preferences</p>
        </div>

        {/* Profile Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              Profile
            </CardTitle>
            <CardDescription>Update your personal information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="john.doe@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Input id="bio" placeholder="Tell us about yourself..." />
            </div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="h-5 w-5 mr-2" />
              Notifications
            </CardTitle>
            <CardDescription>Choose what notifications you want to receive</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">New Releases</p>
                <p className="text-sm text-muted-foreground">Get notified about new audiobooks</p>
              </div>
              <SwitchComponent
                checked={settings.notifications.newReleases}
                onCheckedChange={(checked) => updateSetting("notifications", "newReleases", checked)}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Recommendations</p>
                <p className="text-sm text-muted-foreground">Personalized audiobook suggestions</p>
              </div>
              <SwitchComponent
                checked={settings.notifications.recommendations}
                onCheckedChange={(checked) => updateSetting("notifications", "recommendations", checked)}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Subscription Updates</p>
                <p className="text-sm text-muted-foreground">Billing and subscription information</p>
              </div>
              <SwitchComponent
                checked={settings.notifications.subscriptionUpdates}
                onCheckedChange={(checked) => updateSetting("notifications", "subscriptionUpdates", checked)}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Social Activity</p>
                <p className="text-sm text-muted-foreground">Friend activity and social features</p>
              </div>
              <SwitchComponent
                checked={settings.notifications.socialActivity}
                onCheckedChange={(checked) => updateSetting("notifications", "socialActivity", checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Playback Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Playback Preferences</CardTitle>
            <CardDescription>Customize your listening experience</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Auto-play next chapter</p>
                <p className="text-sm text-muted-foreground">Automatically continue to the next chapter</p>
              </div>
              <SwitchComponent
                checked={settings.playback.autoPlay}
                onCheckedChange={(checked) => updateSetting("playback", "autoPlay", checked)}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Skip silence</p>
                <p className="text-sm text-muted-foreground">Automatically skip long pauses</p>
              </div>
              <SwitchComponent
                checked={settings.playback.skipSilence}
                onCheckedChange={(checked) => updateSetting("playback", "skipSilence", checked)}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Default playback speed</p>
                <p className="text-sm text-muted-foreground">Your preferred listening speed</p>
              </div>
              <Select
                value={settings.playback.playbackSpeed}
                onValueChange={(value) => updateSetting("playback", "playbackSpeed", value)}
              >
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0.5x">0.5x</SelectItem>
                  <SelectItem value="0.75x">0.75x</SelectItem>
                  <SelectItem value="1x">1x</SelectItem>
                  <SelectItem value="1.25x">1.25x</SelectItem>
                  <SelectItem value="1.5x">1.5x</SelectItem>
                  <SelectItem value="2x">2x</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Audio quality</p>
                <p className="text-sm text-muted-foreground">Higher quality uses more data</p>
              </div>
              <Select
                value={settings.playback.audioQuality}
                onValueChange={(value) => updateSetting("playback", "audioQuality", value)}
              >
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Download Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Download className="h-5 w-5 mr-2" />
              Downloads
            </CardTitle>
            <CardDescription>Manage offline content and download preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Wi-Fi only downloads</p>
                <p className="text-sm text-muted-foreground">Only download when connected to Wi-Fi</p>
              </div>
              <SwitchComponent
                checked={settings.downloads.wifiOnly}
                onCheckedChange={(checked) => updateSetting("downloads", "wifiOnly", checked)}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Auto-download next chapters</p>
                <p className="text-sm text-muted-foreground">Automatically download upcoming content</p>
              </div>
              <SwitchComponent
                checked={settings.downloads.autoDownload}
                onCheckedChange={(checked) => updateSetting("downloads", "autoDownload", checked)}
              />
            </div>
            <div className="flex justify-between">
              <Button variant="outline">
                Manage Downloaded Content
              </Button>
              <Button variant="outline">
                Clear All Downloads
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Subscription */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="h-5 w-5 mr-2" />
              Subscription
            </CardTitle>
            <CardDescription>Manage your subscription and billing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Premium Plan</p>
                <p className="text-sm text-muted-foreground">$14.99/month • Next billing: March 15, 2024</p>
              </div>
              <Button variant="outline">Manage</Button>
            </div>
            <Separator />
            <div className="flex gap-2">
              <Button variant="outline">Change Plan</Button>
              <Button variant="outline">Payment Methods</Button>
              <Button variant="outline">Billing History</Button>
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Privacy & Security
            </CardTitle>
            <CardDescription>Control your privacy and security settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Show listening activity</p>
                <p className="text-sm text-muted-foreground">Let others see what you're listening to</p>
              </div>
              <SwitchComponent
                checked={settings.privacy.showActivity}
                onCheckedChange={(checked) => updateSetting("privacy", "showActivity", checked)}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Allow personalized recommendations</p>
                <p className="text-sm text-muted-foreground">Use listening history for suggestions</p>
              </div>
              <SwitchComponent
                checked={settings.privacy.allowRecommendations}
                onCheckedChange={(checked) => updateSetting("privacy", "allowRecommendations", checked)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Change Password</Button>
              <Button variant="outline">Two-Factor Auth</Button>
              <Button variant="outline">Download Data</Button>
            </div>
          </CardContent>
        </Card>

        {/* Support & About */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <HelpCircle className="h-5 w-5 mr-2" />
              Support & About
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Button variant="outline">Help Center</Button>
              <Button variant="outline">Contact Support</Button>
              <Button variant="outline">Report a Bug</Button>
            </div>
            <Separator />
            <div className="text-sm text-muted-foreground">
              <p>AudioVerse v2.1.0</p>
              <p>Terms of Service • Privacy Policy</p>
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-destructive">
          <CardHeader>
            <CardTitle className="flex items-center text-destructive">
              <Trash2 className="h-5 w-5 mr-2" />
              Danger Zone
            </CardTitle>
            <CardDescription>Irreversible actions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Button variant="outline" className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">
                Delete Account
              </Button>
              <Button variant="outline" className="flex items-center">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};