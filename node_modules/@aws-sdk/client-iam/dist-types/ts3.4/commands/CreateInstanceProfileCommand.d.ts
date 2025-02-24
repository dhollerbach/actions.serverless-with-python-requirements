import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  CreateInstanceProfileRequest,
  CreateInstanceProfileResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreateInstanceProfileCommandInput
  extends CreateInstanceProfileRequest {}
export interface CreateInstanceProfileCommandOutput
  extends CreateInstanceProfileResponse,
    __MetadataBearer {}
declare const CreateInstanceProfileCommand_base: {
  new (
    input: CreateInstanceProfileCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateInstanceProfileCommandInput,
    CreateInstanceProfileCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: CreateInstanceProfileCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateInstanceProfileCommandInput,
    CreateInstanceProfileCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateInstanceProfileCommand extends CreateInstanceProfileCommand_base {
  protected static __types: {
    api: {
      input: CreateInstanceProfileRequest;
      output: CreateInstanceProfileResponse;
    };
    sdk: {
      input: CreateInstanceProfileCommandInput;
      output: CreateInstanceProfileCommandOutput;
    };
  };
}
