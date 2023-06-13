import BadRequestError from './badRequestError';

export default function checkSupportMethod(
  supportMethod: string[],
  method?: string,
) {
  if (supportMethod.indexOf(method!) === -1) {
    // 에러 반환
    throw new BadRequestError({ message: '지원하지 않는 메서드입니다.' });
  }
}
