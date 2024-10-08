export default function Container({ children }: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative max-w-[1100px] mx-auto min-h-screen">
      {children}
    </div>
  )
}
