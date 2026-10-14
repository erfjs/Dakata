import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Language {
  id: string;
  name: string;
  shortName: string;
  flag: string;
  badge?: string;
}

@Component({
  selector: 'app-user-dropdown',
  standalone: true,
  templateUrl: './user-dropdown.component.html',
  imports: [CommonModule, RouterModule]
})
export class UserDropdownComponent implements OnInit {
  isOpen = false;
  subDropdownOpen = false;
  currentLocale = 'en';

  languages: Language[] = [
    {
      id: 'en',
      name: 'English',
      shortName: 'English',
      flag: 'flag-us.svg',
    },
    {
      id: 'fa',
      name: 'فارسی',
      shortName: 'فارسی',
      flag: 'flag-ir.svg',
      badge: 'RTL',
    },
  ];

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const savedDir = localStorage.getItem('dir');
    if (savedDir === 'rtl' || document.documentElement.getAttribute('dir') === 'rtl') {
      this.currentLocale = 'fa';
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      this.currentLocale = 'en';
      document.documentElement.setAttribute('dir', 'ltr');
    }
  }

  get currentLang(): Language {
    return this.languages.find((l) => l.id === this.currentLocale) || this.languages[0];
  }

  toggleDropdown(event?: Event): void {
    event?.stopPropagation();
    this.isOpen = !this.isOpen;
    if (!this.isOpen) {
      this.subDropdownOpen = false;
    }
  }

  closeDropdown(): void {
    this.isOpen = false;
    this.subDropdownOpen = false;
  }

  toggleSubDropdown(event: Event): void {
    event.stopPropagation();
    this.subDropdownOpen = !this.subDropdownOpen;
  }

  selectLanguage(id: string, event?: Event): void {
    event?.stopPropagation();
    this.currentLocale = id;
    if (id === 'fa') {
      document.documentElement.setAttribute('dir', 'rtl');
      localStorage.setItem('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      localStorage.setItem('dir', 'ltr');
    }
    this.closeDropdown();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.isOpen && !this.elementRef.nativeElement.contains(event.target)) {
      this.closeDropdown();
    }
  }
}
