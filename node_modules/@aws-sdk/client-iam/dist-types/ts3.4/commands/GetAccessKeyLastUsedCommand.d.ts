import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  GetAccessKeyLastUsedRequest,
  GetAccessKeyLastUsedResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetAccessKeyLastUsedCommandInput
  extends GetAccessKeyLastUsedRequest {}
export interface GetAccessKeyLastUsedCommandOutput
  extends GetAccessKeyLastUsedResponse,
    __MetadataBearer {}
declare const GetAccessKeyLastUsedCommand_base: {
  new (
    input: GetAccessKeyLastUsedCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetAccessKeyLastUsedCommandInput,
    GetAccessKeyLastUsedCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: GetAccessKeyLastUsedCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetAccessKeyLastUsedCommandInput,
    GetAccessKeyLastUsedCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetAccessKeyLastUsedCommand extends GetAccessKeyLastUsedCommand_base {
  protected static __types: {
    api: {
      input: GetAccessKeyLastUsedRequest;
      output: GetAccessKeyLastUsedResponse;
    };
    sdk: {
      input: GetAccessKeyLastUsedCommandInput;
      output: GetAccessKeyLastUsedCommandOutput;
    };
  };
}
