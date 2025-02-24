import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  GetLoginProfileRequest,
  GetLoginProfileResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetLoginProfileCommandInput extends GetLoginProfileRequest {}
export interface GetLoginProfileCommandOutput
  extends GetLoginProfileResponse,
    __MetadataBearer {}
declare const GetLoginProfileCommand_base: {
  new (
    input: GetLoginProfileCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetLoginProfileCommandInput,
    GetLoginProfileCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [GetLoginProfileCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    GetLoginProfileCommandInput,
    GetLoginProfileCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetLoginProfileCommand extends GetLoginProfileCommand_base {
  protected static __types: {
    api: {
      input: GetLoginProfileRequest;
      output: GetLoginProfileResponse;
    };
    sdk: {
      input: GetLoginProfileCommandInput;
      output: GetLoginProfileCommandOutput;
    };
  };
}
