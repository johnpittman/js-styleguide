import React from 'react';

import generateVariableName from '>/utils/generateVariableName';

const ShadowCard = (props: { order: number; prefix: string; value: any }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        margin: 8,
        border: 'solid 1px lightgray'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 160,
          height: 160,
          flexGrow: 1
        }}
      >
        <div
          style={{
            width: 60,
            height: 60,
            background: 'var(--color-cool-gray-50)',
            boxShadow: props.value
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          padding: 8,
          borderTop: 'solid 1px lightgray'
        }}
      >
        {generateVariableName({
          order: props.order,
          prefix: props.prefix
        })}
      </div>
    </div>
  );
};

export default ShadowCard;
