import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Cells = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  border: 1px solid var(--calendar-border);
  border-radius: 8px;
  background-color: var(--calendar-background);
  overflow: hidden;
  margin-top: 14px;
`;
export const Cell = styled.li`
  position: relative;
  display: flex;
  height: 94px;
  border: 1px solid var(--calendar-border);
  @media screen and (min-width: 768px) {
    min-height: 144px;
  }

  @media screen and (min-width: 1440px) {
    min-height: 125px;
  }
`;
export const Number = styled.span`
  display: flex;
  color: var(--calendar-text-color);
  font-family: 'Inter Bold';
  font-size: 12px;
  line-height: 1.17;
  text-transform: uppercase;
  padding: 4px 6px;
  &.active {
    color: #fff;
    border-radius: 8px;
    background: #3e85f3;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
    padding: 4px 8px;
    margin-right: 14px;
  }
`;
export const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-end;
  padding: 8px 4px 2px 4px;
  &:hover {
    background-color: var(--calendar-cell-hover);
  }
  @media screen and (min-width: 768px) {
    padding: 4px;
    padding-top: 14px;
  }

  @media screen and (min-width: 1440px) {
    padding: 8px;
    padding-top: 14px;
  }
`;

export const TaskList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: auto;
  gap: 2px;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;
export const TaskListItem = styled.li`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Inter Bold';
  font-size: 10px;
  line-height: 1.4;
  border-radius: 8px;
  padding: 2px 2px 2px 4px;

  &.low {
    color: #3e85f3;
    background-color: #ceeefd;
  }
  &.medium {
    color: #f3b249;
    background-color: #fcf0d4;
  }
  &.high {
    color: #ea3d65;
    background-color: #ffd2dd;
  }
  @media screen and (min-width: 768px) {
    padding: 4px 4px 4px 8px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
  @media screen and (max-width: 370px) {
    font-size: 1.65vw;
  }
`;
