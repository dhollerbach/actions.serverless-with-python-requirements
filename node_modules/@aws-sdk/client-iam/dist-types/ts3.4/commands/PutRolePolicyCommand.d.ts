import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { PutRolePolicyRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface PutRolePolicyCommandInput extends PutRolePolicyRequest {}
export interface PutRolePolicyCommandOutput extends __MetadataBearer {}
declare const PutRolePolicyCommand_base: {
  new (
    input: PutRolePolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutRolePolicyCommandInput,
    PutRolePolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: PutRolePolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutRolePolicyCommandInput,
    PutRolePolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class PutRolePolicyCommand extends PutRolePolicyCommand_base {
  protected static __types: {
    api: {
      input: PutRolePolicyRequest;
      output: {};
    };
    sdk: {
      input: PutRolePolicyCommandInput;
      output: PutRolePolicyCommandOutput;
    };
  };
}
