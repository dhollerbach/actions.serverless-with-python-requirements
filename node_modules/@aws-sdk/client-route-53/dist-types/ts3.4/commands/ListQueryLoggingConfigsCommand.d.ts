import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  ListQueryLoggingConfigsRequest,
  ListQueryLoggingConfigsResponse,
} from "../models/models_0";
import {
  Route53ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53Client";
export { __MetadataBearer };
export { $Command };
export interface ListQueryLoggingConfigsCommandInput
  extends ListQueryLoggingConfigsRequest {}
export interface ListQueryLoggingConfigsCommandOutput
  extends ListQueryLoggingConfigsResponse,
    __MetadataBearer {}
declare const ListQueryLoggingConfigsCommand_base: {
  new (
    input: ListQueryLoggingConfigsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListQueryLoggingConfigsCommandInput,
    ListQueryLoggingConfigsCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListQueryLoggingConfigsCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListQueryLoggingConfigsCommandInput,
    ListQueryLoggingConfigsCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListQueryLoggingConfigsCommand extends ListQueryLoggingConfigsCommand_base {
  protected static __types: {
    api: {
      input: ListQueryLoggingConfigsRequest;
      output: ListQueryLoggingConfigsResponse;
    };
    sdk: {
      input: ListQueryLoggingConfigsCommandInput;
      output: ListQueryLoggingConfigsCommandOutput;
    };
  };
}
