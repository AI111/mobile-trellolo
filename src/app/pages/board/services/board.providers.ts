import {FactoryProvider, InjectionToken} from '@angular/core';
import {IActivityModel} from '../../../common/models/IActivityModel';
import {ActivityService} from './activity.service';
import {
  AbstractDataResolverAll, AbstractDataResolverById, dataResolveAllFactory,
  dataResolveByIdyFactory
} from '../../../common/AbstractDataResolver';
import {BoardService} from './board.service';
import {CardService} from './card.service';
import {ICardModel} from '../../../common/models/ICardModel';

// The AOT compiler does not support function expressions and arrow functions, also called lambda functions.

export const ACTIVITY_RESOLVE = new InjectionToken<AbstractDataResolverById<IActivityModel>>('ACTIVITY_RESOLVE');
export const BOARD_RESOLVE = new InjectionToken<AbstractDataResolverById<IActivityModel>>('BOARD_RESOLVE');
export const BOARDS_RESOLVE = new InjectionToken<AbstractDataResolverAll<IActivityModel>>('BOARD_RESOLVE');
export const CARD_RESOLVE = new InjectionToken<AbstractDataResolverById<IActivityModel>>('BOARD_RESOLVE');

export function cardResolve(service: CardService) {
  return new AbstractDataResolverById<ICardModel>(service, 'cardId');
}
export const DATA_RESOLE_PROVIDERS: FactoryProvider[] = [
  {
    provide: ACTIVITY_RESOLVE,
    useFactory: dataResolveByIdyFactory,
    deps: [ActivityService]
  },
  {
    provide: BOARD_RESOLVE,
    useFactory: dataResolveByIdyFactory,
    deps: [BoardService],
  },
  {
    provide: BOARDS_RESOLVE,
    useFactory: dataResolveAllFactory,
    deps: [BoardService],
  },
  {
    provide: CARD_RESOLVE,
    useFactory: cardResolve,
    deps: [CardService]
  }
];
