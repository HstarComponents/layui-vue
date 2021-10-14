export const withInstall = <T, E extends Record<string, any>>(
  main: T,
  extra?: E,
) => {
  (main as any).install = (app: any): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp);
    }
  };

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      (main as any)[key] = comp;
    }
  }
  return main as any & E;
};

export const stringEnum = (arr: string[]) => {
  return (value: string) => {
    // 这个值必须匹配下列字符串中的一个
    return arr.includes(value);
  };
};
