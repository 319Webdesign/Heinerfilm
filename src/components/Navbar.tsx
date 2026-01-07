'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    // Close menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.nav-menu') && !target.closest('.mobile-menu-toggle')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    // Handle scroll to add blur effect when scrolled past hero section
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero');
      if (heroSection) {
        const heroHeight = heroSection.getBoundingClientRect().height;
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > heroHeight - 100);
      } else {
        // If no hero section (e.g., on other pages), activate blur immediately
        setIsScrolled(window.scrollY > 50);
      }
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Über uns' },
    { href: '/services', label: 'Leistungen' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Kontakt' },
  ];

  const isHomePage = pathname === '/';
  const isHomeHero = isHomePage && !isScrolled;

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isHomeHero ? 'home-hero' : ''}`}>
      <div className="container">
        <div className="nav-wrapper">
          <Link href="/" className="logo">
            <Image
              src="/img/Heinerfilm_Schriftzug_weiss.png"
              alt="Heinerfilm Logo"
              width={250}
              height={80}
              priority
            />
          </Link>
          <button
            className="mobile-menu-toggle"
            aria-label="Menü öffnen"
            onClick={toggleMenu}
          >
            <span style={{ transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
            <span style={{ opacity: isMenuOpen ? 0 : 1 }}></span>
            <span style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none' }}></span>
          </button>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? 'active' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
