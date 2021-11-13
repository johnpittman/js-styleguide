import { Meta, Story } from '@storybook/react';
import React from 'react';

import ShadowCard from '>/components/ShadowCard';
import generateVariableName from '>/utils/generateVariableName';

import definitions from './shadows';

export default {
  title: 'effects/shadow',
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
          <ShadowCard
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

export const Default = Template.bind({});
Default.args = {
  collection: definitions
};
