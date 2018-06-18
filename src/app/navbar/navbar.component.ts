import { Component } from '@angular/core';
import {
  transition,
  animate,
  style,
  trigger,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'ngxs-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(
          ':enter',
          style({ transform: 'translateY(-100px)', opacity: 0 }),
          { optional: true }
        ),
        query(
          ':enter',
          stagger('150ms', [
            animate(
              '700ms cubic-bezier(0.4, 0, 0.25, 1)',
              style({ transform: 'translateY(0px)', opacity: 1 })
            )
          ]),
          { optional: true }
        )
      ])
    ])
  ]
})
export class NavbarComponent {
  readonly links: { path: string; label: string }[] = [
    { path: '/inspector', label: 'Inspector' },
    { path: '/settings', label: 'Settings' }
  ];
}
