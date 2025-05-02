
import {
  Activity,
  Component,
  HomeIcon,
  Mail,
  Package,
  ScrollText,
  SunMoon,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock/component';

const data = [
  {
    title: 'Home',
    icon: (
      <HomeIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'Projects',
    icon: (
      <Package className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#projects',
  },
  {
    title: 'Skills',
    icon: (
      <Component className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#skills',
  },
  {
    title: 'Experience',
    icon: (
      <Activity className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#experience',
  },
  {
    title: 'About',
    icon: (
      <ScrollText className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#about',
  },
  {
    title: 'Contact',
    icon: (
      <Mail className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#contact',
  },
];

export function AppleStyleDock() {
  return (
    <div className='fixed bottom-4 left-1/2 max-w-full -translate-x-1/2 z-40'>
      <Dock className='items-end pb-3 neo-blur'>
        {data.map((item, idx) => (
          <DockItem
            key={idx}
            className='aspect-square rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-lg'
          >
            <DockLabel>{item.title}</DockLabel>
            <a href={item.href}>
              <DockIcon>{item.icon}</DockIcon>
            </a>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
}
