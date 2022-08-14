import { NextApiRequest, NextApiResponse } from 'next';

type Response = {
  status: string;
};

const healthCheck = (_req: NextApiRequest, res: NextApiResponse<Response>) => {
  res.status(200).json({ status: 'OK' });
};

export default healthCheck;
