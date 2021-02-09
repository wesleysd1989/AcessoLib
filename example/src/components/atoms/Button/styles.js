import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableHighlight.attrs(
  props => (
    console.log('aqui', props.theme.button[props.type].hoverColor),
    {
      underlayColor: props.theme.button[props.type].hoverColor,
    }
  ),
)`
  background-color: ${props =>
    props.disabled
      ? props.type === 'primary'
        ? props.theme.colors.disabled
        : props.theme.button[props.type].color
      : props.theme.button[props.type].color};
  min-height: 60px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: ${props => props.theme.fonts.medium};
  font-size: 18px;
  letter-spacing: -0.4px;
  text-align: center;
  color: ${props =>
    props.disabled && props.type !== 'primary'
      ? props.theme.colors.disabled
      : props.theme.button[props.type].textColor};
`;
