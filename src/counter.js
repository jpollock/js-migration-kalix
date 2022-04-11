/* This code was initialised by Akka Serverless tooling.
 * As long as this file exists it will not be re-generated.
 * You are free to make changes to this file.
 */

import akkaserverless from "@lightbend/akkaserverless-javascript-sdk";
const ValueEntity = akkaserverless.ValueEntity;

/**
 * Type definitions.
 * These types have been generated based on your proto source.
 * A TypeScript aware editor such as VS Code will be able to leverage them to provide hinting and validation.
 * 
 * State; the serialisable and persistable state of the entity
 * @typedef { import("../lib/generated/counterservice").State } State
 * 
 * CounterService; a strongly typed extension of ValueEntity derived from your proto source
 * @typedef { import("../lib/generated/counterservice").CounterService } CounterService
 */

/**
 * @type CounterService
 */
const entity = new ValueEntity(
  [
    "counter_domain.proto",
    "counter_api.proto"
  ],
  "com.example.CounterService",
  "counter",
  {
    includeDirs: ["./proto"]
  }
);

const CounterState = entity.lookupType("com.example.domain.CounterState");

entity.setInitial(entityId => CounterState.create());

entity.setCommandHandlers({
  Increase(command, state, ctx) {
    if (command.value < 0) {
      ctx.fail(`Increase requires a positive value. It was [${command.value}].`);
    }
    state.value += command.value;
    ctx.updateState(state);
    return {};
  },
  Decrease(command, state, ctx) {
    if (state.value - command.value < 0) {
      ctx.fail(`Decrease cannot result in negative values. It was [${command.value}].`);
    }
    state.value -= command.value;
    ctx.updateState(state);
    return {};
  },
  Reset(command, state, ctx) {
    if (command.value < 0) {
      ctx.fail(`Reset requires a positive value. It was [${command.value}].`);
    }
    state.value = command.value;
    ctx.updateState(state);
    return {};

  },
  GetCurrentCounter(command, state, ctx) {
    return { value: state.value };
  }
});

export default entity;