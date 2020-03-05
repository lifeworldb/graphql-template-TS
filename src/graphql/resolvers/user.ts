import { IResolvers } from 'graphql-tools'

const userResolver: IResolvers = {
  Query: {
    user(_: void, args: void): string {
      return `👋 Hello world! 👋`;
    },
  },
}

export default userResolver
