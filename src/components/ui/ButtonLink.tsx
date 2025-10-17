import type { LinkProps } from "react-router-dom";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type NavigationLinkProps = LinkProps & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function ButtonLink({
  children,
  variant = "primary",
  className = "",
  ...props
}: NavigationLinkProps) {
  let baseStyles =
    "inline-block font-normal text-[1.1rem] rounded-lg transition-colors duration-200";

  const variants = {
    primary:
      "bg-[#18a175] text-white px-4 py-2 hover:bg-[#13815e] border border-[#18a175] hover:border-[#13815e]",
    secondary:
      "bg-transparent border border-[#18a175] text-[#18a175] px-4 py-2 hover:bg-[#18a175] hover:text-white",
  };

  return (
    <Link
      {...props}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
