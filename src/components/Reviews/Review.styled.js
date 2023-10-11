import { styled } from 'styled-components';

export const ReviewWrapper = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  gap: 24px;
  width: 335px;
  border-radius: 8px;
  border: 1px solid var(--review-border-color);

  @media screen and (max-width: 335px) {
    width: auto;
  }
  @media screen and (min-width: 768px) {
    width: 580px;
  }
`;
export const ReviewWrapperUser = styled.div`
  display: flex;
  gap: 18px;
`;
export const ReviewAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
export const ReviewWrapperGrade = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ReviewUsername = styled.p`
  color: var(--review-title-color);
  font-family: 'Inter Bold';
  font-size: 18px;
  line-height: 1;
`;
export const ReviewText = styled.p`
  color: var(--review-text-color);
  font-family: 'Inter Medium';
  font-size: 14px;
  max-height: calc(14px * 1.29 * 5);
  line-height: 1.4;
  overflow: hidden;
  line-height: 1.29;
`;
