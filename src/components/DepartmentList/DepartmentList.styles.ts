import { styled } from '@mui/system';
import { List, ListItem } from '@mui/material';

export const StyledList = styled(List)({
  width: '100%',
  maxWidth: 360,
  backgroundColor: '#f0f0f0',
});

export const StyledListItem = styled(ListItem)({
  paddingLeft: '16px',
  '&.Mui-selected': {
    backgroundColor: '#e0e0e0',
  },
});

export const SubListItem = styled(ListItem)({
  paddingLeft: '32px',
  '&.Mui-selected': {
    backgroundColor: '#f0f0f0',
  },
});
