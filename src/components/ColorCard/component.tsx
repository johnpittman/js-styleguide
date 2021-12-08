import React from 'react';

import generateVariableName from '>/utils/generateVariableName';

const ColorCard = (props: { order: number; prefix: string; textTransform?: string; value: string }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
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
          width: '100%',
          flexGrow: 1,
          fontWeight: 'bold',
          fontSize: 12,
          borderBottom: 'solid 1px lightgray',
          textTransform: props.textTransform === 'uppercase' ? 'uppercase' : 'lowercase',
          background: props.value
        }}
      >
        {props.value}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 8
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

export default ColorCard;
