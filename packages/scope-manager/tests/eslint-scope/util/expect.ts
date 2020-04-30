import {
  TSESTree,
  AST_NODE_TYPES,
} from '@typescript-eslint/experimental-utils';
import { Definition, ParameterDefinition } from '../../../src/Definition';
import { BlockScope } from '../../../src/scope/BlockScope';
import { CatchScope } from '../../../src/scope/CatchScope';
import { ClassScope } from '../../../src/scope/ClassScope';
import { ForScope } from '../../../src/scope/ForScope';
import { FunctionScope } from '../../../src/scope/FunctionScope';
import { FunctionExpressionNameScope } from '../../../src/scope/FunctionExpressionNameScope';
import { GlobalScope } from '../../../src/scope/GlobalScope';
import { ModuleScope } from '../../../src/scope/ModuleScope';
import { Scopes } from '../../../src/scope/Scopes';
import { ScopeType } from '../../../src/scope/ScopeType';
import { SwitchScope } from '../../../src/scope/SwitchScope';
import { WithScope } from '../../../src/scope/WithScope';

function expectToBeBlockScope(scope: Scopes): asserts scope is BlockScope {
  expect(scope.type).toBe(ScopeType.block);
}
function expectToBeCatchScope(scope: Scopes): asserts scope is CatchScope {
  expect(scope.type).toBe(ScopeType.catch);
}
function expectToBeClassScope(scope: Scopes): asserts scope is ClassScope {
  expect(scope.type).toBe(ScopeType.class);
}
function expectToBeForScope(scope: Scopes): asserts scope is ForScope {
  expect(scope.type).toBe(ScopeType.for);
}
function expectToBeFunctionScope(
  scope: Scopes,
): asserts scope is FunctionScope {
  expect(scope.type).toBe(ScopeType.function);
}
function expectToBeFunctionExpressionNameScope(
  scope: Scopes,
): asserts scope is FunctionExpressionNameScope {
  expect(scope.type).toBe(ScopeType.functionExpressionName);
}
function expectToBeGlobalScope(scope: Scopes): asserts scope is GlobalScope {
  expect(scope.type).toBe(ScopeType.global);
}
function expectToBeModuleScope(scope: Scopes): asserts scope is ModuleScope {
  expect(scope.type).toBe(ScopeType.module);
}
function expectToBeSwitchScope(scope: Scopes): asserts scope is SwitchScope {
  expect(scope.type).toBe(ScopeType.switch);
}
function expectToBeWithScope(scope: Scopes): asserts scope is WithScope {
  expect(scope.type).toBe(ScopeType.with);
}

function expectToBeIdentifier(
  node: TSESTree.Node | null | undefined,
): asserts node is TSESTree.Identifier {
  expect(node?.type).toBe(AST_NODE_TYPES.Identifier);
}

function expectToBeParameterDefinitionWithRest(def: Definition): void {
  expect(def).toBeInstanceOf(ParameterDefinition);
  const paramDef = def as ParameterDefinition;
  expect(paramDef.rest).toBeTruthy();
}

export {
  expectToBeBlockScope,
  expectToBeCatchScope,
  expectToBeClassScope,
  expectToBeForScope,
  expectToBeFunctionExpressionNameScope,
  expectToBeFunctionScope,
  expectToBeGlobalScope,
  expectToBeModuleScope,
  expectToBeParameterDefinitionWithRest,
  expectToBeSwitchScope,
  expectToBeWithScope,
  expectToBeIdentifier,
};
