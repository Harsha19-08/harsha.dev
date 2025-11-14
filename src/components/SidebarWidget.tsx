import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SidebarWidgetProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export const SidebarWidget = ({ title, children, className }: SidebarWidgetProps) => {
  return (
    <Card className={`bg-white/5 dark:bg-white/[0.02] backdrop-blur-xl border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] hover:shadow-[0_8px_48px_0_rgba(0,0,0,0.18)] hover:bg-white/10 dark:hover:bg-white/5 hover:border-white/20 transition-all duration-300 ${className}`}>
      {title && (
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold">{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent className="text-sm text-muted-foreground space-y-3">
        {children}
      </CardContent>
    </Card>
  );
};
