import { lazy, Suspense } from 'react';
import { type ComponentType } from 'react';

type ComponentLoader<T> = () => Promise<{ default: ComponentType<T> }>;

export const lazyLoad = <T extends Record<string, unknown>>(loader: ComponentLoader<T>) => {
  return lazy(loader);
};

export const LazyComponent = ({ component: Component, fallback, ...props }: { 
  component: ComponentType<any>, 
  fallback?: React.ReactNode 
} & Record<string, unknown>) => {
  return (
    <Suspense fallback={fallback || <div className="w-full h-64" />}>
      <Component {...props} />
    </Suspense>
  );
};