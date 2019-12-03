import { initBasicUrl, initBasicUrlDev } from './Type/Init/Init';

export default {
    url: {
        basicUrl:
          process.env.NODE_ENV === 'development'
            ? initBasicUrlDev
            : initBasicUrl,
      },
};
