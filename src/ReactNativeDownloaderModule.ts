import { NativeModule, requireNativeModule } from 'expo';

import { ReactNativeDownloaderModuleEvents } from './ReactNativeDownloader.types';

declare class ReactNativeDownloaderModule extends NativeModule<ReactNativeDownloaderModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ReactNativeDownloaderModule>('ReactNativeDownloader');
