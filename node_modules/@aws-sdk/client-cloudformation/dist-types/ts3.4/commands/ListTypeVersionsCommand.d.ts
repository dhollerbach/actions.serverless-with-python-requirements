import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudFormationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudFormationClient";
import {
  ListTypeVersionsInput,
  ListTypeVersionsOutput,
} from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface ListTypeVersionsCommandInput extends ListTypeVersionsInput {}
export interface ListTypeVersionsCommandOutput
  extends ListTypeVersionsOutput,
    __MetadataBearer {}
declare const ListTypeVersionsCommand_base: {
  new (
    input: ListTypeVersionsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListTypeVersionsCommandInput,
    ListTypeVersionsCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListTypeVersionsCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListTypeVersionsCommandInput,
    ListTypeVersionsCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListTypeVersionsCommand extends ListTypeVersionsCommand_base {
  protected static __types: {
    api: {
      input: ListTypeVersionsInput;
      output: ListTypeVersionsOutput;
    };
    sdk: {
      input: ListTypeVersionsCommandInput;
      output: ListTypeVersionsCommandOutput;
    };
  };
}
