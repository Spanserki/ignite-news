import NextAuth from 'next-auth'
import GithubProviders from 'next-auth/providers/github';
import { fauna } from '../../../services/fauna';
import {query as q} from 'faunadb'

export default NextAuth({
    providers: [
        GithubProviders({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,

            authorization: {
                params: {
                    scope: 'read:user' //Ler informaçoes de um perfil do usuario
                }
            }
        }),
    ],

    callbacks: {
        async signIn({ user, account, profile}:any) {
            const {email} = user
            try {
                await fauna.query(
                    q.Let(
                      {
                        userExists: q.Exists(
                          q.Match(
                            q.Index("user_by_email"),
                            q.Casefold(user.email)
                          )
                        )
                      },
                      q.If(
                        q.Var('userExists'),
                        q.Get(
                          q.Match(
                            q.Index('user_by_email'),
                            q.Casefold(user.email)
                          )
                        ),
                        q.Create(
                          q.Collection('users'),
                          {
                            data: { email }
                          }
                        )
                      )
                    )
                  )
                return true
            } catch (error) {
                return false
            }
        },
    }
})