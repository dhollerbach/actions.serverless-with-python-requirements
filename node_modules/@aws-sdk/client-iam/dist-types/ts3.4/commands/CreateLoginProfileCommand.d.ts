import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  CreateLoginProfileRequest,
  CreateLoginProfileResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreateLoginProfileCommandInput
  extends CreateLoginProfileRequest {}
export interface CreateLoginProfileCommandOutput
  extends CreateLoginProfileResponse,
    __MetadataBearer {}
declare const CreateLoginProfileCommand_base: {
  new (
    input: CreateLoginProfileCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateLoginProfileCommandInput,
    CreateLoginProfileCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [CreateLoginProfileCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    CreateLoginProfileCommandInput,
    CreateLoginProfileCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateLoginProfileCommand extends CreateLoginProfileCommand_base {
  protected static __types: {
    api: {
      input: CreateLoginProfileRequest;
      output: CreateLoginProfileResponse;
    };
    sdk: {
      input: CreateLoginProfileCommandInput;
      output: CreateLoginProfileCommandOutput;
    };
  };
}
