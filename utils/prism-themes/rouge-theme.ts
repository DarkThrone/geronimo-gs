import { PrismTheme } from 'prism-react-renderer';

const theme: PrismTheme = {
  plain: {
    color: '#a2a3aa',
    backgroundColor: '#151627',
  },
  styles: [
    {
      types: ['comment'],
      style: {
        color: 'rgb(93, 93, 107)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: 'rgb(130, 131, 161)',
      },
    },
    {
      types: ['attr-name', 'class', 'id'],
      style: {
        color: '#DBCDAB',
      },
    },
    {
      types: ['selector'],
      style: {
        color: '#C6797E',
      },
    },
    {
      types: ['property'],
      style: {
        color: '#A2A3AA',
      },
    },
    {
      types: ['color', 'number', 'unit'],
      style: {
        color: '#969E92',
      },
    },
    {
      types: ['constant', 'atrule'],
      style: {
        color: 'rgb(240, 183, 167)',
      },
    },
    {
      types: ['function', 'builtin'],
      style: {
        color: 'rgb(215, 161, 165)',
      },
    },
    {
      types: ['variable'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: 'rgba(219, 205, 171, 0.9)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['tag'],
      style: {
        color: 'rgb(198, 121, 126)',
      },
    },
    {
      types: ['string', 'inserted'],
      style: {
        color: 'rgb(150, 158, 146)',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgba(197, 89, 105, 0.85)',
      },
    },
    {
      types: ['changed'],
      style: {
        color: 'rgba(219, 205, 171, 0.9)',
      },
    },
  ],
};

export default theme;
