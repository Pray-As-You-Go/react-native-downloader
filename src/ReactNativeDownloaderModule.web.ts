import { registerWebModule, NativeModule } from 'expo';

import { ReactNativeDownloaderModuleEvents } from './ReactNativeDownloader.types';

class ReactNativeDownloaderModule extends NativeModule<ReactNativeDownloaderModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ReactNativeDownloaderModule, 'ReactNativeDownloaderModule');
