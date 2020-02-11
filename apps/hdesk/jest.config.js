module.exports = {
  name: 'hdesk',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/hdesk',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
