import React from 'react';

type Props = {
  index: number;
  value: number;
  children?: React.ReactNode;
};

export default function TabPanel({ index, value, children, ...other }: Props): JSX.Element {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}
