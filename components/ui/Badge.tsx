import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "gold" | "light";
  className?: string;
}

export default function Badge({
  children,
  variant = "primary",
  className,
}: BadgeProps) {
  const variants = {
    primary: "bg-primary/10 text-primary",
    gold: "bg-gold/15 text-dark-green",
    light: "bg-white/20 text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
