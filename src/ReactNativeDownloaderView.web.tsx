import * as React from 'react';

import { ReactNativeDownloaderViewProps } from './ReactNativeDownloader.types';

export default function ReactNativeDownloaderView(props: ReactNativeDownloaderViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
