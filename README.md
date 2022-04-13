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

The following commands should also work:

    find . -type f | xargs sed -i '' -e 's/AkkaServerless/Kalix/g'
    find . -type f | xargs sed -i '' -e 's/akkaserverless/kalix/g'
    find . -type f | xargs sed -i '' -e 's/akkasls/kalix/g'
    find . -type f | xargs sed -i '' -e 's/@lightbend/@kalix-io/g'
    find . -type f | xargs sed -i '' -e 's/0.33.[0-9]/1.0.0-M4/g'
    rm package-lock.json
    npm install

On a mac, the above did not work, I tried the below with success.

    LC_CTYPE=C find . -type f -exec sed -i '' -e 's/AkkaServerless/Kalix/g' {} +
    LC_CTYPE=C find . -type f -exec sed -i '' -e 's/akkaserverless/kalix/g' {} +
    LC_CTYPE=C find . -type f -exec sed -i '' -e 's/akkasls/kalix/g' {} +
    LC_CTYPE=C find . -type f -exec sed -i '' -e 's/@lightbend/@kalix-io/g' {} +
    LC_CTYPE=C find . -type f -exec sed -i '' -e 's/0.33.[0-9]/1.0.0-M4/g' {} +
    rm package-lock.json
    rm -f -R node_modules/*
    npm install




## deployment

1. `npm run package` to create container.
2. `npm run deploy` to deploy container to registry.
3. `kalix service deploy` to deploy into Kalix.

