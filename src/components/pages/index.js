import React from 'react';
import Loadable from 'react-loadable';

export const AsyncGenericPage = Loadable({
  loader: () => import('./GenericPage'),
  loading() {
    return <div>Loading...</div>
  }
});

export const AsyncHomePage = Loadable({
  loader: () => import('./HomePage'),
  loading() {
    return <div>Loading...</div>
  }
});

export const AsyncSamplePage = Loadable({
  loader: () => import('./SamplePage'),
  loading() {
    return <div>Loading...</div>
  }
});

export const AsyncNotFoundPage = Loadable({
  loader: () => import('./NotFoundPage'),
  loading() {
    return <div>Loading...</div>
  }
});
