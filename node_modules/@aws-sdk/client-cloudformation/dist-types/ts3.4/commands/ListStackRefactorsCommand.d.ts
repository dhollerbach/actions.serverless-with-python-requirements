import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudFormationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudFormationClient";
import {
  ListStackRefactorsInput,
  ListStackRefactorsOutput,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListStackRefactorsCommandInput
  extends ListStackRefactorsInput {}
export interface ListStackRefactorsCommandOutput
  extends ListStackRefactorsOutput,
    __MetadataBearer {}
declare const ListStackRefactorsCommand_base: {
  new (
    input: ListStackRefactorsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListStackRefactorsCommandInput,
    ListStackRefactorsCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListStackRefactorsCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListStackRefactorsCommandInput,
    ListStackRefactorsCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListStackRefactorsCommand extends ListStackRefactorsCommand_base {
  protected static __types: {
    api: {
      input: ListStackRefactorsInput;
      output: ListStackRefactorsOutput;
    };
    sdk: {
      input: ListStackRefactorsCommandInput;
      output: ListStackRefactorsCommandOutput;
    };
  };
}
