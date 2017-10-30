import {FactoryProvider, InjectionToken} from '@angular/core';
import {IActivityModel} from '../../../common/models/IActivityModel';
import {AbstractDataResolver, dataResolveFactory} from '../../../common/AbstractDataResolver';
import {Router} from '@angular/router';
import {ActivityService} from './activity.service';
import {BoardService} from './board.service';

export const ACTIVITY_RESOLVE = new InjectionToken<AbstractDataResolver<IActivityModel>>('ACTIVITY_RESOLVE');
export const BOARD_RESOLVE = new InjectionToken<AbstractDataResolver<IActivityModel>>('BOARD_RESOLVE');

export const DATA_RESOLE_PROVIDERS: FactoryProvider[] = [
  {
    provide: ACTIVITY_RESOLVE,
    useFactory: dataResolveFactory,
    deps: [ActivityService, Router],
  },
  {
    provide: BOARD_RESOLVE,
    useFactory: dataResolveFactory,
    deps: [BoardService, Router],
  }
]
