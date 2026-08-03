import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export default function Card({
  children,
  className,
  hover = true,
  glass = false,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl overflow-hidden",
        glass
          ? "glass shadow-xl"
          : "bg-white shadow-lg shadow-black/5 border border-black/5",
        hover && "transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        className,
      )}
    >
      {children}
    </div>
  );
}
