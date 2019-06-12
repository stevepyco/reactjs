/* eslint import/no-extraneous-dependencies: 0 */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

require('jest-localstorage-mock');
require('jest-canvas-mock');

jest.mock('services/API.service', () => ({
  init: jest.fn().mockImplementation(() => ({
    post: jest.fn()
  })),
  applyRequestInterceptor: jest.fn()
}));


configure({ adapter: new Adapter() });
