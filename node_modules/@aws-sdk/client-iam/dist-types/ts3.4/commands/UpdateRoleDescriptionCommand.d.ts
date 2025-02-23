import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  UpdateRoleDescriptionRequest,
  UpdateRoleDescriptionResponse,
} from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface UpdateRoleDescriptionCommandInput
  extends UpdateRoleDescriptionRequest {}
export interface UpdateRoleDescriptionCommandOutput
  extends UpdateRoleDescriptionResponse,
    __MetadataBearer {}
declare const UpdateRoleDescriptionCommand_base: {
  new (
    input: UpdateRoleDescriptionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateRoleDescriptionCommandInput,
    UpdateRoleDescriptionCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: UpdateRoleDescriptionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateRoleDescriptionCommandInput,
    UpdateRoleDescriptionCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateRoleDescriptionCommand extends UpdateRoleDescriptionCommand_base {
  protected static __types: {
    api: {
      input: UpdateRoleDescriptionRequest;
      output: UpdateRoleDescriptionResponse;
    };
    sdk: {
      input: UpdateRoleDescriptionCommandInput;
      output: UpdateRoleDescriptionCommandOutput;
    };
  };
}
