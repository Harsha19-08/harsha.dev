import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/firebase";
import { collection, query, orderBy, onSnapshot, Timestamp } from "firebase/firestore";
import { Loader2, Download, Mail, Calendar, TrendingUp } from "lucide-react";

interface Subscriber {
  id: string;
  email: string;
  subscribedAt: Timestamp | null;
  source?: string;
}

export default function NewsletterAdmin() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "newsletter"), orderBy("subscribedAt", "desc"));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const subscribersData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Subscriber[];
      
      setSubscribers(subscribersData);
      setLoading(false);
    }, (error) => {
      console.error("Error loading subscribers:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const exportToCSV = () => {
    const csvContent = [
      ['Email', 'Subscribed At', 'Source'],
      ...subscribers.map(sub => [
        sub.email,
        sub.subscribedAt?.toDate().toLocaleString() || 'N/A',
        sub.source || 'website'
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `newsletter-subscribers-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const copyAllEmails = () => {
    const emails = subscribers.map(sub => sub.email).join(', ');
    navigator.clipboard.writeText(emails);
    alert('All emails copied to clipboard!');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">Newsletter Subscribers</h1>
          <p className="text-muted-foreground mt-2">
            Manage your email subscribers and export lists
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Subscribers
            </CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{subscribers.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Active email addresses
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Latest Subscriber
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold truncate">
              {subscribers[0]?.email || 'N/A'}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {subscribers[0]?.subscribedAt?.toDate().toLocaleDateString() || 'N/A'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Growth Rate
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-500">
              {subscribers.length > 0 ? '+' : ''}
              {subscribers.length}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              All time signups
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Button onClick={exportToCSV} variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Export CSV
        </Button>
        <Button onClick={copyAllEmails} variant="outline">
          <Mail className="w-4 h-4 mr-2" />
          Copy All Emails
        </Button>
      </div>

      {/* Subscribers List */}
      <Card>
        <CardHeader>
          <CardTitle>All Subscribers</CardTitle>
        </CardHeader>
        <CardContent>
          {subscribers.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              No subscribers yet. Share your newsletter form!
            </p>
          ) : (
            <div className="space-y-3">
              {subscribers.map((subscriber) => (
                <div 
                  key={subscriber.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{subscriber.email}</p>
                      <p className="text-xs text-muted-foreground">
                        {subscriber.subscribedAt?.toDate().toLocaleString() || 'N/A'}
                        {subscriber.source && ` • ${subscriber.source}`}
                      </p>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(subscriber.email);
                      alert('Email copied!');
                    }}
                  >
                    Copy
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Tips */}
      <Card>
        <CardHeader>
          <CardTitle>📧 Newsletter Tips</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <div className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <p><strong>Export regularly</strong> - Backup your subscriber list monthly</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <p><strong>Use Mailchimp/SendGrid</strong> - Import CSV to send actual newsletters</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <p><strong>Stay consistent</strong> - Send newsletters weekly or bi-weekly</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <p><strong>Value first</strong> - Share insights, not just promotions</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
