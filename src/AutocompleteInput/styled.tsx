import styled from 'styled-components'
import { FONT_FAMILY } from '../common/typography'
import {
  BACKGROUND_GRAY_COLOR,
  BLACK_COLOR,
  INACTIVE_GRAY_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  WHITE_COLOR,
} from '../common/colors'
import { SHADOW_DEFAULT } from '../common/shadows'

export const StyledWrapper = styled.div`
  position: relative;
`

export const StyledLabel = styled.label`
  color: ${BLACK_COLOR};
  font-size: 16px;
  line-height: 24px;
  font-family: ${FONT_FAMILY};
  font-weight: 600;
`

export const StyledInput = styled.input`
  color: ${BLACK_COLOR};
  font-size: 18px;
  line-height: 28px;
  font-family: ${FONT_FAMILY};
  font-weight: 400;

  padding: 14px 20px;
  margin: 0;
  box-sizing: border-box;
  width: 100%;

  outline: none;
  border: none;
  background-color: ${BACKGROUND_GRAY_COLOR};

  ::placeholder {
    -webkit-text-fill-color: ${INACTIVE_GRAY_COLOR};
    color: ${INACTIVE_GRAY_COLOR};
    font-weight: 400;
    opacity: 1;
  }
  
  transition: box-shadow 0.2s ease-out;

  box-shadow: 0 -2px 0 ${BLACK_COLOR} inset;
  :focus {
    box-shadow: 0 -2px 0 ${PRIMARY_COLOR} inset;
  }
`

export const StyledUl = styled.ul`
  width: 100%;
  position: absolute;

  list-style: none;
  padding: 0;
  margin: 0;

  background-color: ${WHITE_COLOR};
  box-shadow: ${SHADOW_DEFAULT};
`

export const StyledItem = styled.div<{ $hovered?: boolean }>`
  color: ${BLACK_COLOR};
  font-size: 18px;
  line-height: 28px;
  font-family: ${FONT_FAMILY};
  font-weight: 400;

  padding: 10px 20px;
  margin: 0;
  box-sizing: border-box;
  width: 100%;

  background-color: ${({ $hovered }) => ($hovered ? SECONDARY_COLOR : WHITE_COLOR)};

  cursor: pointer;

  & > strong {
    color: ${PRIMARY_COLOR};
    font-weight: 600;
  }
`
