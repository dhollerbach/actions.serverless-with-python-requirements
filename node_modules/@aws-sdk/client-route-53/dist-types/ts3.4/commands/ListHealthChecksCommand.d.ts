import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  ListHealthChecksRequest,
  ListHealthChecksResponse,
} from "../models/models_0";
import {
  Route53ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53Client";
export { __MetadataBearer };
export { $Command };
export interface ListHealthChecksCommandInput extends ListHealthChecksRequest {}
export interface ListHealthChecksCommandOutput
  extends ListHealthChecksResponse,
    __MetadataBearer {}
declare const ListHealthChecksCommand_base: {
  new (
    input: ListHealthChecksCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListHealthChecksCommandInput,
    ListHealthChecksCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListHealthChecksCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListHealthChecksCommandInput,
    ListHealthChecksCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListHealthChecksCommand extends ListHealthChecksCommand_base {
  protected static __types: {
    api: {
      input: ListHealthChecksRequest;
      output: ListHealthChecksResponse;
    };
    sdk: {
      input: ListHealthChecksCommandInput;
      output: ListHealthChecksCommandOutput;
    };
  };
}
