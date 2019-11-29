const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
       fixBabelImports('import', {
         libraryName: 'antd',
         libraryDirectory: 'es',
         style: true,
       }),
        addLessLoader({
           javascriptEnabled: true,
          modifyVars: {  
          "layout-header-background": "#4682B4",
          "layout-header-height":"40px",
          "modal-header-bg":"#4682B4",
          "primary-color": "#4682B4",
          "tabs-card-active-color":"#4682B4",
          "tabs-card-head-background":"#4682B4", },
        }),
);