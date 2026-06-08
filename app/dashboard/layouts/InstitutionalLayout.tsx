"use client";

type Props = {
  children: React.ReactNode;
};

export default function InstitutionalLayout({
  children,
}: Props) {
  return (
    <div className="min-h-screen w-full bg-[#020617] text-white">
      {children}
    </div>
  );
}