import { Meta, Story } from '@storybook/react';
import React from 'react';

import RoundingCard from '>/components/RoundingCard';
import generateVariableName from '>/utils/generateVariableName';

import roundingDefinitions from './rounding';

export default {
  title: 'borders/radius',
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
          <RoundingCard
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
  collection: roundingDefinitions
};
