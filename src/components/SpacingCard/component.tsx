import React from 'react';

import generateVariableName from '>/utils/generateVariableName';

const RoundingCard = (props: { order: number; prefix: string; value: string | number }) => {
  return (
    <div
      style={{
        display: 'flex',
        width: 180,
        height: 50,
        margin: 8,
        border: 'solid 1px lightgray'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          padding: 8
        }}
      >
        {generateVariableName({
          order: props.order,
          prefix: props.prefix
        })}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flex: 1,
          padding: 8
        }}
      >
        <div
          style={{
            width: props.value,
            height: '100%',
            background: 'gray'
          }}
        />
      </div>
    </div>
  );
};

export default RoundingCard;
