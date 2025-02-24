import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { SetDefaultPolicyVersionRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface SetDefaultPolicyVersionCommandInput
  extends SetDefaultPolicyVersionRequest {}
export interface SetDefaultPolicyVersionCommandOutput
  extends __MetadataBearer {}
declare const SetDefaultPolicyVersionCommand_base: {
  new (
    input: SetDefaultPolicyVersionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    SetDefaultPolicyVersionCommandInput,
    SetDefaultPolicyVersionCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: SetDefaultPolicyVersionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    SetDefaultPolicyVersionCommandInput,
    SetDefaultPolicyVersionCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class SetDefaultPolicyVersionCommand extends SetDefaultPolicyVersionCommand_base {
  protected static __types: {
    api: {
      input: SetDefaultPolicyVersionRequest;
      output: {};
    };
    sdk: {
      input: SetDefaultPolicyVersionCommandInput;
      output: SetDefaultPolicyVersionCommandOutput;
    };
  };
}
