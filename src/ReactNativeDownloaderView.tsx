import { requireNativeView } from 'expo';
import * as React from 'react';

import { ReactNativeDownloaderViewProps } from './ReactNativeDownloader.types';

const NativeView: React.ComponentType<ReactNativeDownloaderViewProps> =
  requireNativeView('ReactNativeDownloader');

export default function ReactNativeDownloaderView(props: ReactNativeDownloaderViewProps) {
  return <NativeView {...props} />;
}
