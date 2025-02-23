import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { GetAccountSummaryResponse } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetAccountSummaryCommandInput {}
export interface GetAccountSummaryCommandOutput
  extends GetAccountSummaryResponse,
    __MetadataBearer {}
declare const GetAccountSummaryCommand_base: {
  new (
    input: GetAccountSummaryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetAccountSummaryCommandInput,
    GetAccountSummaryCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [GetAccountSummaryCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    GetAccountSummaryCommandInput,
    GetAccountSummaryCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetAccountSummaryCommand extends GetAccountSummaryCommand_base {
  protected static __types: {
    api: {
      input: {};
      output: GetAccountSummaryResponse;
    };
    sdk: {
      input: GetAccountSummaryCommandInput;
      output: GetAccountSummaryCommandOutput;
    };
  };
}
