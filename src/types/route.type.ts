export interface RouteItem {
  title: string;
  url?: string;
  items?: RouteItem[];
}

export interface Route {
  title: string;
  items: RouteItem[];
}
