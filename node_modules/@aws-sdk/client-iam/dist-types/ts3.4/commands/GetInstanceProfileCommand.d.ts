import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  GetInstanceProfileRequest,
  GetInstanceProfileResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetInstanceProfileCommandInput
  extends GetInstanceProfileRequest {}
export interface GetInstanceProfileCommandOutput
  extends GetInstanceProfileResponse,
    __MetadataBearer {}
declare const GetInstanceProfileCommand_base: {
  new (
    input: GetInstanceProfileCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetInstanceProfileCommandInput,
    GetInstanceProfileCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: GetInstanceProfileCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetInstanceProfileCommandInput,
    GetInstanceProfileCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetInstanceProfileCommand extends GetInstanceProfileCommand_base {
  protected static __types: {
    api: {
      input: GetInstanceProfileRequest;
      output: GetInstanceProfileResponse;
    };
    sdk: {
      input: GetInstanceProfileCommandInput;
      output: GetInstanceProfileCommandOutput;
    };
  };
}
