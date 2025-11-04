import { ArrowRight, Music } from 'lucide-react';

export const WelcomeCard = () => {
  return (
    <aside className="fixed right-8 top-24 z-40 hidden xl:block w-80">
      <div className="space-y-4">
        {/* Welcome Message */}
        <div className="bg-card border border-border rounded-lg p-6 backdrop-blur-md">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-3xl">👋</span>
            <div>
              <p className="text-xs text-muted-foreground mb-1">
                Thanks for visiting my site!
              </p>
              <h3 className="text-lg font-semibold">Glad to have you here.</h3>
            </div>
          </div>
          
          <div className="space-y-3">
            <a
              href="#guestbook"
              className="flex items-center justify-between text-sm text-blue-500 hover:text-blue-400 transition-colors group"
            >
              <span>Leave a message on my guestbook</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="mailto:hi@example.com"
              className="flex items-center justify-between text-sm text-blue-500 hover:text-blue-400 transition-colors group"
            >
              <span>Send an email</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#sponsor"
              className="flex items-center justify-between text-sm text-blue-500 hover:text-blue-400 transition-colors group"
            >
              <span>Sponsor me on github</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Spotify Playlist Card */}
        <a
          href="https://open.spotify.com/playlist/example"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-lg p-6 backdrop-blur-md hover:border-green-500/50 transition-colors group overflow-hidden relative"
        >
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Music className="w-5 h-5 text-green-400" />
              <span className="text-xs font-semibold text-green-400">SPOTIFY PLAYLIST</span>
            </div>
            
            <h4 className="text-sm font-semibold mb-2 line-clamp-2">
              playlist: songs I was once hooked to
            </h4>
            
            <p className="text-xs text-muted-foreground line-clamp-3">
              these songs are the ones that I was atleast once in my life obsessed with. 
              obsessed as in, listen to it on repeat kinda obsessed
            </p>
          </div>
          
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </aside>
  );
};
