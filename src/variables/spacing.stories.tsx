import { Meta, Story } from '@storybook/react';
import React from 'react';

import SpacingCard from '>/components/SpacingCard';
import generateVariableName from '>/utils/generateVariableName';

import definitions from './spacing';

export default {
  title: 'customization/spacing',
  argTypes: {}
} as Meta;

const Template: Story = (args) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap'
      }}
    >
      {args.collection.map((variableInfo) => {
        return (
          <SpacingCard
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
