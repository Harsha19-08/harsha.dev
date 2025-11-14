import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Sparkles, Lock, Mail, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function AdminLogin() {
  const { user, signInWithGoogle, loading } = useAuth();
  const navigate = useNavigate();
  const [isSigningIn, setIsSigningIn] = useState(false);
  const ALLOWED_EMAIL = "Optimist.Coder19@gmail.com";

  useEffect(() => {
    if (user) {
      if (user.email === ALLOWED_EMAIL) {
        navigate("/admin/newsletter");
      } else {
        // User is signed in but not authorized
        setIsSigningIn(false);
      }
    }
  }, [user, navigate]);

  const handleSignIn = async () => {
    setIsSigningIn(true);
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Sign in error:", error);
      setIsSigningIn(false);
    }
  };

  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated Background Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          initial={{ x: `${particle.x}vw`, y: `${particle.y}vh`, opacity: 0 }}
          animate={{
            x: [`${particle.x}vw`, `${particle.x + 10}vw`, `${particle.x}vw`],
            y: [`${particle.y}vh`, `${particle.y - 10}vh`, `${particle.y}vh`],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md px-4"
      >
        {/* Shield Icon with Glow */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(var(--primary), 0.3)",
                "0 0 40px rgba(var(--primary), 0.5)",
                "0 0 20px rgba(var(--primary), 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
            <Shield className="relative w-20 h-20 text-primary" strokeWidth={1.5} />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-2 -right-2"
            >
              <Sparkles className="w-6 h-6 text-yellow-500" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Login Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Card className="relative overflow-hidden border-2 border-primary/20 backdrop-blur-sm bg-card/80">
            {/* Animated Gradient Border */}
            <motion.div
              className="absolute inset-0 opacity-50"
              animate={{
                background: [
                  "linear-gradient(0deg, transparent, rgba(var(--primary), 0.1))",
                  "linear-gradient(90deg, transparent, rgba(var(--primary), 0.1))",
                  "linear-gradient(180deg, transparent, rgba(var(--primary), 0.1))",
                  "linear-gradient(270deg, transparent, rgba(var(--primary), 0.1))",
                  "linear-gradient(360deg, transparent, rgba(var(--primary), 0.1))",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <div className="relative p-8 space-y-6">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center space-y-2"
              >
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                    Admin Access
                  </h1>
                </motion.div>
                <p className="text-muted-foreground text-sm">
                  Secure newsletter management portal
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="space-y-3"
              >
                {[
                  { icon: Lock, text: "Secure Authentication" },
                  { icon: Mail, text: "Newsletter Management" },
                  { icon: Shield, text: "Protected Access" },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                    <span className="text-sm font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Sign In Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <Button
                  onClick={handleSignIn}
                  disabled={loading || isSigningIn}
                  className="w-full h-12 text-base font-semibold relative overflow-hidden group"
                  size="lg"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary opacity-0 group-hover:opacity-100"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <span className="relative flex items-center justify-center gap-2">
                    {isSigningIn || loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Authenticating...
                      </>
                    ) : (
                      <>
                        <img
                          src="https://www.google.com/favicon.ico"
                          alt="Google"
                          className="w-5 h-5"
                        />
                        Sign in with Google
                      </>
                    )}
                  </span>
                </Button>
              </motion.div>

              {/* Info Message */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="text-center"
              >
                <p className="text-xs text-muted-foreground">
                  Only authorized administrators can access this area
                </p>
                <motion.p
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-xs text-primary mt-1"
                >
                  {ALLOWED_EMAIL}
                </motion.p>
              </motion.div>

              {/* Unauthorized Message */}
              {user && user.email !== ALLOWED_EMAIL && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 rounded-lg bg-destructive/10 border border-destructive/20"
                >
                  <p className="text-sm text-destructive text-center">
                    ⚠️ Access Denied: Your account ({user.email}) is not authorized
                  </p>
                </motion.div>
              )}
            </div>
          </Card>
        </motion.div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-8"
        >
          <motion.p
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-sm text-muted-foreground"
          >
            Powered by Firebase Authentication
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </div>
  );
}
