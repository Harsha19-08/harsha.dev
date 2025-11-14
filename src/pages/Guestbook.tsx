import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/AuthContext";
import { db } from "@/lib/firebase";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, Timestamp } from "firebase/firestore";
import { Loader2, LogOut } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

interface GuestbookMessage {
  id: string;
  name: string;
  email: string;
  photoURL: string;
  message: string;
  createdAt: Timestamp | null;
}

export default function Guestbook() {
  const { user, signInWithGoogle, logout, loading: authLoading } = useAuth();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<GuestbookMessage[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load messages from Firestore
  useEffect(() => {
    const q = query(collection(db, "guestbook"), orderBy("createdAt", "desc"));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as GuestbookMessage[];
      
      setMessages(messagesData);
      setLoading(false);
    }, (error) => {
      console.error("Error loading messages:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logout();
      setMessage("");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user || !message.trim()) return;

    setSubmitting(true);
    try {
      await addDoc(collection(db, "guestbook"), {
        name: user.displayName || "Anonymous",
        email: user.email || "",
        photoURL: user.photoURL || "",
        message: message.trim(),
        createdAt: serverTimestamp(),
      });

      setMessage("");
    } catch (error) {
      console.error("Error submitting message:", error);
      alert("Failed to submit message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative">
      {/* Top Right Header with Profile/Sign in and Theme Toggle - Glassy */}
      <div className="absolute top-0 right-0 flex items-center gap-3 mb-6">
        {user ? (
          <div className="flex items-center gap-3 p-2 rounded-xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20">
            <div className="flex items-center gap-2 text-sm">
              <Avatar className="h-8 w-8 border border-white/20">
                <AvatarImage src={user.photoURL || ""} alt={user.displayName || "User"} />
                <AvatarFallback>{user.displayName?.charAt(0) || "U"}</AvatarFallback>
              </Avatar>
              <span className="text-muted-foreground hidden sm:inline">{user.displayName}</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSignOut}
              className="text-muted-foreground hover:text-foreground hover:bg-white/10"
            >
              Sign out
            </Button>
          </div>
        ) : (
          <Button
            onClick={handleSignIn}
            disabled={authLoading}
            size="sm"
            className="bg-primary text-primary-foreground backdrop-blur-md border border-primary/50 hover:bg-primary/90 shadow-[0_4px_16px_0_rgba(99,102,241,0.3)] dark:shadow-[0_4px_16px_0_rgba(99,102,241,0.5)]"
          >
            {authLoading ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : null}
            Sign my guestbook
          </Button>
        )}
        <ThemeToggle />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-8">Sign my guestbook</h1>

      {/* Message Form - Only visible when signed in - Glassy */}
      {user && (
        <Card className="p-4 mb-8 bg-white/5 dark:bg-white/[0.02] backdrop-blur-xl border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]">
          <form onSubmit={handleSubmit} className="space-y-3">
            <Textarea
              placeholder="Your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[80px] bg-white/10 dark:bg-white/5 backdrop-blur-md border-white/20 focus:border-primary/30"
              required
            />
            <Button 
              type="submit" 
              size="sm"
              disabled={submitting || !message.trim()}
              className="w-auto bg-primary/20 backdrop-blur-md border border-primary/30 hover:bg-primary/30 shadow-[0_4px_16px_0_rgba(99,102,241,0.2)]"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Signing...
                </>
              ) : (
                "Sign"
              )}
            </Button>
          </form>
        </Card>
      )}

      {/* Sign out link for signed in users */}
      {user && (
        <button
          onClick={handleSignOut}
          className="text-sm text-primary hover:underline mb-4 block"
        >
          Sign out
        </button>
      )}

      {/* Messages List - Glassy */}
      <div className="space-y-4">
        {loading ? (
          <div className="flex justify-center py-8">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : messages.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">
            No messages yet. Be the first to sign the guestbook!
          </p>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className="p-4 rounded-xl bg-white/5 dark:bg-white/[0.02] backdrop-blur-lg border border-white/10 hover:bg-white/10 dark:hover:bg-white/5 hover:border-white/20 transition-all duration-300">
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8 mt-0.5 border border-white/20">
                  <AvatarImage src={msg.photoURL} alt={msg.name} />
                  <AvatarFallback>{msg.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-semibold text-foreground">{msg.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {msg.message}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
