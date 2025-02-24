import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudFormationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudFormationClient";
import {
  ListGeneratedTemplatesInput,
  ListGeneratedTemplatesOutput,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListGeneratedTemplatesCommandInput
  extends ListGeneratedTemplatesInput {}
export interface ListGeneratedTemplatesCommandOutput
  extends ListGeneratedTemplatesOutput,
    __MetadataBearer {}
declare const ListGeneratedTemplatesCommand_base: {
  new (
    input: ListGeneratedTemplatesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListGeneratedTemplatesCommandInput,
    ListGeneratedTemplatesCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListGeneratedTemplatesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListGeneratedTemplatesCommandInput,
    ListGeneratedTemplatesCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListGeneratedTemplatesCommand extends ListGeneratedTemplatesCommand_base {
  protected static __types: {
    api: {
      input: ListGeneratedTemplatesInput;
      output: ListGeneratedTemplatesOutput;
    };
    sdk: {
      input: ListGeneratedTemplatesCommandInput;
      output: ListGeneratedTemplatesCommandOutput;
    };
  };
}
