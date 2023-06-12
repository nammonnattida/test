import { NextApiRequest, NextApiResponse } from 'next';

import { reservations } from '../../type/types';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(reservations);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
