import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { RemoveRoleFromInstanceProfileRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface RemoveRoleFromInstanceProfileCommandInput
  extends RemoveRoleFromInstanceProfileRequest {}
export interface RemoveRoleFromInstanceProfileCommandOutput
  extends __MetadataBearer {}
declare const RemoveRoleFromInstanceProfileCommand_base: {
  new (
    input: RemoveRoleFromInstanceProfileCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    RemoveRoleFromInstanceProfileCommandInput,
    RemoveRoleFromInstanceProfileCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: RemoveRoleFromInstanceProfileCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    RemoveRoleFromInstanceProfileCommandInput,
    RemoveRoleFromInstanceProfileCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class RemoveRoleFromInstanceProfileCommand extends RemoveRoleFromInstanceProfileCommand_base {
  protected static __types: {
    api: {
      input: RemoveRoleFromInstanceProfileRequest;
      output: {};
    };
    sdk: {
      input: RemoveRoleFromInstanceProfileCommandInput;
      output: RemoveRoleFromInstanceProfileCommandOutput;
    };
  };
}
