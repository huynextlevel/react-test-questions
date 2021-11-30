import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  primaryButtonContainer: {
    padding: '16px 20px !important',
    backgroundColor: '#FFF !important',
    borderRadius: '2px  !important',
    maxHeight: '53px !important',
    color: '#000 !important',
    fontFamily: 'JetBrains Mono !important',
    fontSize: '21px  !important',
    lineHeight: '140%  !important',
    fontWeight: 'bold !important',
    letterSpacing: '-0.02em !important',
    '@media screen and (max-width: 900px)': {
      padding: '12px 20px !important',
      fontSize: '16px  !important',
      borderRadius: '2px  !important',
    }
  },
  circleProgressContainer: {
    width: '20px !important',
    height: '20px !important',
    color: '#FEFEFE',
  },
}));
