import MyLogo from "@/components/my-logo";
import Link from "next/link";
interface PlateHeaderProps {
  title: string;
  subtitle?: string;
}

export function PlateHeader({ title, subtitle }: PlateHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center gap-6">
      <Link href="/">
        <MyLogo />
      </Link>
      <h1 className="mb-6 text-2xl font-bold text-pretty lg:text-5xl">
        {title}
      </h1>
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
    </div>
  );
}
