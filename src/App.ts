import "reflect-metadata";
import * as fastify from "fastify";
import GQL from "fastify-gql";
import { Server, IncomingMessage, ServerResponse } from "http";
import { BookResolver } from "./schema/BookResolver";
import { buildSchema } from "type-graphql";
export class App {
  private server: fastify.FastifyInstance = fastify.fastify({ logger: true });

  async listen(port: number) {
    this.server.get(
      "/healthz",
      {},
      async (request: fastify.FastifyRequest, reply: fastify.FastifyReply) => {
        return { status: "healthy" };
      }
    );
    const schema = await buildSchema({ resolvers: [BookResolver] });
    console.log(schema);
    this.server.register(GQL, {
      graphiql: true,
      jit: 1,
      schema: schema,
    });
    this.server.listen(port, (err: Error) => {
      if (err) {
        this.server.log.error(err);
        process.exit(1);
      }
      this.server.log.info(
        `server listening on ${port}, hope you enjoy the server`
      );
    });
  }
}

const app = new App();
app.listen(3000);
