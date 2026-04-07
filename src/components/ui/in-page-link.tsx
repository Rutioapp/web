"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type AnchorHTMLAttributes, type MouseEvent, type ReactNode } from "react";

interface InPageLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  children: ReactNode;
  onNavigate?: () => void;
}

function normalizePath(path: string) {
  if (!path) return "/";
  return path === "/" ? "/" : path.replace(/\/$/, "");
}

export function InPageLink({ href, children, onClick, onNavigate, ...props }: InPageLinkProps) {
  const pathname = usePathname();
  const [targetPathRaw, hashRaw] = href.split("#");
  const hash = hashRaw ? `#${hashRaw}` : "";
  const targetPath = normalizePath(targetPathRaw || pathname || "/");
  const currentPath = normalizePath(pathname || "/");
  const isSamePageHash = Boolean(hash) && targetPath === currentPath;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || !isSamePageHash) {
      return;
    }

    event.preventDefault();

    const targetId = decodeURIComponent(hash.slice(1));
    const scrollToTarget = () => {
      const element = document.getElementById(targetId);
      if (!element) {
        window.location.hash = hash;
        return;
      }

      const header = document.querySelector("header");
      const headerOffset = header instanceof HTMLElement ? header.offsetHeight : 0;
      const top = Math.max(0, element.getBoundingClientRect().top + window.scrollY - headerOffset - 16);
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      window.history.pushState(null, "", `${currentPath}${hash}`);
      window.scrollTo({ top, behavior: prefersReducedMotion ? "auto" : "smooth" });
    };

    onNavigate?.();
    requestAnimationFrame(scrollToTarget);
  };

  if (!isSamePageHash) {
    return (
      <Link href={href} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
