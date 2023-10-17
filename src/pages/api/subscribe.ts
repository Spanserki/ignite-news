import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { fauna } from "../../services/fauna";
import {query as q, Ref} from 'faunadb'

type User = {
    ref: typeof Ref,
    data: {
        stripe_customers_id: string;
    }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const session = await getSession({req: req})

        const user = await fauna.query<User>(
            q.Get(
                q.Match(
                    q.Index('user_by_email'),
                    q.Casefold(session.user.email)
                )
            )
        )
    }else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method not allowed')
    }
}