interface CardHeaderProps {
  artists: string[];
  title: string;
}

export default function CardHeader({ artists, title }: CardHeaderProps) {
  return (
    <div className="mb-2 flex flex-row">
      <p className="overflow-hidden whitespace-nowrap overflow-ellipsis text-sm">
        {title}
      </p>
    </div>
  );
}
