# test

This is a sample JS project that shows what files need to be changed for migration to Kalix.

## code changes

1. change package.json:
  1. search replace "lightbend" with "kalix-io"
  2. earch replace "akkaserverless" with "kalix"
2. npm install
3. Change proto files (search replace "akkaserverless" with "kalix")
4. npm run build
5. search replace "akkaserverless" with "kalix" in JS/TS files
6. search replace "AkkaServerless" with "Kalix" in JS/TS files
7. search replace "lightbend" with "kalix-io" in JS/TS files
8. for local testing, search replace "akkaserverless" with "kalix" in docker-compose.yml. (and switchversion to `latest`); also search replace "akka-serverless" with "kalix-io"

## deployment

1. `npm run package` to create container.
2. `npm run deploy` to deploy container to registry.
3. `kalix service deploy` to deploy into Kalix.

