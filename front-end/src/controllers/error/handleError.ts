import { NextApiResponse } from 'next';
import CustomServerError from './customServerError';

interface HandleErrorParams {
  err: unknown;
  res: NextApiResponse;
}

const handleError = ({ err, res }: HandleErrorParams) => {
  let unknownError = err;
  if (err instanceof CustomServerError === false) {
    unknownError = new CustomServerError({
      statusCode: 499,
      message: 'unknown error',
    });
  }

  const customError = unknownError as CustomServerError;

  res
    .status(customError.statusCode)
    .setHeader('location', customError.location ?? '')
    .send(customError.serializeError());
};

export default handleError;
