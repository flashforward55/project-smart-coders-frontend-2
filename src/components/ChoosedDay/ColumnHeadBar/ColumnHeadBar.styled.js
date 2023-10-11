import { styled } from 'styled-components';

export const TasksHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const TasksTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: var(--first-Text-Color);
`;

export const IconBtn = styled.button`
  display: flex;
  padding: 0;
  padding-right: 13px;
  background: transparent;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding-right: 14px;
  }
`;

export const Vector = styled.svg`
  width: 22px;
  height: 22px;
  fill: var(--LogReg-Text-Color);

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    &:hover {
      fill: var(--fourth-Bckg-Color);
    }
  }
`;
