import { Meta, Story } from '@storybook/react';
import React from 'react';

import ColorCard from '>/components/ColorCard';
import generateVariableName from '>/utils/generateVariableName';

import amberColors from './amber';
import blueColors from './blue';
import blueGrayColors from './blue-gray';
import coolGrayColors from './cool-gray';
import cyanColors from './cyan';
import emeraldColors from './emerald';
import fuchsiaColors from './fuchsia';
import grayColors from './gray';
import greenColors from './green';
import indigoColors from './indigo';
import limeColors from './lime';
import orangeColors from './orange';
import pinkColors from './pink';
import purpleColors from './purple';
import redColors from './red';
import roseColors from './rose';
import skyColors from './sky';
import tealColors from './teal';
import trueGrayColors from './true-gray';
import violetColors from './violet';
import warmGrayColors from './warm-gray';
import yellowColors from './yellow';

export default {
  title: 'customization/colors',
  argTypes: {}
} as Meta;

const Template: Story = (args) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap'
      }}
    >
      {args.collection.map((variableInfo) => {
        return (
          <ColorCard
            key={generateVariableName({
              order: variableInfo.order,
              prefix: variableInfo.prefix
            })}
            prefix={variableInfo.prefix}
            order={variableInfo.order}
            value={variableInfo.value}
            textTransform="uppercase"
          />
        );
      })}
    </div>
  );
};

export const blueGray = Template.bind({});
blueGray.args = {
  collection: blueGrayColors
};

export const coolGray = Template.bind({});
coolGray.args = {
  collection: coolGrayColors
};

export const gray = Template.bind({});
gray.args = {
  collection: grayColors
};

export const trueGray = Template.bind({});
trueGray.args = {
  collection: trueGrayColors
};

export const warmGray = Template.bind({});
warmGray.args = {
  collection: warmGrayColors
};

export const red = Template.bind({});
red.args = {
  collection: redColors
};

export const orange = Template.bind({});
orange.args = {
  collection: orangeColors
};

export const amber = Template.bind({});
amber.args = {
  collection: amberColors
};

export const yellow = Template.bind({});
yellow.args = {
  collection: yellowColors
};

export const lime = Template.bind({});
lime.args = {
  collection: limeColors
};

export const green = Template.bind({});
green.args = {
  collection: greenColors
};

export const emerald = Template.bind({});
emerald.args = {
  collection: emeraldColors
};

export const teal = Template.bind({});
teal.args = {
  collection: tealColors
};

export const cyan = Template.bind({});
cyan.args = {
  collection: cyanColors
};

export const sky = Template.bind({});
sky.args = {
  collection: skyColors
};

export const blue = Template.bind({});
blue.args = {
  collection: blueColors
};

export const indigo = Template.bind({});
indigo.args = {
  collection: indigoColors
};

export const violet = Template.bind({});
violet.args = {
  collection: violetColors
};

export const purple = Template.bind({});
purple.args = {
  collection: purpleColors
};

export const fuchsia = Template.bind({});
fuchsia.args = {
  collection: fuchsiaColors
};

export const pink = Template.bind({});
pink.args = {
  collection: pinkColors
};

export const rose = Template.bind({});
rose.args = {
  collection: roseColors
};
