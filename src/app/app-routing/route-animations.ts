import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
} from '@angular/animations';

export const Slider =
  trigger('routeAnimations', [
      transition('* => isLeft', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            left: 0,
            width: '100%'
          })
        ], { optional: true }),
        query(':enter', [
          style({ left: '-100%'})
        ]),
        group([
          query(':leave', [
            animate('300ms ease', style({ left: '100%'}))
          ], { optional: true }),
          query(':enter', [
            animate('300ms ease', style({ left: '0%'}))
          ])
        ]),
      ]),
      transition('* => isRight', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            right: 0,
            width: '100%'
          })
        ], { optional: true }),
        query(':enter', [
          style({ right: '-100%'})
        ]),
        group([
          query(':leave', [
            animate('300ms ease', style({ right: '100%'}))
          ], { optional: true }),
          query(':enter', [
            animate('300ms ease', style({ right: '0%'}))
          ])
        ]),
      ]),
      transition('isRight => *', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            right: 0,
            width: '100%'
          })
        ], { optional: true }),
        query(':enter', [
          style({ left: '-100%'})
        ]),
        group([
          query(':leave', [
            animate('300ms ease', style({ left: '100%'}))
          ], { optional: true }),
          query(':enter', [
            animate('300ms ease', style({ left: '0%'}))
          ])
        ]),
      ]),
      transition('isLeft => *', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            right: 0,
            width: '100%'
          })
        ], { optional: true }),
        query(':enter', [
          style({ right: '-100%'})
        ]),
        group([
          query(':leave', [
            animate('300ms ease', style({ right: '100%'}))
          ], { optional: true }),
          query(':enter', [
            animate('300ms ease', style({ right: '0%'}))
          ])
        ]),
      ])
    ],
  );
