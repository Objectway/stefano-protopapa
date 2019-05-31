import {WIDGET_STATE_ROUTE_PATHS} from '@owui-commons/vue-widget-state-manager';

export enum AppSections {
  DEFAULT = 'DEFAULT',
}

export class AppConstants {

  public static readonly OWUI_WINDOW_NAMESPACE = 'owui';

  public static readonly WIDGET_WINDOW_NAMESPACE = 'integration';

  public static readonly ROUTE_PATHS = {
    [AppSections.DEFAULT]: WIDGET_STATE_ROUTE_PATHS.DEFAULT,
  };

  public static readonly DEFAULT_ROUTE = AppConstants.ROUTE_PATHS[AppSections.DEFAULT];

  public static readonly API_PATHS = {};
}
