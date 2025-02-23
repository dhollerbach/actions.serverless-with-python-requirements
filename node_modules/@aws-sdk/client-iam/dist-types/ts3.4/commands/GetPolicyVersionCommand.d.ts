import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  GetPolicyVersionRequest,
  GetPolicyVersionResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetPolicyVersionCommandInput extends GetPolicyVersionRequest {}
export interface GetPolicyVersionCommandOutput
  extends GetPolicyVersionResponse,
    __MetadataBearer {}
declare const GetPolicyVersionCommand_base: {
  new (
    input: GetPolicyVersionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetPolicyVersionCommandInput,
    GetPolicyVersionCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: GetPolicyVersionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetPolicyVersionCommandInput,
    GetPolicyVersionCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetPolicyVersionCommand extends GetPolicyVersionCommand_base {
  protected static __types: {
    api: {
      input: GetPolicyVersionRequest;
      output: GetPolicyVersionResponse;
    };
    sdk: {
      input: GetPolicyVersionCommandInput;
      output: GetPolicyVersionCommandOutput;
    };
  };
}
