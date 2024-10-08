import HelloWorld from './HelloWorld';
import LoremIpsum from './LoremIpsum';
import RootComponent from './RootComponent';

export const components = {
  HelloWorld,
  RootComponent,
  LoremIpsum
};

try {
  module.exports = components;
} catch {}
