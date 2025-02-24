import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { AddRoleToInstanceProfileRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface AddRoleToInstanceProfileCommandInput
  extends AddRoleToInstanceProfileRequest {}
export interface AddRoleToInstanceProfileCommandOutput
  extends __MetadataBearer {}
declare const AddRoleToInstanceProfileCommand_base: {
  new (
    input: AddRoleToInstanceProfileCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    AddRoleToInstanceProfileCommandInput,
    AddRoleToInstanceProfileCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: AddRoleToInstanceProfileCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    AddRoleToInstanceProfileCommandInput,
    AddRoleToInstanceProfileCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class AddRoleToInstanceProfileCommand extends AddRoleToInstanceProfileCommand_base {
  protected static __types: {
    api: {
      input: AddRoleToInstanceProfileRequest;
      output: {};
    };
    sdk: {
      input: AddRoleToInstanceProfileCommandInput;
      output: AddRoleToInstanceProfileCommandOutput;
    };
  };
}
