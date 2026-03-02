import LayoutHeader from "./components/LayoutHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-neutral-950">
        <LayoutHeader/>
        {children}
    </div>
  );
}