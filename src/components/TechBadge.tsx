type TechBadgeProps = {
  name: string;
};

export function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="rounded-lg bg-emerald-900/80 py-1 px-3 text-sm text-emerald-400">
      {name}
    </span>
  );
}
