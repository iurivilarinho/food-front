import { Home, List, Percent, User } from "lucide-react"; // ou use SVGs locais
import type { ReactNode } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

type LayoutProps = {
  children?: ReactNode;
};

const BottomNavLayout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const navItems = [
    { to: "/", icon: <Home size={24} />, label: "Home" },
    { to: "/ofertas", icon: <Percent size={24} />, label: "Ofertas" },
    { to: "/pedidos", icon: <List size={24} />, label: "Pedidos" },
    { to: "/perfil", icon: <User size={24} />, label: "Perfil" },
  ];

  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 overflow-auto">{children || <Outlet />}</main>

      <nav className="h-16 border-t border-gray-200 flex justify-around items-center bg-white">
        {navItems.map(({ to, icon, label }) => {
          const isActive = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`flex flex-col items-center justify-center text-xs ${
                isActive ? "text-orange-500" : "text-gray-400"
              }`}
            >
              <div>{icon}</div>
              <span className="text-[10px] mt-1">{label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default BottomNavLayout;
