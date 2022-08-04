export type T_Route = {
  name: string;
  path: string;
  icon?: JSX.Element | ((...args: any) => JSX.Element);
  component: JSX.Element | ((...args: any) => JSX.Element);
  children?: T_Route[];
};
