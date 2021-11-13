import React from 'react';

import generateVariableName from '>/utils/generateVariableName';

const RoundingCard = (props: { order: number; prefix: string; value: string | number }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 160,
        margin: 8,
        border: 'solid 1px lightgray'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: 1,
          width: '100%'
        }}
      >
        <div
          style={{
            width: 100,
            height: 100,
            background: 'gray',
            borderRadius: props.value
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

export default RoundingCard;
