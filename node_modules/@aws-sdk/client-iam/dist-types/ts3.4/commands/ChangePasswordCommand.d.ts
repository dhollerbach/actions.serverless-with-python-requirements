import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { ChangePasswordRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ChangePasswordCommandInput extends ChangePasswordRequest {}
export interface ChangePasswordCommandOutput extends __MetadataBearer {}
declare const ChangePasswordCommand_base: {
  new (
    input: ChangePasswordCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ChangePasswordCommandInput,
    ChangePasswordCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: ChangePasswordCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ChangePasswordCommandInput,
    ChangePasswordCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ChangePasswordCommand extends ChangePasswordCommand_base {
  protected static __types: {
    api: {
      input: ChangePasswordRequest;
      output: {};
    };
    sdk: {
      input: ChangePasswordCommandInput;
      output: ChangePasswordCommandOutput;
    };
  };
}
