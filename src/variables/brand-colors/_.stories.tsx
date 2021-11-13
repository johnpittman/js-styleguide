import { Meta, Story } from '@storybook/react';
import React from 'react';

import ColorCard from '>/components/ColorCard';
import generateVariableName from '>/utils/generateVariableName';

import oneColors from './one';
import twoColors from './two';

export default {
  title: 'customization/brand colors',
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
          />
        );
      })}
    </div>
  );
};

export const one = Template.bind({});
one.args = {
  collection: oneColors
};

export const two = Template.bind({});
two.args = {
  collection: twoColors
};
