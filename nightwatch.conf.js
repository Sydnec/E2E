module.exports = {
  src_folders: ['src/tests'], // Chemin des tests
  page_objects_path: 'src/page-objects', // Chemin des objets de page
  webdriver: {
    start_process: true,
    server_path: require('chromedriver').path,
    port: 9515,
  },
  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome',
      },
    },
  },
};
