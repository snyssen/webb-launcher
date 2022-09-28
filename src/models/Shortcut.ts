export interface Shortcut {
  name: string;
  icon_classes: string;
  children?: Shortcut[];
  url?: string;
}
